import React from 'react';

interface MiddleNavProps {
  currentIndex: number;
  totalCount: number;
  chapterTitle?: string;
  sectionTitle?: string;
  isMasking: boolean;
  onToggleMask: () => void;
  isAllRevealed: boolean;
  onToggleRevealAll: () => void;
  onPrev: () => void;
  onNext: () => void;
  onRandom: () => void;
  onJumpToIndex: (idx: number) => void;
  modeTitle?: string;
}

export const MiddleNav: React.FC<MiddleNavProps> = ({
  currentIndex,
  totalCount,
  chapterTitle,
  sectionTitle,
  isMasking,
  onToggleMask,
  isAllRevealed,
  onToggleRevealAll,
  onPrev,
  onNext,
  onRandom,
  onJumpToIndex,
  modeTitle = '全书背诵'
}) => {
  return (
    <div className="sticky top-0 z-20 backdrop-blur-md bg-white/90 border-b border-slate-200/80 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 shadow-xs">
      {/* Left: Breadcrumbs */}
      <div className="flex items-center gap-1.5 text-xs text-slate-500 min-w-0">
        <span className="font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 shrink-0">
          {modeTitle}
        </span>
        {chapterTitle && (
          <>
            <span className="text-slate-300">/</span>
            <span className="truncate max-w-[140px] text-slate-600 font-medium" title={chapterTitle}>
              {chapterTitle.split(' ')[0]}
            </span>
          </>
        )}
        {sectionTitle && (
          <>
            <span className="text-slate-300">/</span>
            <span className="truncate max-w-[160px] text-slate-600" title={sectionTitle}>
              {sectionTitle.split(' ')[0]}
            </span>
          </>
        )}
        <span className="text-slate-300">/</span>
        <span className="font-bold text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded">
          {currentIndex + 1} / {totalCount}
        </span>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        {/* Jump selector */}
        <div className="flex items-center gap-1 text-xs">
          <span className="text-slate-400">跳至</span>
          <select
            value={currentIndex}
            onChange={(e) => onJumpToIndex(parseInt(e.target.value, 10))}
            className="text-xs bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded px-1.5 py-1 text-slate-700 outline-none cursor-pointer"
          >
            {Array.from({ length: totalCount }, (_, i) => (
              <option key={i} value={i}>
                第 {i + 1} 题
              </option>
            ))}
          </select>
        </div>

        {/* Cloze Toggle */}
        <button
          onClick={onToggleMask}
          title="快捷键: 空格键"
          className={`flex items-center gap-1 px-2.5 py-1 text-xs rounded-lg font-medium transition shadow-xs cursor-pointer ${
            isMasking
              ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300'
          }`}
        >
          <span>{isMasking ? '🙈 关键词已遮挡' : '👁️ 显示完整内容'}</span>
          <kbd className="hidden sm:inline-block ml-1 px-1 py-0.2 text-[10px] bg-black/10 rounded font-mono">
            Space
          </kbd>
        </button>

        {isMasking && (
          <button
            onClick={onToggleRevealAll}
            className={`px-2 py-1 text-xs rounded-lg font-medium transition cursor-pointer ${
              isAllRevealed
                ? 'bg-amber-100 text-amber-800 border border-amber-300'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300'
            }`}
          >
            {isAllRevealed ? '一键重新遮挡' : '一键揭开所有'}
          </button>
        )}

        {/* Stepper buttons */}
        <div className="flex items-center gap-1 border-l border-slate-200 pl-2">
          <button
            onClick={onRandom}
            title="随机跳题"
            className="px-2 py-1 text-xs bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200 rounded-lg transition cursor-pointer"
          >
            🎲 随机
          </button>
          <button
            onClick={onPrev}
            disabled={currentIndex === 0}
            title="快捷键: J 或 左箭头"
            className="px-2.5 py-1 text-xs bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed text-slate-700 border border-slate-300 rounded-lg transition cursor-pointer font-medium"
          >
            ← 上一题
          </button>
          <button
            onClick={onNext}
            disabled={currentIndex === totalCount - 1}
            title="快捷键: K 或 右箭头"
            className="px-2.5 py-1 text-xs bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed text-slate-700 border border-slate-300 rounded-lg transition cursor-pointer font-medium"
          >
            下一题 →
          </button>
        </div>
      </div>
    </div>
  );
};
