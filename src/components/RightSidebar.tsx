import React, { useState, useMemo } from 'react';
import {
  Check,
  Search,
  X,
  PanelRightClose,
  ChevronDown,
  ArrowRight,
  Clock,
} from 'lucide-react';
import {
  RecitationQuestion,
  HomeworkQuestion,
  TerminologyQuestion,
  ChapterMeta,
} from '../data/types';
import { MarkdownViewer } from './common/MarkdownViewer';

export interface RightSidebarProps {
  currentMode: 'recitation' | 'homework' | 'practice' | 'exam';
  // Recitation
  recitationQuestions: RecitationQuestion[];
  currentRecitationQuestionId: number;
  onSelectRecitationQuestionId: (id: number) => void;
  memorizedList: number[];
  starredList: number[];
  activeFilter?: 'all' | 'memorized' | 'unmemorized' | 'starred';
  onSelectFilter?: (filter: 'all' | 'memorized' | 'unmemorized' | 'starred') => void;
  // Homework
  homeworkQuestions: HomeworkQuestion[];
  currentHomeworkQuestionId: number;
  onSelectHomeworkQuestionId: (id: number) => void;
  homeworkCompletedList: number[];
  selectedHomeworkChapter: number | null;
  onSelectHomeworkChapter: (ch: number | null) => void;
  // Practice / Terminology
  terminologyList: TerminologyQuestion[];
  currentTermId: number;
  onSelectTermId: (id: number) => void;
  termMemorizedList: number[];
  termStarredList?: number[];
  choiceMemorizedList?: number[];
  choiceStarredList?: number[];
  tfMemorizedList?: number[];
  tfStarredList?: number[];
  fillMemorizedList?: number[];
  fillStarredList?: number[];
  shortMemorizedList?: number[];
  shortStarredList?: number[];
  essayMemorizedList?: number[];
  essayStarredList?: number[];
  practiceTab?: 'terms' | 'fill' | 'choice' | 'truefalse' | 'short' | 'essay';
  choiceCount?: number;
  tfCount?: number;
  fillCount?: number;
  shortCount?: number;
  essayCount?: number;
  currentChoiceIndex?: number;
  onSelectChoiceIndex?: (idx: number) => void;
  currentTfIndex?: number;
  onSelectTfIndex?: (idx: number) => void;
  currentFillIndex?: number;
  onSelectFillIndex?: (idx: number) => void;
  currentShortIndex?: number;
  onSelectShortIndex?: (idx: number) => void;
  currentEssayIndex?: number;
  onSelectEssayIndex?: (idx: number) => void;
  // Chapter metadata & navigation
  currentChapterId?: number;
  currentSectionId?: string;
  currentQuestionText?: string;
  chapters?: ChapterMeta[];
  onSelectSection?: (chapterId: number, sectionId: string) => void;
  onJumpToPracticeTerm?: (termId: number) => void;
  // Collapse control
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
  className?: string;
}

interface MatrixCell {
  key: number;
  label: number;
  isCurr: boolean;
  isDone: boolean;
  isStar: boolean;
  onClick: () => void;
}

const EXAM_SECTIONS = [
  { id: 'sec-terms', title: '一、名词解释', meta: '5题 · 15分' },
  { id: 'sec-fill', title: '二、填空题', meta: '15题 · 15分' },
  { id: 'sec-choice', title: '三、单项选择题', meta: '15题 · 15分' },
  { id: 'sec-tf', title: '四、判断改错题', meta: '15题 · 15分' },
  { id: 'sec-short', title: '五、简答题', meta: '3题 · 20分' },
  { id: 'sec-essay', title: '六、论述题', meta: '1题 · 20分' },
] as const;

export const RightSidebar: React.FC<RightSidebarProps> = ({
  currentMode,
  recitationQuestions,
  currentRecitationQuestionId,
  onSelectRecitationQuestionId,
  memorizedList,
  starredList,
  homeworkQuestions,
  currentHomeworkQuestionId,
  onSelectHomeworkQuestionId,
  homeworkCompletedList,
  selectedHomeworkChapter,
  terminologyList,
  currentTermId,
  onSelectTermId,
  termMemorizedList,
  termStarredList = [],
  choiceMemorizedList = [],
  choiceStarredList = [],
  tfMemorizedList = [],
  tfStarredList = [],
  fillMemorizedList = [],
  fillStarredList = [],
  shortMemorizedList = [],
  shortStarredList = [],
  essayMemorizedList = [],
  essayStarredList = [],
  practiceTab = 'terms',
  choiceCount = 40,
  tfCount = 30,
  fillCount = 40,
  shortCount = 20,
  essayCount = 6,
  currentChoiceIndex = 0,
  onSelectChoiceIndex,
  currentTfIndex = 0,
  onSelectTfIndex,
  currentFillIndex = 0,
  onSelectFillIndex,
  currentShortIndex = 0,
  onSelectShortIndex,
  currentEssayIndex = 0,
  onSelectEssayIndex,
  currentChapterId,
  currentSectionId,
  currentQuestionText = '',
  chapters = [],
  onSelectSection,
  onJumpToPracticeTerm,
  isCollapsed = false,
  onToggleCollapse,
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState<'matrix' | 'outline' | 'terms'>('matrix');
  const [termSearch, setTermSearch] = useState('');
  const [expandedTermId, setExpandedTermId] = useState<number | null>(null);

  // Precompute section & chapter progress for Outline tab
  const sectionStatsMap = useMemo(() => {
    const map = new Map<string, { total: number; memorized: number }>();
    const memSet = new Set(memorizedList);
    for (const q of recitationQuestions) {
      const key = `${q.chapterId}:${q.sectionId}`;
      const entry = map.get(key) || { total: 0, memorized: 0 };
      entry.total += 1;
      if (memSet.has(q.id)) entry.memorized += 1;
      map.set(key, entry);
    }
    return map;
  }, [recitationQuestions, memorizedList]);

  // Smart matching + search filtering for Terminology tab
  const sortedFilteredTerms = useMemo(() => {
    const q = termSearch.trim().toLowerCase();
    const textLower = currentQuestionText.toLowerCase();

    const matches = q
      ? terminologyList.filter(
          (t) =>
            t.term.toLowerCase().includes(q) ||
            t.definition.toLowerCase().includes(q)
        )
      : terminologyList;

    return matches
      .map((t) => {
        const cleanTerm = t.term.split(/[（(]/)[0].trim().toLowerCase();
        const isRelated =
          Boolean(textLower) &&
          (textLower.includes(t.term.toLowerCase()) ||
            (cleanTerm.length >= 2 && textLower.includes(cleanTerm)));
        return { term: t, isRelated };
      })
      .sort((a, b) => {
        if (a.isRelated !== b.isRelated) return a.isRelated ? -1 : 1;
        return a.term.id - b.term.id;
      });
  }, [terminologyList, termSearch, currentQuestionText]);

  // Build unified matrix config for Tab 1 (recitation / homework / practice)
  const matrixData = useMemo((): {
    summaryLabel: string;
    progressText: string;
    cells: MatrixCell[];
    showStarLegend: boolean;
  } | null => {
    if (currentMode === 'exam') return null;

    if (currentMode === 'recitation') {
      const memSet = new Set(memorizedList);
      const starSet = new Set(starredList);
      return {
        summaryLabel: '全书速记',
        progressText: `已背 ${memorizedList.length}/${recitationQuestions.length}`,
        showStarLegend: true,
        cells: recitationQuestions.map((q) => ({
          key: q.id,
          label: q.id,
          isCurr: currentRecitationQuestionId === q.id,
          isDone: memSet.has(q.id),
          isStar: starSet.has(q.id),
          onClick: () => onSelectRecitationQuestionId(q.id),
        })),
      };
    }

    if (currentMode === 'homework') {
      const doneSet = new Set(homeworkCompletedList);
      const visible = selectedHomeworkChapter
        ? homeworkQuestions.filter((q) => q.chapterId === selectedHomeworkChapter)
        : homeworkQuestions;
      return {
        summaryLabel: selectedHomeworkChapter
          ? `第 ${selectedHomeworkChapter} 章作业`
          : '平时作业',
        progressText: `已做 ${homeworkCompletedList.length}/${homeworkQuestions.length}`,
        showStarLegend: false,
        cells: visible.map((q) => ({
          key: q.id,
          label: q.id,
          isCurr: currentHomeworkQuestionId === q.id,
          isDone: doneSet.has(q.id),
          isStar: false,
          onClick: () => onSelectHomeworkQuestionId(q.id),
        })),
      };
    }

    // Practice mode (6 tabs)
    if (practiceTab === 'terms') {
      const memSet = new Set(termMemorizedList);
      const starSet = new Set(termStarredList);
      return {
        summaryLabel: '名词解释',
        progressText: `已掌握 ${termMemorizedList.length}/${terminologyList.length}`,
        showStarLegend: true,
        cells: terminologyList.map((t) => ({
          key: t.id,
          label: t.id,
          isCurr: currentTermId === t.id,
          isDone: memSet.has(t.id),
          isStar: starSet.has(t.id),
          onClick: () => onSelectTermId(t.id),
        })),
      };
    }

    const indexPracticeMap: Record<
      'fill' | 'choice' | 'truefalse' | 'short' | 'essay',
      {
        label: string;
        count: number;
        currentIdx: number;
        memorized: number[];
        starred: number[];
        onSelect?: (idx: number) => void;
      }
    > = {
      fill: {
        label: '填空题',
        count: fillCount,
        currentIdx: currentFillIndex,
        memorized: fillMemorizedList,
        starred: fillStarredList,
        onSelect: onSelectFillIndex,
      },
      choice: {
        label: '单选题',
        count: choiceCount,
        currentIdx: currentChoiceIndex,
        memorized: choiceMemorizedList,
        starred: choiceStarredList,
        onSelect: onSelectChoiceIndex,
      },
      truefalse: {
        label: '判断改错',
        count: tfCount,
        currentIdx: currentTfIndex,
        memorized: tfMemorizedList,
        starred: tfStarredList,
        onSelect: onSelectTfIndex,
      },
      short: {
        label: '简答题',
        count: shortCount,
        currentIdx: currentShortIndex,
        memorized: shortMemorizedList,
        starred: shortStarredList,
        onSelect: onSelectShortIndex,
      },
      essay: {
        label: '论述题',
        count: essayCount,
        currentIdx: currentEssayIndex,
        memorized: essayMemorizedList,
        starred: essayStarredList,
        onSelect: onSelectEssayIndex,
      },
    };

    const cfg = indexPracticeMap[practiceTab];
    const memSet = new Set(cfg.memorized);
    const starSet = new Set(cfg.starred);

    return {
      summaryLabel: cfg.label,
      progressText: `已掌握 ${cfg.memorized.length}/${cfg.count}`,
      showStarLegend: true,
      cells: Array.from({ length: cfg.count }, (_, i) => {
        const num = i + 1;
        return {
          key: num,
          label: num,
          isCurr: cfg.currentIdx === i,
          isDone: memSet.has(num),
          isStar: starSet.has(num),
          onClick: () => cfg.onSelect?.(i),
        };
      }),
    };
  }, [
    currentMode,
    recitationQuestions,
    currentRecitationQuestionId,
    onSelectRecitationQuestionId,
    memorizedList,
    starredList,
    homeworkQuestions,
    currentHomeworkQuestionId,
    onSelectHomeworkQuestionId,
    homeworkCompletedList,
    selectedHomeworkChapter,
    practiceTab,
    terminologyList,
    currentTermId,
    onSelectTermId,
    termMemorizedList,
    termStarredList,
    fillCount,
    currentFillIndex,
    fillMemorizedList,
    fillStarredList,
    onSelectFillIndex,
    choiceCount,
    currentChoiceIndex,
    choiceMemorizedList,
    choiceStarredList,
    onSelectChoiceIndex,
    tfCount,
    currentTfIndex,
    tfMemorizedList,
    tfStarredList,
    onSelectTfIndex,
    shortCount,
    currentShortIndex,
    shortMemorizedList,
    shortStarredList,
    onSelectShortIndex,
    essayCount,
    currentEssayIndex,
    essayMemorizedList,
    essayStarredList,
    onSelectEssayIndex,
  ]);

  if (isCollapsed) {
    return null;
  }

  const scrollToExamSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <aside
      aria-label="辅助导航栏"
      className={`w-80 shrink-0 h-[calc(100vh-4rem)] sticky top-16 paper-chrome-surface border-l flex flex-col overflow-hidden text-stone-800 dark:text-stone-200 backdrop-blur-md transition-colors duration-200 ${className}`}
    >
      {/* Top Header: 3-Tab Segmented Control + Collapse Button */}
      <div className="px-3 py-2.5 border-b border-[var(--paper-border)] flex items-center gap-2 shrink-0">
        <div
          role="tablist"
          aria-label="右侧栏视图"
          className="flex-1 grid grid-cols-3 p-0.5 rounded-md bg-stone-200/70 dark:bg-stone-800/80"
        >
          {(
            [
              { id: 'matrix', label: '题号' },
              { id: 'outline', label: '大纲' },
              { id: 'terms', label: '名词' },
            ] as const
          ).map((tab) => {
            const selected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveTab(tab.id)}
                className={`py-1.5 rounded text-xs font-semibold transition-colors cursor-pointer ${
                  selected
                    ? 'bg-[#fbf8f1] dark:bg-stone-900 text-stone-900 dark:text-amber-300 shadow-xs'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {onToggleCollapse && (
          <button
            type="button"
            onClick={onToggleCollapse}
            aria-label="折叠右侧栏"
            className="hidden lg:inline-flex w-8 h-8 rounded-md items-center justify-center text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors cursor-pointer shrink-0"
          >
            <PanelRightClose className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Tab 1: Minimal Number Matrix / Exam Section Jump */}
      {activeTab === 'matrix' && (
        <div role="tabpanel" className="flex-1 flex flex-col min-h-0 overflow-hidden">
          {currentMode === 'exam' ? (
            <div className="flex-1 overflow-y-auto overscroll-contain p-3.5 space-y-2">
              <div className="flex items-center justify-between pb-2 border-b border-stone-300/70 dark:border-stone-800">
                <span className="text-xs font-semibold text-stone-700 dark:text-stone-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  <span>试卷大题跳转</span>
                </span>
                <span className="text-xs font-mono tabular-nums text-stone-500 dark:text-stone-400">
                  100分
                </span>
              </div>
              <div className="divide-y divide-stone-200/80 dark:divide-stone-800/80">
                {EXAM_SECTIONS.map((sec) => (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => scrollToExamSection(sec.id)}
                    className="w-full px-2 py-2.5 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 flex items-center justify-between text-left transition-colors cursor-pointer"
                  >
                    <span className="text-xs font-semibold text-stone-800 dark:text-stone-200">
                      {sec.title}
                    </span>
                    <span className="text-xs font-mono tabular-nums text-purple-600 dark:text-purple-400">
                      {sec.meta}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            matrixData && (
              <>
                {/* Concise Summary & Status Legend */}
                <div className="px-3.5 py-2.5 border-b border-slate-200/80 dark:border-slate-800 space-y-2 shrink-0">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      {matrixData.summaryLabel}
                    </span>
                    <span className="font-mono tabular-nums font-semibold text-blue-600 dark:text-blue-400">
                      {matrixData.progressText}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2 h-2 rounded-xs bg-blue-600" />
                      当前
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2 h-2 rounded-xs bg-emerald-500" />
                      已掌握
                    </span>
                    {matrixData.showStarLegend && (
                      <span className="inline-flex items-center gap-1">
                        <span className="w-2 h-2 rounded-xs bg-amber-400" />
                        收藏
                      </span>
                    )}
                  </div>
                </div>

                {/* 6-Column Minimal Matrix */}
                <div className="flex-1 overflow-y-auto overscroll-contain p-3.5">
                  <div className="grid grid-cols-6 gap-1.5">
                    {matrixData.cells.map((cell) => {
                      let cellStyle =
                        'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700';

                      if (cell.isCurr) {
                        cellStyle =
                          'bg-blue-600 text-white ring-2 ring-blue-400/70 font-semibold';
                      } else if (cell.isDone) {
                        cellStyle =
                          'bg-emerald-500/90 text-white hover:bg-emerald-600';
                      } else if (cell.isStar) {
                        cellStyle =
                          'bg-amber-400/90 text-amber-950 hover:bg-amber-400';
                      }

                      return (
                        <button
                          key={cell.key}
                          type="button"
                          onClick={cell.onClick}
                          aria-label={`第 ${cell.label} 题`}
                          aria-current={cell.isCurr ? 'true' : undefined}
                          className={`h-8 rounded-lg text-xs font-mono tabular-nums flex items-center justify-center transition-colors cursor-pointer ${cellStyle}`}
                        >
                          {cell.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </>
            )
          )}
        </div>
      )}

      {/* Tab 2: Clickable Chapter & Section Outline */}
      {activeTab === 'outline' && (
        <div role="tabpanel" className="flex-1 flex flex-col min-h-0 overflow-hidden">
          <div className="px-3.5 py-2.5 border-b border-stone-300/70 dark:border-stone-800 flex items-center justify-between shrink-0">
            <span className="text-xs font-semibold text-stone-700 dark:text-stone-300">
              章节大纲
            </span>
            <span className="text-xs font-mono tabular-nums text-stone-500 dark:text-stone-400">
              {chapters.length} 章
            </span>
          </div>
          <div className="flex-1 overflow-y-auto overscroll-contain px-3 divide-y divide-stone-200/80 dark:divide-stone-800/80">
            {chapters.map((ch) => {
              const isCurrChapter = ch.id === currentChapterId;
              const firstSectionId = ch.sections?.[0]?.id || '';
              return (
                <div
                  key={ch.id}
                  className={`py-2 transition-colors ${
                    isCurrChapter ? 'border-l-2 border-l-amber-600 dark:border-l-amber-400 pl-2' : ''
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => onSelectSection?.(ch.id, firstSectionId)}
                    className={`w-full px-1 py-1 text-left text-xs font-semibold flex items-center justify-between gap-2 transition-colors cursor-pointer ${
                      isCurrChapter
                        ? 'text-amber-800 dark:text-amber-300'
                        : 'text-stone-800 dark:text-stone-200 hover:text-amber-700 dark:hover:text-amber-400'
                    }`}
                  >
                    <span className="truncate">{ch.title}</span>
                    <span className="text-[11px] font-mono tabular-nums text-stone-400 shrink-0">
                      {ch.totalQuestions}题
                    </span>
                  </button>

                  {ch.sections && ch.sections.length > 0 && (
                    <div className="pl-2 pt-1 space-y-0.5">
                      {ch.sections.map((sec) => {
                        const isCurrSec = isCurrChapter && sec.id === currentSectionId;
                        const stats = sectionStatsMap.get(`${ch.id}:${sec.id}`);
                        const total = stats?.total ?? sec.questionCount;
                        const memorized = stats?.memorized ?? 0;

                        return (
                          <button
                            key={sec.id}
                            type="button"
                            onClick={() => onSelectSection?.(ch.id, sec.id)}
                            className={`w-full px-2 py-1 rounded text-left text-xs flex items-center justify-between gap-2 transition-colors cursor-pointer ${
                              isCurrSec
                                ? 'bg-amber-600 text-white font-medium'
                                : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200/60 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-stone-200'
                            }`}
                          >
                            <span className="truncate">{sec.title}</span>
                            <span
                              className={`text-[11px] font-mono tabular-nums shrink-0 ${
                                isCurrSec
                                  ? 'text-amber-100'
                                  : 'text-stone-400 dark:text-stone-500'
                              }`}
                            >
                              {memorized}/{total}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 3: Redesigned Terminology Quick Lookup */}
      {activeTab === 'terms' && (
        <div role="tabpanel" className="flex-1 flex flex-col min-h-0 overflow-hidden">
          {/* Header & Search */}
          <div className="p-3 border-b border-stone-300/70 dark:border-stone-800 space-y-2 shrink-0">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-stone-700 dark:text-stone-300 tabular-nums">
                名词 ({terminologyList.length})
              </span>
              {termSearch.trim() && (
                <span className="text-[11px] font-mono tabular-nums text-stone-500 dark:text-stone-400">
                  匹配 {sortedFilteredTerms.length} 条
                </span>
              )}
            </div>
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
              <input
                type="text"
                aria-label="搜索核心名词"
                placeholder="搜索名词或释义…"
                value={termSearch}
                onChange={(e) => setTermSearch(e.target.value)}
                className="w-full pl-8 pr-8 py-1.5 text-xs rounded-md bg-white/70 dark:bg-stone-900 border border-stone-300/80 dark:border-stone-700 text-stone-800 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:border-amber-600 transition-colors"
              />
              {termSearch && (
                <button
                  type="button"
                  onClick={() => setTermSearch('')}
                  aria-label="清空搜索"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 rounded text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Accordion Index List */}
          <div className="flex-1 overflow-y-auto overscroll-contain px-3 divide-y divide-stone-200/80 dark:divide-stone-800/80">
            {sortedFilteredTerms.length === 0 ? (
              <div className="py-8 text-center text-xs text-stone-400 dark:text-stone-500">
                未找到匹配名词
              </div>
            ) : (
              sortedFilteredTerms.map(({ term: t, isRelated }) => {
                const isMem = termMemorizedList.includes(t.id);
                const isExpanded = expandedTermId === t.id;

                return (
                  <div
                    key={t.id}
                    className={`transition-colors ${
                      isExpanded ? 'bg-amber-500/5 dark:bg-amber-500/5' : ''
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      onClick={() => setExpandedTermId(isExpanded ? null : t.id)}
                      className="w-full px-1 py-2.5 text-left flex items-center justify-between gap-2 cursor-pointer"
                    >
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="text-[11px] font-mono tabular-nums text-stone-400 shrink-0">
                          {t.id}
                        </span>
                        <span className="text-xs font-semibold text-stone-800 dark:text-stone-100 truncate">
                          {t.term}
                        </span>
                        {isRelated && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 shrink-0">
                            相关
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        {isMem && (
                          <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        )}
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-stone-400 transition-transform duration-150 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-2 pb-3 pt-1.5 border-t border-dashed border-stone-200/80 dark:border-stone-800 space-y-2.5 text-xs leading-relaxed text-stone-600 dark:text-stone-300">
                        <MarkdownViewer content={t.definition} maskKeywords={false} />
                        {onJumpToPracticeTerm && (
                          <div className="flex justify-end">
                            <button
                              type="button"
                              onClick={() => onJumpToPracticeTerm(t.id)}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold text-amber-700 dark:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 transition-colors cursor-pointer"
                            >
                              <span>专项练习</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </aside>
  );
};
