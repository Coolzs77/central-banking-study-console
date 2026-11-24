import React, { useState, useEffect } from 'react';
import {
  Eye,
  EyeOff,
  CheckCircle2,
  Zap,
  Star,
  Shuffle,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Award,
} from 'lucide-react';
import { RecitationQuestion, MasteryStatus } from '../data/types';

interface RecitationCanvasProps {
  questions: RecitationQuestion[];
  masteryMap: Record<number, MasteryStatus>;
  starredList: number[];
  onSetMastery: (id: number, status: MasteryStatus) => void;
  onToggleStar: (id: number) => void;
  searchQuery?: string;
  selectedChapterId?: number | null;
  activeFilter?: 'all' | 'mastered' | 'reviewing' | 'unlearned' | 'starred';
  pointFilter?: number | null;
}

export const RecitationCanvas: React.FC<RecitationCanvasProps> = ({
  questions,
  masteryMap,
  starredList,
  onSetMastery,
  onToggleStar,
  searchQuery = '',
  selectedChapterId = null,
  activeFilter = 'all',
  pointFilter = null,
}) => {
  // Global mask toggle (true = masked / hidden, false = revealed)
  const [globalMask, setGlobalMask] = useState<boolean>(false);
  // Per-question reveal overrides: questionId -> boolean
  const [cardRevealed, setCardRevealed] = useState<Record<number, boolean>>({});

  // Keyboard shortcut: Space key toggles mask
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // If typing in input or textarea, ignore
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }
      if (e.code === 'Space') {
        e.preventDefault();
        setGlobalMask((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter questions according to props
  const filteredQuestions = questions.filter((q) => {
    // Chapter filter
    if (selectedChapterId !== null && q.chapterId !== selectedChapterId) {
      return false;
    }
    // Search query
    if (searchQuery.trim()) {
      const qText = searchQuery.toLowerCase().trim();
      const matchTitle = q.title.toLowerCase().includes(qText);
      const matchContent = q.content.toLowerCase().includes(qText);
      const matchChapter = q.chapterTitle.toLowerCase().includes(qText);
      const matchSec = q.sectionTitle.toLowerCase().includes(qText);
      if (!matchTitle && !matchContent && !matchChapter && !matchSec) {
        return false;
      }
    }
    // Status filter
    const status = masteryMap[q.id] || 'unlearned';
    if (activeFilter === 'mastered' && status !== 'mastered') return false;
    if (activeFilter === 'reviewing' && status !== 'reviewing') return false;
    if (activeFilter === 'unlearned' && status !== 'unlearned') return false;
    if (activeFilter === 'starred' && !starredList.includes(q.id)) return false;

    // Point filter
    if (pointFilter !== null) {
      if (pointFilter === 4 && q.points < 4) return false;
      if (pointFilter === 3 && q.points !== 3) return false;
      if (pointFilter === 2 && q.points > 2) return false;
    }

    return true;
  });

  const toggleCardMask = (id: number) => {
    setCardRevealed((prev) => ({
      ...prev,
      [id]: prev[id] !== undefined ? !prev[id] : globalMask,
    }));
  };

  const isQuestionRevealed = (id: number) => {
    if (cardRevealed[id] !== undefined) {
      return cardRevealed[id];
    }
    return !globalMask;
  };

  const handleRandomJump = () => {
    if (filteredQuestions.length === 0) return;
    const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
    const targetQ = filteredQuestions[randomIndex];
    const el = document.getElementById(`q-${targetQ.id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('ring-2', 'ring-sky-500', 'ring-offset-2');
      setTimeout(() => el.classList.remove('ring-2', 'ring-sky-500', 'ring-offset-2'), 1500);
    }
  };

  // Helper to parse markdown-like bold keywords: **keyword**
  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      // Check for bullet lines
      const trimmed = line.trim();
      const isBullet = trimmed.startsWith('- ') || trimmed.startsWith('* ') || /^\d+\./.test(trimmed);

      // Parse **bold** tokens
      const parts = line.split(/(\*\*.*?\*\*)/g);

      return (
        <p
          key={idx}
          className={`leading-relaxed my-1.5 ${
            isBullet ? 'pl-4 -indent-4 text-slate-700 dark:text-slate-300' : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          {parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              const innerText = part.slice(2, -2);
              return (
                <strong
                  key={pIdx}
                  className="mx-0.5 px-1 py-0.5 rounded font-semibold bg-sky-100/80 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 border border-sky-200/50 dark:border-sky-800/50"
                >
                  {innerText}
                </strong>
              );
            }
            return <span key={pIdx}>{part}</span>;
          })}
        </p>
      );
    });
  };

  return (
    <div className="flex-1 max-w-4xl mx-auto px-4 py-6">
      {/* Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 p-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 clay-card-shadow backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-sky-500" />
          <h2 className="font-bold text-base text-slate-800 dark:text-slate-100">
            全书背诵速记
          </h2>
          <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400">
            当前显示 {filteredQuestions.length} / {questions.length} 题
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          {/* Mask toggle button */}
          <button
            onClick={() => setGlobalMask(!globalMask)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all clay-button-shadow clay-squash ${
              globalMask
                ? 'bg-amber-500 text-white font-semibold'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600'
            }`}
            title="快捷键：空格键 (Space)"
          >
            {globalMask ? (
              <>
                <EyeOff className="w-3.5 h-3.5" />
                <span>背诵遮罩中 (Space展开)</span>
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5" />
                <span>全文展开中 (Space遮罩)</span>
              </>
            )}
          </button>

          {/* Random Question Jump */}
          <button
            onClick={handleRandomJump}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-medium bg-sky-500/10 text-sky-600 dark:text-sky-400 hover:bg-sky-500/20 transition-all clay-squash"
            title="随机抽背一道题"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>随机抽背</span>
          </button>
        </div>
      </div>

      {/* Questions List */}
      {filteredQuestions.length === 0 ? (
        <div className="text-center py-16 p-8 rounded-2xl bg-white/60 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 clay-card-shadow">
          <div className="text-slate-400 dark:text-slate-500 text-sm">
            未找到符合筛选条件的考点题目
          </div>
          <p className="text-xs text-slate-400 mt-2">
            请尝试调整章节筛选、状态筛选或清除搜索关键词。
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredQuestions.map((q) => {
            const status = masteryMap[q.id] || 'unlearned';
            const isStarred = starredList.includes(q.id);
            const revealed = isQuestionRevealed(q.id);

            return (
              <div
                key={q.id}
                id={`q-${q.id}`}
                className="p-6 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-slate-200/70 dark:border-slate-700/70 clay-card-shadow transition-all scroll-mt-24"
              >
                {/* Question Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono font-bold text-xs px-2.5 py-1 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200/40 dark:border-sky-800/40 clay-badge-shadow">
                      第 {q.id} 题
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {q.chapterTitle} · {q.sectionTitle}
                    </span>
                    <span className="font-bold text-xs px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400">
                      {q.points}分
                    </span>
                    {q.points >= 4 && (
                      <span className="flex items-center gap-0.5 text-[11px] font-medium px-1.5 py-0.5 rounded-md bg-red-500/10 text-red-600 dark:text-red-400">
                        <Award className="w-3 h-3" /> 高频考点
                      </span>
                    )}
                  </div>

                  {/* Single Card Mask Toggle */}
                  <button
                    onClick={() => toggleCardMask(q.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    title={revealed ? '遮罩此题答案' : '显示此题答案'}
                  >
                    {revealed ? (
                      <Eye className="w-4 h-4 text-sky-500" />
                    ) : (
                      <EyeOff className="w-4 h-4 text-amber-500" />
                    )}
                  </button>
                </div>

                {/* Question Title */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">
                  {q.title}
                </h3>

                {/* Question Content / Answer with Masking */}
                <div
                  className={`relative p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/80 mb-4 transition-all duration-300 ${
                    revealed ? 'mask-revealed' : 'mask-hidden cursor-pointer'
                  }`}
                  onClick={() => {
                    if (!revealed) toggleCardMask(q.id);
                  }}
                >
                  {renderFormattedContent(q.content)}
                  {!revealed && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/40 dark:bg-slate-900/40 backdrop-blur-[2px] rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 select-none">
                      点击卡片或右上方眼睛查看答案
                    </div>
                  )}
                </div>

                {/* Card Action Footer */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/60">
                  <div className="flex items-center gap-2">
                    {/* Mastered Button */}
                    <button
                      onClick={() => onSetMastery(q.id, 'mastered')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all clay-squash ${
                        status === 'mastered'
                          ? 'bg-emerald-500 text-white font-semibold clay-button-shadow'
                          : 'bg-slate-100 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:text-emerald-600'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{status === 'mastered' ? '已吃透' : '标记已吃透'}</span>
                    </button>

                    {/* Need Review Button */}
                    <button
                      onClick={() => onSetMastery(q.id, 'reviewing')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all clay-squash ${
                        status === 'reviewing'
                          ? 'bg-amber-400 text-slate-900 font-semibold clay-button-shadow'
                          : 'bg-slate-100 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-amber-950/30 hover:text-amber-600'
                      }`}
                    >
                      <Zap className="w-3.5 h-3.5" />
                      <span>{status === 'reviewing' ? '待复习' : '需强化'}</span>
                    </button>
                  </div>

                  {/* Star Favorite Button */}
                  <button
                    onClick={() => onToggleStar(q.id)}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-medium transition-all clay-squash ${
                      isStarred
                        ? 'bg-yellow-400 text-slate-900 font-semibold clay-button-shadow'
                        : 'text-slate-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-950/20'
                    }`}
                  >
                    <Star
                      className={`w-3.5 h-3.5 ${
                        isStarred ? 'fill-current text-slate-900' : ''
                      }`}
                    />
                    <span>{isStarred ? '已收藏' : '收藏'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
