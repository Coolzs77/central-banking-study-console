import React, { useState } from 'react';
import {
  X,
  Copy,
  Check,
  Download,
  Upload,
  AlertTriangle,
  RotateCcw,
  RefreshCw,
} from 'lucide-react';

interface SyncModalProps {
  isOpen: boolean;
  onClose: () => void;
  exportBase64: () => string;
  importBase64: (data: string) => boolean;
  onResetAll: () => void;
}

export const SyncModal: React.FC<SyncModalProps> = ({
  isOpen,
  onClose,
  exportBase64,
  importBase64,
  onResetAll,
}) => {
  const [importText, setImportText] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  if (!isOpen) return null;

  const currentExportString = exportBase64();

  const handleCopy = () => {
    navigator.clipboard.writeText(currentExportString).then(() => {
      setCopied(true);
      setMessage({ text: '已成功复制备份代码到剪贴板！可发往手机或另一台电脑粘贴导入。', type: 'success' });
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleImport = () => {
    if (!importText.trim()) {
      setMessage({ text: '请输入有效的备份字符串。', type: 'error' });
      return;
    }
    const success = importBase64(importText);
    if (success) {
      setMessage({ text: '学习进度与做题记录导入成功！', type: 'success' });
      setImportText('');
      setTimeout(() => {
        onClose();
      }, 1500);
    } else {
      setMessage({ text: '备份字符串解析失败，请检查格式是否完整。', type: 'error' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 clay-card-shadow shadow-2xl relative">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                跨设备学习进度同步
              </h3>
              <p className="text-xs text-slate-400">
                支持手机、电脑、平板间通过纯文本代码无缝同步
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status Message */}
        {message && (
          <div
            className={`p-3 rounded-xl text-xs mb-4 font-medium ${
              message.type === 'success'
                ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/50'
                : 'bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 border border-red-200/50'
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Section 1: Export */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Download className="w-3.5 h-3.5 text-sky-500" />
              导出当前设备学习进度
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-3 py-1 rounded-xl bg-sky-500 text-white text-xs font-medium clay-button-shadow clay-squash"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '已复制' : '一键复制备份码'}</span>
            </button>
          </div>

          <textarea
            readOnly
            value={currentExportString}
            rows={3}
            className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 text-[11px] font-mono text-slate-600 dark:text-slate-400 select-all focus:outline-none"
          />
        </div>

        {/* Section 2: Import */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Upload className="w-3.5 h-3.5 text-emerald-500" />
              从备份码导入进度
            </span>
          </div>

          <textarea
            value={importText}
            onChange={(e) => setImportText(e.target.value)}
            placeholder="在此处粘贴从其他设备导出的备份码..."
            rows={3}
            className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 text-[11px] font-mono text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 mb-2"
          />

          <button
            onClick={handleImport}
            className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold clay-button-shadow clay-squash"
          >
            校验并导入进度覆盖
          </button>
        </div>

        {/* Section 3: Reset */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400">重置所有刷题数据：</span>
          <button
            onClick={() => {
              onResetAll();
              onClose();
            }}
            className="flex items-center gap-1 text-xs text-red-500 hover:text-red-700 py-1 px-2.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>清空本地全部进度</span>
          </button>
        </div>
      </div>
    </div>
  );
};
