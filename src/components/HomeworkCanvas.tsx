import React, { useState, useEffect, useCallback } from 'react';
import {
  BookOpen,
  Copy,
  HelpCircle,
} from 'lucide-react';
import { HomeworkQuestion, ChapterMeta } from '../data/types';
import { ClayQuestionNav } from './common/ClayQuestionNav';
import { MarkdownViewer } from './common/MarkdownViewer';

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
      )}

      {onSelectChapter && chapters.length > 0 && (
        <select
          aria-label="选择章节"
          value={selectedChapterId ?? ''}
          onChange={(e) => {
            const val = e.target.value;
            onSelectChapter(val ? Number(val) : null);
          }}
          className="ml-auto px-3 py-1 rounded-full text-xs font-semibold bg-white dark:bg-[#151b26] text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 hover:border-sky-300 dark:hover:border-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 cursor-pointer max-w-[220px] truncate"
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
        <div className="flex-1 flex flex-col items-center justify-center p-12 text-slate-400">
          <BookOpen className="w-12 h-12 mb-3 text-slate-300 dark:text-slate-600" />
          <p className="text-base font-medium mb-3">当前章节暂无作业题</p>
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

      {/* 2. Main Question Card (Clean, spacious typography) */}
      <div className="clay-card-shadow bg-white dark:bg-[#151b26] rounded-3xl p-5 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 transition-all">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 border-b border-slate-100 dark:border-slate-800/80">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">
              第 {currentQ.chapterId} 章 · {currentQ.chapterTitle || '中央银行学'}
            </span>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            第 {safeIndex + 1} / {questions.length} 题
          </div>
        </div>

        {/* Question Title with 1. style (Black font) */}
        <h2 className="py-4 text-lg sm:text-xl font-bold leading-relaxed text-slate-900 dark:text-white">
          <span className="font-mono font-bold mr-1.5 text-slate-900 dark:text-white">{currentQ.id}.</span>
          <span>{currentQ.question}</span>
        </h2>

        {/* 3. Solution Section (展开题解卡片) */}
        {showAnswer && (
          <div className="mt-2 p-5 sm:p-6 rounded-2xl bg-slate-50/80 dark:bg-[#18202e] border border-slate-200/80 dark:border-slate-800/80 clay-card-shadow">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200/60 dark:border-slate-800/60">
              <span className="text-xs font-bold text-slate-500 tracking-wider">
                参考解析
              </span>
              <button
                onClick={() => setIsMasking((prev) => !prev)}
                className={`clay-button-shadow clay-squash px-2.5 py-1 rounded-xl text-xs font-bold border transition-colors flex items-center gap-1.5 cursor-pointer ${
                  isMasking
                    ? 'bg-rose-500 text-white border-rose-600 shadow-sm'
                    : 'bg-white dark:bg-[#1a2232] text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:text-rose-500'
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>{isMasking ? '显露关键词' : '挖空遮挡'}</span>
              </button>
            </div>
            <MarkdownViewer content={currentQ.answer} keywords={currentQ.keywords} maskKeywords={isMasking} />
          </div>
        )}
      </div>
    </div>
  );
};
