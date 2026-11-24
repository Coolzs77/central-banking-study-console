import React, { useState } from 'react';
import {
  BookOpen,
  Edit3,
  Award,
  Layers,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Bookmark,
} from 'lucide-react';
import { ChapterMeta, MasteryStatus } from '../data/types';

export type AppMode = 'recitation' | 'homework' | 'practice' | 'mock-exam';

interface LeftSidebarProps {
  currentMode: AppMode;
  onSelectMode: (mode: AppMode) => void;
  chapters: ChapterMeta[];
  selectedChapterId: number | null;
  onSelectChapter: (chapterId: number | null) => void;
  masteryMap: Record<number, MasteryStatus>;
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
  masteryMap,
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
      count: '161题 · 516分',
      icon: BookOpen,
      color: 'text-sky-500',
    },
    {
      id: 'homework' as AppMode,
      name: '平时作业本',
      count: '54题手写版',
      icon: Edit3,
      color: 'text-emerald-500',
    },
    {
      id: 'practice' as AppMode,
      name: '题型专项',
      count: '名词闪卡 & 刷题',
      icon: Layers,
      color: 'text-indigo-500',
    },
    {
      id: 'mock-exam' as AppMode,
      name: '期末模考',
      count: '100分仿真试卷',
      icon: Award,
      color: 'text-amber-500',
    },
  ];

  // Helper to compute chapter stats
  const getChapterRecitationStats = (chId: number) => {
    const qList = recitationQuestions.filter((q) => q.chapterId === chId);
    const total = qList.length;
    const mastered = qList.filter((q) => masteryMap[q.id] === 'mastered').length;
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
      <div className="space-y-1.5 mb-5">
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-2 mb-1.5">
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
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-sm font-medium transition-all clay-squash ${
                isActive
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white clay-brick-shadow font-semibold border border-sky-400/30'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-white/60 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${isActive ? mode.color : 'text-slate-400'}`} />
                <span>{mode.name}</span>
              </div>
              <span className="text-[11px] font-mono opacity-60">{mode.count}</span>
            </button>
          );
        })}
      </div>

      <div className="border-t border-slate-200/80 dark:border-slate-800 my-2" />

      {/* 11 Chapters Tree */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between px-2 mb-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            章节目录 (11章)
          </span>
          <button
            onClick={() => onSelectChapter(null)}
            className={`text-xs px-2 py-0.5 rounded-lg transition-colors ${
              selectedChapterId === null
                ? 'bg-sky-500/10 text-sky-600 dark:text-sky-400 font-medium'
                : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
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
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-400/30'
                      : 'hover:bg-white/70 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <button
                      onClick={(e) => toggleExpand(ch.id, e)}
                      className="p-0.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
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
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-slate-200/60 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                        {currentMode === 'homework'
                          ? `${hwStats.completed}/${hwStats.total}`
                          : `${recStats.mastered}/${recStats.total}`}
                      </span>
                    )}
                  </div>
                </div>

                {/* Sub-sections tree if expanded */}
                {isExpanded && ch.sections && ch.sections.length > 0 && (
                  <div className="ml-6 pl-2 border-l border-slate-200 dark:border-slate-800 space-y-0.5 my-1">
                    {ch.sections.map((sec) => (
                      <div
                        key={sec.id}
                        className="px-2 py-1 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between hover:text-slate-900 dark:hover:text-slate-200"
                      >
                        <span className="truncate">{sec.title}</span>
                        <span className="text-[9px] font-mono opacity-70">
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
