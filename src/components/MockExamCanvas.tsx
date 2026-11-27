import React, { useState, useEffect, useMemo } from 'react';
import { MarkdownViewer } from './common/MarkdownViewer';
import {
  Award,
  Timer,
  CheckCircle2,
  XCircle,
  HelpCircle,
  AlertTriangle,
  RotateCcw,
  Send,
  Eye,
  Check,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import {
  ExamPaper,
  ExamUserAnswers,
  ExamUserScores,
  TerminologyQuestion,
  FillInQuestion,
  SingleChoiceQuestion,
  TrueFalseQuestion,
  ShortAnswerQuestion,
  EssayQuestion,
} from '../data/types';

interface MockExamCanvasProps {
  termsBank: TerminologyQuestion[];
  fillInsBank: FillInQuestion[];
  singleChoicesBank: SingleChoiceQuestion[];
  trueFalseBank: TrueFalseQuestion[];
  shortAnswersBank: ShortAnswerQuestion[];
  essaysBank: EssayQuestion[];
  onFinishExam?: (record: any) => void;
}

const MOCK_EXAM_DRAFT_KEY = 'cb_mock_exam_draft';

function loadMockExamDraft(): {
  examStatus: 'idle' | 'testing' | 'submitted';
  timeLeft: number;
  paper: ExamPaper | null;
  answers: ExamUserAnswers;
  subjectiveScores: {
    termScores: Record<number, number>;
    shortAnswerScores: Record<number, Record<number, boolean>>;
    essayScores: { theory: number; mechanism: number; practice: number; conclusion: number };
  };
} | null {
  try {
    const raw = localStorage.getItem(MOCK_EXAM_DRAFT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && parsed.paper && (parsed.examStatus === 'testing' || parsed.examStatus === 'submitted')) {
      return parsed;
    }
  } catch {
    // Ignore storage errors
  }
  return null;
}

export const MockExamCanvas: React.FC<MockExamCanvasProps> = ({
  termsBank,
  fillInsBank,
  singleChoicesBank,
  trueFalseBank,
  shortAnswersBank,
  essaysBank,
  onFinishExam,
}) => {
  const initialDraft = useMemo(() => loadMockExamDraft(), []);

  // Exam State: 'idle' | 'testing' | 'submitted'
  const [examStatus, setExamStatus] = useState<'idle' | 'testing' | 'submitted'>(
    initialDraft?.examStatus || 'idle'
  );

  // Countdown Timer: 120 minutes = 7200 seconds
  const [timeLeft, setTimeLeft] = useState<number>(initialDraft?.timeLeft ?? 120 * 60);
  const [timerRunning, setTimerRunning] = useState<boolean>(initialDraft?.examStatus === 'testing');

  // Active paper
  const [paper, setPaper] = useState<ExamPaper | null>(initialDraft?.paper || null);
  const [submitConfirmOpen, setSubmitConfirmOpen] = useState<boolean>(false);

  // User Answers
  const [answers, setAnswers] = useState<ExamUserAnswers>(
    initialDraft?.answers || {
      terms: {},
      fillIns: {},
      singleChoices: {},
      trueFalse: {},
      shortAnswers: {},
      essay: {},
    }
  );

  // User Subjective Self-Scoring
  const [subjectiveScores, setSubjectiveScores] = useState<{
    termScores: Record<number, number>;
    shortAnswerScores: Record<number, Record<number, boolean>>; // qId -> rubricIndex -> checked
    essayScores: { theory: number; mechanism: number; practice: number; conclusion: number };
  }>(
    initialDraft?.subjectiveScores || {
      termScores: {},
      shortAnswerScores: {},
      essayScores: { theory: 0, mechanism: 0, practice: 0, conclusion: 0 },
    }
  );

  // Persist active paper, answers, timer, and scores across mode switches & reloads
  useEffect(() => {
    if (!paper || examStatus === 'idle') return;
    try {
      localStorage.setItem(
        MOCK_EXAM_DRAFT_KEY,
        JSON.stringify({
          examStatus,
          timeLeft,
          paper,
          answers,
          subjectiveScores,
        })
      );
    } catch {
      // Ignore storage errors
    }
  }, [examStatus, timeLeft, paper, answers, subjectiveScores]);

  // Generate a standard 100-point paper
  const generateNewPaper = () => {
    // 5 terms (15pt)
    const shuffledTerms = [...termsBank].sort(() => 0.5 - Math.random()).slice(0, 5);
    // 15 fill-ins (15pt)
    const shuffledFillIns = [...fillInsBank].sort(() => 0.5 - Math.random()).slice(0, 15);
    // 15 single choice (15pt)
    const shuffledSingle = [...singleChoicesBank].sort(() => 0.5 - Math.random()).slice(0, 15);
    // 15 true/false (15pt)
    const shuffledTF = [...trueFalseBank].sort(() => 0.5 - Math.random()).slice(0, 15);
    // 3 short answers (6+6+8 = 20pt) — shallow copy to avoid mutating bank items
    const shuffledShort = [...shortAnswersBank]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map((item, idx) => ({
        ...item,
        totalPoints: idx === 2 ? 8 : 6,
      }));
    // 1 essay (20pt)
    const shuffledEssay = [...essaysBank].sort(() => 0.5 - Math.random())[0] || essaysBank[0];

    const newPaper: ExamPaper = {
      id: `paper-${Date.now()}`,
      createdAt: Date.now(),
      durationMinutes: 120,
      terms: shuffledTerms,
      fillIns: shuffledFillIns,
      singleChoices: shuffledSingle,
      trueFalse: shuffledTF,
      shortAnswers: shuffledShort,
      essay: shuffledEssay,
      totalPoints: 100,
    };

    setPaper(newPaper);
    setTimeLeft(120 * 60);
    setTimerRunning(true);
    setAnswers({
      terms: {},
      fillIns: {},
      singleChoices: {},
      trueFalse: {},
      shortAnswers: {},
      essay: {},
    });
    setSubjectiveScores({
      termScores: {},
      shortAnswerScores: {},
      essayScores: { theory: 0, mechanism: 0, practice: 0, conclusion: 0 },
    });
    setExamStatus('testing');
  };

  // Close submit confirmation modal on Escape
  useEffect(() => {
    if (!submitConfirmOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSubmitConfirmOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [submitConfirmOpen]);

  // Warn before leaving page while an exam is in progress
  useEffect(() => {
    if (examStatus !== 'testing') return;
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [examStatus]);

  // Timer countdown
  useEffect(() => {
    let interval: any = null;
    if (timerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setTimerRunning(false);
            setExamStatus('submitted');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timeLeft]);

  const formatCountdown = (totalSec: number) => {
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Auto-calculated scores
  const scoreResults = useMemo(() => {
    if (!paper) return null;

    // Single choice scores
    let singleScore = 0;
    paper.singleChoices.forEach((q) => {
      if (answers.singleChoices[q.id] === q.correctKey) {
        singleScore += 1;
      }
    });

    // True/False scores
    let tfScore = 0;
    paper.trueFalse.forEach((q) => {
      if (answers.trueFalse[q.id] === q.isCorrect) {
        tfScore += 1;
      }
    });

    // Fill-in scores: matched if user typed any of accepted answers
    let fillInScore = 0;
    paper.fillIns.forEach((q) => {
      const userAns = answers.fillIns[q.id];
      if (userAns && userAns.length > 0) {
        const matches = q.answers.some((ans) =>
          userAns.some((u) => u && u.trim().toLowerCase() === ans.trim().toLowerCase())
        );
        if (matches) fillInScore += 1;
      }
    });

    // Terminology scores (self-scored: 0-3 pts; default 0 until user scores)
    let termScore = 0;
    paper.terms.forEach((q) => {
      const s = subjectiveScores.termScores[q.id];
      termScore += s !== undefined ? s : 0;
    });

    // Short answer scores (self-scored)
    let shortScore = 0;
    paper.shortAnswers.forEach((q) => {
      const qScores = subjectiveScores.shortAnswerScores[q.id] || {};
      q.rubricPoints.forEach((r, idx) => {
        if (qScores[idx]) {
          shortScore += r.score;
        }
      });
    });

    // Essay score (self-scored)
    const essayScore =
      subjectiveScores.essayScores.theory +
      subjectiveScores.essayScores.mechanism +
      subjectiveScores.essayScores.practice +
      subjectiveScores.essayScores.conclusion;

    const total = singleScore + tfScore + fillInScore + termScore + shortScore + essayScore;

    return {
      termScore,
      fillInScore,
      singleScore,
      tfScore,
      shortScore,
      essayScore,
      total,
    };
  }, [paper, answers, subjectiveScores]);

  const handleSubmitExam = () => {
    setSubmitConfirmOpen(true);
  };

  const confirmSubmitExam = () => {
    setSubmitConfirmOpen(false);
    setTimerRunning(false);
    setExamStatus('submitted');
    if (onFinishExam && scoreResults) {
      onFinishExam({
        date: new Date().toISOString(),
        durationSecondsUsed: 120 * 60 - timeLeft,
        scores: scoreResults,
      });
    }
  };

  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('ring-2', 'ring-sky-500');
      setTimeout(() => el.classList.remove('ring-2', 'ring-sky-500'), 1500);
    }
  };

  if (examStatus === 'idle') {
    return (
      <div className="flex-1 w-full h-full overflow-y-auto px-4 py-10 flex flex-col items-center bg-transparent">
        <div className="book-stage w-full max-w-3xl my-auto">
          <div className="book-page p-8 sm:p-10 text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-500/30">
              <Award className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              中央银行学 期末模考全真试卷
            </h2>
            <p className="text-sm text-stone-600 dark:text-stone-400 max-w-lg mx-auto mb-8">
              120 分钟 · 满分 100 分
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4 max-w-lg mx-auto mb-8 text-left text-xs border-y border-dashed border-stone-300/80 dark:border-stone-700/80 py-5">
              <div>
                <span className="text-stone-500 dark:text-stone-400 block mb-1">一、名词解释</span>
                <span className="font-bold text-slate-900 dark:text-slate-100">5题 · 15分 (每题3分)</span>
              </div>
              <div>
                <span className="text-stone-500 dark:text-stone-400 block mb-1">二、填空题</span>
                <span className="font-bold text-slate-900 dark:text-slate-100">15题 · 15分 (每题1分)</span>
              </div>
              <div>
                <span className="text-stone-500 dark:text-stone-400 block mb-1">三、单项选择题</span>
                <span className="font-bold text-slate-900 dark:text-slate-100">15题 · 15分 (每题1分)</span>
              </div>
              <div>
                <span className="text-stone-500 dark:text-stone-400 block mb-1">四、判断改错题</span>
                <span className="font-bold text-slate-900 dark:text-slate-100">15题 · 15分 (每题1分)</span>
              </div>
              <div>
                <span className="text-stone-500 dark:text-stone-400 block mb-1">五、简答题</span>
                <span className="font-bold text-slate-900 dark:text-slate-100">3题 · 20分 (6+6+8分)</span>
              </div>
              <div>
                <span className="text-stone-500 dark:text-stone-400 block mb-1">六、论述题</span>
                <span className="font-bold text-slate-900 dark:text-slate-100">1题 · 20分 (宏观大题)</span>
              </div>
            </div>

            <button
              type="button"
              onClick={generateNewPaper}
              className="px-8 py-3 rounded-md bg-amber-600 hover:bg-amber-700 text-white font-bold text-base transition-colors cursor-pointer"
            >
              生成试卷
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!paper) return null;

  return (
    <div className="flex-1 w-full h-full flex flex-col overflow-hidden bg-transparent">
      {/* 1. Fixed Top Exam Header (Pinned permanently, zero floating overlap!) */}
      <div className="bg-[var(--paper-surface,#fbf8f1)]/95 dark:bg-[#191815]/95 border-b border-stone-300/70 dark:border-stone-800 px-6 py-3 shrink-0 flex items-center justify-between gap-4 z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <Timer className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-stone-500 dark:text-stone-400 font-medium">期末模考倒计时</div>
            <div
              className={`text-xl font-mono font-bold tabular-nums ${
                timeLeft < 15 * 60
                  ? 'text-red-500 animate-pulse'
                  : 'text-slate-900 dark:text-slate-100'
              }`}
            >
              {formatCountdown(timeLeft)}
            </div>
          </div>
        </div>

        {/* Section Indicators */}
        <div className="hidden lg:flex items-center gap-3 text-xs text-stone-600 dark:text-stone-400 font-medium">
          <span>一·名词(15分)</span>
          <span>二·填空(15分)</span>
          <span>三·单选(15分)</span>
          <span>四·判断(15分)</span>
          <span>五·简答(20分)</span>
          <span>六·论述(20分)</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {examStatus === 'testing' ? (
            <button
              type="button"
              onClick={handleSubmitExam}
              className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs cursor-pointer transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>交卷评分</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={generateNewPaper}
              className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs cursor-pointer transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>再练一套新卷</span>
            </button>
          )}
        </div>
      </div>

      {/* 2. Scrollable Exam Paper Body (Zero overlapping, smooth scrolling!) */}
      <div className="flex-1 w-full overflow-y-auto px-4 py-6">
        <div className="book-stage max-w-4xl mx-auto">
          <div className="book-page p-6 sm:p-10 space-y-10">

      {/* Submitted Score Summary */}
      {examStatus === 'submitted' && scoreResults && (
        <div className="pb-6 border-b-2 border-double border-stone-400/70 dark:border-stone-600/70">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                期末模考成绩单
              </span>
              <div className="text-3xl font-bold font-mono text-slate-900 dark:text-white mt-1 tabular-nums">
                {scoreResults.total.toFixed(1)}{' '}
                <span className="text-sm font-normal text-stone-500 dark:text-stone-400">/ 100 分</span>
              </div>
            </div>

            <div className="text-xs text-stone-600 dark:text-stone-400 tabular-nums">
              用时：{Math.floor((120 * 60 - timeLeft) / 60)} 分钟
            </div>
          </div>

          {/* Breakdown Row */}
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-3 pt-3 border-t border-dashed border-stone-300/70 dark:border-stone-700/70 text-xs font-mono">
            <div>
              <span className="text-[10px] text-stone-500 dark:text-stone-400 block">一、名词解释</span>
              <span className="font-bold text-slate-900 dark:text-slate-100 tabular-nums">
                {scoreResults.termScore.toFixed(1)} / 15
              </span>
            </div>
            <div>
              <span className="text-[10px] text-stone-500 dark:text-stone-400 block">二、填空题</span>
              <span className="font-bold text-slate-900 dark:text-slate-100 tabular-nums">
                {scoreResults.fillInScore} / 15
              </span>
            </div>
            <div>
              <span className="text-[10px] text-stone-500 dark:text-stone-400 block">三、单选题</span>
              <span className="font-bold text-slate-900 dark:text-slate-100 tabular-nums">
                {scoreResults.singleScore} / 15
              </span>
            </div>
            <div>
              <span className="text-[10px] text-stone-500 dark:text-stone-400 block">四、判断改错</span>
              <span className="font-bold text-slate-900 dark:text-slate-100 tabular-nums">
                {scoreResults.tfScore} / 15
              </span>
            </div>
            <div>
              <span className="text-[10px] text-stone-500 dark:text-stone-400 block">五、简答题</span>
              <span className="font-bold text-slate-900 dark:text-slate-100 tabular-nums">
                {scoreResults.shortScore} / 20
              </span>
            </div>
            <div>
              <span className="text-[10px] text-stone-500 dark:text-stone-400 block">六、论述题</span>
              <span className="font-bold text-slate-900 dark:text-slate-100 tabular-nums">
                {scoreResults.essayScore} / 20
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Section 1: Terminology (5 questions, 15pt) */}
      <div id="section-terms">
        <div className="flex items-center justify-between mb-5 pb-2.5 border-b-2 border-double border-stone-400/70 dark:border-stone-600/70">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="font-mono font-bold text-sky-700 dark:text-sky-400">一、</span>
            名词解释 (共5小题，每小题3分，共15分)
          </h3>
        </div>

        <div className="space-y-6">
          {paper.terms.map((q, idx) => (
            <div
              key={q.id}
              className="pb-6 border-b border-dashed border-stone-300/70 dark:border-stone-700/70 last:border-b-0 last:pb-0"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-mono text-sm font-bold text-slate-900 dark:text-white">
                  {idx + 1}. {q.term} (3分)
                </span>
                <span className="text-xs text-stone-500 dark:text-stone-400 font-mono">{q.chapterTitle}</span>
              </div>

              {/* User text input */}
              <textarea
                value={answers.terms[q.id] || ''}
                onChange={(e) =>
                  setAnswers((prev) => ({
                    ...prev,
                    terms: { ...prev.terms, [q.id]: e.target.value },
                  }))
                }
                disabled={examStatus === 'submitted'}
                placeholder="在此输入你的名词解释答题内容..."
                className="w-full h-24 p-3 rounded-lg bg-stone-50/70 dark:bg-stone-900/40 border border-stone-300/80 dark:border-stone-700 text-xs sm:text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/40 disabled:opacity-80"
              />

              {/* After submit: standard definition & interactive rubric */}
              {examStatus === 'submitted' && (
                <div className="mt-3 border-l-2 border-stone-400/60 dark:border-stone-600/60 pl-4 space-y-2.5">
                  <div className="text-xs font-semibold text-stone-700 dark:text-stone-300">
                    权威参考定义：
                  </div>
                  <div className="text-xs leading-relaxed text-slate-700 dark:text-slate-200">
                    <MarkdownViewer content={q.definition} maskKeywords={false} />
                  </div>

                  <div className="pt-2 border-t border-dashed border-stone-300/60 dark:border-stone-700/60 flex items-center gap-3 text-xs">
                    <span className="font-medium text-stone-700 dark:text-stone-300">对照核对评分：</span>
                    <select
                      value={subjectiveScores.termScores[q.id] ?? 0}
                      onChange={(e) => {
                        const val = parseFloat(e.target.value);
                        setSubjectiveScores((prev) => ({
                          ...prev,
                          termScores: {
                            ...prev.termScores,
                            [q.id]: val,
                          },
                        }));
                      }}
                      className="px-2.5 py-1 rounded bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 font-mono"
                    >
                      <option value="0">0分</option>
                      <option value="1.0">1.0分 (部分答出)</option>
                      <option value="2.0">2.0分 (基本答对)</option>
                      <option value="3.0">3.0分 (满分，答准核心词)</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Fill-in (15 questions, 15pt) */}
      <div id="section-fillins">
        <div className="flex items-center justify-between mb-5 pb-2.5 border-b-2 border-double border-stone-400/70 dark:border-stone-600/70">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="font-mono font-bold text-teal-700 dark:text-teal-400">二、</span>
            填空题 (共15小题，每小题1分，共15分)
          </h3>
        </div>

        <div className="space-y-5">
          {paper.fillIns.map((q, idx) => {
            const userVal = (answers.fillIns[q.id] && answers.fillIns[q.id][0]) || '';
            const isMatch =
              examStatus === 'submitted' &&
              q.answers.some((ans) => ans.trim().toLowerCase() === userVal.trim().toLowerCase());

            return (
              <div
                key={q.id}
                className="pb-5 border-b border-dashed border-stone-300/70 dark:border-stone-700/70 last:border-b-0 last:pb-0"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="text-xs sm:text-sm font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
                    <span className="font-mono font-bold text-teal-700 dark:text-teal-400 mr-1.5">
                      {idx + 1}.
                    </span>
                    {q.stem}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <input
                    type="text"
                    value={userVal}
                    onChange={(e) =>
                      setAnswers((prev) => ({
                        ...prev,
                        fillIns: { ...prev.fillIns, [q.id]: [e.target.value] },
                      }))
                    }
                    disabled={examStatus === 'submitted'}
                    placeholder="填写关键词..."
                    className="w-64 px-3 py-1.5 rounded-md bg-stone-50/70 dark:bg-stone-900/40 border border-stone-300/80 dark:border-stone-700 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/40"
                  />

                  {examStatus === 'submitted' && (
                    <div className="flex items-center gap-1.5 text-xs font-mono">
                      {isMatch ? (
                        <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                          <CheckCircle2 className="w-4 h-4" /> 正确 (+1分)
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-red-500 font-semibold">
                          <XCircle className="w-4 h-4" /> 参考答案：{q.answers.join(' / ')}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section 3: Single Choice (15 questions, 15pt) */}
      <div id="section-single">
        <div className="flex items-center justify-between mb-5 pb-2.5 border-b-2 border-double border-stone-400/70 dark:border-stone-600/70">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400">三、</span>
            单项选择题 (共15小题，每小题1分，共15分)
          </h3>
        </div>

        <div className="space-y-6">
          {paper.singleChoices.map((q, idx) => {
            const userChoice = answers.singleChoices[q.id] || '';
            const isCorrect = userChoice === q.correctKey;

            return (
              <div
                key={q.id}
                className="pb-6 border-b border-dashed border-stone-300/70 dark:border-stone-700/70 last:border-b-0 last:pb-0"
              >
                <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  <span className="font-mono text-indigo-700 dark:text-indigo-400 mr-1.5">
                    {idx + 1}.
                  </span>
                  {q.stem}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {(['A', 'B', 'C', 'D'] as const).map((optKey) => {
                    const isSelected = userChoice === optKey;
                    let optStyle =
                      'bg-transparent text-slate-700 dark:text-slate-300 border-stone-300/70 dark:border-stone-700 hover:bg-stone-100/50 dark:hover:bg-stone-800/40';

                    if (examStatus === 'testing') {
                      if (isSelected) {
                        optStyle = 'bg-indigo-600 text-white font-semibold border-indigo-600';
                      }
                    } else {
                      // Submitted mode
                      if (optKey === q.correctKey) {
                        optStyle = 'bg-emerald-600 text-white font-semibold border-emerald-600';
                      } else if (isSelected && !isCorrect) {
                        optStyle = 'bg-red-600 text-white font-semibold border-red-600';
                      }
                    }

                    return (
                      <button
                        key={optKey}
                        type="button"
                        onClick={() => {
                          if (examStatus === 'testing') {
                            setAnswers((prev) => ({
                              ...prev,
                              singleChoices: { ...prev.singleChoices, [q.id]: optKey },
                            }));
                          }
                        }}
                        disabled={examStatus === 'submitted'}
                        className={`flex items-start gap-2 p-2.5 rounded-md border text-left transition-colors cursor-pointer ${optStyle}`}
                      >
                        <span className="font-mono font-bold">{optKey}.</span>
                        <span>{q.options[optKey]}</span>
                      </button>
                    );
                  })}
                </div>

                {examStatus === 'submitted' && (
                  <div className="mt-3 border-l-2 border-stone-400/60 dark:border-stone-600/60 pl-3 text-xs space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-stone-700 dark:text-stone-300">正确答案：</span>
                      <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                        {q.correctKey}
                      </span>
                      <span className="text-stone-400">|</span>
                      <span className="text-stone-500 dark:text-stone-400">你的选择：</span>
                      <span
                        className={`font-mono font-bold ${
                          isCorrect ? 'text-emerald-600' : 'text-red-500'
                        }`}
                      >
                        {userChoice || '未作答'}
                      </span>
                    </div>
                    <div className="text-stone-600 dark:text-stone-400 leading-relaxed">
                      <strong>解析：</strong>
                      {q.rationale}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Section 4: True/False (15 questions, 15pt) */}
      <div id="section-tf">
        <div className="flex items-center justify-between mb-5 pb-2.5 border-b-2 border-double border-stone-400/70 dark:border-stone-600/70">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="font-mono font-bold text-orange-700 dark:text-orange-400">四、</span>
            判断改错题 (共15小题，每小题1分，共15分)
          </h3>
        </div>

        <div className="space-y-6">
          {paper.trueFalse.map((q, idx) => {
            const userVal = answers.trueFalse[q.id];
            const isCorrect = userVal === q.isCorrect;

            return (
              <div
                key={q.id}
                className="pb-6 border-b border-dashed border-stone-300/70 dark:border-stone-700/70 last:border-b-0 last:pb-0"
              >
                <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  <span className="font-mono text-orange-700 dark:text-orange-400 mr-1.5">
                    {idx + 1}.
                  </span>
                  {q.statement}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      if (examStatus === 'testing') {
                        setAnswers((prev) => ({
                          ...prev,
                          trueFalse: { ...prev.trueFalse, [q.id]: true },
                        }));
                      }
                    }}
                    disabled={examStatus === 'submitted'}
                    className={`px-4 py-1.5 rounded-md text-xs font-semibold border transition-colors cursor-pointer ${
                      userVal === true
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-transparent text-stone-700 dark:text-stone-300 border-stone-300/80 dark:border-stone-700 hover:bg-stone-100/50 dark:hover:bg-stone-800/40'
                    }`}
                  >
                    正确 (✓)
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (examStatus === 'testing') {
                        setAnswers((prev) => ({
                          ...prev,
                          trueFalse: { ...prev.trueFalse, [q.id]: false },
                        }));
                      }
                    }}
                    disabled={examStatus === 'submitted'}
                    className={`px-4 py-1.5 rounded-md text-xs font-semibold border transition-colors cursor-pointer ${
                      userVal === false
                        ? 'bg-red-600 text-white border-red-600'
                        : 'bg-transparent text-stone-700 dark:text-stone-300 border-stone-300/80 dark:border-stone-700 hover:bg-stone-100/50 dark:hover:bg-stone-800/40'
                    }`}
                  >
                    错误 (✕)
                  </button>

                  {examStatus === 'submitted' && (
                    <div className="ml-2 text-xs font-mono font-bold">
                      {isCorrect ? (
                        <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" /> 答对 (+1分)
                        </span>
                      ) : (
                        <span className="text-red-500 flex items-center gap-1">
                          <XCircle className="w-4 h-4" /> 答错 (正确判定为：{q.isCorrect ? '正确' : '错误'})
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {examStatus === 'submitted' && q.errorCorrection && (
                  <div className="mt-3 border-l-2 border-stone-400/60 dark:border-stone-600/60 pl-3 text-xs text-stone-600 dark:text-stone-400">
                    <strong>辨析与改错要点：</strong>
                    {q.errorCorrection}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Section 5: Short Answer (3 questions, 20pt) */}
      <div id="section-short">
        <div className="flex items-center justify-between mb-5 pb-2.5 border-b-2 border-double border-stone-400/70 dark:border-stone-600/70">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="font-mono font-bold text-pink-700 dark:text-pink-400">五、</span>
            简答题 (共3小题，第1、2题各6分，第3题8分，共20分)
          </h3>
        </div>

        <div className="space-y-6">
          {paper.shortAnswers.map((q, idx) => (
            <div
              key={q.id}
              className="pb-6 border-b border-dashed border-stone-300/70 dark:border-stone-700/70 last:border-b-0 last:pb-0"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-mono text-sm font-bold text-slate-900 dark:text-white">
                  {idx + 1}. {q.question} ({q.totalPoints}分)
                </span>
              </div>

              <textarea
                value={answers.shortAnswers[q.id] || ''}
                onChange={(e) =>
                  setAnswers((prev) => ({
                    ...prev,
                    shortAnswers: { ...prev.shortAnswers, [q.id]: e.target.value },
                  }))
                }
                disabled={examStatus === 'submitted'}
                placeholder="按条列出核心答题要点..."
                className="w-full h-32 p-3 rounded-lg bg-stone-50/70 dark:bg-stone-900/40 border border-stone-300/80 dark:border-stone-700 text-xs sm:text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-500/40 disabled:opacity-80"
              />

              {examStatus === 'submitted' && (
                <div className="mt-3 border-l-2 border-stone-400/60 dark:border-stone-600/60 pl-4 space-y-2.5">
                  <div className="text-xs font-semibold text-stone-700 dark:text-stone-300">
                    参考要点与对照核对 (共{q.totalPoints}分)：
                  </div>

                  <div className="space-y-2">
                    {q.rubricPoints.map((r, rIdx) => {
                      const isChecked = subjectiveScores.shortAnswerScores[q.id]?.[rIdx] ?? true;

                      return (
                        <label
                          key={rIdx}
                          className="flex items-start gap-2 text-xs text-stone-700 dark:text-stone-300 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={(e) => {
                              const checked = e.target.checked;
                              setSubjectiveScores((prev) => ({
                                ...prev,
                                shortAnswerScores: {
                                  ...prev.shortAnswerScores,
                                  [q.id]: {
                                    ...(prev.shortAnswerScores[q.id] || {}),
                                    [rIdx]: checked,
                                  },
                                },
                              }));
                            }}
                            className="mt-0.5 rounded text-pink-600 focus:ring-pink-500"
                          />
                          <span>
                            <strong>要点 {rIdx + 1} ({r.score}分)：</strong> {r.point}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Section 6: Essay Question (1 question, 20pt) */}
      <div id="section-essay">
        <div className="flex items-center justify-between mb-5 pb-2.5 border-b-2 border-double border-stone-400/70 dark:border-stone-600/70">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="font-mono font-bold text-red-700 dark:text-red-400">六、</span>
            论述题 (共1小题，共20分)
          </h3>
        </div>

        <div>
          <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-3">
            {paper.essay.question}
          </h4>

          <textarea
            value={answers.essay[paper.essay.id] || ''}
            onChange={(e) =>
              setAnswers((prev) => ({
                ...prev,
                essay: { ...prev.essay, [paper.essay.id]: e.target.value },
              }))
            }
            disabled={examStatus === 'submitted'}
            placeholder="展开理论阐述、传导机制分析与现实政策联系..."
            className="w-full h-48 p-4 rounded-lg bg-stone-50/70 dark:bg-stone-900/40 border border-stone-300/80 dark:border-stone-700 text-xs sm:text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500/40 disabled:opacity-80"
          />

          {examStatus === 'submitted' && (
            <div className="mt-4 border-l-2 border-stone-400/60 dark:border-stone-600/60 pl-4 space-y-4 text-xs">
              <div className="font-semibold text-stone-700 dark:text-stone-300">
                论述题参考维度与核对要点 (满分20分)：
              </div>

              {/* Rubric dimensions */}
              <div className="divide-y divide-dashed divide-stone-300/70 dark:divide-stone-700/70">
                {/* 1. Theory (4pt) */}
                <div className="py-3 first:pt-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-900 dark:text-slate-100">
                      一、基础理论界定 (满分4分)
                    </span>
                    <label className="flex items-center gap-1 font-mono">
                      <span>打分:</span>
                      <select
                        value={subjectiveScores.essayScores.theory}
                        onChange={(e) =>
                          setSubjectiveScores((prev) => ({
                            ...prev,
                            essayScores: { ...prev.essayScores, theory: parseInt(e.target.value) },
                          }))
                        }
                        className="px-2 py-0.5 rounded bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700"
                      >
                        {[0, 1, 2, 3, 4].map((v) => (
                          <option key={v} value={v}>
                            {v}分
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <p className="text-stone-600 dark:text-stone-400">{paper.essay.rubric.theory.desc}</p>
                </div>

                {/* 2. Mechanism (8pt) */}
                <div className="py-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-900 dark:text-slate-100">
                      二、传导机制与核心逻辑分析 (满分8分)
                    </span>
                    <label className="flex items-center gap-1 font-mono">
                      <span>打分:</span>
                      <select
                        value={subjectiveScores.essayScores.mechanism}
                        onChange={(e) =>
                          setSubjectiveScores((prev) => ({
                            ...prev,
                            essayScores: { ...prev.essayScores, mechanism: parseInt(e.target.value) },
                          }))
                        }
                        className="px-2 py-0.5 rounded bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700"
                      >
                        {[0, 2, 4, 6, 8].map((v) => (
                          <option key={v} value={v}>
                            {v}分
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <p className="text-stone-600 dark:text-stone-400">
                    {paper.essay.rubric.mechanism.desc}
                  </p>
                </div>

                {/* 3. Practice (6pt) */}
                <div className="py-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-900 dark:text-slate-100">
                      三、现实结合与政策实操分析 (满分6分)
                    </span>
                    <label className="flex items-center gap-1 font-mono">
                      <span>打分:</span>
                      <select
                        value={subjectiveScores.essayScores.practice}
                        onChange={(e) =>
                          setSubjectiveScores((prev) => ({
                            ...prev,
                            essayScores: { ...prev.essayScores, practice: parseInt(e.target.value) },
                          }))
                        }
                        className="px-2 py-0.5 rounded bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700"
                      >
                        {[0, 2, 4, 6].map((v) => (
                          <option key={v} value={v}>
                            {v}分
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <p className="text-stone-600 dark:text-stone-400">{paper.essay.rubric.practice.desc}</p>
                </div>

                {/* 4. Conclusion (2pt) */}
                <div className="py-3 last:pb-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-900 dark:text-slate-100">
                      四、总结与政策展望 (满分2分)
                    </span>
                    <label className="flex items-center gap-1 font-mono">
                      <span>打分:</span>
                      <select
                        value={subjectiveScores.essayScores.conclusion}
                        onChange={(e) =>
                          setSubjectiveScores((prev) => ({
                            ...prev,
                            essayScores: { ...prev.essayScores, conclusion: parseInt(e.target.value) },
                          }))
                        }
                        className="px-2 py-0.5 rounded bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700"
                      >
                        {[0, 1, 2].map((v) => (
                          <option key={v} value={v}>
                            {v}分
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <p className="text-stone-600 dark:text-stone-400">
                    {paper.essay.rubric.conclusion.desc}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
          </div>
        </div>
      </div>

  {/* Custom Submit Confirmation Modal (replaces native browser confirm) */}
  {submitConfirmOpen && (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 dark:bg-black/60 backdrop-blur-sm overscroll-contain"
      onClick={(e) => {
        if (e.target === e.currentTarget) setSubmitConfirmOpen(false);
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="submit-exam-modal-title"
        className="w-full max-w-sm rounded-xl bg-white dark:bg-[#191815] border border-stone-300 dark:border-stone-800 shadow-2xl p-6 space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <Send className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <h3 id="submit-exam-modal-title" className="text-base font-bold text-slate-900 dark:text-white">
              确定要提交试卷吗？
            </h3>
            <p className="text-xs text-stone-600 dark:text-stone-400 mt-0.5">
              交卷后将停止计时，并进入评分与解析查看模式。
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2.5 pt-2">
          <button
            type="button"
            onClick={() => setSubmitConfirmOpen(false)}
            className="px-4 py-2 rounded-md text-xs font-bold bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 transition-colors cursor-pointer"
          >
            继续作答
          </button>
          <button
            type="button"
            onClick={confirmSubmitExam}
            className="px-4 py-2 rounded-md text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors cursor-pointer"
          >
            确认交卷
          </button>
        </div>
      </div>
    </div>
  )}
</div>
  );
};
