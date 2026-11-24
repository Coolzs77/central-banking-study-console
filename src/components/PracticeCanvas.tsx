import React, { useState, useEffect } from 'react';
import {
  Layers,
  RotateCcw,
  CheckCircle2,
  Circle,
  HelpCircle,
  Check,
  X,
  BookOpen,
  Eye,
  EyeOff,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import {
  TerminologyQuestion,
  SingleChoiceQuestion,
  TrueFalseQuestion,
  FillInQuestion,
} from '../data/types';
import { MarkdownViewer } from './common/MarkdownViewer';
import { ClayQuestionNav } from './common/ClayQuestionNav';

interface PracticeCanvasProps {
  terms: TerminologyQuestion[];
  singleChoices: SingleChoiceQuestion[];
  trueFalse: TrueFalseQuestion[];
  fillIns: FillInQuestion[];
  termMemorized: number[];
  onToggleTermMemorized: (id: number) => void;
  currentTermIndex?: number;
  onJumpToTermIndex?: (idx: number) => void;
  activePracticeTab?: 'terms' | 'choice' | 'truefalse' | 'fill';
  onPracticeTabChange?: (tab: 'terms' | 'choice' | 'truefalse' | 'fill') => void;
}

export const PracticeCanvas: React.FC<PracticeCanvasProps> = ({
  terms,
  singleChoices,
  trueFalse,
  fillIns,
  termMemorized,
  onToggleTermMemorized,
  currentTermIndex = 0,
  onJumpToTermIndex,
  activePracticeTab,
  onPracticeTabChange,
}) => {
  const [internalTab, setInternalTab] = useState<'terms' | 'choice' | 'truefalse' | 'fill'>('terms');
  const activeTab = activePracticeTab || internalTab;

  const setActiveTab = (tab: 'terms' | 'choice' | 'truefalse' | 'fill') => {
    if (onPracticeTabChange) onPracticeTabChange(tab);
    setInternalTab(tab);
  };

  // Term Flashcards State
  const [internalTermIdx, setInternalTermIdx] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isMasking, setIsMasking] = useState<boolean>(false);

  const activeTermIdx = currentTermIndex ?? internalTermIdx;
  const currentTerm = terms[activeTermIdx] || terms[0];

  const handleSetTermIdx = (idx: number) => {
    if (onJumpToTermIndex) {
      onJumpToTermIndex(idx);
    } else {
      setInternalTermIdx(idx);
    }
    setIsFlipped(false);
  };

  // Choice drill state (40 questions)
  const [choiceIdx, setChoiceIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [showChoiceExplanation, setShowChoiceExplanation] = useState<boolean>(false);
  const currentChoice = singleChoices[choiceIdx] || singleChoices[0];

  // True/False drill state (30 questions)
  const [tfIdx, setTfIdx] = useState<number>(0);
  const [selectedTf, setSelectedTf] = useState<boolean | null>(null);
  const [showTfExplanation, setShowTfExplanation] = useState<boolean>(false);
  const currentTF = trueFalse[tfIdx] || trueFalse[0];

  // Fill drill state (40 questions)
  const [fillIdx, setFillIdx] = useState<number>(0);
  const [showFillAnswer, setShowFillAnswer] = useState<boolean>(false);
  const currentFill = fillIns[fillIdx] || fillIns[0];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) return;

      if (activeTab === 'terms') {
        if (e.code === 'Space') {
          e.preventDefault();
          setIsFlipped((prev) => !prev);
        } else if (e.key === 'j' || e.key === 'J' || e.key === 'ArrowLeft') {
          e.preventDefault();
          handleSetTermIdx(Math.max(0, activeTermIdx - 1));
        } else if (e.key === 'k' || e.key === 'K' || e.key === 'ArrowRight') {
          e.preventDefault();
          handleSetTermIdx(Math.min(terms.length - 1, activeTermIdx + 1));
        } else if (e.key === 'm' || e.key === 'M') {
          if (currentTerm) {
            e.preventDefault();
            onToggleTermMemorized(currentTerm.id);
          }
        }
      } else if (activeTab === 'choice') {
        if (e.key === 'j' || e.key === 'J' || e.key === 'ArrowLeft') {
          e.preventDefault();
          setChoiceIdx((p) => Math.max(0, p - 1));
          setSelectedOption(null);
          setShowChoiceExplanation(false);
        } else if (e.key === 'k' || e.key === 'K' || e.key === 'ArrowRight') {
          e.preventDefault();
          setChoiceIdx((p) => Math.min(singleChoices.length - 1, p + 1));
          setSelectedOption(null);
          setShowChoiceExplanation(false);
        }
      } else if (activeTab === 'truefalse') {
        if (e.key === 'j' || e.key === 'J' || e.key === 'ArrowLeft') {
          e.preventDefault();
          setTfIdx((p) => Math.max(0, p - 1));
          setSelectedTf(null);
          setShowTfExplanation(false);
        } else if (e.key === 'k' || e.key === 'K' || e.key === 'ArrowRight') {
          e.preventDefault();
          setTfIdx((p) => Math.min(trueFalse.length - 1, p + 1));
          setSelectedTf(null);
          setShowTfExplanation(false);
        }
      } else if (activeTab === 'fill') {
        if (e.key === 'j' || e.key === 'J' || e.key === 'ArrowLeft') {
          e.preventDefault();
          setFillIdx((p) => Math.max(0, p - 1));
          setShowFillAnswer(false);
        } else if (e.key === 'k' || e.key === 'K' || e.key === 'ArrowRight') {
          e.preventDefault();
          setFillIdx((p) => Math.min(fillIns.length - 1, p + 1));
          setShowFillAnswer(false);
        } else if (e.code === 'Space') {
          e.preventDefault();
          setShowFillAnswer((p) => !p);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, terms.length, currentTerm, activeTermIdx, singleChoices.length, trueFalse.length, fillIns.length]);

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50/50 dark:bg-[#0b0f17] overflow-hidden select-text">
      {/* Top Mode Sub-Tabs */}
      <div className="bg-white dark:bg-[#151b26] border-b border-slate-200/80 dark:border-slate-800 px-4 py-2.5 flex items-center justify-between gap-3 shadow-xs shrink-0">
        <div className="flex items-center gap-1.5 p-1 bg-slate-100/90 dark:bg-slate-800/90 rounded-2xl">
          <button
            onClick={() => setActiveTab('terms')}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl transition cursor-pointer ${
              activeTab === 'terms'
                ? 'bg-white dark:bg-[#1f283b] text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            📇 名词抽背 ({terms.length}词)
          </button>
          <button
            onClick={() => setActiveTab('choice')}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl transition cursor-pointer ${
              activeTab === 'choice'
                ? 'bg-white dark:bg-[#1f283b] text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            🎯 单选专项 ({singleChoices.length}题)
          </button>
          <button
            onClick={() => setActiveTab('truefalse')}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl transition cursor-pointer ${
              activeTab === 'truefalse'
                ? 'bg-white dark:bg-[#1f283b] text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            ⚖️ 判断改错 ({trueFalse.length}题)
          </button>
          <button
            onClick={() => setActiveTab('fill')}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl transition cursor-pointer ${
              activeTab === 'fill'
                ? 'bg-white dark:bg-[#1f283b] text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            ✏️ 填空专项 ({fillIns.length}题)
          </button>
        </div>

        {activeTab === 'terms' && (
          <div className="text-xs text-slate-500 font-medium">
            已掌握: <span className="font-bold text-emerald-600">{termMemorized.length}</span> / {terms.length}
          </div>
        )}
      </div>

      {/* Tab 1: Terminology Flashcards */}
      {activeTab === 'terms' && currentTerm && (
        <div className="flex-1 flex flex-col overflow-hidden">
          <ClayQuestionNav
            currentIndex={activeTermIdx}
            totalFiltered={terms.length}
            onPrev={() => handleSetTermIdx(Math.max(0, activeTermIdx - 1))}
            onNext={() => handleSetTermIdx(Math.min(terms.length - 1, activeTermIdx + 1))}
            onJumpToIndex={handleSetTermIdx}
            allItemIds={terms.map((t) => t.id)}
            completedItemIds={termMemorized}
            isMemorized={termMemorized.includes(currentTerm.id)}
            onToggleMemorized={() => onToggleTermMemorized(currentTerm.id)}
            memorizedLabel="已掌握"
            unmemorizedLabel="标为掌握"
            isStarred={false}
            onToggleStar={() => {}}
            revealed={isFlipped}
            onToggleRevealed={() => setIsFlipped((p) => !p)}
            revealLabel="翻看定义"
            hideLabel="翻回正面"
            onCopy={() => {
              navigator.clipboard.writeText(`【${currentTerm.term}】\n${currentTerm.definition}`);
            }}
            isCopied={false}
            modeBadge="名词抽背"
          />

          <div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col items-center justify-center">
            <div className="w-full max-w-3xl space-y-4">
              <div
                onClick={() => setIsFlipped((prev) => !prev)}
                className="w-full min-h-[320px] bg-white dark:bg-[#151b26] rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-lg transition-all p-8 flex flex-col justify-between cursor-pointer select-none group"
              >
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-xl font-bold border border-blue-200 dark:border-blue-800">
                    核心名词 #{currentTerm.id}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">{currentTerm.source}</span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                      {isFlipped ? '点击翻回正面' : '点击翻转看定义'}
                    </span>
                  </div>
                </div>

                <div className="my-8 text-center">
                  {!isFlipped ? (
                    <div className="space-y-4">
                      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 transition-colors">
                        {currentTerm.term}
                      </h2>
                      <p className="text-sm text-slate-400 font-medium">
                        按 <kbd className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded-md text-xs text-slate-600 dark:text-slate-300 font-mono">Space</kbd> 或点击卡片查看定义
                      </p>
                    </div>
                  ) : (
                    <div className="text-left space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {currentTerm.term}
                        </h3>
                      </div>
                      <div className="p-5 bg-slate-50/90 dark:bg-slate-900/60 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-base leading-relaxed text-slate-800 dark:text-slate-200">
                        <MarkdownViewer content={currentTerm.definition} maskKeywords={isMasking} />
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs text-slate-400">
                    {currentTerm.chapterTitle}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleTermMemorized(currentTerm.id);
                    }}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
                      termMemorized.includes(currentTerm.id)
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {termMemorized.includes(currentTerm.id) ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>已掌握概念</span>
                      </>
                    ) : (
                      <>
                        <Circle className="w-4 h-4 text-slate-400" />
                        <span>标为已掌握</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Single Choice Drill */}
      {activeTab === 'choice' && currentChoice && (
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* FRM-style Sticky Stepper Nav */}
          <div className="bg-white dark:bg-[#151b26] border-b border-slate-200/80 dark:border-slate-800 px-4 py-2 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setChoiceIdx((p) => Math.max(0, p - 1));
                  setSelectedOption(null);
                  setShowChoiceExplanation(false);
                }}
                disabled={choiceIdx === 0}
                className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 cursor-pointer"
                title="上一题 (J)"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2.5 py-1 rounded-lg border border-blue-200 dark:border-blue-800">
                单选题 第 {choiceIdx + 1} / {singleChoices.length} 题
              </span>
              <button
                onClick={() => {
                  setChoiceIdx((p) => Math.min(singleChoices.length - 1, p + 1));
                  setSelectedOption(null);
                  setShowChoiceExplanation(false);
                }}
                disabled={choiceIdx === singleChoices.length - 1}
                className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 cursor-pointer"
                title="下一题 (K)"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => setShowChoiceExplanation((p) => !p)}
              className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition cursor-pointer"
            >
              {showChoiceExplanation ? '收起解析' : '💡 查看答案与解析'}
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col items-center">
            <div className="w-full max-w-3xl bg-white dark:bg-[#151b26] rounded-3xl border border-slate-200/90 dark:border-slate-800 p-6 md:p-8 space-y-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
                {choiceIdx + 1}. {currentChoice.stem}
              </h3>

              {/* Options A, B, C, D */}
              <div className="space-y-3">
                {(['A', 'B', 'C', 'D'] as const).map((key) => {
                  const text = currentChoice.options[key];
                  const isSelected = selectedOption === key;
                  const isCorrect = key === currentChoice.correctKey;

                  let optClass =
                    'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200';

                  if (showChoiceExplanation) {
                    if (isCorrect) {
                      optClass =
                        'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold';
                    } else if (isSelected) {
                      optClass =
                        'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-900 dark:text-rose-200';
                    }
                  } else if (isSelected) {
                    optClass =
                      'border-blue-500 bg-blue-50/50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-100 font-bold';
                  }

                  return (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedOption(key);
                        setShowChoiceExplanation(true);
                      }}
                      className={`w-full p-4 rounded-2xl border text-left flex items-start gap-3 transition cursor-pointer text-sm ${optClass}`}
                    >
                      <span className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-xs shrink-0">
                        {key}
                      </span>
                      <span className="flex-1 pt-0.5">{text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {showChoiceExplanation && (
                <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                  <div className="font-bold text-emerald-700 dark:text-emerald-400 text-sm">
                    正确答案：【{currentChoice.correctKey}】
                  </div>
                  <div className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
                    {currentChoice.rationale}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: True / False Drill */}
      {activeTab === 'truefalse' && currentTF && (
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* FRM-style Sticky Stepper Nav */}
          <div className="bg-white dark:bg-[#151b26] border-b border-slate-200/80 dark:border-slate-800 px-4 py-2 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setTfIdx((p) => Math.max(0, p - 1));
                  setSelectedTf(null);
                  setShowTfExplanation(false);
                }}
                disabled={tfIdx === 0}
                className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 cursor-pointer"
                title="上一题 (J)"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 px-2.5 py-1 rounded-lg border border-purple-200 dark:border-purple-800">
                判断改错 第 {tfIdx + 1} / {trueFalse.length} 题
              </span>
              <button
                onClick={() => {
                  setTfIdx((p) => Math.min(trueFalse.length - 1, p + 1));
                  setSelectedTf(null);
                  setShowTfExplanation(false);
                }}
                disabled={tfIdx === trueFalse.length - 1}
                className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 cursor-pointer"
                title="下一题 (K)"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => setShowTfExplanation((p) => !p)}
              className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition cursor-pointer"
            >
              {showTfExplanation ? '收起解析' : '💡 查看答案与改错'}
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col items-center">
            <div className="w-full max-w-3xl bg-white dark:bg-[#151b26] rounded-3xl border border-slate-200/90 dark:border-slate-800 p-6 md:p-8 space-y-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
                {tfIdx + 1}. {currentTF.statement}
              </h3>

              {/* Answer buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => {
                    setSelectedTf(true);
                    setShowTfExplanation(true);
                  }}
                  className={`p-4 rounded-2xl border flex items-center justify-center gap-2 font-bold transition text-sm cursor-pointer ${
                    showTfExplanation
                      ? currentTF.isCorrect
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-bold'
                        : selectedTf === true
                        ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-800 dark:text-rose-200'
                        : 'border-slate-200 dark:border-slate-700 text-slate-500'
                      : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200'
                  }`}
                >
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>正确 (√)</span>
                </button>
                <button
                  onClick={() => {
                    setSelectedTf(false);
                    setShowTfExplanation(true);
                  }}
                  className={`p-4 rounded-2xl border flex items-center justify-center gap-2 font-bold transition text-sm cursor-pointer ${
                    showTfExplanation
                      ? !currentTF.isCorrect
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-bold'
                        : selectedTf === false
                        ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-800 dark:text-rose-200'
                        : 'border-slate-200 dark:border-slate-700 text-slate-500'
                      : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200'
                  }`}
                >
                  <X className="w-4 h-4 text-rose-600" />
                  <span>错误 (×)</span>
                </button>
              </div>

              {/* Explanation & Correction */}
              {showTfExplanation && (
                <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                  <div className="font-bold text-slate-900 dark:text-white text-sm">
                    判断结果：本题陈述【{currentTF.isCorrect ? '正确 (√)' : '错误 (×)'}】
                  </div>
                  <div className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
                    {currentTF.errorCorrection}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Fill in blanks Drill */}
      {activeTab === 'fill' && currentFill && (
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* FRM-style Sticky Stepper Nav */}
          <div className="bg-white dark:bg-[#151b26] border-b border-slate-200/80 dark:border-slate-800 px-4 py-2 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setFillIdx((p) => Math.max(0, p - 1));
                  setShowFillAnswer(false);
                }}
                disabled={fillIdx === 0}
                className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 cursor-pointer"
                title="上一题 (J)"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2.5 py-1 rounded-lg border border-amber-200 dark:border-amber-800">
                填空专项 第 {fillIdx + 1} / {fillIns.length} 题
              </span>
              <button
                onClick={() => {
                  setFillIdx((p) => Math.min(fillIns.length - 1, p + 1));
                  setShowFillAnswer(false);
                }}
                disabled={fillIdx === fillIns.length - 1}
                className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 cursor-pointer"
                title="下一题 (K)"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => setShowFillAnswer((prev) => !prev)}
              className="text-xs font-bold px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 hover:bg-amber-100 transition cursor-pointer"
            >
              {showFillAnswer ? '隐藏参考关键词' : '👁️ 揭开参考关键词 (Space)'}
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col items-center">
            <div className="w-full max-w-3xl bg-white dark:bg-[#151b26] rounded-3xl border border-slate-200/90 dark:border-slate-800 p-6 md:p-8 space-y-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
                {fillIdx + 1}. {currentFill.stem}
              </h3>

              {showFillAnswer && (
                <div className="p-4 bg-amber-50/70 dark:bg-amber-950/40 rounded-2xl border border-amber-200 dark:border-amber-800 space-y-2 text-xs">
                  <div className="font-bold text-amber-900 dark:text-amber-200 text-sm">
                    参考答案关键词：
                    {currentFill.answers.map((ans, aIdx) => (
                      <span
                        key={aIdx}
                        className="ml-2 px-2.5 py-1 bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-100 rounded-lg font-bold"
                      >
                        {ans}
                      </span>
                    ))}
                  </div>
                  {currentFill.explanation && (
                    <div className="text-slate-700 dark:text-slate-300 mt-2 leading-relaxed text-xs sm:text-sm">
                      解析：{currentFill.explanation}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
