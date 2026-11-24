import React, { useState } from 'react';
import {
  Target,
  BookOpen,
  Award,
  Layers,
  Check,
  CheckCircle2,
  Clock,
  Search,
  Filter,
} from 'lucide-react';
import {
  RecitationQuestion,
  HomeworkQuestion,
  TerminologyQuestion,
} from '../data/types';
import { MarkdownViewer } from './common/MarkdownViewer';

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
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState<'matrix' | 'terms' | 'outline'>('matrix');
  const [termSearch, setTermSearch] = useState('');
  const [previewTerm, setPreviewTerm] = useState<TerminologyQuestion | null>(null);

  // Filtered terminology for dictionary tab
  const filteredTerms = terminologyList.filter((t) => {
    if (!termSearch.trim()) return true;
    const q = termSearch.toLowerCase();
    return t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q);
  });

  return (
    <aside
      className={`w-80 lg:w-88 shrink-0 h-[calc(100vh-4rem)] sticky top-16 bg-white/95 dark:bg-[#151b26]/95 border-l border-slate-200/90 dark:border-slate-800 flex flex-col overflow-hidden text-slate-800 dark:text-slate-200 backdrop-blur-md ${className}`}
    >
      {/* Top Sidebar Tab Switcher */}
      <div className="p-3 border-b border-slate-200/80 dark:border-slate-800 flex items-center gap-1 bg-slate-50/70 dark:bg-slate-900/60">
        <button
          onClick={() => setActiveTab('matrix')}
          className={`flex-1 py-1.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition-all cursor-pointer ${
            activeTab === 'matrix'
              ? 'bg-white dark:bg-[#1f283b] text-blue-600 dark:text-blue-400 clay-button-shadow'
              : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
          }`}
        >
          <Target className="w-3.5 h-3.5" />
          <span>{currentMode === 'homework' ? '作业题矩阵' : '题目矩阵'}</span>
        </button>

        <button
          onClick={() => setActiveTab('terms')}
          className={`flex-1 py-1.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition-all cursor-pointer ${
            activeTab === 'terms'
              ? 'bg-white dark:bg-[#1f283b] text-blue-600 dark:text-blue-400 clay-button-shadow'
              : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>核心名词 (30)</span>
        </button>
      </div>

      {/* Tab 1: Number Matrix (题号矩阵) */}
      {activeTab === 'matrix' && (
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          {/* HOMEWORK MODE MATRIX */}
          {currentMode === 'homework' && (
            <div className="flex-1 flex flex-col h-full overflow-hidden">
              <div className="p-3.5 border-b border-slate-100 dark:border-slate-800 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    全书平时作业 (54题)
                  </span>
                  <span className="text-xs font-bold text-emerald-600">
                    已做 {homeworkCompletedList.length} / {homeworkQuestions.length}
                  </span>
                </div>

                {/* Chapter Filter Buttons */}
                <div className="flex items-center gap-1 flex-wrap">
                  <button
                    onClick={() => onSelectHomeworkChapter(null)}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-bold cursor-pointer transition ${
                      selectedHomeworkChapter === null
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                    }`}
                  >
                    全部
                  </button>
                  {Array.from({ length: 11 }, (_, i) => i + 1).map((ch) => (
                    <button
                      key={ch}
                      onClick={() => onSelectHomeworkChapter(ch)}
                      className={`px-1.5 py-0.5 rounded-md text-[11px] font-semibold cursor-pointer transition ${
                        selectedHomeworkChapter === ch
                          ? 'bg-blue-600 text-white font-bold'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                      }`}
                    >
                      {ch}章
                    </button>
                  ))}
                </div>
              </div>

              {/* 54-Question Clean Number Grid */}
              <div className="flex-1 overflow-y-auto p-4">
                <div className="text-[11px] font-semibold text-slate-400 mb-2 uppercase tracking-wider flex items-center justify-between">
                  <span>作业题定位 (点击直达)</span>
                  <span className="text-[10px] text-slate-400">
                    共 {homeworkQuestions.filter((q) => !selectedHomeworkChapter || q.chapterId === selectedHomeworkChapter).length} 题
                  </span>
                </div>

                <div className="grid grid-cols-6 gap-2">
                  {homeworkQuestions
                    .filter((q) => !selectedHomeworkChapter || q.chapterId === selectedHomeworkChapter)
                    .map((q) => {
                      const isDone = homeworkCompletedList.includes(q.id);
                      const isCurr = selectedHomeworkId === q.id;

                      let btnStyle = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 border-slate-200 dark:border-slate-700';
                      if (isCurr) {
                        btnStyle = 'bg-blue-600 text-white ring-2 ring-blue-400 font-bold shadow-md scale-105';
                      } else if (isDone) {
                        btnStyle = 'bg-emerald-500 text-white border-emerald-600 font-bold shadow-xs';
                      }

                      return (
                        <button
                          key={q.id}
                          onClick={() => onSelectHomeworkQuestion(q.id)}
                          title={`第 ${q.chapterId} 章 第 ${q.questionNumber} 题: ${q.questionTitle}`}
                          className={`h-9 rounded-xl border text-xs font-mono font-bold flex flex-col items-center justify-center transition-all relative cursor-pointer ${btnStyle}`}
                        >
                          <span>{q.id}</span>
                          {isDone && !isCurr && (
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-600 text-white rounded-full text-[9px] flex items-center justify-center font-bold">
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

          {/* RECITATION MODE MATRIX */}
          {currentMode === 'recitation' && (
            <div className="flex-1 flex flex-col h-full overflow-hidden">
              <div className="p-3.5 border-b border-slate-100 dark:border-slate-800 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    全书背诵题 (161题)
                  </span>
                  <span className="text-xs font-bold text-blue-600">
                    {memorizedList.length} / {recitationQuestions.length} ({Math.round((memorizedList.length / recitationQuestions.length) * 100)}%)
                  </span>
                </div>

                {/* Filter Pills */}
                <div className="grid grid-cols-2 gap-1.5 text-xs">
                  <button
                    onClick={() => onSelectFilter('all')}
                    className={`py-1 rounded-lg font-medium transition cursor-pointer text-center ${
                      activeFilter === 'all'
                        ? 'bg-blue-600 text-white font-bold'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    全部 ({recitationQuestions.length})
                  </button>
                  <button
                    onClick={() => onSelectFilter('memorized')}
                    className={`py-1 rounded-lg font-medium transition cursor-pointer text-center ${
                      activeFilter === 'memorized'
                        ? 'bg-emerald-600 text-white font-bold'
                        : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40'
                    }`}
                  >
                    已背 ({memorizedList.length})
                  </button>
                  <button
                    onClick={() => onSelectFilter('unmemorized')}
                    className={`py-1 rounded-lg font-medium transition cursor-pointer text-center ${
                      activeFilter === 'unmemorized'
                        ? 'bg-slate-700 text-white font-bold'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    未背 ({recitationQuestions.length - memorizedList.length})
                  </button>
                  <button
                    onClick={() => onSelectFilter('starred')}
                    className={`py-1 rounded-lg font-medium transition cursor-pointer text-center ${
                      activeFilter === 'starred'
                        ? 'bg-amber-500 text-white font-bold'
                        : 'bg-amber-50 text-amber-700 dark:bg-amber-950/40'
                    }`}
                  >
                    收藏 ({starredList.length})
                  </button>
                </div>

                {/* Point Filter */}
                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-slate-500 text-[11px]">考点分值：</span>
                  <div className="flex items-center gap-1">
                    {[null, 2, 3, 4, 5].map((pts) => (
                      <button
                        key={pts === null ? 'all' : pts}
                        onClick={() => onSelectPointFilter(pts)}
                        className={`px-1.5 py-0.5 rounded text-[11px] font-bold cursor-pointer transition ${
                          pointFilter === pts
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        {pts === null ? '全' : `${pts}点`}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 161 Question Heatmap Matrix */}
              <div className="flex-1 overflow-y-auto p-3.5">
                <div className="grid grid-cols-7 gap-1.5">
                  {recitationQuestions.map((q) => {
                    const isMem = memorizedList.includes(q.id);
                    const isStar = starredList.includes(q.id);
                    const isCurr = selectedQuestionId === q.id;

                    let cellStyle = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 border-slate-200 dark:border-slate-700';
                    if (isCurr) {
                      cellStyle = 'bg-blue-600 text-white ring-2 ring-blue-400 font-bold scale-105 z-10';
                    } else if (isMem) {
                      cellStyle = 'bg-emerald-500 text-white border-emerald-600 font-bold';
                    } else if (isStar) {
                      cellStyle = 'bg-amber-400 text-amber-950 border-amber-500 font-bold';
                    }

                    return (
                      <button
                        key={q.id}
                        onClick={() => onSelectRecitationQuestion(q.id)}
                        title={`第 ${q.id} 题: ${q.title} (${q.points}点)`}
                        className={`h-8 rounded-lg border text-xs font-mono flex items-center justify-center transition-all cursor-pointer ${cellStyle}`}
                      >
                        {q.id}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* PRACTICE MODE MATRIX */}
          {currentMode === 'practice' && (
            <div className="flex-1 flex flex-col h-full overflow-hidden p-3.5">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  30 核心名词矩阵
                </span>
                <span className="text-xs font-bold text-emerald-600">
                  已掌握 {termMemorizedList.length} / {terminologyList.length}
                </span>
              </div>

              <div className="grid grid-cols-5 gap-2 pt-3">
                {terminologyList.map((t) => {
                  const isMem = termMemorizedList.includes(t.id);
                  const isCurr = selectedTermId === t.id;

                  let cellStyle = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200';
                  if (isCurr) {
                    cellStyle = 'bg-blue-600 text-white ring-2 ring-blue-400 font-bold';
                  } else if (isMem) {
                    cellStyle = 'bg-emerald-500 text-white font-bold';
                  }

                  return (
                    <button
                      key={t.id}
                      onClick={() => onSelectTerm(t.id)}
                      title={`#${t.id} ${t.term}`}
                      className={`h-10 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-mono font-bold flex items-center justify-center transition cursor-pointer ${cellStyle}`}
                    >
                      {t.id}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* EXAM MODE MATRIX */}
          {currentMode === 'exam' && (
            <div className="flex-1 flex flex-col h-full p-4 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-purple-700 pb-2 border-b border-slate-100">
                <Clock className="w-4 h-4" />
                <span>期末 100 分全真试卷</span>
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
                <div>• 名词解释：5题 × 3分 = 15分</div>
                <div>• 填空题：15空 × 1分 = 15分</div>
                <div>• 单选题：15题 × 1分 = 15分</div>
                <div>• 判断改错：15题 × 1分 = 15分</div>
                <div>• 简答题：3题 (6+6+8) = 20分</div>
                <div>• 论述题：1题 × 20分 = 20分</div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: 30 Core Terminology Dictionary (核心名词速查) */}
      {activeTab === 'terms' && (
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          {/* Search bar */}
          <div className="p-3 border-b border-slate-100 dark:border-slate-800">
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="搜索 30 核心名词..."
                value={termSearch}
                onChange={(e) => setTermSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Terms List */}
          <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
            {filteredTerms.map((t) => {
              const isMem = termMemorizedList.includes(t.id);
              const isSelected = previewTerm?.id === t.id;

              return (
                <div
                  key={t.id}
                  onClick={() => setPreviewTerm(isSelected ? null : t)}
                  className={`p-2.5 rounded-xl border text-xs transition cursor-pointer ${
                    isSelected
                      ? 'border-blue-500 bg-blue-50/70 dark:bg-blue-950/40'
                      : isMem
                      ? 'border-emerald-200 bg-emerald-50/20 text-slate-700'
                      : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-100">
                      <span className="font-mono text-slate-400 text-[10px]">#{t.id}</span>
                      <span>{t.term}</span>
                    </div>
                    {isMem && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                  </div>

                  {isSelected && (
                    <div className="mt-2 pt-2 border-t border-slate-200/60 dark:border-slate-700 text-[11px] leading-relaxed text-slate-600 dark:text-slate-300 animate-in fade-in">
                      <MarkdownViewer content={t.definition} maskKeywords={false} />
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
