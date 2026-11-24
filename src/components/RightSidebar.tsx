import React, { useState } from 'react';
import {
  CheckCircle2,
  Zap,
  Star,
  CircleDashed,
  Target,
  Filter,
} from 'lucide-react';
import { MasteryStatus, RecitationQuestion } from '../data/types';

interface RightSidebarProps {
  questions: RecitationQuestion[];
  masteryMap: Record<number, MasteryStatus>;
  starredList: number[];
  onSelectFilter: (filter: 'all' | 'mastered' | 'reviewing' | 'unlearned' | 'starred') => void;
  activeFilter: 'all' | 'mastered' | 'reviewing' | 'unlearned' | 'starred';
  pointFilter: number | null; // e.g. 3, 4 (>=4), etc.
  onSelectPointFilter: (pts: number | null) => void;
  className?: string;
}

export const RightSidebar: React.FC<RightSidebarProps> = ({
  questions,
  masteryMap,
  starredList,
  onSelectFilter,
  activeFilter,
  pointFilter,
  onSelectPointFilter,
  className = '',
}) => {
  const totalQuestions = questions.length;
  const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);

  const masteredCount = questions.filter((q) => masteryMap[q.id] === 'mastered').length;
  const reviewingCount = questions.filter((q) => masteryMap[q.id] === 'reviewing').length;
  const unlearnedCount = totalQuestions - masteredCount - reviewingCount;
  const starredCount = starredList.length;

  const masteredPoints = questions
    .filter((q) => masteryMap[q.id] === 'mastered')
    .reduce((sum, q) => sum + q.points, 0);

  const percentMastered = totalQuestions > 0 ? Math.round((masteredCount / totalQuestions) * 100) : 0;

  const scrollToQuestion = (id: number) => {
    const el = document.getElementById(`q-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('ring-2', 'ring-sky-500', 'ring-offset-2');
      setTimeout(() => {
        el.classList.remove('ring-2', 'ring-sky-500', 'ring-offset-2');
      }, 1500);
    }
  };

  return (
    <aside
      className={`w-80 flex-shrink-0 flex flex-col h-[calc(100vh-4rem)] sticky top-16 border-l border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto ${className}`}
    >
      {/* Progress Dashboard Card */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/60 dark:border-slate-700/60 clay-card-shadow mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
            <Target className="w-4 h-4 text-sky-500" />
            背诵掌握仪表盘
          </span>
          <span className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400">
            {percentMastered}%
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-700/60 overflow-hidden clay-inset-groove mb-3">
          <div
            className="h-full bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full transition-all duration-500"
            style={{ width: `${percentMastered}%` }}
          />
        </div>

        {/* Metric Badges */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
            <div className="text-[10px] text-slate-400">已吃透题目</div>
            <div className="font-bold text-emerald-600 dark:text-emerald-400 text-sm mt-0.5">
              {masteredCount}{' '}
              <span className="text-[11px] font-normal text-slate-400">/ {totalQuestions}</span>
            </div>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
            <div className="text-[10px] text-slate-400">已吃透分值</div>
            <div className="font-bold text-sky-600 dark:text-sky-400 text-sm mt-0.5">
              {masteredPoints}{' '}
              <span className="text-[11px] font-normal text-slate-400">/ {totalPoints}分</span>
            </div>
          </div>
        </div>
      </div>

      {/* Status Filter Buttons */}
      <div className="space-y-1 mb-4">
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-1 mb-1.5 flex items-center justify-between">
          <span className="flex items-center gap-1">
            <Filter className="w-3 h-3" /> 状态筛选
          </span>
        </div>

        <div className="grid grid-cols-3 gap-1.5 text-xs">
          <button
            onClick={() => onSelectFilter('all')}
            className={`py-1.5 px-2 rounded-xl transition-all clay-squash text-center font-medium ${
              activeFilter === 'all'
                ? 'bg-sky-500 text-white font-semibold clay-button-shadow'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            全部 ({totalQuestions})
          </button>
          <button
            onClick={() => onSelectFilter('mastered')}
            className={`py-1.5 px-2 rounded-xl transition-all clay-squash text-center font-medium ${
              activeFilter === 'mastered'
                ? 'bg-emerald-500 text-white font-semibold clay-button-shadow'
                : 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30'
            }`}
          >
            已吃透 ({masteredCount})
          </button>
          <button
            onClick={() => onSelectFilter('reviewing')}
            className={`py-1.5 px-2 rounded-xl transition-all clay-squash text-center font-medium ${
              activeFilter === 'reviewing'
                ? 'bg-amber-400 text-slate-900 font-semibold clay-button-shadow'
                : 'bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30'
            }`}
          >
            待复习 ({reviewingCount})
          </button>
        </div>

        <div className="grid grid-cols-2 gap-1.5 text-xs pt-1">
          <button
            onClick={() => onSelectFilter('unlearned')}
            className={`py-1.5 px-2 rounded-xl transition-all clay-squash text-center font-medium ${
              activeFilter === 'unlearned'
                ? 'bg-slate-700 text-white font-semibold clay-button-shadow'
                : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            未掌握 ({unlearnedCount})
          </button>
          <button
            onClick={() => onSelectFilter('starred')}
            className={`py-1.5 px-2 rounded-xl transition-all clay-squash text-center font-medium flex items-center justify-center gap-1 ${
              activeFilter === 'starred'
                ? 'bg-yellow-400 text-slate-900 font-semibold clay-button-shadow'
                : 'bg-white dark:bg-slate-800 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-950/30'
            }`}
          >
            <Star className="w-3 h-3 fill-current" />
            收藏 ({starredCount})
          </button>
        </div>
      </div>

      {/* Point Filter Tags */}
      <div className="mb-4">
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-1 mb-1.5">
          分值过滤
        </div>
        <div className="flex items-center gap-1.5 text-xs">
          {[
            { label: '全部', value: null },
            { label: '≤2分', value: 2 },
            { label: '3分', value: 3 },
            { label: '≥4分高频', value: 4 },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => onSelectPointFilter(item.value)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                pointFilter === item.value
                  ? 'bg-sky-500 text-white font-semibold'
                  : 'bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-300/70 dark:hover:bg-slate-700'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* 161 Questions Matrix Heatmap Grid */}
      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex items-center justify-between px-1 mb-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            全书题目热力图 (161题)
          </span>
          <span className="text-[10px] text-slate-400">点击直达考点</span>
        </div>

        <div className="p-3 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/60 dark:border-slate-700/60 clay-card-shadow overflow-y-auto flex-1">
          <div className="grid grid-cols-8 gap-1.5">
            {questions.map((q) => {
              const status = masteryMap[q.id] || 'unlearned';
              const isStarred = starredList.includes(q.id);

              let bgClass = 'bg-slate-100 dark:bg-slate-700/60 text-slate-500 dark:text-slate-400';
              if (status === 'mastered') {
                bgClass = 'bg-emerald-500 text-white font-bold';
              } else if (status === 'reviewing') {
                bgClass = 'bg-amber-400 text-slate-900 font-bold';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => scrollToQuestion(q.id)}
                  title={`第${q.id}题: ${q.title} (${q.points}分) - ${
                    status === 'mastered'
                      ? '已吃透'
                      : status === 'reviewing'
                      ? '待复习'
                      : '未掌握'
                  }`}
                  className={`relative aspect-square flex items-center justify-center rounded-lg text-[10px] font-mono transition-transform hover:scale-110 active:scale-95 clay-squash ${bgClass}`}
                >
                  {q.id}
                  {isStarred && (
                    <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-yellow-400 ring-1 ring-white dark:ring-slate-900" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
};
