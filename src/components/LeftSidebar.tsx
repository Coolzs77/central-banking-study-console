import React, { useState } from 'react';
import {
  BookOpen,
  Edit3,
  Award,
  Layers,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
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
  const [expandedChapters, setExpandedChapters] = useState<Record<number, boolean>>({});

  const toggleExpand = (chId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedChapters((prev) => ({
      ...prev,
      [chId]: !prev[chId],
    }));
  };

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
  const getChapterRecitationStats = (chId: number) => {
    const qList = recitationQuestions.filter((q) => q.chapterId === chId);
    const total = qList.length;
    const mastered = qList.filter((q) => memorizedList.includes(q.id)).length;
    return { mastered, total };
  };

  const getChapterHomeworkStats = (chId: number) => {
    const qList = homeworkQuestions.filter((q) => q.chapterId === chId);
    const total = qList.length;
    const completed = qList.filter((q) => homeworkCompleted.includes(q.id)).length;
    return { completed, total };
  };

  return (
    <aside
      className={`w-72 flex-shrink-0 flex flex-col h-[calc(100vh-4rem)] sticky top-16 border-r border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto ${className}`}
    >
      {/* 4 Core Modes */}
      <div className="space-y-1.5 mb-4">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-2 mb-2">
          学习模式
        </div>
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
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-sm font-semibold transition-all clay-squash cursor-pointer ${
                isActive
                  ? 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 shadow-sm border border-blue-400/30'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${isActive ? mode.color : 'text-slate-400'}`} />
                <span>{mode.name}</span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="border-t border-slate-200/80 dark:border-slate-800 my-2" />

      {/* 11 Chapters Tree */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between px-2 mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            章节目录 (11章)
          </span>
          <button
            onClick={() => onSelectChapter(null)}
            className={`text-xs px-2.5 py-1 rounded-lg transition-colors cursor-pointer font-semibold ${
              selectedChapterId === null
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            全部显示
          </button>
        </div>

        <div className="space-y-1 overflow-y-auto pr-1">
          {chapters.map((ch) => {
            const isSelected = selectedChapterId === ch.id;
            const isExpanded = !!expandedChapters[ch.id];
            const recStats = getChapterRecitationStats(ch.id);
            const hwStats = getChapterHomeworkStats(ch.id);

            const isDone =
              currentMode === 'homework'
                ? hwStats.total > 0 && hwStats.completed === hwStats.total
                : recStats.total > 0 && recStats.mastered === recStats.total;

            return (
              <div key={ch.id} className="rounded-xl overflow-hidden">
                <div
                  onClick={() => {
                    onSelectChapter(isSelected ? null : ch.id);
                    if (onCloseMobile) onCloseMobile();
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-blue-50/80 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-400/30 font-semibold'
                      : 'hover:bg-white/70 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <button
                      onClick={(e) => toggleExpand(ch.id, e)}
                      className="p-0.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                    >
                      {isExpanded ? (
                        <ChevronDown className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronRight className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <span className="truncate">{ch.title}</span>
                  </div>

                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    {isDone ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-md bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {currentMode === 'homework'
                          ? `${hwStats.completed}/${hwStats.total}`
                          : `${recStats.mastered}/${recStats.total}`}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subsections if expanded */}
                {isExpanded && ch.sections && ch.sections.length > 0 && (
                  <div className="ml-5 pl-2.5 border-l-2 border-slate-200 dark:border-slate-800 my-1 space-y-1">
                    {ch.sections.map((sec) => (
                      <div
                        key={sec.id}
                        className="text-xs text-slate-600 dark:text-slate-400 py-1 px-2 rounded flex items-center justify-between hover:bg-slate-100/50 dark:hover:bg-slate-800/40"
                      >
                        <span className="truncate">{sec.title}</span>
                        <span className="text-xs font-mono opacity-70 ml-1">
                          {sec.points}分
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
