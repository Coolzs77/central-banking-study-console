import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Layers,
  RotateCcw,
  CheckCircle2,
  Circle,
  Sparkles,
  Zap,
  HelpCircle,
  Check,
  X,
  BookOpen,
  Eye,
  EyeOff,
} from 'lucide-react';
import {
  TerminologyQuestion,
  SingleChoiceQuestion,
  TrueFalseQuestion,
  FillInQuestion,
} from '../data/types';
import { MarkdownViewer } from './common/MarkdownViewer';
import { MiddleNav } from './MiddleNav';

interface PracticeCanvasProps {
  terms: TerminologyQuestion[];
  singleChoices: SingleChoiceQuestion[];
  trueFalse: TrueFalseQuestion[];
  fillIns: FillInQuestion[];
  termMemorized: number[];
  onToggleTermMemorized: (id: number) => void;
  selectedTermId?: number | null;
  onSelectTerm?: (id: number) => void;
}

export const PracticeCanvas: React.FC<PracticeCanvasProps> = ({
  terms,
  singleChoices,
  trueFalse,
  fillIns,
  termMemorized,
  onToggleTermMemorized,
  selectedTermId = null,
  onSelectTerm,
}) => {
  const [activeTab, setActiveTab] = useState<'terms' | 'choice' | 'truefalse' | 'fill'>('terms');

  // Term Flashcards State
  const [currentTermIdx, setCurrentTermIdx] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isMasking, setIsMasking] = useState<boolean>(false);
  const [isAllRevealed, setIsAllRevealed] = useState<boolean>(false);

  // Sync selectedTermId from RightSidebar
  useEffect(() => {
    if (selectedTermId !== null) {
      const idx = terms.findIndex((t) => t.id === selectedTermId);
      if (idx !== -1) {
        setCurrentTermIdx(idx);
        setIsFlipped(false);
      }
    }
  }, [selectedTermId, terms]);

  const currentTerm = terms[currentTermIdx] || terms[0];

  useEffect(() => {
    if (currentTerm && onSelectTerm && selectedTermId !== currentTerm.id) {
      onSelectTerm(currentTerm.id);
    }
  }, [currentTerm, onSelectTerm, selectedTermId]);

  // Choice drill state
  const [choiceIdx, setChoiceIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showChoiceExplanation, setShowChoiceExplanation] = useState<boolean>(false);

  // True/False drill state
  const [tfIdx, setTfIdx] = useState<number>(0);
  const [selectedTf, setSelectedTf] = useState<boolean | null>(null);
  const [showTfExplanation, setShowTfExplanation] = useState<boolean>(false);

  // Fill drill state
  const [fillIdx, setFillIdx] = useState<number>(0);
  const [showFillAnswer, setShowFillAnswer] = useState<boolean>(false);

  // Keyboard navigation for terms
  useEffect(() => {
    if (activeTab !== 'terms') return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) return;

      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      } else if (e.key === 'j' || e.key === 'J' || e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentTermIdx((prev) => Math.max(0, prev - 1));
        setIsFlipped(false);
      } else if (e.key === 'k' || e.key === 'K' || e.key === 'ArrowRight') {
        e.preventDefault();
        setCurrentTermIdx((prev) => Math.min(terms.length - 1, prev + 1));
        setIsFlipped(false);
      } else if (e.key === 'm' || e.key === 'M') {
        if (currentTerm) {
          e.preventDefault();
          onToggleTermMemorized(currentTerm.id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, terms.length, currentTerm, onToggleTermMemorized]);

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50/50 overflow-hidden select-text">
      {/* Top Mode Tabs */}
      <div className="bg-white border-b border-slate-200/80 px-4 py-2 flex items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-1.5 p-1 bg-slate-100/80 rounded-xl">
          <button
            onClick={() => setActiveTab('terms')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition cursor-pointer ${
              activeTab === 'terms'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            📇 名词概念抽背 ({terms.length}词)
          </button>
          <button
            onClick={() => setActiveTab('choice')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition cursor-pointer ${
              activeTab === 'choice'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🎯 单选专项 ({singleChoices.length}题)
          </button>
          <button
            onClick={() => setActiveTab('truefalse')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition cursor-pointer ${
              activeTab === 'truefalse'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ⚖️ 判断改错 ({trueFalse.length}题)
          </button>
          <button
            onClick={() => setActiveTab('fill')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition cursor-pointer ${
              activeTab === 'fill'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
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
          {/* Middle Nav */}
          <MiddleNav
            currentIndex={currentTermIdx}
            totalCount={terms.length}
            chapterTitle={currentTerm.chapterTitle}
            sectionTitle={currentTerm.source}
            isMasking={isMasking}
            onToggleMask={() => setIsMasking((prev) => !prev)}
            isAllRevealed={isAllRevealed}
            onToggleRevealAll={() => setIsAllRevealed((prev) => !prev)}
            onPrev={() => {
              setCurrentTermIdx((prev) => Math.max(0, prev - 1));
              setIsFlipped(false);
            }}
            onNext={() => {
              setCurrentTermIdx((prev) => Math.min(terms.length - 1, prev + 1));
              setIsFlipped(false);
            }}
            onRandom={() => {
              const r = Math.floor(Math.random() * terms.length);
              setCurrentTermIdx(r);
              setIsFlipped(false);
            }}
            onJumpToIndex={(idx) => {
              setCurrentTermIdx(idx);
              setIsFlipped(false);
            }}
            modeTitle="名词概念"
          />

          <div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col items-center justify-center">
            <div className="w-full max-w-3xl space-y-4">
              {/* Flashcard container */}
              <div
                onClick={() => setIsFlipped((prev) => !prev)}
                className="w-full min-h-[300px] bg-white rounded-3xl border-2 border-slate-200/90 shadow-md hover:shadow-lg transition-all p-8 flex flex-col justify-between cursor-pointer select-none group"
              >
                {/* Card Top */}
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono bg-blue-50 text-blue-700 px-2.5 py-1 rounded-lg font-bold">
                    核心名词 #{currentTerm.id}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">{currentTerm.source}</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                      {isFlipped ? '点击翻回正面' : '点击翻转看定义'}
                    </span>
                  </div>
                </div>

                {/* Card Center */}
                <div className="my-8 text-center">
                  {!isFlipped ? (
                    <div className="space-y-4">
                      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                        {currentTerm.term}
                      </h2>
                      <p className="text-sm text-slate-400 font-medium">
                        按 <kbd className="px-1.5 py-0.5 bg-slate-100 rounded text-xs text-slate-600 font-mono">Space</kbd> 或点击卡片查看定义及加粗关键词
                      </p>
                    </div>
                  ) : (
                    <div className="text-left space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                        <h3 className="text-xl font-bold text-slate-900">
                          {currentTerm.term}
                        </h3>
                      </div>
                      <div className="p-4 bg-slate-50/90 rounded-2xl border border-slate-200/80 text-base leading-relaxed text-slate-800">
                        <MarkdownViewer
                          content={currentTerm.definition}
                          maskKeywords={isMasking}
                          onToggleClozeAll={isAllRevealed}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Bottom */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-xs text-slate-400">
                    {currentTerm.chapterTitle}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleTermMemorized(currentTerm.id);
                    }}
                    className={`flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
                      termMemorized.includes(currentTerm.id)
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-emerald-200'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
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

              {/* Hints */}
              <div className="flex items-center justify-between text-xs text-slate-400 px-2">
                <span>快捷键：Space 翻面/遮挡 · J 上一个 · K 下一个 · M 标记掌握</span>
                <span>进度：{currentTermIdx + 1} / {terms.length}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Single Choice Drill */}
      {activeTab === 'choice' && singleChoices.length > 0 && (
        <div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col items-center">
          <div className="w-full max-w-3xl bg-white rounded-3xl border border-slate-200 p-6 md:p-8 space-y-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
              <span className="font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                单选题 {choiceIdx + 1} / {singleChoices.length}
              </span>
              <span className="text-slate-500">{singleChoices[choiceIdx].chapterTitle}</span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 leading-relaxed">
              {singleChoices[choiceIdx].stem}
            </h3>

            {/* Options */}
            <div className="space-y-3">
              {singleChoices[choiceIdx].options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = singleChoices[choiceIdx].correctIndex === idx;

                let optClass = 'border-slate-200 hover:bg-slate-50 text-slate-700';
                if (showChoiceExplanation) {
                  if (isCorrect) optClass = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold';
                  else if (isSelected) optClass = 'bg-rose-50 border-rose-500 text-rose-900';
                } else if (isSelected) {
                  optClass = 'border-blue-500 bg-blue-50/50 text-blue-900';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedOption(idx);
                      setShowChoiceExplanation(true);
                    }}
                    className={`w-full p-4 rounded-xl border text-left flex items-start gap-3 transition cursor-pointer text-sm ${optClass}`}
                  >
                    <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1 pt-0.5">{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {showChoiceExplanation && (
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs">
                <div className="font-bold text-slate-800">
                  解析：正确答案是【{String.fromCharCode(65 + singleChoices[choiceIdx].correctIndex)}】
                </div>
                <div className="text-slate-600 leading-relaxed">
                  {singleChoices[choiceIdx].explanation}
                </div>
              </div>
            )}

            {/* Stepper */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setChoiceIdx((p) => Math.max(0, p - 1));
                  setSelectedOption(null);
                  setShowChoiceExplanation(false);
                }}
                disabled={choiceIdx === 0}
                className="px-4 py-2 text-xs font-bold rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40"
              >
                上一题
              </button>
              <button
                onClick={() => {
                  setChoiceIdx((p) => Math.min(singleChoices.length - 1, p + 1));
                  setSelectedOption(null);
                  setShowChoiceExplanation(false);
                }}
                disabled={choiceIdx === singleChoices.length - 1}
                className="px-4 py-2 text-xs font-bold rounded-xl bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40"
              >
                下一题
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: True / False Drill */}
      {activeTab === 'truefalse' && trueFalse.length > 0 && (
        <div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col items-center">
          <div className="w-full max-w-3xl bg-white rounded-3xl border border-slate-200 p-6 md:p-8 space-y-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
              <span className="font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded">
                判断并改错 {tfIdx + 1} / {trueFalse.length}
              </span>
              <span className="text-slate-500">{trueFalse[tfIdx].chapterTitle}</span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 leading-relaxed">
              {trueFalse[tfIdx].stem}
            </h3>

            {/* Answer buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => {
                  setSelectedTf(true);
                  setShowTfExplanation(true);
                }}
                className={`p-4 rounded-xl border flex items-center justify-center gap-2 font-bold transition text-sm cursor-pointer ${
                  showTfExplanation
                    ? trueFalse[tfIdx].isCorrect
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                      : selectedTf === true
                      ? 'bg-rose-50 border-rose-500 text-rose-800'
                      : 'border-slate-200 text-slate-500'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
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
                className={`p-4 rounded-xl border flex items-center justify-center gap-2 font-bold transition text-sm cursor-pointer ${
                  showTfExplanation
                    ? !trueFalse[tfIdx].isCorrect
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                      : selectedTf === false
                      ? 'bg-rose-50 border-rose-500 text-rose-800'
                      : 'border-slate-200 text-slate-500'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <X className="w-4 h-4 text-rose-600" />
                <span>错误 (×)</span>
              </button>
            </div>

            {/* Explanation & Correction */}
            {showTfExplanation && (
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs">
                <div className="font-bold text-slate-800">
                  判断：本题为【{trueFalse[tfIdx].isCorrect ? '正确 (√)' : '错误 (×)'}】
                </div>
                {!trueFalse[tfIdx].isCorrect && trueFalse[tfIdx].correction && (
                  <div className="text-rose-700 font-medium">
                    改正说明：{trueFalse[tfIdx].correction}
                  </div>
                )}
                <div className="text-slate-600 leading-relaxed">
                  解析：{trueFalse[tfIdx].explanation}
                </div>
              </div>
            )}

            {/* Stepper */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setTfIdx((p) => Math.max(0, p - 1));
                  setSelectedTf(null);
                  setShowTfExplanation(false);
                }}
                disabled={tfIdx === 0}
                className="px-4 py-2 text-xs font-bold rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40"
              >
                上一题
              </button>
              <button
                onClick={() => {
                  setTfIdx((p) => Math.min(trueFalse.length - 1, p + 1));
                  setSelectedTf(null);
                  setShowTfExplanation(false);
                }}
                disabled={tfIdx === trueFalse.length - 1}
                className="px-4 py-2 text-xs font-bold rounded-xl bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-40"
              >
                下一题
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Fill in blanks Drill */}
      {activeTab === 'fill' && fillIns.length > 0 && (
        <div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col items-center">
          <div className="w-full max-w-3xl bg-white rounded-3xl border border-slate-200 p-6 md:p-8 space-y-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
              <span className="font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                填空题 {fillIdx + 1} / {fillIns.length}
              </span>
              <span className="text-slate-500">{fillIns[fillIdx].chapterTitle}</span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 leading-relaxed">
              {fillIns[fillIdx].stem}
            </h3>

            <div className="flex justify-center">
              <button
                onClick={() => setShowFillAnswer((prev) => !prev)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-amber-50 text-amber-800 border border-amber-300 hover:bg-amber-100 transition cursor-pointer"
              >
                {showFillAnswer ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                <span>{showFillAnswer ? '隐藏参考关键词' : '揭开参考关键词'}</span>
              </button>
            </div>

            {showFillAnswer && (
              <div className="p-4 bg-amber-50/50 rounded-2xl border border-amber-200 space-y-2 text-xs">
                <div className="font-bold text-amber-900">
                  参考答案关键词：
                  {fillIns[fillIdx].answers.map((ans, aIdx) => (
                    <span key={aIdx} className="ml-2 px-2 py-0.5 bg-amber-200 text-amber-900 rounded font-bold">
                      {ans}
                    </span>
                  ))}
                </div>
                {fillIns[fillIdx].explanation && (
                  <div className="text-slate-600 mt-2">
                    解析：{fillIns[fillIdx].explanation}
                  </div>
                )}
              </div>
            )}

            {/* Stepper */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setFillIdx((p) => Math.max(0, p - 1));
                  setShowFillAnswer(false);
                }}
                disabled={fillIdx === 0}
                className="px-4 py-2 text-xs font-bold rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40"
              >
                上一题
              </button>
              <button
                onClick={() => {
                  setFillIdx((p) => Math.min(fillIns.length - 1, p + 1));
                  setShowFillAnswer(false);
                }}
                disabled={fillIdx === fillIns.length - 1}
                className="px-4 py-2 text-xs font-bold rounded-xl bg-amber-600 text-white hover:bg-amber-700 disabled:opacity-40"
              >
                下一题
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
