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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-blue-600" />
            <h3 className="font-bold text-slate-800 text-base">跨设备云端同步 (短码直连)</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200/50 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 overflow-y-auto max-h-[80vh]">
          {/* Notification banner */}
          {notice && (
            <div
              className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                notice.type === 'ok'
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : 'bg-rose-50 text-rose-800 border border-rose-200'
              }`}
            >
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{notice.text}</span>
            </div>
          )}

          {/* Account Binding Card */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <div className="text-xs font-bold text-slate-700">1. 同步账号绑定</div>
            {currentAccount ? (
              <div className="flex items-center justify-between bg-white px-3.5 py-2.5 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-bold text-slate-800">{currentAccount}</span>
                  <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">已就绪</span>
                </div>
                <button
                  onClick={handleUnbind}
                  className="text-xs text-rose-600 hover:text-rose-700 flex items-center gap-1 cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>换绑</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleBind} className="flex gap-2">
                <input
                  type="text"
                  placeholder="输入简短账号（如：zsz 或学号）"
                  value={accountInput}
                  onChange={(e) => setAccountInput(e.target.value)}
                  className="flex-1 px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-blue-500 bg-white"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition cursor-pointer shadow-xs"
                >
                  绑定
                </button>
              </form>
            )}
            <p className="text-[11px] text-slate-400">
              提示：输入相同的简短账号，即可在手机、平板或另一台电脑上互相同步进度。
            </p>
          </div>

          {/* Manual Push / Pull buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleBackup}
              disabled={!currentAccount || pendingAction !== null}
              className="p-3.5 rounded-2xl bg-blue-50 hover:bg-blue-100/80 disabled:opacity-40 border border-blue-200 text-blue-900 flex flex-col items-center justify-center gap-1.5 transition cursor-pointer"
            >
              {pendingAction === 'backup' ? (
                <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
              ) : (
                <UploadCloud className="w-5 h-5 text-blue-600" />
              )}
              <span className="text-xs font-bold">手动备份到云端</span>
              <span className="text-[10px] text-blue-600/80">上传本机背诵与做题记录</span>
            </button>

            <button
              onClick={handlePull}
              disabled={!currentAccount || pendingAction !== null}
              className="p-3.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100/80 disabled:opacity-40 border border-emerald-200 text-emerald-900 flex flex-col items-center justify-center gap-1.5 transition cursor-pointer"
            >
              {pendingAction === 'pull' ? (
                <Loader2 className="w-5 h-5 text-emerald-600 animate-spin" />
              ) : (
                <DownloadCloud className="w-5 h-5 text-emerald-600" />
              )}
              <span className="text-xs font-bold">从云端拉取记录</span>
              <span className="text-[10px] text-emerald-600/80">覆盖更新本机做题进度</span>
            </button>
          </div>

          {/* QR Code Section for Mobile */}
          {currentAccount && qrDataUrl && (
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 flex flex-col items-center space-y-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                <QrCode className="w-4 h-4 text-purple-600" />
                <span>手机微信/浏览器 扫码无缝接力</span>
              </div>
              <div className="p-2 bg-white rounded-2xl shadow-sm border border-slate-200">
                <img src={qrDataUrl} alt="Sync QR Code" className="w-36 h-36 rounded-lg" />
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyLink}
                  className="flex items-center gap-1 px-3 py-1 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 transition cursor-pointer shadow-xs"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? '已复制同步链接' : '复制直达链接'}</span>
                </button>
              </div>
            </div>
          )}

          {/* Auto Sync Toggle */}
          <div className="flex items-center justify-between text-xs text-slate-600 px-1 pt-1">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={syncStatus.autoSyncEnabled}
                onChange={(e) => syncService.setAutoSyncEnabled(e.target.checked)}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span>做题或背诵时自动静默保存到云端</span>
            </label>
            <span className="text-slate-400 text-[11px]">{syncStatus.statusText}</span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-100 bg-slate-50 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold rounded-xl transition cursor-pointer"
          >
            完成
          </button>
        </div>
      </div>
    </div>
  );
};
