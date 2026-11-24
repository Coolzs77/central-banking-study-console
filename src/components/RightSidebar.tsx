import React, { useState } from 'react';
import {
  CheckCircle2,
  Star,
  CircleDashed,
  Target,
  Filter,
  Layers,
  BookOpen,
  Award,
  Check,
  Circle,
  Clock,
} from 'lucide-react';
import {
  RecitationQuestion,
  HomeworkQuestion,
  TerminologyQuestion,
} from '../data/types';

interface RightSidebarProps {
  currentMode: 'recitation' | 'homework' | 'practice' | 'exam';
  // Recitation
  recitationQuestions: RecitationQuestion[];
  memorizedList: number[];
  starredList: number[];
  selectedQuestionId: number | null;
  onSelectRecitationQuestion: (id: number) => void;
  activeFilter: 'all' | 'memorized' | 'unmemorized' | 'starred';
  onSelectFilter: (filter: 'all' | 'memorized' | 'unmemorized' | 'starred') => void;
  pointFilter: number | null;
  onSelectPointFilter: (pts: number | null) => void;
  // Homework
  homeworkQuestions: HomeworkQuestion[];
  homeworkCompletedList: number[];
  selectedHomeworkId: number | null;
  onSelectHomeworkQuestion: (id: number) => void;
  selectedHomeworkChapter: number | null;
  onSelectHomeworkChapter: (ch: number | null) => void;
  // Practice
  terminologyList: TerminologyQuestion[];
  termMemorizedList: number[];
  selectedTermId: number | null;
  onSelectTerm: (id: number) => void;
  // Exam
  examAnsweredCount?: number;
  totalExamQuestions?: number;
  onJumpExamQuestion?: (idx: number) => void;
  className?: string;
}

export const RightSidebar: React.FC<RightSidebarProps> = ({
  currentMode,
  recitationQuestions,
  memorizedList,
  starredList,
  selectedQuestionId,
  onSelectRecitationQuestion,
  activeFilter,
  onSelectFilter,
  pointFilter,
  onSelectPointFilter,
  homeworkQuestions,
  homeworkCompletedList,
  selectedHomeworkId,
  onSelectHomeworkQuestion,
  selectedHomeworkChapter,
  onSelectHomeworkChapter,
  terminologyList,
  termMemorizedList,
  selectedTermId,
  onSelectTerm,
  examAnsweredCount = 0,
  totalExamQuestions = 40,
  onJumpExamQuestion,
  className = '',
}) => {
  return (
    <aside
      className={`w-72 lg:w-80 shrink-0 h-full bg-white/95 border-l border-slate-200/90 flex flex-col overflow-hidden text-slate-800 ${className}`}
    >
      {/* ================= MODE 1: RECITATION ================= */}
      {currentMode === 'recitation' && (
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-slate-100 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-bold text-slate-900">背诵题阵列</h3>
              </div>
              <span className="text-xs font-semibold text-slate-500">
                {memorizedList.length} / {recitationQuestions.length} ({Math.round((memorizedList.length / recitationQuestions.length) * 100)}%)
              </span>
            </div>

            {/* Filter Pills */}
            <div className="grid grid-cols-2 gap-1.5 text-xs">
              <button
                onClick={() => onSelectFilter('all')}
                className={`py-1.5 px-2 rounded-lg font-medium transition cursor-pointer text-center ${
                  activeFilter === 'all'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                全部 ({recitationQuestions.length})
              </button>
              <button
                onClick={() => onSelectFilter('memorized')}
                className={`py-1.5 px-2 rounded-lg font-medium transition cursor-pointer text-center ${
                  activeFilter === 'memorized'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                }`}
              >
                已背会 ({memorizedList.length})
              </button>
              <button
                onClick={() => onSelectFilter('unmemorized')}
                className={`py-1.5 px-2 rounded-lg font-medium transition cursor-pointer text-center ${
                  activeFilter === 'unmemorized'
                    ? 'bg-slate-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                未背 ({recitationQuestions.length - memorizedList.length})
              </button>
              <button
                onClick={() => onSelectFilter('starred')}
                className={`py-1.5 px-2 rounded-lg font-medium transition cursor-pointer text-center ${
                  activeFilter === 'starred'
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
                }`}
              >
                收藏 ({starredList.length})
              </button>
            </div>

            {/* Point Filter */}
            <div className="pt-1 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1 font-medium">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                考点分值:
              </span>
              <div className="flex items-center gap-1">
                {[null, 2, 3, 4, 5].map((pts) => (
                  <button
                    key={pts === null ? 'all' : pts}
                    onClick={() => onSelectPointFilter(pts)}
                    className={`px-1.5 py-0.5 rounded text-[11px] font-bold cursor-pointer transition ${
                      pointFilter === pts
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {pts === null ? '全' : `${pts}点`}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 161 Question Heatmap Matrix */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
              全书 161 题矩阵图 (点击直达)
            </div>
            <div className="grid grid-cols-7 gap-1.5">
              {recitationQuestions.map((q) => {
                const isMem = memorizedList.includes(q.id);
                const isStar = starredList.includes(q.id);
                const isSelected = selectedQuestionId === q.id;

                let cellClass = 'bg-slate-100 text-slate-600 hover:bg-slate-200 border-slate-200';
                if (isMem) {
                  cellClass = 'bg-emerald-500 text-white border-emerald-600 font-bold';
                } else if (isStar) {
                  cellClass = 'bg-amber-400 text-amber-950 border-amber-500 font-bold';
                }

                if (isSelected) {
                  cellClass += ' ring-2 ring-blue-600 ring-offset-1 scale-105 z-10';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => onSelectRecitationQuestion(q.id)}
                    title={`第${q.id}题: ${q.title} (${q.points}点)`}
                    className={`h-8 rounded-lg border text-xs flex flex-col items-center justify-center transition-all cursor-pointer ${cellClass}`}
                  >
                    <span>{q.id}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ================= MODE 2: HOMEWORK ================= */}
      {currentMode === 'homework' && (
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          <div className="p-4 border-b border-slate-100 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-bold text-slate-900">作业题目录</h3>
              </div>
              <span className="text-xs font-bold text-emerald-600">
                {homeworkCompletedList.length} / {homeworkQuestions.length} 已做
              </span>
            </div>

            {/* Chapter quick filter */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <button
                onClick={() => onSelectHomeworkChapter(null)}
                className={`px-2 py-1 text-xs rounded-md font-semibold transition cursor-pointer ${
                  selectedHomeworkChapter === null
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                全部
              </button>
              {Array.from({ length: 11 }, (_, i) => i + 1).map((ch) => (
                <button
                  key={ch}
                  onClick={() => onSelectHomeworkChapter(ch)}
                  className={`px-2 py-1 text-xs rounded-md font-semibold transition cursor-pointer ${
                    selectedHomeworkChapter === ch
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  第{ch}章
                </button>
              ))}
            </div>
          </div>

          {/* Homework list */}
          <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
            {homeworkQuestions
              .filter((q) => !selectedHomeworkChapter || q.chapterId === selectedHomeworkChapter)
              .map((q) => {
                const isCompleted = homeworkCompletedList.includes(q.id);
                const isSelected = selectedHomeworkId === q.id;

                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      onSelectHomeworkQuestion(q.id);
                      const el = document.getElementById(`homework-card-${q.id}`);
                      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                    className={`w-full p-2.5 rounded-xl border text-left transition flex items-start gap-2 text-xs cursor-pointer ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50/60 font-semibold'
                        : isCompleted
                        ? 'border-emerald-200 bg-emerald-50/20 text-slate-700'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                    }`}
                  >
                    <span className="shrink-0 mt-0.5">
                      {isCompleted ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" />
                      ) : (
                        <Circle className="w-3.5 h-3.5 text-slate-300" />
                      )}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-slate-400">
                          {q.chapterId}-{q.questionNumber}
                        </span>
                        <span className="truncate text-slate-800 font-medium">
                          {q.questionTitle}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
          </div>
        </div>
      )}

      {/* ================= MODE 3: PRACTICE ================= */}
      {currentMode === 'practice' && (
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          <div className="p-4 border-b border-slate-100 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-bold text-slate-900">核心名词索引</h3>
              </div>
              <span className="text-xs font-bold text-emerald-600">
                {termMemorizedList.length} / {terminologyList.length} 词
              </span>
            </div>
            <p className="text-xs text-slate-400">
              包含作业本第5章、第8章全部名词解释及各章核心考查概念
            </p>
          </div>

          {/* 30 Terms Matrix */}
          <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
            {terminologyList.map((t) => {
              const isMem = termMemorizedList.includes(t.id);
              const isSelected = selectedTermId === t.id;

              return (
                <button
                  key={t.id}
                  onClick={() => onSelectTerm(t.id)}
                  className={`w-full p-2.5 rounded-xl border text-left transition flex items-center justify-between text-xs cursor-pointer ${
                    isSelected
                      ? 'border-blue-500 bg-blue-50 text-blue-900 font-bold shadow-xs'
                      : isMem
                      ? 'border-emerald-200 bg-emerald-50/30 text-emerald-900'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-mono text-slate-500 shrink-0">
                      {t.id}
                    </span>
                    <span className="truncate font-semibold">{t.term}</span>
                  </div>
                  {isMem && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ================= MODE 4: EXAM ================= */}
      {currentMode === 'exam' && (
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          <div className="p-4 border-b border-slate-100 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-600" />
                <h3 className="text-sm font-bold text-slate-900">模考答题卡</h3>
              </div>
              <span className="text-xs font-bold text-purple-700">
                120 分钟标准
              </span>
            </div>
            <div className="text-xs text-slate-500 flex items-center justify-between">
              <span>已答题数：</span>
              <span className="font-bold text-slate-800">
                {examAnsweredCount} / {totalExamQuestions}
              </span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="p-3 bg-purple-50/60 rounded-xl border border-purple-200 text-xs text-purple-900 space-y-1">
              <div className="font-bold">期末题型分布 (100分)：</div>
              <div>1. 名词解释：5题 × 3分 = 15分</div>
              <div>2. 填空题：15空 × 1分 = 15分</div>
              <div>3. 单选题：15题 × 1分 = 15分</div>
              <div>4. 判断改错：15题 × 1分 = 15分</div>
              <div>5. 简答题：3题 (6+6+8) = 20分</div>
              <div>6. 论述题：1题 × 20分 = 20分</div>
            </div>

            <div className="text-xs text-slate-400">
              请在主界面完成作答并点击交卷评分。
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};
