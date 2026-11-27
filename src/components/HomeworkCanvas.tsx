import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  HelpCircle,
} from 'lucide-react';
import { HomeworkQuestion, ChapterMeta } from '../data/types';
import { ClayQuestionNav } from './common/ClayQuestionNav';
import { MarkdownViewer } from './common/MarkdownViewer';
import { HOMEWORK_PPT_REFS } from '../data/pptRefs';
import { useBookPageTurn } from '../hooks/useBookPageTurn';

type HomeworkFilter = 'all' | 'completed' | 'uncompleted' | 'starred';

interface HomeworkCanvasProps {
  questions: HomeworkQuestion[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onJumpToIndex: (idx: number) => void;
  completedList: number[];
  onToggleCompleted: (id: number) => void;
  starredList?: number[];
  onToggleStar?: (id: number) => void;
  activeFilter?: HomeworkFilter;
  onSelectFilter?: (f: HomeworkFilter) => void;
  totalCount?: number;
  completedCount?: number;
  starredCount?: number;
  chapters?: ChapterMeta[];
  selectedChapterId?: number | null;
  onSelectChapter?: (chId: number | null) => void;
}

export const HomeworkCanvas: React.FC<HomeworkCanvasProps> = ({
  questions,
  currentIndex,
  onPrev,
  onNext,
  onJumpToIndex,
  completedList,
  onToggleCompleted,
  starredList = [],
  onToggleStar = () => {},
  activeFilter = 'all',
  onSelectFilter,
  totalCount,
  completedCount,
  starredCount,
  chapters = [],
  selectedChapterId = null,
  onSelectChapter,
}) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(true);
  const [isMasking, setIsMasking] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const safeIndex = Math.min(Math.max(0, currentIndex), Math.max(0, questions.length - 1));
  const currentQ = questions[safeIndex] || questions[0];
  const turnClass = useBookPageTurn(currentQ?.id ?? 0, safeIndex);

  const handleCopyCurrent = () => {
    if (!currentQ) return;
    const text = `【第 ${currentQ.chapterId} 章 · 第 ${currentQ.id} 题】${currentQ.question}\n\n参考答案：\n${currentQ.answer}`;
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
        setShowAnswer((prev) => !prev);
      } else if (e.key === 'j' || e.key === 'J' || e.key === 'ArrowLeft') {
        e.preventDefault();
        onPrev();
      } else if (e.key === 'k' || e.key === 'K' || e.key === 'ArrowRight') {
        e.preventDefault();
        onNext();
      } else if (e.key === 'm' || e.key === 'M') {
        if (currentQ) {
          e.preventDefault();
          onToggleCompleted(currentQ.id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onPrev, onNext, currentQ, onToggleCompleted]);

  const effectiveTotal = totalCount ?? questions.length;
  const effectiveCompleted = completedCount ?? completedList.length;
  const effectiveUncompleted = Math.max(0, effectiveTotal - effectiveCompleted);
  const effectiveStarred = starredCount ?? starredList.length;

  const filterPills = (onSelectFilter || onSelectChapter) ? (
    <div className="flex flex-wrap items-center justify-between gap-2 px-1">
      {onSelectFilter && (
        <div
          role="group"
          aria-label="作业题筛选"
          className="flex flex-wrap items-center gap-1.5"
        >
          {(
            [
              { key: 'all', label: '全部', count: effectiveTotal },
              { key: 'uncompleted', label: '未做', count: effectiveUncompleted },
              { key: 'completed', label: '已做', count: effectiveCompleted },
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
                    ? 'bg-sky-600 text-white border-sky-700'
                    : 'bg-transparent text-stone-600 dark:text-stone-400 border-stone-300/80 dark:border-stone-700/80 hover:border-sky-400 dark:hover:border-sky-600 hover:text-sky-700 dark:hover:text-sky-300'
                }`}
              >
                <span>{item.label}</span>
                <span
                  className={`tabular-nums text-[11px] ${
                    isActive ? 'text-sky-100' : 'text-stone-400 dark:text-stone-500'
                  }`}
                >
                  {item.count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {onSelectChapter && chapters.length > 0 && (
        <select
          aria-label="选择章节"
          value={selectedChapterId ?? ''}
          onChange={(e) => {
            const val = e.target.value;
            onSelectChapter(val ? Number(val) : null);
          }}
          className="ml-auto px-3 py-1 rounded-full text-xs font-semibold bg-white/80 dark:bg-[#1c1917] text-stone-700 dark:text-stone-200 border border-stone-300/80 dark:border-stone-700/80 hover:border-sky-400 dark:hover:border-sky-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 cursor-pointer max-w-[220px] truncate"
        >
          <option value="">全部章节</option>
          {chapters.map((ch) => {
            const cleanTitle = ch.title.replace(/^第[一二三四五六七八九十0-9]+章\s*/, '');
            return (
              <option key={ch.id} value={ch.id}>
                第{ch.id}章 {cleanTitle}
              </option>
            );
          })}
        </select>
      )}
    </div>
  ) : null;

  if (!currentQ) {
    return (
      <div className="flex-1 min-w-0 flex flex-col gap-3 p-3 sm:p-5 lg:p-6 overflow-y-auto max-h-[calc(100vh-4rem)]">
        {filterPills}
        <div className="book-stage flex-1 flex flex-col items-center justify-center">
          <div className="book-page w-full max-w-2xl p-10 text-center flex flex-col items-center text-stone-600 dark:text-stone-400">
            <BookOpen className="w-12 h-12 mb-3 text-stone-300 dark:text-stone-600" />
            <p className="text-base font-medium mb-3">当前章节暂无作业题</p>
            {onSelectFilter && (
              <button
                type="button"
                onClick={() => onSelectFilter('all')}
                className="px-4 py-1.5 rounded-md text-xs font-bold bg-sky-600 text-white hover:bg-sky-700 transition-colors cursor-pointer"
              >
                查看全部
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  const isCompleted = completedList.includes(currentQ.id);
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
        completedItemIds={completedList}
        starredItemIds={starredList}
        isMemorized={isCompleted}
        onToggleMemorized={() => onToggleCompleted(currentQ.id)}
        actionLabel="已做"
        isStarred={isStarred}
        onToggleStar={() => onToggleStar(currentQ.id)}
        revealed={showAnswer}
        onToggleRevealed={() => setShowAnswer((p) => !p)}
        toggleLabel="答案"
        onCopy={handleCopyCurrent}
        isCopied={copied}
        modeBadge="平时作业本"
      />

      {filterPills}

      {/* 2. Main Book Page */}
      <div className="book-stage">
        <article className={`book-page ${turnClass} p-6 sm:p-9 lg:px-11 lg:py-9`}>
          {/* Top Marginalia */}
          <div className="book-marginalia flex flex-wrap items-center justify-between gap-2.5 pb-3 text-[0.82em] text-stone-600 dark:text-stone-400">
            <span className="font-bold text-stone-800 dark:text-stone-200">
              {currentQ.chapterTitle || '中央银行学'}
            </span>
          </div>

          {/* Question Title with 1. style (Black font) + trailing PPT page ref */}
          <h2 className="py-4 text-[1.24em] font-bold leading-relaxed text-slate-900 dark:text-white">
            <span className="font-mono font-bold mr-1.5 text-slate-900 dark:text-white">{currentQ.id}.</span>
            <span>{currentQ.question}</span>
            {HOMEWORK_PPT_REFS[currentQ.id] && (
              <span className="font-mono text-[0.78em] font-semibold text-stone-600 dark:text-stone-400 ml-1">
                （{HOMEWORK_PPT_REFS[currentQ.id]}）
              </span>
            )}
          </h2>

          {/* 3. Solution Section (printed directly on page) */}
          {showAnswer && (
            <>
              <hr className="book-divider-double my-3" />
              <div className="pt-2">
                <div className="flex items-center justify-between pb-3 mb-3">
                  <span className="text-xs font-bold text-stone-600 dark:text-stone-400 tracking-wider">
                    参考解析
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsMasking((prev) => !prev)}
                    className={`px-2.5 py-1 rounded-md text-xs font-bold border transition-colors flex items-center gap-1.5 cursor-pointer ${
                      isMasking
                        ? 'bg-rose-500 text-white border-rose-600'
                        : 'bg-transparent text-stone-600 dark:text-stone-300 border-stone-300 dark:border-stone-700 hover:text-rose-500 hover:border-rose-400'
                    }`}
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>{isMasking ? '显露关键词' : '挖空遮挡'}</span>
                  </button>
                </div>
                <MarkdownViewer content={currentQ.answer} keywords={currentQ.keywords} maskKeywords={isMasking} />
              </div>
            </>
          )}
        </article>
      </div>
    </div>
  );
};
