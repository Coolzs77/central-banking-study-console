import React, { useState, useEffect, useCallback } from 'react';
import {
  Award,
  Zap,
  BookOpen,
} from 'lucide-react';
import { RecitationQuestion } from '../data/types';
import { ClayQuestionNav } from './common/ClayQuestionNav';
import { MarkdownViewer } from './common/MarkdownViewer';

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

  if (!currentQ) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-12 text-slate-400">
        <BookOpen className="w-12 h-12 mb-3 text-slate-300" />
        <p className="text-base font-medium">未找到符合条件的背诵题</p>
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
        memorizedLabel="已背会"
        unmemorizedLabel="背会"
        isStarred={isStarred}
        onToggleStar={() => onToggleStar(currentQ.id)}
        revealed={isMasking}
        onToggleRevealed={() => setIsMasking((p) => !p)}
        revealLabel="关键词遮挡"
        hideLabel="显示完整"
        onCopy={handleCopyCurrent}
        isCopied={copied}
        modeBadge="全书速记"
      />

      {/* 2. Main Question Card (Clean, spacious typography) */}
      <div className="clay-card-shadow bg-white dark:bg-[#151b26] rounded-3xl p-5 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 transition-all">
        {/* Top Badges (Minimal, crisp) */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 border-b border-slate-100 dark:border-slate-800/80">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">
              第 {currentQ.id} 题 · {currentQ.chapterTitle.split(' ')[0]}
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              {currentQ.points} 个考点
            </span>
            {currentQ.isCore && (
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200 flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-rose-500" />
                核心
              </span>
            )}
          </div>

          <div className="text-xs text-slate-500 font-medium">
            {currentQ.sectionTitle}
          </div>
        </div>

        {/* Question Title */}
        <h2 className="py-5 text-lg sm:text-xl font-bold leading-relaxed text-slate-900 dark:text-slate-100">
          {currentQ.title}
        </h2>

        {/* 3. Question Content / Answer Area */}
        <div className="mt-2 p-5 rounded-2xl bg-gradient-to-tr from-slate-50 to-blue-50/30 dark:from-[#192233] dark:to-[#161c28] border border-blue-200/80 dark:border-blue-900/60 clay-card-shadow">
          <div className="flex items-center justify-between pb-3 border-b border-blue-100 dark:border-blue-900/40 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-base">💡</span>
              <span className="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-100">
                标准答案与采分要点
              </span>
            </div>
            <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">
              {isMasking ? '🙈 关键词已遮挡 (点击填空可揭开)' : '👁️ 完整答案已展示'}
            </div>
          </div>

          <MarkdownViewer content={currentQ.content} maskKeywords={isMasking} />
        </div>
      </div>
    </div>
  );
};
