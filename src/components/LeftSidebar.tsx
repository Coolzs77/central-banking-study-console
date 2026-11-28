import React from 'react';
import {
  BookOpen,
  Edit3,
  Award,
  Layers,
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
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
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
  isCollapsed = false,
  onToggleCollapse,
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

  if (isCollapsed) {
    return (
      <aside
        className={`w-16 flex-shrink-0 flex flex-col items-center h-[calc(100vh-4rem)] sticky top-16 border-r border-[var(--paper-border)] bg-[var(--paper-chrome)] backdrop-blur-md py-4 px-2 gap-3 transition-colors duration-200 ${className}`}
      >
        <div className="flex flex-col gap-2">
          {modes.map((mode) => {
            const Icon = mode.icon;
            const isActive = currentMode === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => onSelectMode(mode.id)}
                aria-label={mode.name}
                title={mode.name}
                className={`w-10 h-10 rounded-md flex items-center justify-center transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-stone-900 text-stone-50 dark:bg-amber-500/20 dark:text-amber-300 border-l-2 border-amber-500'
                    : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200/60 dark:hover:bg-stone-800/70'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? '' : mode.color}`} />
              </button>
            );
          })}
        </div>
      </aside>
    );
  }

  return (
    <aside
      className={`w-76 lg:w-80 flex-shrink-0 flex flex-col h-[calc(100vh-4rem)] sticky top-16 border-r border-[var(--paper-border)] bg-[var(--paper-chrome)] backdrop-blur-md p-4 overflow-y-auto overscroll-contain gap-5 transition-colors duration-200 ${className}`}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between px-1 pb-2 border-b border-[var(--paper-border)]">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-amber-700 dark:text-amber-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400">
            目录
          </span>
        </div>
      </div>

      {/* 4 Core Modes */}
      <div className="flex flex-col">
        <div className="flex flex-col">
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
                className={`flex items-center justify-between px-3 py-2.5 text-xs sm:text-sm font-semibold border-b border-dashed border-stone-300/70 dark:border-stone-800 border-l-2 transition-colors cursor-pointer ${
                  isActive
                    ? 'border-l-amber-600 dark:border-l-amber-400 bg-amber-500/10 text-stone-900 dark:text-amber-100 font-bold'
                    : 'border-l-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 hover:bg-stone-200/40 dark:hover:bg-stone-800/40'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-700 dark:text-amber-400' : mode.color}`} />
                  <span>{mode.name}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 11 Chapters Tree (Book TOC Rows) */}
      <div className="flex flex-col gap-2 flex-1 min-h-0">
        <div className="flex items-center justify-between px-1">
          <span className="text-[11px] font-semibold text-stone-600 dark:text-stone-400">章节 (11)</span>
          <button
            onClick={() => onSelectChapter(null)}
            className={`text-xs font-semibold transition-colors cursor-pointer ${
              selectedChapterId === null
                ? 'text-amber-700 dark:text-amber-400 font-bold'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            全部章节
          </button>
        </div>

        <div className="flex flex-col overflow-y-auto overscroll-contain pr-0.5">
          {chapters.map((ch) => {
            const isSelected = selectedChapterId === ch.id;
            const stats = getChapterStats(ch.id);

            const cleanTitle = ch.title.replace(/^第[一二三四五六七八九十0-9]+章\s*/, '');

            return (
              <button
                key={ch.id}
                onClick={() => {
                  onSelectChapter(isSelected ? null : ch.id);
                  if (onCloseMobile) onCloseMobile();
                }}
                className={`text-left px-2.5 py-2.5 border-b border-dashed border-stone-300/70 dark:border-stone-800/90 border-l-2 transition-colors flex flex-col gap-1.5 text-xs cursor-pointer ${
                  isSelected
                    ? 'border-l-amber-600 dark:border-l-amber-400 bg-amber-500/10 font-semibold text-stone-900 dark:text-amber-100'
                    : 'border-l-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 hover:bg-stone-200/40 dark:hover:bg-stone-800/40'
                }`}
              >
                <div className="flex items-center justify-between gap-1.5 w-full">
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-sm shrink-0">{getChapterIcon(ch.id)}</span>
                    <span className="truncate font-semibold">
                      第{ch.id}章 {cleanTitle}
                    </span>
                  </div>
                  <span
                    className={`text-[11px] font-mono font-bold flex-shrink-0 tabular-nums ${
                      stats.pct === 100
                        ? 'text-emerald-700 dark:text-emerald-400'
                        : 'text-stone-600 dark:text-stone-400'
                    }`}
                  >
                    {stats.completed}/{stats.total}
                  </span>
                </div>

                {/* 章节完成进度条 */}
                <div className="w-full h-1 rounded-full bg-stone-300/70 dark:bg-stone-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-colors duration-300 ${
                      stats.pct === 100
                        ? 'bg-emerald-500'
                        : stats.pct > 0
                        ? 'bg-amber-600 dark:bg-amber-500'
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
