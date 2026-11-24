import React, { useState, useMemo } from 'react';
import {
  Edit3,
  Copy,
  Check,
  CheckCircle2,
  Circle,
  BookOpen,
  Filter,
  Layers,
} from 'lucide-react';
import { HomeworkQuestion } from '../data/types';
import { MarkdownViewer } from './common/MarkdownViewer';

interface HomeworkCanvasProps {
  questions: HomeworkQuestion[];
  completedList: number[];
  onToggleCompleted: (id: number) => void;
  selectedChapterId?: number | null;
  onSelectChapter?: (id: number | null) => void;
  selectedQuestionId?: number | null;
  onSelectQuestion?: (id: number) => void;
}

export const HomeworkCanvas: React.FC<HomeworkCanvasProps> = ({
  questions,
  completedList,
  onToggleCompleted,
  selectedChapterId = null,
  onSelectChapter,
  selectedQuestionId = null,
  onSelectQuestion,
}) => {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      if (selectedChapterId && q.chapterId !== selectedChapterId) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchTitle = q.questionTitle.toLowerCase().includes(query);
        const matchAns = q.answer.toLowerCase().includes(query);
        if (!matchTitle && !matchAns) return false;
      }
      return true;
    });
  }, [questions, selectedChapterId, searchQuery]);

  const totalQuestions = questions.length;
  const completedCount = completedList.length;
  const percentCompleted = totalQuestions > 0 ? Math.round((completedCount / totalQuestions) * 100) : 0;

  const handleCopySingle = (id: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyChapter = () => {
    if (filteredQuestions.length === 0) return;
    const formatted = filteredQuestions
      .map((q) => `【第 ${q.questionNumber} 题】${q.questionTitle}\n\n答案：\n${q.answer}\n\n------------------------\n`)
      .join('\n');
    navigator.clipboard.writeText(formatted);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50/50 overflow-hidden select-text">
      {/* Top Controls Bar */}
      <div className="sticky top-0 z-20 backdrop-blur-md bg-white/90 border-b border-slate-200/80 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-2 flex-wrap text-xs">
          <span className="font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
            平时作业本
          </span>
          <span className="text-slate-400">|</span>
          <span className="text-slate-600">
            共 {totalQuestions} 道作业题 · 已完成 <span className="font-bold text-emerald-600">{completedCount}</span> 道 ({percentCompleted}%)
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Search */}
          <input
            type="text"
            placeholder="搜索作业题干或答案..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="text-xs bg-slate-100 hover:bg-slate-200/70 border border-slate-300 rounded-lg px-2.5 py-1 text-slate-700 outline-none w-44 transition focus:w-60 focus:bg-white focus:border-blue-500"
          />

          {/* Copy Current View / Chapter */}
          <button
            onClick={handleCopyChapter}
            className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 rounded-lg transition cursor-pointer shadow-xs"
          >
            {copiedAll ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedAll ? '已复制全章作业' : '复制当前作业'}</span>
          </button>
        </div>
      </div>

      {/* Questions Scrollable List */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 space-y-5">
        {filteredQuestions.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-12 text-slate-400">
            <BookOpen className="w-12 h-12 mb-3 text-slate-300" />
            <p className="text-base font-medium">未找到符合条件的作业题</p>
          </div>
        ) : (
          filteredQuestions.map((q) => {
            const isCompleted = completedList.includes(q.id);
            const isSelected = selectedQuestionId === q.id;

            return (
              <div
                key={q.id}
                id={`homework-card-${q.id}`}
                onClick={() => onSelectQuestion?.(q.id)}
                className={`bg-white rounded-2xl border transition-all p-5 md:p-6 shadow-sm hover:shadow-md ${
                  isSelected
                    ? 'border-blue-500 ring-2 ring-blue-100'
                    : isCompleted
                    ? 'border-emerald-200 bg-emerald-50/10'
                    : 'border-slate-200/90'
                }`}
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 pb-3 border-b border-slate-100">
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 font-mono text-xs font-bold">
                        第 {q.chapterId} 章 · 第 {q.questionNumber} 题
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-medium">
                        {q.questionType}
                      </span>
                      {q.sourceRef && (
                        <span className="text-xs text-slate-400">
                          来源: {q.sourceRef}
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug pt-1">
                      {q.questionTitle}
                    </h3>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopySingle(q.id, q.answer);
                      }}
                      className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 border border-slate-200 transition cursor-pointer"
                      title="复制本题答案"
                    >
                      {copiedId === q.id ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleCompleted(q.id);
                      }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
                        isCompleted
                          ? 'bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700 shadow-emerald-200'
                          : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      {isCompleted ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>已完成</span>
                        </>
                      ) : (
                        <>
                          <Circle className="w-3.5 h-3.5 text-slate-400" />
                          <span>标为已做</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Answer Area */}
                <div className="mt-4 pt-1">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    参考解答
                  </div>
                  <MarkdownViewer content={q.answer} maskKeywords={false} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
