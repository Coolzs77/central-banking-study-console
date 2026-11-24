import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  BookOpen,
  Award,
  Check,
  Copy,
  Layers,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  CheckCircle2,
  Circle,
  Star,
} from 'lucide-react';
import { HomeworkQuestion } from '../data/types';
import { ClayQuestionNav } from './common/ClayQuestionNav';
import { MarkdownViewer } from './common/MarkdownViewer';

interface HomeworkCanvasProps {
  questions: HomeworkQuestion[];
  completedList: number[];
  onToggleCompleted: (id: number) => void;
  starredList?: number[];
  onToggleStar?: (id: number) => void;
  selectedChapterId?: number | null;
  onSelectChapter?: (id: number | null) => void;
  selectedQuestionId?: number | null;
  onSelectQuestion?: (id: number) => void;
}

export const HomeworkCanvas: React.FC<HomeworkCanvasProps> = ({
  questions,
  completedList,
  onToggleCompleted,
  starredList = [],
  onToggleStar = () => {},
  selectedChapterId = null,
  selectedQuestionId = null,
  onSelectQuestion,
}) => {
  // Filter questions by chapter
  const filteredQuestions = useMemo(() => {
    if (!selectedChapterId) return questions;
    return questions.filter((q) => q.chapterId === selectedChapterId);
  }, [questions, selectedChapterId]);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  // Sync selectedQuestionId if passed from RightSidebar or LeftSidebar
  useEffect(() => {
    if (selectedQuestionId !== null) {
      const idx = filteredQuestions.findIndex((q) => q.id === selectedQuestionId);
      if (idx !== -1) {
        setCurrentIndex(idx);
      }
    }
  }, [selectedQuestionId, filteredQuestions]);

  // Bound index safely
  useEffect(() => {
    if (currentIndex >= filteredQuestions.length && filteredQuestions.length > 0) {
      setCurrentIndex(filteredQuestions.length - 1);
    }
  }, [filteredQuestions.length, currentIndex]);

  const currentQ = filteredQuestions[currentIndex] || filteredQuestions[0];

  useEffect(() => {
    if (currentQ && onSelectQuestion && selectedQuestionId !== currentQ.id) {
      onSelectQuestion(currentQ.id);
    }
  }, [currentQ, onSelectQuestion, selectedQuestionId]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(filteredQuestions.length - 1, prev + 1));
  }, [filteredQuestions.length]);

  const handleJumpToIndex = useCallback((idx: number) => {
    setCurrentIndex(idx);
  }, []);

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
        handlePrev();
      } else if (e.key === 'k' || e.key === 'K' || e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'm' || e.key === 'M') {
        if (currentQ) {
          e.preventDefault();
          onToggleCompleted(currentQ.id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext, currentQ, onToggleCompleted]);

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
  const allItemIds = filteredQuestions.map((q) => q.id);

  return (
    <div className="flex-1 min-w-0 flex flex-col gap-4 p-3 sm:p-5 lg:p-6 overflow-y-auto max-h-[calc(100vh-4rem)] select-text">
      {/* 1. FRM-Style Sticky Navigation Bar */}
      <ClayQuestionNav
        currentIndex={currentIndex}
        totalFiltered={filteredQuestions.length}
        onPrev={handlePrev}
        onNext={handleNext}
        onJumpToIndex={handleJumpToIndex}
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
        revealLabel="查看参考解答"
        hideLabel="收起参考解答"
        onCopy={handleCopyCurrent}
        isCopied={copied}
        modeBadge="平时作业本"
      />

      {/* 2. Main Question Card */}
      <div className="clay-card-shadow bg-white dark:bg-[#151b26] rounded-3xl p-5 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 transition-all">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 border-b border-slate-100 dark:border-slate-800/80">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">
              第 {currentQ.chapterId} 章 · {currentQ.chapterTitle || '中央银行学'}
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              第 {currentIndex + 1} / {filteredQuestions.length} 题
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              {currentQ.questionType}
            </span>
            {currentQ.sourceRef && (
              <span className="px-2 py-0.5 rounded-full text-xs font-mono text-slate-400">
                来源: {currentQ.sourceRef}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <span>总进度:</span>
            <span className="font-bold text-emerald-600">{completedList.length}</span>
            <span>/ {questions.length} 道</span>
          </div>
        </div>

        {/* Question Title / Stem */}
        <div className="py-5 text-base sm:text-lg font-bold leading-relaxed text-slate-900 dark:text-slate-100">
          {currentQ.questionTitle}
        </div>

        {/* 3. Solution Section (展开题解卡片) */}
        {showAnswer && (
          <div className="mt-4 p-5 rounded-2xl bg-gradient-to-tr from-slate-50 to-blue-50/30 dark:from-[#192233] dark:to-[#161c28] border border-blue-200/80 dark:border-blue-900/60 clay-card-shadow animate-in fade-in duration-150 flex flex-col gap-3.5">
            <div className="flex items-center justify-between pb-2 border-b border-blue-100 dark:border-blue-900/40">
              <div className="flex items-center gap-2">
                <span className="text-base">💡</span>
                <span className="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-100">
                  作业标准参考解答与采分要点
                </span>
              </div>
              <button
                onClick={handleCopyCurrent}
                className="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer font-medium"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>复制解答</span>
              </button>
            </div>

            {/* Answer Content rendered cleanly with MarkdownViewer */}
            <div className="pt-1">
              <MarkdownViewer content={currentQ.answer} maskKeywords={false} />
            </div>
          </div>
        )}
      </div>

      {/* Footer shortcut hints */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-2 py-1">
        <div className="flex items-center gap-3">
          <span>快捷键提示：</span>
          <span><kbd className="px-1.5 py-0.5 bg-slate-200 text-slate-700 rounded font-mono text-[10px]">Space</kbd> 展开/收起参考解答</span>
          <span><kbd className="px-1.5 py-0.5 bg-slate-200 text-slate-700 rounded font-mono text-[10px]">J</kbd> 上一题</span>
          <span><kbd className="px-1.5 py-0.5 bg-slate-200 text-slate-700 rounded font-mono text-[10px]">K</kbd> 下一题</span>
          <span><kbd className="px-1.5 py-0.5 bg-slate-200 text-slate-700 rounded font-mono text-[10px]">M</kbd> 标记已做</span>
        </div>
        <div>
          作业完成率: <span className="font-bold text-emerald-600">{Math.round((completedList.length / questions.length) * 100)}%</span>
        </div>
      </div>
    </div>
  );
};
