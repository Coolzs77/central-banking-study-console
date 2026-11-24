import React, { useState } from 'react';
import {
  Edit3,
  Copy,
  Check,
  CheckCircle2,
  Circle,
  BookOpen,
  Filter,
} from 'lucide-react';
import { HomeworkQuestion } from '../data/types';

interface HomeworkCanvasProps {
  questions: HomeworkQuestion[];
  completedList: number[];
  onToggleCompleted: (id: number) => void;
  selectedChapterId?: number | null;
  onSelectChapter?: (id: number | null) => void;
}

export const HomeworkCanvas: React.FC<HomeworkCanvasProps> = ({
  questions,
  completedList,
  onToggleCompleted,
  selectedChapterId = null,
  onSelectChapter,
}) => {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const totalQuestions = questions.length;
  const completedCount = completedList.length;
  const percentCompleted = totalQuestions > 0 ? Math.round((completedCount / totalQuestions) * 100) : 0;

  const filteredQuestions = selectedChapterId
    ? questions.filter((q) => q.chapterId === selectedChapterId)
    : questions;

  const handleCopyAnswer = (id: number, answerText: string) => {
    navigator.clipboard.writeText(answerText).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <div className="flex-1 max-w-4xl mx-auto px-4 py-6">
      {/* Header Banner */}
      <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 clay-card-shadow backdrop-blur-sm mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Edit3 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-base text-slate-800 dark:text-slate-100">
                平时作业本 (54题极简手写版)
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                精练字数 · 条理清晰 · 贴合课后思考题原题 · 支持一键复制与抄写打卡
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1.5 rounded-xl border border-emerald-200/50 dark:border-emerald-800/50">
              已抄完 {completedCount} / {totalQuestions} 题 ({percentCompleted}%)
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-700/60 overflow-hidden clay-inset-groove">
          <div
            className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-500"
            style={{ width: `${percentCompleted}%` }}
          />
        </div>
      </div>

      {/* Questions list */}
      <div className="space-y-6">
        {filteredQuestions.map((q) => {
          const isDone = completedList.includes(q.id);
          const isCopied = copiedId === q.id;

          return (
            <div
              key={q.id}
              className={`p-6 rounded-2xl border transition-all clay-card-shadow ${
                isDone
                  ? 'bg-emerald-50/30 dark:bg-emerald-950/10 border-emerald-200/60 dark:border-emerald-800/40'
                  : 'bg-white/90 dark:bg-slate-800/90 border-slate-200/70 dark:border-slate-700/70'
              }`}
            >
              {/* Question header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-xs px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200/40 dark:border-emerald-800/40 clay-badge-shadow">
                    第 {q.id} 题
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {q.chapterTitle}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopyAnswer(q.id, q.answer)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 bg-slate-100 dark:bg-slate-700/70 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-all clay-squash"
                    title="复制精炼标准答案到剪贴板"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-600 font-semibold">已复制</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>复制答案</span>
                      </>
                    )}
                  </button>

                  {/* Completed Checkbox Button */}
                  <button
                    onClick={() => onToggleCompleted(q.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all clay-squash ${
                      isDone
                        ? 'bg-emerald-500 text-white font-semibold clay-button-shadow'
                        : 'bg-slate-100 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                    }`}
                  >
                    {isDone ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>已抄完</span>
                      </>
                    ) : (
                      <>
                        <Circle className="w-3.5 h-3.5 text-slate-400" />
                        <span>标记已抄</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Question Text */}
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-3">
                {q.question}
              </h3>

              {/* Handwritten Paper Style Answer Box */}
              <div className="p-4 rounded-xl bg-[#faf8f5] dark:bg-slate-900/60 border border-[#eee6dc] dark:border-slate-800 text-slate-800 dark:text-slate-200 text-sm leading-relaxed whitespace-pre-wrap font-sans selection:bg-amber-200 dark:selection:bg-slate-700">
                {q.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
