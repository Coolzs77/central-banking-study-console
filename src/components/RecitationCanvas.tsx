import React, { useState, useEffect, useCallback } from 'react';
import {
  Award,
  Zap,
  BookOpen,
} from 'lucide-react';
import { RecitationQuestion } from '../data/types';
import { ClayQuestionNav } from './common/ClayQuestionNav';
import { MarkdownViewer } from './common/MarkdownViewer';

type RecitationFilter = 'all' | 'memorized' | 'unmemorized' | 'starred';

interface RecitationCanvasProps {
  questions: RecitationQuestion[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onJumpToIndex: (idx: number) => void;
  memorizedList: number[];
  starredList: number[];
  onToggleMemorized: (id: number) => void;
  onToggleStar: (id: number) => void;
  activeFilter?: RecitationFilter;
  onSelectFilter?: (f: RecitationFilter) => void;
  totalCount?: number;
  memorizedCount?: number;
  starredCount?: number;
}

export const RecitationCanvas: React.FC<RecitationCanvasProps> = ({
  questions,
  currentIndex,
  onPrev,
  onNext,
  onJumpToIndex,
  memorizedList,
  starredList,
  onToggleMemorized,
  onToggleStar,
  activeFilter = 'all',
  onSelectFilter,
  totalCount,
  memorizedCount,
  starredCount,
}) => {
  const [isMasking, setIsMasking] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  // Safe bounded current question
  const safeIndex = Math.min(Math.max(0, currentIndex), Math.max(0, questions.length - 1));
  const currentQ = questions[safeIndex] || questions[0];

  const handleCopyCurrent = () => {
    if (!currentQ) return;
    const text = `【第 ${currentQ.id} 题】${currentQ.title} (${currentQ.points}点)\n\n${currentQ.content}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) return;

      if (e.code === 'Space') {
        e.preventDefault();
        setIsMasking((prev) => !prev);
      } else if (e.key === 'j' || e.key === 'J' || e.key === 'ArrowLeft') {
        e.preventDefault();
        onPrev();
      } else if (e.key === 'k' || e.key === 'K' || e.key === 'ArrowRight') {
        e.preventDefault();
        onNext();
      } else if (e.key === 'm' || e.key === 'M') {
        if (currentQ) {
          e.preventDefault();
          onToggleMemorized(currentQ.id);
        }
      } else if (e.key === 's' || e.key === 'S') {
        if (currentQ) {
          e.preventDefault();
          onToggleStar(currentQ.id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onPrev, onNext, currentQ, onToggleMemorized, onToggleStar]);

  const effectiveTotal = totalCount ?? questions.length;
  const effectiveMemorized = memorizedCount ?? memorizedList.length;
  const effectiveUnmemorized = Math.max(0, effectiveTotal - effectiveMemorized);
  const effectiveStarred = starredCount ?? starredList.length;

  const filterPills = onSelectFilter ? (
    <div
      role="group"
      aria-label="背诵题筛选"
      className="flex flex-wrap items-center gap-1.5 px-1"
    >
      {(
        [
          { key: 'all', label: '全部', count: effectiveTotal },
          { key: 'unmemorized', label: '未背', count: effectiveUnmemorized },
          { key: 'memorized', label: '已背', count: effectiveMemorized },
          { key: 'starred', label: '收藏', count: effectiveStarred },
        ] as const
      ).map((item) => {
        const isActive = activeFilter === item.key;
        return (
          <button
            key={item.key}
            type="button"
            onClick={() => onSelectFilter(item.key)}
            aria-pressed={isActive}
            className={`px-3 py-1 rounded-full text-xs font-semibold border transition-colors flex items-center gap-1.5 cursor-pointer ${
              isActive
                ? 'bg-sky-600 text-white border-sky-700 shadow-sm'
                : 'bg-white/90 dark:bg-[#151b26] text-slate-600 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80 hover:border-sky-300 dark:hover:border-sky-700 hover:text-sky-600 dark:hover:text-sky-400'
            }`}
          >
            <span>{item.label}</span>
            <span
              className={`tabular-nums text-[11px] ${
                isActive ? 'text-sky-100' : 'text-slate-400 dark:text-slate-500'
              }`}
            >
              {item.count}
            </span>
          </button>
        );
      })}
    </div>
  ) : null;

  if (!currentQ) {
    return (
      <div className="flex-1 min-w-0 flex flex-col gap-3 p-3 sm:p-5 lg:p-6 overflow-y-auto max-h-[calc(100vh-4rem)]">
        {filterPills}
        <div className="flex-1 flex flex-col items-center justify-center p-12 text-slate-400">
          <BookOpen className="w-12 h-12 mb-3 text-slate-300 dark:text-slate-600" />
          <p className="text-base font-medium mb-3">未找到符合条件的背诵题</p>
          {onSelectFilter && (
            <button
              type="button"
              onClick={() => onSelectFilter('all')}
              className="clay-button-shadow clay-squash px-4 py-1.5 rounded-xl text-xs font-bold bg-sky-600 text-white hover:bg-sky-700 transition-colors cursor-pointer"
            >
              查看全部
            </button>
          )}
        </div>
      </div>
    );
  }

  const isMemorized = memorizedList.includes(currentQ.id);
  const isStarred = starredList.includes(currentQ.id);
  const allItemIds = questions.map((q) => q.id);

  return (
    <div className="flex-1 min-w-0 flex flex-col gap-3 p-3 sm:p-5 lg:p-6 overflow-y-auto max-h-[calc(100vh-4rem)] select-text">
      {/* 1. FRM-Style Sticky Navigation Bar */}
      <ClayQuestionNav
        currentIndex={safeIndex}
        totalFiltered={questions.length}
        onPrev={onPrev}
        onNext={onNext}
        onJumpToIndex={onJumpToIndex}
        allItemIds={allItemIds}
        completedItemIds={memorizedList}
        starredItemIds={starredList}
        isMemorized={isMemorized}
        onToggleMemorized={() => onToggleMemorized(currentQ.id)}
        actionLabel="背会"
        isStarred={isStarred}
        onToggleStar={() => onToggleStar(currentQ.id)}
        revealed={isMasking}
        onToggleRevealed={() => setIsMasking((p) => !p)}
        toggleLabel="遮挡"
        onCopy={handleCopyCurrent}
        isCopied={copied}
        modeBadge="全书速记"
      />

      {filterPills}

      {/* 2. Main Question Card (Clean, spacious typography) */}
      <div className="clay-card-shadow bg-white dark:bg-[#151b26] rounded-3xl p-5 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 transition-all">
        {/* Top Badges (Minimal, crisp) */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 border-b border-slate-100 dark:border-slate-800/80">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">
              第 {currentQ.id} 题 · {currentQ.chapterTitle.split(' ')[0]}
            </span>
            {currentQ.isCore && (
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border border-rose-200 dark:border-rose-800/60 flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-rose-500" />
                核心必背
              </span>
            )}
          </div>

          <div className="text-xs text-slate-500 font-medium">
            {currentQ.sectionTitle}
          </div>
        </div>

        {/* Question Title with 1. style (Black font) */}
        <h2 className="py-4 text-lg sm:text-xl font-bold leading-relaxed text-slate-900 dark:text-white">
          <span className="font-mono font-bold mr-1.5 text-slate-900 dark:text-white">{currentQ.id}.</span>
          <span>{currentQ.title}</span>
        </h2>

        {/* 3. Question Content / Answer Area */}
        <div className="mt-2 p-5 sm:p-6 rounded-2xl bg-slate-50/80 dark:bg-[#18202e] border border-slate-200/80 dark:border-slate-800/80 clay-card-shadow">
          <MarkdownViewer content={currentQ.content} keywords={currentQ.keywords} maskKeywords={isMasking} />
        </div>
      </div>
    </div>
  );
};
