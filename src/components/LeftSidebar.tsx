import React from 'react';
import {
  BookOpen,
  Edit3,
  Award,
  Layers,
  CheckCircle2,
  RotateCcw,
} from 'lucide-react';
import { ChapterMeta } from '../data/types';

export type AppMode = 'recitation' | 'homework' | 'practice' | 'mock-exam';

interface LeftSidebarProps {
  currentMode: AppMode;
  onSelectMode: (mode: AppMode) => void;
  chapters: ChapterMeta[];
  selectedChapterId: number | null;
  onSelectChapter: (chapterId: number | null) => void;
  memorizedList: number[];
  recitationQuestions: { id: number; chapterId: number }[];
  homeworkCompleted: number[];
  homeworkQuestions: { id: number; chapterId: number }[];
  className?: string;
  onCloseMobile?: () => void;
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({
  currentMode,
  onSelectMode,
  chapters,
  selectedChapterId,
  onSelectChapter,
  memorizedList,
  recitationQuestions,
  homeworkCompleted,
  homeworkQuestions,
  className = '',
  onCloseMobile,
}) => {
  const modes = [
    {
      id: 'recitation' as AppMode,
      name: '全书速记',
      icon: BookOpen,
      color: 'text-blue-600 dark:text-blue-400',
    },
    {
      id: 'homework' as AppMode,
      name: '平时作业本',
      icon: Edit3,
      color: 'text-emerald-600 dark:text-emerald-400',
    },
    {
      id: 'practice' as AppMode,
      name: '题型专项',
      icon: Layers,
      color: 'text-indigo-600 dark:text-indigo-400',
    },
    {
      id: 'mock-exam' as AppMode,
      name: '期末模考',
      icon: Award,
      color: 'text-amber-600 dark:text-amber-400',
    },
  ];

  // Helper to compute chapter stats
  const getChapterStats = (chId: number) => {
    if (currentMode === 'homework') {
      const qList = homeworkQuestions.filter((q) => q.chapterId === chId);
      const total = qList.length;
      const completed = qList.filter((q) => homeworkCompleted.includes(q.id)).length;
      const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
      return { completed, total, pct };
    } else {
      const qList = recitationQuestions.filter((q) => q.chapterId === chId);
      const total = qList.length;
      const completed = qList.filter((q) => memorizedList.includes(q.id)).length;
      const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
      return { completed, total, pct };
    }
  };

  const getChapterIcon = (chId: number) => {
    const icons = ['🏛️', '⚖️', '📑', '🏦', '📈', '💳', '🎯', '🛠️', '🔄', '🛡️', '🔍'];
    return icons[chId - 1] || '📌';
  };

  return (
    <aside
      className={`w-72 flex-shrink-0 flex flex-col h-[calc(100vh-4rem)] sticky top-16 border-r border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-[#151b26]/95 backdrop-blur-md p-4 overflow-y-auto clay-card-shadow gap-5 ${className}`}
    >
      {/* Top Header */}
      <div className="flex items-center gap-2 px-1">
        <Layers className="w-4 h-4 text-blue-600" />
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          学习模式与章节
        </span>
      </div>

      {/* 4 Core Modes */}
      <div className="flex flex-col gap-1.5">
        <span className="text-[11px] font-semibold text-slate-400 px-1">复习模式</span>
        <div className="grid grid-cols-1 gap-1.5">
          {modes.map((mode) => {
            const Icon = mode.icon;
            const isActive = currentMode === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => {
                  onSelectMode(mode.id);
                  if (onCloseMobile) onCloseMobile();
                }}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold clay-squash transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white clay-button-shadow shadow-md'
                    : 'bg-slate-50 dark:bg-[#1c2333] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#252f44]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : mode.color}`} />
                  <span>{mode.name}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 11 Chapters Tree (1:1 replicated from FRM study console) */}
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between px-1">
          <span className="text-[11px] font-semibold text-slate-400">章节大纲 (共 11 章)</span>
          <button
            onClick={() => onSelectChapter(null)}
            className={`text-xs font-semibold transition-colors cursor-pointer ${
              selectedChapterId === null
                ? 'text-blue-600 dark:text-blue-400 font-bold'
                : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
            }`}
          >
            全部章节
          </button>
        </div>

        <div className="flex flex-col gap-2 overflow-y-auto pr-0.5">
          {chapters.map((ch) => {
            const isSelected = selectedChapterId === ch.id;
            const stats = getChapterStats(ch.id);

            return (
              <button
                key={ch.id}
                onClick={() => {
                  onSelectChapter(isSelected ? null : ch.id);
                  if (onCloseMobile) onCloseMobile();
                }}
                className={`text-left p-3 rounded-2xl clay-squash transition-all flex flex-col gap-2 text-xs cursor-pointer ${
                  isSelected
                    ? 'bg-blue-50 dark:bg-blue-950/40 border border-blue-400 dark:border-blue-700 font-semibold text-blue-900 dark:text-blue-200 shadow-xs'
                    : 'bg-slate-50/70 dark:bg-[#1a2232]/70 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#222c40] border border-slate-200/50 dark:border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between gap-1 w-full">
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-sm">{getChapterIcon(ch.id)}</span>
                    <span className="truncate font-semibold">{ch.title}</span>
                  </div>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-md font-mono font-bold flex-shrink-0 ${
                      stats.pct === 100
                        ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300'
                        : 'bg-white dark:bg-[#151b26] text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {stats.completed}/{stats.total}
                  </span>
                </div>

                {/* 章节完成进度条 (FRM 1:1) */}
                <div className="w-full h-1.5 rounded-full bg-slate-200/80 dark:bg-slate-700/80 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      stats.pct === 100
                        ? 'bg-emerald-500'
                        : stats.pct > 0
                        ? 'bg-blue-500'
                        : 'bg-transparent'
                    }`}
                    style={{ width: `${stats.pct}%` }}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
