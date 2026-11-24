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

export const MockExamCanvas: React.FC<MockExamCanvasProps> = ({
  termsBank,
  fillInsBank,
  singleChoicesBank,
  trueFalseBank,
  shortAnswersBank,
  essaysBank,
  onFinishExam,
}) => {
  // Exam State: 'idle' | 'testing' | 'submitted'
  const [examStatus, setExamStatus] = useState<'idle' | 'testing' | 'submitted'>('idle');

  // Countdown Timer: 120 minutes = 7200 seconds
  const [timeLeft, setTimeLeft] = useState<number>(120 * 60);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);

  // Active paper
  const [paper, setPaper] = useState<ExamPaper | null>(null);

  // User Answers
  const [answers, setAnswers] = useState<ExamUserAnswers>({
    terms: {},
    fillIns: {},
    singleChoices: {},
    trueFalse: {},
    shortAnswers: {},
    essay: {},
  });

  // User Subjective Self-Scoring
  const [subjectiveScores, setSubjectiveScores] = useState<{
    termScores: Record<number, number>;
    shortAnswerScores: Record<number, Record<number, boolean>>; // qId -> rubricIndex -> checked
    essayScores: { theory: number; mechanism: number; practice: number; conclusion: number };
  }>({
    termScores: {},
    shortAnswerScores: {},
    essayScores: { theory: 4, mechanism: 8, practice: 6, conclusion: 2 },
  });

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
    // 3 short answers (6+6+8 = 20pt)
    const shuffledShort = [...shortAnswersBank].sort(() => 0.5 - Math.random()).slice(0, 3);
    if (shuffledShort.length >= 3) {
      shuffledShort[0].totalPoints = 6;
      shuffledShort[1].totalPoints = 6;
      shuffledShort[2].totalPoints = 8;
    }
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
      essayScores: { theory: 4, mechanism: 8, practice: 6, conclusion: 2 },
    });
    setExamStatus('testing');
  };

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

    // Terminology scores (self-scored: 0-3 pts)
    let termScore = 0;
    paper.terms.forEach((q) => {
      const s = subjectiveScores.termScores[q.id];
      termScore += (s !== undefined ? s : 3.0);
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
    if (window.confirm('确定要提交试卷吗？交卷后将进入评分与解析查看模式。')) {
      setTimerRunning(false);
      setExamStatus('submitted');
      if (onFinishExam && scoreResults) {
        onFinishExam({
          date: new Date().toISOString(),
          durationSecondsUsed: 120 * 60 - timeLeft,
          scores: scoreResults,
        });
      }
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
      <div className="flex-1 w-full h-full overflow-y-auto px-4 py-12 flex flex-col items-center">
        <div className="w-full max-w-3xl p-8 rounded-3xl bg-white/90 dark:bg-slate-800/90 border border-slate-200/70 dark:border-slate-700/70 clay-card-shadow text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-400 text-white flex items-center justify-center clay-button-shadow">
            <Award className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            中央银行学 期末模考全真试卷
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto mb-8">
            严格按照期末考试标准分值与题型结构命制：120分钟倒计时，全卷共100分。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg mx-auto mb-8 text-left text-xs">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
              <span className="text-slate-400 block mb-1">一、名词解释</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">5题 · 15分 (每题3分)</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
              <span className="text-slate-400 block mb-1">二、填空题</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">15题 · 15分 (每题1分)</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
              <span className="text-slate-400 block mb-1">三、单项选择题</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">15题 · 15分 (每题1分)</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
              <span className="text-slate-400 block mb-1">四、判断改错题</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">15题 · 15分 (每题1分)</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
              <span className="text-slate-400 block mb-1">五、简答题</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">3题 · 20分 (6+6+8分)</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
              <span className="text-slate-400 block mb-1">六、论述题</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">1题 · 20分 (宏观大题)</span>
            </div>
          </div>

          <button
            onClick={generateNewPaper}
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-base shadow-lg clay-button-shadow clay-squash"
          >
            开始生成试卷并作答 (120分钟)
          </button>
        </div>
      </div>
    );
  }

  if (!paper) return null;

  return (
    <div className="flex-1 w-full h-full flex flex-col overflow-hidden bg-slate-50/50 dark:bg-[#0b0f17]">
      {/* 1. Fixed Top Exam Header (Pinned permanently, zero floating overlap!) */}
      <div className="bg-white/95 dark:bg-[#151b26]/95 border-b border-slate-200/80 dark:border-slate-800 px-6 py-3.5 shrink-0 flex items-center justify-between gap-4 shadow-xs z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <Timer className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">期末模考倒计时</div>
            <div
              className={`text-xl font-mono font-bold ${
                timeLeft < 15 * 60
                  ? 'text-red-500 animate-pulse'
                  : 'text-slate-800 dark:text-slate-100'
              }`}
            >
              {formatCountdown(timeLeft)}
            </div>
          </div>
        </div>

        {/* Section Indicators */}
        <div className="hidden lg:flex items-center gap-1.5 text-xs">
          <span className="font-semibold text-slate-400">试卷题型架构:</span>
          <span className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">一·名词(15分)</span>
          <span className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">二·填空(15分)</span>
          <span className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">三·单选(15分)</span>
          <span className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">四·判断(15分)</span>
          <span className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">五·简答(20分)</span>
          <span className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">六·论述(20分)</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {examStatus === 'testing' ? (
            <button
              onClick={handleSubmitExam}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs clay-button-shadow clay-squash cursor-pointer shadow-md"
            >
              <Send className="w-3.5 h-3.5" />
              <span>交卷评分</span>
            </button>
          ) : (
            <button
              onClick={generateNewPaper}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs clay-button-shadow clay-squash cursor-pointer shadow-md"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>再练一套新卷</span>
            </button>
          )}
        </div>
      </div>

      {/* 2. Scrollable Exam Paper Body (Zero overlapping, smooth scrolling!) */}
      <div className="flex-1 w-full overflow-y-auto px-4 py-6">
        <div className="max-w-4xl mx-auto space-y-8">

      {/* Submitted Score Summary Card */}
      {examStatus === 'submitted' && scoreResults && (
        <div className="p-6 rounded-3xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-emerald-400/50 clay-card-shadow mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                期末模考成绩单
              </span>
              <div className="text-3xl font-bold font-mono text-slate-900 dark:text-white mt-1">
                {scoreResults.total.toFixed(1)}{' '}
                <span className="text-sm font-normal text-slate-400">/ 100 分</span>
              </div>
            </div>

            <div className="text-xs text-slate-500 dark:text-slate-400">
              用时：{Math.floor((120 * 60 - timeLeft) / 60)} 分钟
            </div>
          </div>

          {/* Breakdown Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-xs font-mono">
            <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
              <span className="text-[10px] text-slate-400 block">一、名词解释</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">
                {scoreResults.termScore.toFixed(1)} / 15
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
              <span className="text-[10px] text-slate-400 block">二、填空题</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">
                {scoreResults.fillInScore} / 15
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
              <span className="text-[10px] text-slate-400 block">三、单选题</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">
                {scoreResults.singleScore} / 15
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
              <span className="text-[10px] text-slate-400 block">四、判断改错</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">
                {scoreResults.tfScore} / 15
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
              <span className="text-[10px] text-slate-400 block">五、简答题</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">
                {scoreResults.shortScore} / 20
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
              <span className="text-[10px] text-slate-400 block">六、论述题</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">
                {scoreResults.essayScore} / 20
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Section 1: Terminology (5 questions, 15pt) */}
      <div id="section-terms" className="mb-10">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-sky-500 text-white flex items-center justify-center text-xs font-mono font-bold">
              一
            </span>
            名词解释 (共5小题，每小题3分，共15分)
          </h3>
          <span className="text-xs text-slate-400 font-mono">回答核心概念与内涵</span>
        </div>

        <div className="space-y-6">
          {paper.terms.map((q, idx) => (
            <div
              key={q.id}
              className="p-5 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-slate-200/70 dark:border-slate-700/70 clay-card-shadow"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-sky-600 dark:text-sky-400">
                  {idx + 1}. {q.term} (3分)
                </span>
                <span className="text-xs text-slate-400 font-mono">{q.chapterTitle}</span>
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
                className="w-full h-24 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/40 disabled:opacity-80"
              />

              {/* After submit: standard definition & interactive rubric */}
              {examStatus === 'submitted' && (
                <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-700/60 space-y-3">
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    权威参考定义：
                  </div>
                  <div className="text-xs leading-relaxed text-slate-700 dark:text-slate-200">
                    <MarkdownViewer content={q.definition} maskKeywords={false} />
                  </div>

                  <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800 flex items-center gap-3 text-xs">
                    <span className="font-medium text-slate-700 dark:text-slate-300">对照核对评分：</span>
                    <select
                      value={subjectiveScores.termScores[q.id] ?? 3.0}
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
                      className="px-2.5 py-1 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-mono"
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
      <div id="section-fillins" className="mb-10">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-teal-500 text-white flex items-center justify-center text-xs font-mono font-bold">
              二
            </span>
            填空题 (共15小题，每小题1分，共15分)
          </h3>
          <span className="text-xs text-slate-400 font-mono">精准关键词填空</span>
        </div>

        <div className="space-y-4">
          {paper.fillIns.map((q, idx) => {
            const userVal = (answers.fillIns[q.id] && answers.fillIns[q.id][0]) || '';
            const isMatch =
              examStatus === 'submitted' &&
              q.answers.some((ans) => ans.trim().toLowerCase() === userVal.trim().toLowerCase());

            return (
              <div
                key={q.id}
                className="p-4 rounded-xl bg-white/90 dark:bg-slate-800/90 border border-slate-200/70 dark:border-slate-700/70 clay-card-shadow"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                    <span className="font-mono font-bold text-teal-600 dark:text-teal-400 mr-1.5">
                      {idx + 1}.
                    </span>
                    {q.stem}
                  </div>
                </div>

                <div className="flex items-center gap-3">
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
                    className="w-64 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/40"
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
      <div id="section-single" className="mb-10">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-indigo-500 text-white flex items-center justify-center text-xs font-mono font-bold">
              三
            </span>
            单项选择题 (共15小题，每小题1分，共15分)
          </h3>
          <span className="text-xs text-slate-400 font-mono">四选一标准客观题</span>
        </div>

        <div className="space-y-4">
          {paper.singleChoices.map((q, idx) => {
            const userChoice = answers.singleChoices[q.id] || '';
            const isCorrect = userChoice === q.correctKey;

            return (
              <div
                key={q.id}
                className="p-5 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-slate-200/70 dark:border-slate-700/70 clay-card-shadow"
              >
                <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  <span className="font-mono text-indigo-600 dark:text-indigo-400 mr-1.5">
                    {idx + 1}.
                  </span>
                  {q.stem}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {(['A', 'B', 'C', 'D'] as const).map((optKey) => {
                    const isSelected = userChoice === optKey;
                    let optStyle =
                      'bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 border-slate-200/60 dark:border-slate-700';

                    if (examStatus === 'testing') {
                      if (isSelected) {
                        optStyle = 'bg-indigo-500 text-white font-semibold border-indigo-500';
                      }
                    } else {
                      // Submitted mode
                      if (optKey === q.correctKey) {
                        optStyle = 'bg-emerald-500 text-white font-semibold border-emerald-500';
                      } else if (isSelected && !isCorrect) {
                        optStyle = 'bg-red-500 text-white font-semibold border-red-500';
                      }
                    }

                    return (
                      <button
                        key={optKey}
                        onClick={() => {
                          if (examStatus === 'testing') {
                            setAnswers((prev) => ({
                              ...prev,
                              singleChoices: { ...prev.singleChoices, [q.id]: optKey },
                            }));
                          }
                        }}
                        disabled={examStatus === 'submitted'}
                        className={`flex items-start gap-2 p-2.5 rounded-xl border text-left transition-all clay-squash ${optStyle}`}
                      >
                        <span className="font-mono font-bold">{optKey}.</span>
                        <span>{q.options[optKey]}</span>
                      </button>
                    );
                  })}
                </div>

                {examStatus === 'submitted' && (
                  <div className="mt-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800 text-xs space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-700 dark:text-slate-300">正确答案：</span>
                      <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                        {q.correctKey}
                      </span>
                      <span className="text-slate-400">|</span>
                      <span className="text-slate-500 dark:text-slate-400">你的选择：</span>
                      <span
                        className={`font-mono font-bold ${
                          isCorrect ? 'text-emerald-600' : 'text-red-500'
                        }`}
                      >
                        {userChoice || '未作答'}
                      </span>
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 leading-relaxed">
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
      <div id="section-tf" className="mb-10">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-orange-500 text-white flex items-center justify-center text-xs font-mono font-bold">
              四
            </span>
            判断改错题 (共15小题，每小题1分，共15分)
          </h3>
          <span className="text-xs text-slate-400 font-mono">若错误须掌握正误辨析</span>
        </div>

        <div className="space-y-4">
          {paper.trueFalse.map((q, idx) => {
            const userVal = answers.trueFalse[q.id];
            const isCorrect = userVal === q.isCorrect;

            return (
              <div
                key={q.id}
                className="p-5 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-slate-200/70 dark:border-slate-700/70 clay-card-shadow"
              >
                <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  <span className="font-mono text-orange-600 dark:text-orange-400 mr-1.5">
                    {idx + 1}.
                  </span>
                  {q.statement}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      if (examStatus === 'testing') {
                        setAnswers((prev) => ({
                          ...prev,
                          trueFalse: { ...prev.trueFalse, [q.id]: true },
                        }));
                      }
                    }}
                    disabled={examStatus === 'submitted'}
                    className={`px-4 py-1.5 rounded-xl text-xs font-semibold border transition-all clay-squash ${
                      userVal === true
                        ? 'bg-emerald-500 text-white border-emerald-500'
                        : 'bg-slate-50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    正确 (✓)
                  </button>

                  <button
                    onClick={() => {
                      if (examStatus === 'testing') {
                        setAnswers((prev) => ({
                          ...prev,
                          trueFalse: { ...prev.trueFalse, [q.id]: false },
                        }));
                      }
                    }}
                    disabled={examStatus === 'submitted'}
                    className={`px-4 py-1.5 rounded-xl text-xs font-semibold border transition-all clay-squash ${
                      userVal === false
                        ? 'bg-red-500 text-white border-red-500'
                        : 'bg-slate-50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
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
                  <div className="mt-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
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
      <div id="section-short" className="mb-10">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-pink-500 text-white flex items-center justify-center text-xs font-mono font-bold">
              五
            </span>
            简答题 (共3小题，第1、2题各6分，第3题8分，共20分)
          </h3>
          <span className="text-xs text-slate-400 font-mono">条理要点给分</span>
        </div>

        <div className="space-y-6">
          {paper.shortAnswers.map((q, idx) => (
            <div
              key={q.id}
              className="p-5 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-slate-200/70 dark:border-slate-700/70 clay-card-shadow"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-pink-600 dark:text-pink-400">
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
                className="w-full h-32 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-500/40 disabled:opacity-80"
              />

              {examStatus === 'submitted' && (
                <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-700/60 space-y-3">
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    参考要点与对照核对 (共{q.totalPoints}分)：
                  </div>

                  <div className="space-y-2">
                    {q.rubricPoints.map((r, rIdx) => {
                      const isChecked = subjectiveScores.shortAnswerScores[q.id]?.[rIdx] ?? true;

                      return (
                        <label
                          key={rIdx}
                          className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 cursor-pointer"
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
      <div id="section-essay" className="mb-10">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-red-500 text-white flex items-center justify-center text-xs font-mono font-bold">
              六
            </span>
            论述题 (共1小题，共20分)
          </h3>
          <span className="text-xs text-slate-400 font-mono">货币政策与金融监管宏观综合大题</span>
        </div>

        <div className="p-6 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-slate-200/70 dark:border-slate-700/70 clay-card-shadow">
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
            className="w-full h-48 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500/40 disabled:opacity-80"
          />

          {examStatus === 'submitted' && (
            <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-700/60 space-y-4 text-xs">
              <div className="font-semibold text-slate-700 dark:text-slate-300">
                论述题参考维度与核对要点 (满分20分)：
              </div>

              {/* Rubric dimensions */}
              <div className="space-y-3">
                {/* 1. Theory (4pt) */}
                <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-800 dark:text-slate-200">
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
                        className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700"
                      >
                        {[0, 1, 2, 3, 4].map((v) => (
                          <option key={v} value={v}>
                            {v}分
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">{paper.essay.rubric.theory.desc}</p>
                </div>

                {/* 2. Mechanism (8pt) */}
                <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-800 dark:text-slate-200">
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
                        className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700"
                      >
                        {[0, 2, 4, 6, 8].map((v) => (
                          <option key={v} value={v}>
                            {v}分
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    {paper.essay.rubric.mechanism.desc}
                  </p>
                </div>

                {/* 3. Practice (6pt) */}
                <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-800 dark:text-slate-200">
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
                        className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700"
                      >
                        {[0, 2, 4, 6].map((v) => (
                          <option key={v} value={v}>
                            {v}分
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">{paper.essay.rubric.practice.desc}</p>
                </div>

                {/* 4. Conclusion (2pt) */}
                <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-800 dark:text-slate-200">
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
                        className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700"
                      >
                        {[0, 1, 2].map((v) => (
                          <option key={v} value={v}>
                            {v}分
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
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
  );
};
