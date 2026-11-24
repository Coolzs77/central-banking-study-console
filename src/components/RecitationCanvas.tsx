import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Star,
  CheckCircle2,
  Circle,
  Award,
  Zap,
  BookmarkCheck,
  BookOpen,
} from 'lucide-react';
import { RecitationQuestion } from '../data/types';
import { MiddleNav } from './MiddleNav';
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

  // Current active index in filtered list
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isMasking, setIsMasking] = useState<boolean>(true);
  const [isAllRevealed, setIsAllRevealed] = useState<boolean>(false);

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

  // Notify parent of active question change
  useEffect(() => {
    if (currentQ && onSelectQuestion && selectedQuestionId !== currentQ.id) {
      onSelectQuestion(currentQ.id);
    }
  }, [currentQ, onSelectQuestion, selectedQuestionId]);

  // Steppers
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
    setIsAllRevealed(false);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(filteredQuestions.length - 1, prev + 1));
    setIsAllRevealed(false);
  }, [filteredQuestions.length]);

  const handleRandom = useCallback(() => {
    if (filteredQuestions.length <= 1) return;
    let nextIdx = Math.floor(Math.random() * filteredQuestions.length);
    if (nextIdx === currentIndex) {
      nextIdx = (nextIdx + 1) % filteredQuestions.length;
    }
    setCurrentIndex(nextIdx);
    setIsAllRevealed(false);
  }, [filteredQuestions.length, currentIndex]);

  const handleJump = useCallback((idx: number) => {
    setCurrentIndex(idx);
    setIsAllRevealed(false);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if inside input / textarea
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) {
        return;
      }
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

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50/50 overflow-hidden select-text">
      {/* Middle Top Navigation Bar */}
      <MiddleNav
        currentIndex={currentIndex}
        totalCount={filteredQuestions.length}
        chapterTitle={currentQ.chapterTitle}
        sectionTitle={currentQ.sectionTitle}
        isMasking={isMasking}
        onToggleMask={() => setIsMasking((prev) => !prev)}
        isAllRevealed={isAllRevealed}
        onToggleRevealAll={() => setIsAllRevealed((prev) => !prev)}
        onPrev={handlePrev}
        onNext={handleNext}
        onRandom={handleRandom}
        onJumpToIndex={handleJump}
        modeTitle="全书背诵"
      />

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 space-y-4">
        {/* Question Header Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 md:p-6 transition-all">
          <div className="flex flex-wrap items-start justify-between gap-3 pb-4 border-b border-slate-100">
            <div className="space-y-1.5 flex-1 min-w-[280px]">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-md bg-blue-600 text-white font-mono text-xs font-bold shadow-xs">
                  第 {currentQ.id} 题
                </span>
                <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200 font-semibold text-xs flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  {currentQ.points} 个考点
                </span>
                {currentQ.isCore && (
                  <span className="px-2 py-0.5 rounded-md bg-rose-50 text-rose-700 border border-rose-200 font-semibold text-xs flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-rose-500" />
                    高频核心
                  </span>
                )}
                <span className="text-xs text-slate-500 font-medium">
                  {currentQ.sectionTitle}
                </span>
              </div>
              <h2 className="text-lg md:text-xl font-bold text-slate-900 leading-snug tracking-tight pt-1">
                {currentQ.title}
              </h2>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => onToggleStar(currentQ.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition shadow-xs cursor-pointer ${
                  isStarred
                    ? 'bg-amber-50 text-amber-700 border-amber-300 hover:bg-amber-100'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
                title="快捷键: S"
              >
                <Star className={`w-3.5 h-3.5 ${isStarred ? 'fill-amber-400 text-amber-500' : 'text-slate-400'}`} />
                <span>{isStarred ? '已收藏' : '收藏'}</span>
              </button>

              <button
                onClick={() => onToggleMemorized(currentQ.id)}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-bold border transition shadow-xs cursor-pointer ${
                  isMemorized
                    ? 'bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700 shadow-emerald-200'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                }`}
                title="快捷键: M"
              >
                {isMemorized ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>已背会</span>
                  </>
                ) : (
                  <>
                    <Circle className="w-4 h-4 text-slate-400" />
                    <span>标为已背会</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Render Markdown Content */}
          <div className="mt-5">
            <MarkdownViewer
              content={currentQ.content}
              maskKeywords={isMasking}
              onToggleClozeAll={isAllRevealed}
            />
          </div>
        </div>

        {/* Footer shortcuts hint */}
        <div className="flex items-center justify-between text-xs text-slate-400 px-2 py-1">
          <div className="flex items-center gap-3">
            <span>快捷键提示：</span>
            <span><kbd className="px-1.5 py-0.5 bg-slate-200 text-slate-700 rounded font-mono text-[10px]">Space</kbd> 切换关键词遮挡</span>
            <span><kbd className="px-1.5 py-0.5 bg-slate-200 text-slate-700 rounded font-mono text-[10px]">J</kbd> 上一题</span>
            <span><kbd className="px-1.5 py-0.5 bg-slate-200 text-slate-700 rounded font-mono text-[10px]">K</kbd> 下一题</span>
            <span><kbd className="px-1.5 py-0.5 bg-slate-200 text-slate-700 rounded font-mono text-[10px]">M</kbd> 标为已背</span>
            <span><kbd className="px-1.5 py-0.5 bg-slate-200 text-slate-700 rounded font-mono text-[10px]">S</kbd> 收藏</span>
          </div>
          <div>
            已背掌握率: <span className="font-bold text-blue-600">{Math.round((memorizedList.length / questions.length) * 100)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
