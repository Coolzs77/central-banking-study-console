import React, { useState, useEffect, useMemo, useCallback } from 'react';
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
  memorizedList: number[];
  starredList: number[];
  onToggleMemorized: (id: number) => void;
  onToggleStar: (id: number) => void;
  searchQuery?: string;
  selectedChapterId?: number | null;
  activeFilter?: 'all' | 'memorized' | 'unmemorized' | 'starred';
  pointFilter?: number | null;
  selectedQuestionId?: number | null;
  onSelectQuestion?: (id: number) => void;
}

export const RecitationCanvas: React.FC<RecitationCanvasProps> = ({
  questions,
  memorizedList,
  starredList,
  onToggleMemorized,
  onToggleStar,
  searchQuery = '',
  selectedChapterId = null,
  activeFilter = 'all',
  pointFilter = null,
  selectedQuestionId = null,
  onSelectQuestion,
}) => {
  // Filter questions according to props
  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      if (selectedChapterId && q.chapterId !== selectedChapterId) return false;
      if (pointFilter && q.points !== pointFilter) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = q.title.toLowerCase().includes(query);
        const matchesContent = q.content.toLowerCase().includes(query);
        if (!matchesTitle && !matchesContent) return false;
      }
      if (activeFilter === 'memorized' && !memorizedList.includes(q.id)) return false;
      if (activeFilter === 'unmemorized' && memorizedList.includes(q.id)) return false;
      if (activeFilter === 'starred' && !starredList.includes(q.id)) return false;
      return true;
    });
  }, [questions, selectedChapterId, pointFilter, searchQuery, activeFilter, memorizedList, starredList]);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isMasking, setIsMasking] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  // Sync selectedQuestionId if passed from right or left sidebar
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
        handlePrev();
      } else if (e.key === 'k' || e.key === 'K' || e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
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
  }, [handlePrev, handleNext, currentQ, onToggleMemorized, onToggleStar]);

  if (!currentQ) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-12 text-slate-400">
        <BookOpen className="w-12 h-12 mb-3 text-slate-300" />
        <p className="text-base font-medium">未找到符合当前筛选条件的背诵题</p>
        <p className="text-xs text-slate-400 mt-1">请尝试在左栏切换章节或重置筛选条件</p>
      </div>
    );
  }

  const isMemorized = memorizedList.includes(currentQ.id);
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

      {/* 2. Main Question Card */}
      <div className="clay-card-shadow bg-white dark:bg-[#151b26] rounded-3xl p-5 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 transition-all">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 border-b border-slate-100 dark:border-slate-800/80">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">
              第 {currentQ.id} 题 · {currentQ.chapterTitle.split(' ')[0]}
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              第 {currentIndex + 1} / {filteredQuestions.length} 题
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              {currentQ.points} 个考点
            </span>
            {currentQ.isCore && (
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200 flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-rose-500" />
                高频核心
              </span>
            )}
            <span className="text-xs text-slate-400 font-medium">
              {currentQ.sectionTitle}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <span>全书掌握率:</span>
            <span className="font-bold text-blue-600">
              {Math.round((memorizedList.length / questions.length) * 100)}%
            </span>
          </div>
        </div>

        {/* Question Title */}
        <div className="py-5 text-base sm:text-lg font-bold leading-relaxed text-slate-900 dark:text-slate-100">
          {currentQ.title}
        </div>

        {/* 3. Question Content / Answer Area */}
        <div className="mt-2 p-5 rounded-2xl bg-gradient-to-tr from-slate-50 to-blue-50/30 dark:from-[#192233] dark:to-[#161c28] border border-blue-200/80 dark:border-blue-900/60 clay-card-shadow animate-in fade-in duration-150">
          <div className="flex items-center justify-between pb-3 border-b border-blue-100 dark:border-blue-900/40 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-base">💡</span>
              <span className="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-100">
                权威背诵要点与采分拆解
              </span>
            </div>
            <div className="text-xs text-slate-500 font-medium">
              {isMasking ? '🙈 关键词遮挡中（点击空缺处揭开）' : '👁️ 完整要点已展示'}
            </div>
          </div>

          <MarkdownViewer content={currentQ.content} maskKeywords={isMasking} />
        </div>
      </div>

      {/* Footer shortcut hints */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-2 py-1">
        <div className="flex items-center gap-3">
          <span>快捷键：</span>
          <span><kbd className="px-1.5 py-0.5 bg-slate-200 text-slate-700 rounded font-mono text-[10px]">Space</kbd> 切换关键词遮挡</span>
          <span><kbd className="px-1.5 py-0.5 bg-slate-200 text-slate-700 rounded font-mono text-[10px]">J</kbd> 上一题</span>
          <span><kbd className="px-1.5 py-0.5 bg-slate-200 text-slate-700 rounded font-mono text-[10px]">K</kbd> 下一题</span>
          <span><kbd className="px-1.5 py-0.5 bg-slate-200 text-slate-700 rounded font-mono text-[10px]">M</kbd> 标为已背会</span>
          <span><kbd className="px-1.5 py-0.5 bg-slate-200 text-slate-700 rounded font-mono text-[10px]">S</kbd> 收藏</span>
        </div>
        <div>
          已背掌握: <span className="font-bold text-blue-600">{memorizedList.length}</span> / {questions.length} 题
        </div>
      </div>
    </div>
  );
};
