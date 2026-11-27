import React, { useState, useEffect, useMemo } from 'react';
import {
  Smartphone,
  Copy,
  Check,
  QrCode,
  UserCheck,
  LogOut,
  X,
  UploadCloud,
  DownloadCloud,
  Loader2,
  AlertCircle,
  RefreshCw,
} from 'lucide-react';
import QRCode from 'qrcode';
import { UserMasteryState } from '../data/types';
import { syncService, SyncStatus } from '../services/syncService';

interface SyncModalProps {
  isOpen: boolean;
  onClose: () => void;
  state: UserMasteryState;
  onImportState: (imported: UserMasteryState) => void;
}

export const SyncModal: React.FC<SyncModalProps> = ({
  isOpen,
  onClose,
  state,
  onImportState,
}) => {
  const [accountInput, setAccountInput] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [syncStatus, setSyncStatus] = useState<SyncStatus>(() => syncService.getStatus());
  const [notice, setNotice] = useState<{ type: 'ok' | 'err'; text: string } | null>(null);
  const [pendingAction, setPendingAction] = useState<'backup' | 'pull' | null>(null);
  const [qrDataUrl, setQrDataUrl] = useState<string>('');

  useEffect(() => {
    return syncService.subscribe((status) => {
      setSyncStatus(status);
    });
  }, []);

  const currentAccount = syncStatus.account;

  useEffect(() => {
    if (currentAccount) {
      setAccountInput(currentAccount);
    }
  }, [currentAccount]);

  // Construct direct QR URL
  const directUrl = useMemo(() => {
    if (!currentAccount) return '';
    if (typeof window === 'undefined') return '';
    const base = window.location.origin + window.location.pathname;
    return `${base}?account=${encodeURIComponent(currentAccount)}&sync=pull`;
  }, [currentAccount]);

  useEffect(() => {
    if (!directUrl) {
      setQrDataUrl('');
      return;
    }
    QRCode.toDataURL(directUrl, {
      width: 220,
      margin: 2,
      color: { dark: '#1e293b', light: '#ffffff' },
    })
      .then((url) => setQrDataUrl(url))
      .catch((err) => console.error('QR code generation failed:', err));
  }, [directUrl]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBind = (e: React.FormEvent) => {
    e.preventDefault();
    const acc = accountInput.trim();
    if (!acc) {
      setNotice({ type: 'err', text: '请输入简短账号（如英文缩写或姓名拼音）' });
      return;
    }
    syncService.setAccount(acc);
    setNotice({ type: 'ok', text: `账号已绑定为：${acc}` });
  };

  const handleUnbind = () => {
    syncService.setAccount('');
    setAccountInput('');
    setNotice({ type: 'ok', text: '账号已解绑' });
  };

  const handleBackup = async () => {
    if (!currentAccount) {
      setNotice({ type: 'err', text: '请先绑定同步账号' });
      return;
    }
    setPendingAction('backup');
    setNotice(null);
    const res = await syncService.pushToCloud(state);
    setPendingAction(null);
    if (res.ok) {
      setNotice({ type: 'ok', text: '背诵与做题记录已备份到云端' });
    } else {
      setNotice({ type: 'err', text: res.error || '备份失败，请检查网络' });
    }
  };

  const handlePull = async () => {
    if (!currentAccount) {
      setNotice({ type: 'err', text: '请先绑定同步账号' });
      return;
    }
    setPendingAction('pull');
    setNotice(null);
    const res = await syncService.pullFromCloud();
    setPendingAction(null);
    if (res.ok) {
      if (res.found && res.state) {
        onImportState(res.state as UserMasteryState);
        setNotice({ type: 'ok', text: '已从云端拉取最新记录并覆盖到本地' });
      } else {
        setNotice({ type: 'err', text: '云端暂无此账号记录，请先在旧设备上传' });
      }
    } else {
      setNotice({ type: 'err', text: res.error || '拉取失败，请检查网络' });
    }
  };

  const handleCopyLink = () => {
    if (!directUrl) return;
    navigator.clipboard.writeText(directUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 dark:bg-black/60 backdrop-blur-sm overscroll-contain"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="sync-modal-title"
        className="bg-white dark:bg-[#151b26] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-lg overflow-hidden flex flex-col"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-[#1a2232]/70">
          <div className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            <h3 id="sync-modal-title" className="font-bold text-slate-800 dark:text-slate-100 text-base">
              云端同步
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="关闭同步弹窗"
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-700/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-6 py-4 divide-y divide-stone-200/80 dark:divide-stone-800 overflow-y-auto max-h-[80vh] overscroll-contain">
          {/* Notification banner */}
          {notice && (
            <div
              aria-live="polite"
              className={`mb-4 p-3 rounded-lg text-xs flex items-center gap-2 ${
                notice.type === 'ok'
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800'
                  : 'bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-200 border border-rose-200 dark:border-rose-800'
              }`}
            >
              <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{notice.text}</span>
            </div>
          )}

          {/* Account Binding Section */}
          <div className="py-4 first:pt-1 space-y-2.5">
            <div className="text-xs font-bold text-slate-700 dark:text-slate-200">同步账号</div>
            {currentAccount ? (
              <div className="flex items-center justify-between py-1">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-100">{currentAccount}</span>
                  <span className="text-[11px] text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded font-medium">
                    已就绪
                  </span>
                </div>
                <button
                  onClick={handleUnbind}
                  className="text-xs text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 flex items-center gap-1 cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>换绑</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleBind} className="flex gap-2">
                <input
                  type="text"
                  name="syncAccount"
                  aria-label="同步账号"
                  autoComplete="off"
                  spellCheck={false}
                  placeholder="输入简短账号（如：zsz 或学号）…"
                  value={accountInput}
                  onChange={(e) => setAccountInput(e.target.value)}
                  className="flex-1 px-3.5 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus:border-blue-500 bg-transparent text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  绑定
                </button>
              </form>
            )}
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              两端输入同一账号即可同步进度
            </p>
          </div>

          {/* Manual Push / Pull buttons */}
          <div className="py-4 grid grid-cols-2 gap-3">
            <button
              onClick={handleBackup}
              disabled={!currentAccount || pendingAction !== null}
              className="p-3 rounded-lg bg-blue-50/70 dark:bg-blue-950/40 hover:bg-blue-100/80 dark:hover:bg-blue-950/60 disabled:opacity-40 border border-blue-200 dark:border-blue-800/70 text-blue-900 dark:text-blue-200 flex flex-col items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              {pendingAction === 'backup' ? (
                <Loader2 className="w-5 h-5 text-blue-600 dark:text-blue-400 animate-spin" aria-hidden="true" />
              ) : (
                <UploadCloud className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
              )}
              <span className="text-xs font-bold">上传备份</span>
            </button>

            <button
              onClick={handlePull}
              disabled={!currentAccount || pendingAction !== null}
              className="p-3 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/40 hover:bg-emerald-100/80 dark:hover:bg-emerald-950/60 disabled:opacity-40 border border-emerald-200 dark:border-emerald-800/70 text-emerald-900 dark:text-emerald-200 flex flex-col items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              {pendingAction === 'pull' ? (
                <Loader2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 animate-spin" aria-hidden="true" />
              ) : (
                <DownloadCloud className="w-5 h-5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              )}
              <span className="text-xs font-bold">云端恢复</span>
            </button>
          </div>

          {/* QR Code Section for Mobile */}
          {currentAccount && qrDataUrl && (
            <div className="py-4 flex flex-col items-center space-y-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-200">
                <QrCode className="w-4 h-4 text-purple-600 dark:text-purple-400" aria-hidden="true" />
                <span>扫码同步</span>
              </div>
              <img
                src={qrDataUrl}
                alt="跨设备同步二维码"
                width={144}
                height={144}
                className="w-36 h-36 rounded-lg border border-slate-200 dark:border-slate-700 bg-white p-1"
              />
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-1 px-3 py-1.5 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
              >
                {copiedLink ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                ) : (
                  <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                )}
                <span>{copiedLink ? '已复制同步链接' : '复制直达链接'}</span>
              </button>
            </div>
          )}

          {/* Auto Sync Toggle */}
          <div className="py-4 last:pb-1 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={syncStatus.autoSyncEnabled}
                onChange={(e) => syncService.setAutoSyncEnabled(e.target.checked)}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span>自动同步</span>
            </label>
            <span className="text-slate-500 dark:text-slate-400 text-[11px]">{syncStatus.statusText}</span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-[#1a2232]/70 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 dark:bg-blue-600 hover:bg-slate-900 dark:hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
          >
            完成
          </button>
        </div>
      </div>
    </div>
  );
};
