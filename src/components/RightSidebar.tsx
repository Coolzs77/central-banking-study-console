import React, { useState, useMemo } from 'react';
import {
  Target,
  Layers,
  Check,
  CheckCircle2,
  Clock,
  Search,
  BookOpen,
} from 'lucide-react';
import {
  RecitationQuestion,
  HomeworkQuestion,
  TerminologyQuestion,
  ChapterMeta,
} from '../data/types';
import { MarkdownViewer } from './common/MarkdownViewer';

interface RightSidebarProps {
  currentMode: 'recitation' | 'homework' | 'practice' | 'exam';
  // Recitation
  recitationQuestions: RecitationQuestion[];
  currentRecitationQuestionId: number;
  onSelectRecitationQuestionId: (id: number) => void;
  memorizedList: number[];
  starredList: number[];
  activeFilter: 'all' | 'memorized' | 'unmemorized' | 'starred';
  onSelectFilter: (filter: 'all' | 'memorized' | 'unmemorized' | 'starred') => void;
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
  practiceTab?: 'terms' | 'choice' | 'truefalse' | 'fill';
  currentChoiceIndex?: number;
  onSelectChoiceIndex?: (idx: number) => void;
  currentTfIndex?: number;
  onSelectTfIndex?: (idx: number) => void;
  currentFillIndex?: number;
  onSelectFillIndex?: (idx: number) => void;
  // Chapter metadata
  currentChapterId?: number;
  chapters?: ChapterMeta[];
  className?: string;
}

export const RightSidebar: React.FC<RightSidebarProps> = ({
  currentMode,
  recitationQuestions,
  currentRecitationQuestionId,
  onSelectRecitationQuestionId,
  memorizedList,
  starredList,
  activeFilter,
  onSelectFilter,
  homeworkQuestions,
  currentHomeworkQuestionId,
  onSelectHomeworkQuestionId,
  homeworkCompletedList,
  selectedHomeworkChapter,
  onSelectHomeworkChapter,
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
  practiceTab = 'terms',
  currentChoiceIndex = 0,
  onSelectChoiceIndex,
  currentTfIndex = 0,
  onSelectTfIndex,
  currentFillIndex = 0,
  onSelectFillIndex,
  currentChapterId,
  chapters = [],
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState<'matrix' | 'terms' | 'outline'>('matrix');
  const [termSearch, setTermSearch] = useState('');
  const [previewTerm, setPreviewTerm] = useState<TerminologyQuestion | null>(null);

  // Filtered terminology for dictionary tab
  const filteredTerms = useMemo(() => {
    if (!termSearch.trim()) return terminologyList;
    const q = termSearch.toLowerCase();
    return terminologyList.filter(
      (t) => t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q)
    );
  }, [terminologyList, termSearch]);

  const matrixTitle =
    currentMode === 'homework'
      ? '作业矩阵'
      : currentMode === 'practice'
      ? '专项题号'
      : currentMode === 'exam'
      ? '试卷架构'
      : '背诵矩阵';

  return (
    <aside
      className={`w-80 lg:w-92 shrink-0 h-[calc(100vh-4rem)] sticky top-16 bg-white/95 dark:bg-[#151b26]/95 border-l border-slate-200/90 dark:border-slate-800 flex flex-col overflow-hidden text-slate-800 dark:text-slate-200 backdrop-blur-md ${className}`}
    >
      {/* Top Sidebar Navigation Tabs */}
      <div className="p-3 border-b border-slate-200/80 dark:border-slate-800 flex items-center gap-1.5 bg-slate-50/70 dark:bg-slate-900/60 shrink-0">
        <button
          onClick={() => setActiveTab('matrix')}
          className={`flex-1 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTab === 'matrix'
              ? 'bg-white dark:bg-[#1f283b] text-blue-600 dark:text-blue-400 shadow-sm border border-slate-200/60 dark:border-slate-700'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-white/50'
          }`}
        >
          <Target className="w-4 h-4" />
          <span>{matrixTitle}</span>
        </button>

        <button
          onClick={() => setActiveTab('terms')}
          className={`flex-1 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTab === 'terms'
              ? 'bg-white dark:bg-[#1f283b] text-blue-600 dark:text-blue-400 shadow-sm border border-slate-200/60 dark:border-slate-700'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-white/50'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>核心名词 (30)</span>
        </button>

        <button
          onClick={() => setActiveTab('outline')}
          className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTab === 'outline'
              ? 'bg-white dark:bg-[#1f283b] text-blue-600 dark:text-blue-400 shadow-sm border border-slate-200/60 dark:border-slate-700'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-white/50'
          }`}
          title="章节知识大纲"
        >
          <BookOpen className="w-4 h-4" />
          <span>大纲</span>
        </button>
      </div>

      {/* Tab 1: Number Matrix */}
      {activeTab === 'matrix' && (
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          {/* A. RECITATION MODE MATRIX (Zero score division!) */}
          {currentMode === 'recitation' && (
            <div className="flex-1 flex flex-col h-full overflow-hidden">
              {/* Header Filter Controls */}
              <div className="p-3.5 border-b border-slate-200/80 dark:border-slate-800 space-y-3 shrink-0 bg-slate-50/40 dark:bg-slate-900/40">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    全书背诵题 (161题)
                  </span>
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2 py-0.5 rounded-md border border-blue-200/60 dark:border-blue-800">
                    已背 {memorizedList.length} / {recitationQuestions.length} ({Math.round((memorizedList.length / (recitationQuestions.length || 1)) * 100)}%)
                  </span>
                </div>

                {/* Filter Pills */}
                <div className="grid grid-cols-4 gap-1.5 text-xs font-semibold">
                  <button
                    onClick={() => onSelectFilter('all')}
                    className={`py-1.5 rounded-lg transition-all cursor-pointer text-center ${
                      activeFilter === 'all'
                        ? 'bg-blue-600 text-white shadow-xs font-bold'
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    全部
                  </button>
                  <button
                    onClick={() => onSelectFilter('unmemorized')}
                    className={`py-1.5 rounded-lg transition-all cursor-pointer text-center ${
                      activeFilter === 'unmemorized'
                        ? 'bg-slate-700 text-white shadow-xs font-bold'
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    未背 ({recitationQuestions.length - memorizedList.length})
                  </button>
                  <button
                    onClick={() => onSelectFilter('memorized')}
                    className={`py-1.5 rounded-lg transition-all cursor-pointer text-center ${
                      activeFilter === 'memorized'
                        ? 'bg-emerald-600 text-white shadow-xs font-bold'
                        : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100/50'
                    }`}
                  >
                    已背 ({memorizedList.length})
                  </button>
                  <button
                    onClick={() => onSelectFilter('starred')}
                    className={`py-1.5 rounded-lg transition-all cursor-pointer text-center ${
                      activeFilter === 'starred'
                        ? 'bg-amber-500 text-white shadow-xs font-bold'
                        : 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 hover:bg-amber-100/50'
                    }`}
                  >
                    收藏 ({starredList.length})
                  </button>
                </div>
              </div>

              {/* 161 Question Matrix - 6 Columns, Clean comfortable sizing */}
              <div className="flex-1 overflow-y-auto p-3.5">
                <div className="grid grid-cols-6 gap-2">
                  {recitationQuestions.map((q) => {
                    const isMem = memorizedList.includes(q.id);
                    const isStar = starredList.includes(q.id);
                    const isCurr = currentRecitationQuestionId === q.id;

                    let cellStyle =
                      'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700';

                    if (isCurr) {
                      cellStyle =
                        'bg-blue-600 text-white border-blue-700 ring-2 ring-blue-400 font-bold shadow-md scale-105 z-10';
                    } else if (isMem) {
                      cellStyle =
                        'bg-emerald-500 text-white border-emerald-600 font-bold shadow-xs hover:bg-emerald-600';
                    } else if (isStar) {
                      cellStyle =
                        'bg-amber-400 text-amber-950 border-amber-500 font-bold hover:bg-amber-500';
                    }

                    return (
                      <button
                        key={q.id}
                        onClick={() => onSelectRecitationQuestionId(q.id)}
                        title={`第 ${q.id} 题: ${q.title}`}
                        className={`h-10 rounded-xl border text-xs sm:text-sm font-mono font-bold flex items-center justify-center transition-all cursor-pointer ${cellStyle}`}
                      >
                        {q.id}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* B. HOMEWORK MODE MATRIX */}
          {currentMode === 'homework' && (
            <div className="flex-1 flex flex-col h-full overflow-hidden">
              {/* Header & Chapter Filter */}
              <div className="p-3.5 border-b border-slate-200/80 dark:border-slate-800 space-y-3 shrink-0 bg-slate-50/40 dark:bg-slate-900/40">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    平时作业本 (54题)
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-md border border-emerald-200/60 dark:border-emerald-800">
                    已做 {homeworkCompletedList.length} / {homeworkQuestions.length}
                  </span>
                </div>

                {/* Chapter Chips */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  <button
                    onClick={() => onSelectHomeworkChapter(null)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer transition-all ${
                      selectedHomeworkChapter === null
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    全部
                  </button>
                  {Array.from({ length: 11 }, (_, i) => i + 1).map((ch) => (
                    <button
                      key={ch}
                      onClick={() => onSelectHomeworkChapter(ch)}
                      className={`px-2 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                        selectedHomeworkChapter === ch
                          ? 'bg-blue-600 text-white font-bold shadow-xs'
                          : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {ch}章
                    </button>
                  ))}
                </div>
              </div>

              {/* 54 Homework Grid */}
              <div className="flex-1 overflow-y-auto p-3.5">
                <div className="grid grid-cols-6 gap-2">
                  {homeworkQuestions
                    .filter((q) => !selectedHomeworkChapter || q.chapterId === selectedHomeworkChapter)
                    .map((q) => {
                      const isDone = homeworkCompletedList.includes(q.id);
                      const isCurr = currentHomeworkQuestionId === q.id;

                      let cellStyle =
                        'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700';

                      if (isCurr) {
                        cellStyle =
                          'bg-blue-600 text-white border-blue-700 ring-2 ring-blue-400 font-bold shadow-md scale-105 z-10';
                      } else if (isDone) {
                        cellStyle =
                          'bg-emerald-500 text-white border-emerald-600 font-bold shadow-xs hover:bg-emerald-600';
                      }

                      return (
                        <button
                          key={q.id}
                          onClick={() => onSelectHomeworkQuestionId(q.id)}
                          title={`第 ${q.chapterId} 章 第 ${q.id} 题: ${q.question}`}
                          className={`h-10 rounded-xl border text-xs sm:text-sm font-mono font-bold flex items-center justify-center transition-all relative cursor-pointer ${cellStyle}`}
                        >
                          <span>{q.id}</span>
                          {isDone && !isCurr && (
                            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-600 text-white rounded-full text-[10px] flex items-center justify-center font-bold">
                              ✓
                            </span>
                          )}
                        </button>
                      );
                    })}
                </div>
              </div>
            </div>
          )}

          {/* C. PRACTICE MODE MATRIX (Dynamically adapts to practiceTab) */}
          {currentMode === 'practice' && (
            <div className="flex-1 flex flex-col h-full overflow-hidden p-3.5 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-slate-800">
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                  {practiceTab === 'terms' && `${terminologyList.length} 核心名词速达`}
                  {practiceTab === 'choice' && '单选题号 (40题)'}
                  {practiceTab === 'truefalse' && '判断改错题号 (30题)'}
                  {practiceTab === 'fill' && '填空题号 (40题)'}
                </span>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-md border border-emerald-200/60 dark:border-emerald-800">
                  {practiceTab === 'terms' && `已掌握 ${termMemorizedList.length} / ${terminologyList.length}`}
                  {practiceTab === 'choice' && `已掌握 ${choiceMemorizedList.length} / 40`}
                  {practiceTab === 'truefalse' && `已掌握 ${tfMemorizedList.length} / 30`}
                  {practiceTab === 'fill' && `已掌握 ${fillMemorizedList.length} / 40`}
                </span>
              </div>

              {/* Number Buttons for Active Practice Tab */}
              <div className="grid grid-cols-6 gap-2 pt-1 overflow-y-auto">
                {practiceTab === 'terms' &&
                  terminologyList.map((t) => {
                    const isMem = termMemorizedList.includes(t.id);
                    const isStar = termStarredList.includes(t.id);
                    const isCurr = currentTermId === t.id;

                    let cellStyle =
                      'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200';

                    if (isCurr) {
                      cellStyle =
                        'bg-blue-600 text-white ring-2 ring-blue-400 font-bold shadow-md scale-105 z-10';
                    } else if (isMem) {
                      cellStyle = 'bg-emerald-500 text-white font-bold border-emerald-600';
                    } else if (isStar) {
                      cellStyle = 'bg-amber-400 text-amber-950 font-bold border-amber-500';
                    }

                    return (
                      <button
                        key={t.id}
                        onClick={() => onSelectTermId(t.id)}
                        title={`#${t.id} ${t.term}`}
                        className={`h-10 rounded-xl border text-xs sm:text-sm font-mono font-bold flex items-center justify-center transition cursor-pointer ${cellStyle}`}
                      >
                        {t.id}
                      </button>
                    );
                  })}

                {practiceTab === 'choice' &&
                  Array.from({ length: 40 }, (_, i) => i + 1).map((num) => {
                    const isCurr = currentChoiceIndex === num - 1;
                    const isMem = choiceMemorizedList.includes(num);
                    const isStar = choiceStarredList.includes(num);

                    let cellStyle =
                      'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700';
                    if (isCurr) {
                      cellStyle = 'bg-blue-600 text-white ring-2 ring-blue-400 font-bold shadow-md scale-105 z-10';
                    } else if (isMem) {
                      cellStyle = 'bg-emerald-500 text-white font-bold border-emerald-600';
                    } else if (isStar) {
                      cellStyle = 'bg-amber-400 text-amber-950 font-bold border-amber-500';
                    }

                    return (
                      <button
                        key={num}
                        onClick={() => onSelectChoiceIndex && onSelectChoiceIndex(num - 1)}
                        className={`h-10 rounded-xl border text-xs sm:text-sm font-mono font-bold flex items-center justify-center transition cursor-pointer ${cellStyle}`}
                      >
                        {num}
                      </button>
                    );
                  })}

                {practiceTab === 'truefalse' &&
                  Array.from({ length: 30 }, (_, i) => i + 1).map((num) => {
                    const isCurr = currentTfIndex === num - 1;
                    const isMem = tfMemorizedList.includes(num);
                    const isStar = tfStarredList.includes(num);

                    let cellStyle =
                      'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700';
                    if (isCurr) {
                      cellStyle = 'bg-blue-600 text-white ring-2 ring-blue-400 font-bold shadow-md scale-105 z-10';
                    } else if (isMem) {
                      cellStyle = 'bg-emerald-500 text-white font-bold border-emerald-600';
                    } else if (isStar) {
                      cellStyle = 'bg-amber-400 text-amber-950 font-bold border-amber-500';
                    }

                    return (
                      <button
                        key={num}
                        onClick={() => onSelectTfIndex && onSelectTfIndex(num - 1)}
                        className={`h-10 rounded-xl border text-xs sm:text-sm font-mono font-bold flex items-center justify-center transition cursor-pointer ${cellStyle}`}
                      >
                        {num}
                      </button>
                    );
                  })}

                {practiceTab === 'fill' &&
                  Array.from({ length: 40 }, (_, i) => i + 1).map((num) => {
                    const isCurr = currentFillIndex === num - 1;
                    const isMem = fillMemorizedList.includes(num);
                    const isStar = fillStarredList.includes(num);

                    let cellStyle =
                      'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700';
                    if (isCurr) {
                      cellStyle = 'bg-blue-600 text-white ring-2 ring-blue-400 font-bold shadow-md scale-105 z-10';
                    } else if (isMem) {
                      cellStyle = 'bg-emerald-500 text-white font-bold border-emerald-600';
                    } else if (isStar) {
                      cellStyle = 'bg-amber-400 text-amber-950 font-bold border-amber-500';
                    }

                    return (
                      <button
                        key={num}
                        onClick={() => onSelectFillIndex && onSelectFillIndex(num - 1)}
                        className={`h-10 rounded-xl border text-xs sm:text-sm font-mono font-bold flex items-center justify-center transition cursor-pointer ${cellStyle}`}
                      >
                        {num}
                      </button>
                    );
                  })}
              </div>
            </div>
          )}

          {/* D. EXAM MODE MATRIX */}
          {currentMode === 'exam' && (
            <div className="flex-1 flex flex-col h-full p-4 space-y-4 overflow-y-auto">
              <div className="flex items-center gap-2 text-sm font-bold text-purple-700 dark:text-purple-400 pb-2 border-b border-slate-200/80 dark:border-slate-800">
                <Clock className="w-4 h-4" />
                <span>期末 100 分全真试卷结构</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-3 leading-relaxed bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/60 dark:border-slate-800">
                  <span className="font-semibold">一、名词解释</span>
                  <span className="font-mono text-purple-600 dark:text-purple-400 font-bold">5题 · 15分</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/60 dark:border-slate-800">
                  <span className="font-semibold">二、填空题</span>
                  <span className="font-mono text-purple-600 dark:text-purple-400 font-bold">15题 · 15分</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/60 dark:border-slate-800">
                  <span className="font-semibold">三、单项选择题</span>
                  <span className="font-mono text-purple-600 dark:text-purple-400 font-bold">15题 · 15分</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/60 dark:border-slate-800">
                  <span className="font-semibold">四、判断改错题</span>
                  <span className="font-mono text-purple-600 dark:text-purple-400 font-bold">15题 · 15分</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/60 dark:border-slate-800">
                  <span className="font-semibold">五、简答题</span>
                  <span className="font-mono text-purple-600 dark:text-purple-400 font-bold">3题 · 20分</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">六、宏观论述题</span>
                  <span className="font-mono text-purple-600 dark:text-purple-400 font-bold">1题 · 20分</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: 30 Core Terminology Dictionary */}
      {activeTab === 'terms' && (
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          {/* Search Bar */}
          <div className="p-3 border-b border-slate-200/80 dark:border-slate-800 shrink-0">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="搜索 30 核心名词..."
                value={termSearch}
                onChange={(e) => setTermSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          {/* Terms List */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {filteredTerms.map((t) => {
              const isMem = termMemorizedList.includes(t.id);
              const isSelected = previewTerm?.id === t.id;

              return (
                <div
                  key={t.id}
                  onClick={() => setPreviewTerm(isSelected ? null : t)}
                  className={`p-3 rounded-2xl border text-xs sm:text-sm transition-all cursor-pointer ${
                    isSelected
                      ? 'border-blue-500 bg-blue-50/70 dark:bg-blue-950/40 shadow-xs'
                      : isMem
                      ? 'border-emerald-200 dark:border-emerald-800 bg-emerald-50/30 dark:bg-emerald-950/20 text-slate-800 dark:text-slate-200'
                      : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-slate-100">
                      <span className="font-mono text-slate-400 text-xs">#{t.id}</span>
                      <span>{t.term}</span>
                    </div>
                    {isMem && <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                  </div>

                  {isSelected && (
                    <div className="mt-2.5 pt-2.5 border-t border-slate-200/80 dark:border-slate-700 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                      <MarkdownViewer content={t.definition} maskKeywords={false} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 3: Chapter Outline */}
      {activeTab === 'outline' && (
        <div className="flex-1 flex flex-col h-full overflow-hidden p-3.5">
          <div className="text-sm font-bold text-slate-800 dark:text-slate-200 pb-2 border-b border-slate-200/80 dark:border-slate-800 mb-2">
            全书 11 章知识大纲
          </div>
          <div className="flex-1 overflow-y-auto space-y-2 pr-1">
            {chapters.map((ch) => {
              const isCurr = ch.id === currentChapterId;
              return (
                <div
                  key={ch.id}
                  className={`p-3 rounded-2xl border transition-all ${
                    isCurr
                      ? 'border-blue-400 bg-blue-50/50 dark:bg-blue-950/30 shadow-xs'
                      : 'border-slate-200/80 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                  }`}
                >
                  <div className="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-100 flex items-center justify-between">
                    <span>{ch.title}</span>
                  </div>
                  {ch.sections && (
                    <div className="mt-2 space-y-1 pl-2 border-l-2 border-slate-200 dark:border-slate-700">
                      {ch.sections.map((sec) => (
                        <div
                          key={sec.id}
                          className="text-xs text-slate-600 dark:text-slate-400 flex items-center justify-between"
                        >
                          <span className="truncate">{sec.title}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </aside>
  );
};
