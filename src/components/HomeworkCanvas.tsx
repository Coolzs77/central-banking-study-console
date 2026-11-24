import React, { useState, useEffect, useCallback } from 'react';
import {
  BookOpen,
  Copy,
} from 'lucide-react';
import { HomeworkQuestion } from '../data/types';
import { ClayQuestionNav } from './common/ClayQuestionNav';
import { MarkdownViewer } from './common/MarkdownViewer';

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
}) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  const safeIndex = Math.min(Math.max(0, currentIndex), Math.max(0, questions.length - 1));
  const currentQ = questions[safeIndex] || questions[0];

  const handleCopyCurrent = () => {
    if (!currentQ) return;
    const text = `【第 ${currentQ.chapterId} 章 · 第 ${currentQ.questionNumber} 题】${currentQ.questionTitle}\n\n参考答案：\n${currentQ.answer}`;
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

  if (!currentQ) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-12 text-slate-400">
        <BookOpen className="w-12 h-12 mb-3 text-slate-300" />
        <p className="text-base font-medium">当前章节暂无作业题</p>
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
        memorizedLabel="已完成"
        unmemorizedLabel="标为已做"
        isStarred={isStarred}
        onToggleStar={() => onToggleStar(currentQ.id)}
        revealed={showAnswer}
        onToggleRevealed={() => setShowAnswer((p) => !p)}
        revealLabel="查看答案"
        hideLabel="收起答案"
        onCopy={handleCopyCurrent}
        isCopied={copied}
        modeBadge="平时作业本"
      />

      {/* 2. Main Question Card (Clean, spacious typography) */}
      <div className="clay-card-shadow bg-white dark:bg-[#151b26] rounded-3xl p-5 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 transition-all">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 border-b border-slate-100 dark:border-slate-800/80">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">
              第 {currentQ.chapterId} 章 · {currentQ.chapterTitle || '中央银行学'}
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
              {currentQ.questionType}
            </span>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            第 {safeIndex + 1} / {questions.length} 题
          </div>
        </div>

        {/* Question Title with Pure Text Color Highlighting */}
        <h2 className="py-4 text-lg sm:text-xl font-bold leading-relaxed text-slate-900 dark:text-white">
          <span className="text-blue-600 dark:text-blue-400 font-mono font-bold mr-2">第 {currentQ.questionNumber} 题 ·</span>
          <span>{currentQ.questionTitle}</span>
        </h2>

        {/* 3. Solution Section (展开题解卡片) */}
        {showAnswer && (
          <div className="mt-2 p-5 sm:p-6 rounded-2xl bg-slate-50/80 dark:bg-[#18202e] border border-slate-200/80 dark:border-slate-800/80 clay-card-shadow">
            <MarkdownViewer content={currentQ.answer} maskKeywords={false} />
          </div>
        )}
      </div>
    </div>
  );
};
