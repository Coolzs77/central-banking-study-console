import React, { useState } from 'react';
import {
  Layers,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  CheckCircle2,
  Circle,
  Sparkles,
  Zap,
  HelpCircle,
  Check,
  X,
} from 'lucide-react';
import {
  TerminologyQuestion,
  SingleChoiceQuestion,
  TrueFalseQuestion,
  FillInQuestion,
} from '../data/types';

interface PracticeCanvasProps {
  terms: TerminologyQuestion[];
  singleChoices: SingleChoiceQuestion[];
  trueFalse: TrueFalseQuestion[];
  fillIns: FillInQuestion[];
  termMastery: Record<number, boolean>;
  onToggleTermMastery: (id: number) => void;
}

export const PracticeCanvas: React.FC<PracticeCanvasProps> = ({
  terms,
  singleChoices,
  trueFalse,
  fillIns,
  termMastery,
  onToggleTermMastery,
}) => {
  const [activeTab, setActiveTab] = useState<'flashcards' | 'drill'>('flashcards');

  // Flashcards state
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // Drill state
  const [drillIndex, setDrillIndex] = useState<number>(0);
  const [drillAnswers, setDrillAnswers] = useState<Record<number, any>>({});
  const [drillSubmitted, setDrillSubmitted] = useState<Record<number, boolean>>({});

  // 10-question drill pool
  const drillQuestions = React.useMemo(() => {
    const pool = [
      ...singleChoices.map((q) => ({ ...q, qType: 'single' as const })),
      ...trueFalse.map((q) => ({ ...q, qType: 'tf' as const })),
    ];
    return pool.slice(0, 15);
  }, [singleChoices, trueFalse]);

  const currentTerm = terms[currentCardIndex] || terms[0];
  const totalTerms = terms.length;
  const masteredTermsCount = terms.filter((t) => termMastery[t.id]).length;
  const percentTerms = totalTerms > 0 ? Math.round((masteredTermsCount / totalTerms) * 100) : 0;

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev > 0 ? prev - 1 : totalTerms - 1));
  };

  const handleNextCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev < totalTerms - 1 ? prev + 1 : 0));
  };

  const handleShuffleCard = () => {
    setIsFlipped(false);
    const rnd = Math.floor(Math.random() * totalTerms);
    setCurrentCardIndex(rnd);
  };

  return (
    <div className="flex-1 max-w-4xl mx-auto px-4 py-6">
      {/* Top Tab Switcher */}
      <div className="flex items-center justify-between mb-6 p-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 clay-card-shadow backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-base text-slate-800 dark:text-slate-100">
              题型专项速练
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              28个核心名词闪卡 · 客观题速刷强化
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-700/60 clay-inset-groove">
          <button
            onClick={() => setActiveTab('flashcards')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'flashcards'
                ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            核心名词闪卡 ({totalTerms})
          </button>
          <button
            onClick={() => setActiveTab('drill')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'drill'
                ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            客观题快速刷题
          </button>
        </div>
      </div>

      {activeTab === 'flashcards' ? (
        <div>
          {/* Progress Header */}
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2 px-1">
            <span>
              已掌握 {masteredTermsCount} / {totalTerms} 个名词
            </span>
            <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">
              卡片 {currentCardIndex + 1} / {totalTerms}
            </span>
          </div>

          <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-700/60 overflow-hidden clay-inset-groove mb-6">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-sky-500 rounded-full transition-all duration-300"
              style={{ width: `${percentTerms}%` }}
            />
          </div>

          {/* Flashcard Component */}
          {currentTerm && (
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="min-h-[320px] p-8 rounded-3xl bg-white/95 dark:bg-slate-800/95 border border-slate-200/80 dark:border-slate-700/80 clay-card-shadow flex flex-col justify-between cursor-pointer transition-all hover:scale-[1.01] active:scale-[0.99] clay-squash select-none mb-6 relative overflow-hidden"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 font-bold border border-indigo-200/40 dark:border-indigo-800/40">
                  {currentTerm.chapterTitle}
                </span>

                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{isFlipped ? '点击查看词条正面' : '点击翻转查看三阶采分'}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="my-auto text-center py-6">
                {!isFlipped ? (
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                      {currentTerm.term}
                    </h3>
                    <p className="text-xs text-slate-400">
                      期末标准采分：定义 (1.5分) + 性质 (1.0分) + 职能 (0.5分)
                    </p>
                  </div>
                ) : (
                  <div className="text-left space-y-3.5 text-xs sm:text-sm">
                    <div className="p-3 rounded-xl bg-sky-50/80 dark:bg-sky-950/40 border border-sky-100 dark:border-sky-900/50">
                      <span className="font-bold text-sky-700 dark:text-sky-300 block mb-1">
                        1. 概念定义 (1.5分)：
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {currentTerm.definition}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/50">
                      <span className="font-bold text-emerald-700 dark:text-emerald-300 block mb-1">
                        2. 核心性质 (1.0分)：
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {currentTerm.nature}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900/50">
                      <span className="font-bold text-amber-700 dark:text-amber-300 block mb-1">
                        3. 职能与特征 (0.5分)：
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {currentTerm.functionOrFeature}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700/60">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleTermMastery(currentTerm.id);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all clay-squash ${
                    termMastery[currentTerm.id]
                      ? 'bg-emerald-500 text-white font-semibold clay-button-shadow'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/30'
                  }`}
                >
                  {termMastery[currentTerm.id] ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>已掌握此名词</span>
                    </>
                  ) : (
                    <>
                      <Circle className="w-4 h-4 text-slate-400" />
                      <span>标记已掌握</span>
                    </>
                  )}
                </button>

                <div className="text-[11px] text-slate-400 font-mono">
                  题号 #{currentTerm.id}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Bar */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handlePrevCard}
              className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 clay-button-shadow clay-squash"
              title="上一张 (←)"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleShuffleCard}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold text-xs clay-squash"
            >
              <Shuffle className="w-4 h-4" />
              <span>随机抽词</span>
            </button>

            <button
              onClick={handleNextCard}
              className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 clay-button-shadow clay-squash"
              title="下一张 (→)"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        /* Objective Drill Mode */
        <div className="space-y-6">
          {drillQuestions.map((q, idx) => {
            const isSingle = q.qType === 'single';
            const userChoice = drillAnswers[q.id];
            const isSubmitted = drillSubmitted[q.id];

            return (
              <div
                key={q.id}
                className="p-5 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-slate-200/70 dark:border-slate-700/70 clay-card-shadow"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                    <span className="font-mono text-indigo-600 dark:text-indigo-400 mr-2 font-bold">
                      {idx + 1}. [{isSingle ? '单选题' : '判断题'}]
                    </span>
                    {isSingle ? (q as SingleChoiceQuestion).stem : (q as TrueFalseQuestion).statement}
                  </div>
                </div>

                {/* Options */}
                {isSingle ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {(['A', 'B', 'C', 'D'] as const).map((optKey) => {
                      const optText = (q as SingleChoiceQuestion).options[optKey];
                      const isSelected = userChoice === optKey;
                      const isCorrectKey = optKey === (q as SingleChoiceQuestion).correctKey;

                      let style = 'bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300';
                      if (isSubmitted) {
                        if (isCorrectKey) {
                          style = 'bg-emerald-500 text-white font-semibold';
                        } else if (isSelected) {
                          style = 'bg-red-500 text-white font-semibold';
                        }
                      } else if (isSelected) {
                        style = 'bg-indigo-500 text-white font-semibold';
                      }

                      return (
                        <button
                          key={optKey}
                          onClick={() => {
                            if (!isSubmitted) {
                              setDrillAnswers((prev) => ({ ...prev, [q.id]: optKey }));
                              setDrillSubmitted((prev) => ({ ...prev, [q.id]: true }));
                            }
                          }}
                          className={`p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-700 text-left transition-all ${style}`}
                        >
                          <span className="font-mono font-bold mr-1">{optKey}.</span>
                          <span>{optText}</span>
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="flex items-center gap-3 text-xs">
                    <button
                      onClick={() => {
                        if (!isSubmitted) {
                          setDrillAnswers((prev) => ({ ...prev, [q.id]: true }));
                          setDrillSubmitted((prev) => ({ ...prev, [q.id]: true }));
                        }
                      }}
                      className={`px-4 py-2 rounded-xl font-semibold border transition-all ${
                        isSubmitted
                          ? (q as TrueFalseQuestion).isCorrect === true
                            ? 'bg-emerald-500 text-white'
                            : userChoice === true
                            ? 'bg-red-500 text-white'
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-500'
                          : userChoice === true
                          ? 'bg-indigo-500 text-white'
                          : 'bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      正确 (✓)
                    </button>
                    <button
                      onClick={() => {
                        if (!isSubmitted) {
                          setDrillAnswers((prev) => ({ ...prev, [q.id]: false }));
                          setDrillSubmitted((prev) => ({ ...prev, [q.id]: true }));
                        }
                      }}
                      className={`px-4 py-2 rounded-xl font-semibold border transition-all ${
                        isSubmitted
                          ? (q as TrueFalseQuestion).isCorrect === false
                            ? 'bg-emerald-500 text-white'
                            : userChoice === false
                            ? 'bg-red-500 text-white'
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-500'
                          : userChoice === false
                          ? 'bg-indigo-500 text-white'
                          : 'bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      错误 (✕)
                    </button>
                  </div>
                )}

                {/* Explanation feedback */}
                {isSubmitted && (
                  <div className="mt-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800 text-xs">
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      <strong>解析：</strong>{' '}
                      {isSingle
                        ? (q as SingleChoiceQuestion).rationale
                        : (q as TrueFalseQuestion).errorCorrection}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
