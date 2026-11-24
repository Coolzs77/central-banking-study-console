import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Copy,
  Check,
  HelpCircle,
  Eye,
  EyeOff,
} from 'lucide-react';

interface ClayQuestionNavProps {
  currentIndex: number;
  totalFiltered: number;
  onPrev: () => void;
  onNext: () => void;
  onJumpToIndex: (idx: number) => void;
  allItemIds: number[];
  completedItemIds: number[];
  starredItemIds?: number[];
  isMemorized: boolean;
  onToggleMemorized: () => void;
  memorizedLabel?: string;
  unmemorizedLabel?: string;
  isStarred: boolean;
  onToggleStar: () => void;
  revealed?: boolean;
  onToggleRevealed?: () => void;
  revealLabel?: string;
  hideLabel?: string;
  onCopy: () => void;
  isCopied: boolean;
  modeBadge?: string;
}

export const ClayQuestionNav: React.FC<ClayQuestionNavProps> = ({
  currentIndex,
  totalFiltered,
  onPrev,
  onNext,
  onJumpToIndex,
  allItemIds,
  completedItemIds,
  starredItemIds = [],
  isMemorized,
  onToggleMemorized,
  memorizedLabel = '已背会',
  unmemorizedLabel = '背会',
  isStarred,
  onToggleStar,
  revealed,
  onToggleRevealed,
  revealLabel = '查看题解',
  hideLabel = '收起题解',
  onCopy,
  isCopied,
  modeBadge,
}) => {
  const [jumpDrawerOpen, setJumpDrawerOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      {/* Sticky Clay Navigation Bar */}
      <div className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-2 p-2.5 sm:p-3 rounded-2xl bg-white/95 dark:bg-[#151b26]/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 clay-badge-shadow transition-all">
        {/* Left: Prev / Jump Dropdown / Next */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {modeBadge && (
            <span className="hidden sm:inline-flex px-2 py-1 rounded-lg text-xs font-bold bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              {modeBadge}
            </span>
          )}

          <button
            onClick={onPrev}
            disabled={currentIndex <= 0}
            className="clay-button-shadow clay-squash px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-[#1a2232] text-slate-700 dark:text-slate-300 hover:bg-slate-50 border border-slate-200 dark:border-slate-700 disabled:opacity-30 transition-all flex items-center gap-1 cursor-pointer"
            title="快捷键: J 或 左箭头"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>上一题</span>
          </button>

          <button
            onClick={() => setJumpDrawerOpen(!jumpDrawerOpen)}
            className="clay-button-shadow clay-squash px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-[#1a2232] text-slate-700 dark:text-slate-300 hover:text-blue-600 border border-slate-200 dark:border-slate-700 flex items-center gap-1 transition-all cursor-pointer"
          >
            <span>题号 {currentIndex + 1}/{totalFiltered} ▾</span>
          </button>

          <button
            onClick={onNext}
            disabled={currentIndex >= totalFiltered - 1}
            className="clay-button-shadow clay-squash px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-[#1a2232] text-slate-700 dark:text-slate-300 hover:bg-slate-50 border border-slate-200 dark:border-slate-700 disabled:opacity-30 transition-all flex items-center gap-1 cursor-pointer"
            title="快捷键: K 或 右箭头"
          >
            <span>下一题</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Reveal Solution / Memorized Toggle / Star Toggle / Copy */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Solution / Mask Toggle Button */}
          {onToggleRevealed && (
            <button
              onClick={onToggleRevealed}
              className={`clay-button-shadow clay-squash px-3 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 cursor-pointer ${
                revealed
                  ? 'bg-amber-500 text-white border-amber-600 shadow-md'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-500 shadow-md hover:from-blue-700 hover:to-indigo-700'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{revealed ? hideLabel : revealLabel}</span>
            </button>
          )}

          {/* Memorized / Completed Button (✓) */}
          <button
            onClick={onToggleMemorized}
            className={`clay-button-shadow clay-squash px-2.5 py-1.5 rounded-xl border transition-all flex items-center gap-1 text-xs font-bold cursor-pointer ${
              isMemorized
                ? 'bg-emerald-600 text-white border-emerald-700 shadow-md hover:bg-emerald-700'
                : 'bg-white dark:bg-[#1a2232] text-slate-500 dark:text-slate-400 hover:text-emerald-600 border-slate-200 dark:border-slate-700'
            }`}
            title={isMemorized ? '点击取消标记' : '标记已背会/已完成'}
          >
            <Check className={`w-3.5 h-3.5 ${isMemorized ? 'stroke-[3]' : ''}`} />
            <span>{isMemorized ? memorizedLabel : unmemorizedLabel}</span>
          </button>

          {/* Star Button */}
          <button
            onClick={onToggleStar}
            className={`clay-button-shadow clay-squash px-2.5 py-1.5 rounded-xl border transition-all flex items-center gap-1 text-xs font-semibold cursor-pointer ${
              isStarred
                ? 'bg-amber-50 dark:bg-amber-950/50 text-amber-600 border-amber-300 dark:border-amber-700'
                : 'bg-white dark:bg-slate-800 text-slate-500 border-slate-200 dark:border-slate-700'
            }`}
            title="收藏重点"
          >
            <Star className={`w-3.5 h-3.5 ${isStarred ? 'fill-amber-500 text-amber-500' : ''}`} />
            <span>{isStarred ? '已收藏' : '收藏'}</span>
          </button>

          {/* Copy Button */}
          <button
            onClick={onCopy}
            className="clay-button-shadow clay-squash px-2.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-500 hover:text-blue-600 border border-slate-200 dark:border-slate-700 transition-all flex items-center gap-1 text-xs font-semibold cursor-pointer"
            title="复制本题内容"
          >
            {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{isCopied ? '已复制' : '复制'}</span>
          </button>
        </div>
      </div>

      {/* Pop-down Quick Jump Drawer */}
      {jumpDrawerOpen && (
        <div className="clay-card-shadow bg-white dark:bg-[#151b26] rounded-2xl p-4 border border-slate-200 dark:border-slate-800 animate-in fade-in duration-150">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-slate-800">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">快速定位题目</span>
            <div className="flex items-center gap-3 text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                {memorizedLabel}
              </span>
              {starredItemIds.length > 0 && (
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-amber-400 inline-block"></span>
                  已收藏
                </span>
              )}
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-600 inline-block"></span>
                当前
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 max-h-52 overflow-y-auto p-1">
            {allItemIds.map((itemId, idx) => {
              const isCurr = idx === currentIndex;
              const isDone = completedItemIds.includes(itemId);
              const isStar = starredItemIds.includes(itemId);

              let btnStyle = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200';
              if (isCurr) {
                btnStyle = 'bg-blue-600 text-white ring-2 ring-blue-400 font-bold';
              } else if (isDone) {
                btnStyle = 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-400 font-bold';
              } else if (isStar) {
                btnStyle = 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-300';
              }

              return (
                <button
                  key={itemId}
                  onClick={() => {
                    onJumpToIndex(idx);
                    setJumpDrawerOpen(false);
                  }}
                  className={`w-7 h-7 rounded-lg text-xs font-bold font-mono transition-all relative cursor-pointer ${btnStyle}`}
                >
                  {idx + 1}
                  {isDone && !isCurr && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
