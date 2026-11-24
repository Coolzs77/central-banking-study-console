import { UserMasteryState } from '../data/types';

export interface SyncStatus {
  account: string;
  autoSyncEnabled: boolean;
  isSyncing: boolean;
  lastSyncedAt: number | null;
  statusText: string;
}

export interface CloudSyncResult {
  ok: boolean;
  found?: boolean;
  state?: Partial<UserMasteryState>;
  updatedAt?: number;
  error?: string;
}

type SyncListener = (status: SyncStatus) => void;

const TEXTDB_WRITE_URL = 'https://api.textdb.online/update/';
const TEXTDB_READ_ORIGIN = 'https://api.textdb.online/';
const CLOUD_NAMESPACE = 'cb-study-console-nwafu:';

const sha256Hex = async (str: string): Promise<string> => {
  const enc = new TextEncoder().encode(str);
  const hashBuf = await crypto.subtle.digest('SHA-256', enc);
  const hashArr = Array.from(new Uint8Array(hashBuf));
  return hashArr.map(b => b.toString(16).padStart(2, '0')).join('');
};

class CloudSyncManager {
  private accountKey = 'cb_sync_account';
  private autoSyncKey = 'cb_auto_sync_enabled';
  private lastSyncedKey = 'cb_last_synced_time';
  private channel: BroadcastChannel | null = null;
  private debounceTimer: ReturnType<typeof setTimeout> | null = null;
  private listeners: Set<SyncListener> = new Set();
  private isSyncing = false;
  private lastSyncedDigest = '';
  private onExternalUpdate: ((state: Partial<UserMasteryState>) => void) | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
      try {
        this.channel = new BroadcastChannel('cb_study_sync_channel');
        this.channel.onmessage = (e) => {
          if (e.data?.type === 'STATE_UPDATE' && e.data?.state) {
            this.onExternalUpdate?.(e.data.state);
            this.emitStatus('已与同设备其他标签页同步');
          }
        };
      } catch (err) {
        console.warn('BroadcastChannel error', err);
      }
    }
  }

  public registerExternalUpdateHandler(fn: (state: Partial<UserMasteryState>) => void) {
    this.onExternalUpdate = fn;
  }

  public subscribe(fn: SyncListener): () => void {
    this.listeners.add(fn);
    fn(this.getStatus());
    return () => this.listeners.delete(fn);
  }

  public getStatus(): SyncStatus {
    return {
      account: this.getAccount(),
      autoSyncEnabled: this.isAutoSyncEnabled(),
      isSyncing: this.isSyncing,
      lastSyncedAt: this.getLastSyncedAt(),
      statusText: this.isSyncing ? '正在同步中...' : (this.getAccount() ? '云端就绪' : '未绑定账号')
    };
  }

  private emitStatus(text?: string) {
    const s = this.getStatus();
    if (text) s.statusText = text;
    this.listeners.forEach(fn => fn(s));
  }

  public getAccount(): string {
    return (localStorage.getItem(this.accountKey) || '').trim();
  }

  public setAccount(account: string) {
    localStorage.setItem(this.accountKey, account.trim());
    this.emitStatus(account ? `已绑定账号: ${account.trim()}` : '已解绑账号');
  }

  public isAutoSyncEnabled(): boolean {
    const val = localStorage.getItem(this.autoSyncKey);
    return val !== 'false';
  }

  public setAutoSyncEnabled(enabled: boolean) {
    localStorage.setItem(this.autoSyncKey, enabled ? 'true' : 'false');
    this.emitStatus(enabled ? '自动同步已开启' : '自动同步已暂停');
  }

  public getLastSyncedAt(): number | null {
    const val = localStorage.getItem(this.lastSyncedKey);
    return val ? parseInt(val, 10) : null;
  }

  private setLastSyncedAt(ts: number) {
    localStorage.setItem(this.lastSyncedKey, ts.toString());
  }

  public triggerAutoSync(state: UserMasteryState) {
    if (!this.isAutoSyncEnabled() || !this.getAccount()) return;
    if (this.debounceTimer) clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.pushToCloud(state).catch(e => console.warn('Auto sync fail', e));
    }, 1500);
  }

  public broadcastLocalChange(state: UserMasteryState) {
    try {
      this.channel?.postMessage({ type: 'STATE_UPDATE', state });
    } catch (e) {
      console.warn('Broadcast error', e);
    }
  }

  public async pushToCloud(state: UserMasteryState): Promise<CloudSyncResult> {
    const account = this.getAccount();
    if (!account) return { ok: false, error: '未输入账号' };

    const digest = JSON.stringify({
      m: state.memorized,
      s: state.starred,
      h: state.homeworkCompleted,
      t: state.termMemorized,
      e: state.examHistory.length
    });

    if (digest === this.lastSyncedDigest) {
      return { ok: true, updatedAt: this.getLastSyncedAt() || Date.now() };
    }

    this.isSyncing = true;
    this.emitStatus('正在备份到云端...');

    try {
      const hash = await sha256Hex(CLOUD_NAMESPACE + account.toLowerCase());
      const payload = {
        v: 2,
        ts: Date.now(),
        data: state
      };
      const textData = JSON.stringify(payload);

      const resp = await fetch(TEXTDB_WRITE_URL + hash, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'textcontent=' + encodeURIComponent(textData)
      });

      if (!resp.ok) {
        throw new Error('HTTP ' + resp.status);
      }

      const now = Date.now();
      this.lastSyncedDigest = digest;
      this.setLastSyncedAt(now);
      this.isSyncing = false;
      this.emitStatus('云端备份成功');
      return { ok: true, updatedAt: now };
    } catch (err: any) {
      this.isSyncing = false;
      this.emitStatus('备份失败: ' + (err.message || '网络错误'));
      return { ok: false, error: err.message };
    }
  }

  public async pullFromCloud(): Promise<CloudSyncResult> {
    const account = this.getAccount();
    if (!account) return { ok: false, error: '未输入账号' };

    this.isSyncing = true;
    this.emitStatus('正在从云端拉取...');

    try {
      const hash = await sha256Hex(CLOUD_NAMESPACE + account.toLowerCase());
      const url = TEXTDB_READ_ORIGIN + hash + '?t=' + Date.now();
      const resp = await fetch(url, { cache: 'no-store' });

      if (resp.status === 404) {
        this.isSyncing = false;
        this.emitStatus('云端暂无此账号存档');
        return { ok: true, found: false };
      }

      if (!resp.ok) {
        throw new Error('HTTP ' + resp.status);
      }

      const rawText = await resp.text();
      if (!rawText || !rawText.trim()) {
        this.isSyncing = false;
        this.emitStatus('云端存档为空');
        return { ok: true, found: false };
      }

      let parsed: any;
      try {
        parsed = JSON.parse(rawText.trim());
      } catch (e) {
        parsed = JSON.parse(decodeURIComponent(rawText.trim()));
      }

      const state: UserMasteryState = parsed.data || parsed;
      this.isSyncing = false;
      this.setLastSyncedAt(parsed.ts || Date.now());
      this.emitStatus('拉取云端成功');
      return { ok: true, found: true, state, updatedAt: parsed.ts };
    } catch (err: any) {
      this.isSyncing = false;
      this.emitStatus('拉取失败: ' + (err.message || '网络错误'));
      return { ok: false, error: err.message };
    }
  }
}

export const syncService = new CloudSyncManager();
