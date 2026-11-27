import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import {
  CheckCircle2,
  Circle,
  Check,
  X,
  Star,
  RotateCcw,
} from 'lucide-react';
import {
  TerminologyQuestion,
  SingleChoiceQuestion,
  TrueFalseQuestion,
  FillInQuestion,
  ShortAnswerQuestion,
  EssayQuestion,
} from '../data/types';
import { chaptersMeta } from '../data/chapters';
import { MarkdownViewer } from './common/MarkdownViewer';
import { ClayQuestionNav } from './common/ClayQuestionNav';
import {
  TERM_PPT_REFS,
  FILL_PPT_REFS,
  CHOICE_PPT_REFS,
  TF_PPT_REFS,
  SHORT_PPT_REFS,
  ESSAY_PPT_REFS,
} from '../data/pptRefs';

export type PracticeTab = 'terms' | 'fill' | 'choice' | 'truefalse' | 'short' | 'essay';
export type StatusFilter = 'all' | 'unmemorized' | 'memorized' | 'starred';

function useFilteredTabIndex<T extends { id: number }>(
  rawList: T[],
  filteredList: T[],
  propIndex: number | undefined,
  onJumpProp: ((idx: number) => void) | undefined,
  statusFilter: StatusFilter,
  onResetStatusFilter: () => void
) {
  const [internalIdx, setInternalIdx] = useState<number>(0);
  const lastEmittedRef = useRef<number | undefined>(undefined);
  const prevPropRef = useRef<number | undefined>(propIndex);

  useEffect(() => {
    if (
      propIndex !== undefined &&
      propIndex !== prevPropRef.current &&
      propIndex !== lastEmittedRef.current
    ) {
      const target = rawList[propIndex];
      if (target && !filteredList.some((item) => item.id === target.id) && statusFilter !== 'all') {
        onResetStatusFilter();
      }
    }
    prevPropRef.current = propIndex;
  }, [propIndex, rawList, filteredList, statusFilter, onResetStatusFilter]);

  const rawUnfilteredIdx = propIndex ?? internalIdx;
  const targetItem = rawList[rawUnfilteredIdx];
  const matchedFilteredIdx = targetItem
    ? filteredList.findIndex((item) => item.id === targetItem.id)
    : -1;

  const activeIdx =
    filteredList.length === 0
      ? 0
      : Math.min(
          Math.max(0, matchedFilteredIdx !== -1 ? matchedFilteredIdx : 0),
          Math.max(0, filteredList.length - 1)
        );

  const setActiveIdx = (fnOrVal: number | ((prev: number) => number)) => {
    if (filteredList.length === 0) return;
    const nextFiltered = typeof fnOrVal === 'function' ? fnOrVal(activeIdx) : fnOrVal;
    const boundedFiltered = Math.min(
      Math.max(0, nextFiltered),
      Math.max(0, filteredList.length - 1)
    );
    const nextItem = filteredList[boundedFiltered];
    const nextUnfiltered = nextItem ? rawList.findIndex((item) => item.id === nextItem.id) : 0;
    const safeUnfiltered = nextUnfiltered !== -1 ? nextUnfiltered : 0;
    lastEmittedRef.current = safeUnfiltered;
    if (onJumpProp) onJumpProp(safeUnfiltered);
    else setInternalIdx(safeUnfiltered);
  };

  return {
    activeIdx,
    setActiveIdx,
    currentItem: filteredList[activeIdx] as T | undefined,
  };
}

interface PracticeCanvasProps {
  searchQuery?: string;
  terms: TerminologyQuestion[];
  singleChoices: SingleChoiceQuestion[];
  trueFalse: TrueFalseQuestion[];
  fillIns: FillInQuestion[];
  shortAnswers?: ShortAnswerQuestion[];
  essays?: EssayQuestion[];
  termMemorized: number[];
  onToggleTermMemorized: (id: number) => void;
  termStarred?: number[];
  onToggleTermStarred?: (id: number) => void;
  choiceMemorized?: number[];
  onToggleChoiceMemorized?: (id: number) => void;
  choiceStarred?: number[];
  onToggleChoiceStarred?: (id: number) => void;
  tfMemorized?: number[];
  onToggleTfMemorized?: (id: number) => void;
  tfStarred?: number[];
  onToggleTfStarred?: (id: number) => void;
  fillMemorized?: number[];
  onToggleFillMemorized?: (id: number) => void;
  fillStarred?: number[];
  onToggleFillStarred?: (id: number) => void;
  shortMemorized?: number[];
  onToggleShortMemorized?: (id: number) => void;
  shortStarred?: number[];
  onToggleShortStarred?: (id: number) => void;
  essayMemorized?: number[];
  onToggleEssayMemorized?: (id: number) => void;
  essayStarred?: number[];
  onToggleEssayStarred?: (id: number) => void;
  currentTermIndex?: number;
  onJumpToTermIndex?: (idx: number) => void;
  currentChoiceIndex?: number;
  onJumpToChoiceIndex?: (idx: number) => void;
  currentTfIndex?: number;
  onJumpToTfIndex?: (idx: number) => void;
  currentFillIndex?: number;
  onJumpToFillIndex?: (idx: number) => void;
  currentShortIndex?: number;
  onJumpToShortIndex?: (idx: number) => void;
  currentEssayIndex?: number;
  onJumpToEssayIndex?: (idx: number) => void;
  activePracticeTab?: PracticeTab;
  onPracticeTabChange?: (tab: PracticeTab) => void;
}

export const PracticeCanvas: React.FC<PracticeCanvasProps> = ({
  searchQuery = '',
  terms,
  singleChoices,
  trueFalse,
  fillIns,
  shortAnswers = [],
  essays = [],
  termMemorized,
  onToggleTermMemorized,
  termStarred = [],
  onToggleTermStarred = () => {},
  choiceMemorized = [],
  onToggleChoiceMemorized = () => {},
  choiceStarred = [],
  onToggleChoiceStarred = () => {},
  tfMemorized = [],
  onToggleTfMemorized = () => {},
  tfStarred = [],
  onToggleTfStarred = () => {},
  fillMemorized = [],
  onToggleFillMemorized = () => {},
  fillStarred = [],
  onToggleFillStarred = () => {},
  shortMemorized = [],
  onToggleShortMemorized = () => {},
  shortStarred = [],
  onToggleShortStarred = () => {},
  essayMemorized = [],
  onToggleEssayMemorized = () => {},
  essayStarred = [],
  onToggleEssayStarred = () => {},
  currentTermIndex = 0,
  onJumpToTermIndex,
  currentChoiceIndex,
  onJumpToChoiceIndex,
  currentTfIndex,
  onJumpToTfIndex,
  currentFillIndex,
  onJumpToFillIndex,
  currentShortIndex,
  onJumpToShortIndex,
  currentEssayIndex,
  onJumpToEssayIndex,
  activePracticeTab,
  onPracticeTabChange,
}) => {
  const [internalTab, setInternalTab] = useState<PracticeTab>('terms');
  const activeTab = activePracticeTab || internalTab;

  const setActiveTab = (tab: PracticeTab) => {
    if (onPracticeTabChange) onPracticeTabChange(tab);
    setInternalTab(tab);
  };

  const [copied, setCopied] = useState<boolean>(false);
  const triggerCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getChapterTitle = (chapterId: number) => {
    return chaptersMeta.find((c) => c.id === chapterId)?.title || `第 ${chapterId} 章`;
  };

  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const resetStatusFilter = useCallback(() => setStatusFilter('all'), []);
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const matchesStatus = useCallback(
    (id: number, memorized: number[], starred: number[]) => {
      if (statusFilter === 'unmemorized') return !memorized.includes(id);
      if (statusFilter === 'memorized') return memorized.includes(id);
      if (statusFilter === 'starred') return starred.includes(id);
      return true;
    },
    [statusFilter]
  );

  // Search-matched lists (before statusFilter, used for accurate pill counts)
  const searchTerms = useMemo(() => {
    if (!normalizedQuery) return terms;
    return terms.filter((t) =>
      [t.term, t.definition, t.chapterTitle, t.source]
        .filter(Boolean)
        .some((v) => v!.toLowerCase().includes(normalizedQuery))
    );
  }, [terms, normalizedQuery]);

  const searchFillIns = useMemo(() => {
    if (!normalizedQuery) return fillIns;
    return fillIns.filter((q) =>
      [q.stem, q.answers.join(' '), q.explanation]
        .filter(Boolean)
        .some((v) => v!.toLowerCase().includes(normalizedQuery))
    );
  }, [fillIns, normalizedQuery]);

  const searchChoices = useMemo(() => {
    if (!normalizedQuery) return singleChoices;
    return singleChoices.filter((q) =>
      [q.stem, q.options.A, q.options.B, q.options.C, q.options.D, q.rationale]
        .filter(Boolean)
        .some((v) => v!.toLowerCase().includes(normalizedQuery))
    );
  }, [singleChoices, normalizedQuery]);

  const searchTrueFalse = useMemo(() => {
    if (!normalizedQuery) return trueFalse;
    return trueFalse.filter((q) =>
      [q.statement, q.errorCorrection]
        .filter(Boolean)
        .some((v) => v!.toLowerCase().includes(normalizedQuery))
    );
  }, [trueFalse, normalizedQuery]);

  const searchShortAnswers = useMemo(() => {
    if (!normalizedQuery) return shortAnswers;
    return shortAnswers.filter((q) =>
      [q.title, q.question, q.sampleAnswer, q.standardAnswer]
        .filter(Boolean)
        .some((v) => v!.toLowerCase().includes(normalizedQuery))
    );
  }, [shortAnswers, normalizedQuery]);

  const searchEssays = useMemo(() => {
    if (!normalizedQuery) return essays;
    return essays.filter((q) =>
      [q.title, q.question, q.sampleAnswer, q.standardOutline]
        .filter(Boolean)
        .some((v) => v!.toLowerCase().includes(normalizedQuery))
    );
  }, [essays, normalizedQuery]);

  // Filtered lists (searchQuery + statusFilter)
  const filteredTerms = useMemo(
    () => searchTerms.filter((q) => matchesStatus(q.id, termMemorized, termStarred)),
    [searchTerms, matchesStatus, termMemorized, termStarred]
  );
  const filteredFillIns = useMemo(
    () => searchFillIns.filter((q) => matchesStatus(q.id, fillMemorized, fillStarred)),
    [searchFillIns, matchesStatus, fillMemorized, fillStarred]
  );
  const filteredChoices = useMemo(
    () => searchChoices.filter((q) => matchesStatus(q.id, choiceMemorized, choiceStarred)),
    [searchChoices, matchesStatus, choiceMemorized, choiceStarred]
  );
  const filteredTrueFalse = useMemo(
    () => searchTrueFalse.filter((q) => matchesStatus(q.id, tfMemorized, tfStarred)),
    [searchTrueFalse, matchesStatus, tfMemorized, tfStarred]
  );
  const filteredShortAnswers = useMemo(
    () => searchShortAnswers.filter((q) => matchesStatus(q.id, shortMemorized, shortStarred)),
    [searchShortAnswers, matchesStatus, shortMemorized, shortStarred]
  );
  const filteredEssays = useMemo(
    () => searchEssays.filter((q) => matchesStatus(q.id, essayMemorized, essayStarred)),
    [searchEssays, matchesStatus, essayMemorized, essayStarred]
  );

  // Term Flashcards State
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isMasking] = useState<boolean>(false);
  const {
    activeIdx: activeTermIdx,
    setActiveIdx: setTermIdx,
    currentItem: currentTerm,
  } = useFilteredTabIndex(
    terms,
    filteredTerms,
    currentTermIndex,
    onJumpToTermIndex,
    statusFilter,
    resetStatusFilter
  );

  const handleSetTermIdx = (idx: number) => {
    setTermIdx(idx);
    setIsFlipped(false);
  };

  // Choice drill state
  const {
    activeIdx: choiceIdx,
    setActiveIdx: setChoiceIdx,
    currentItem: currentChoice,
  } = useFilteredTabIndex(
    singleChoices,
    filteredChoices,
    currentChoiceIndex,
    onJumpToChoiceIndex,
    statusFilter,
    resetStatusFilter
  );
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [showChoiceExplanation, setShowChoiceExplanation] = useState<boolean>(false);

  useEffect(() => {
    setSelectedOption(null);
    setShowChoiceExplanation(false);
  }, [choiceIdx, currentChoice?.id]);

  // True/False drill state
  const {
    activeIdx: tfIdx,
    setActiveIdx: setTfIdx,
    currentItem: currentTF,
  } = useFilteredTabIndex(
    trueFalse,
    filteredTrueFalse,
    currentTfIndex,
    onJumpToTfIndex,
    statusFilter,
    resetStatusFilter
  );
  const [selectedTf, setSelectedTf] = useState<boolean | null>(null);
  const [showTfExplanation, setShowTfExplanation] = useState<boolean>(false);

  useEffect(() => {
    setSelectedTf(null);
    setShowTfExplanation(false);
  }, [tfIdx, currentTF?.id]);

  // Fill drill state
  const {
    activeIdx: fillIdx,
    setActiveIdx: setFillIdx,
    currentItem: currentFill,
  } = useFilteredTabIndex(
    fillIns,
    filteredFillIns,
    currentFillIndex,
    onJumpToFillIndex,
    statusFilter,
    resetStatusFilter
  );
  const [showFillAnswer, setShowFillAnswer] = useState<boolean>(false);

  useEffect(() => {
    setShowFillAnswer(false);
  }, [fillIdx, currentFill?.id]);

  // Short Answer drill state
  const {
    activeIdx: shortIdx,
    setActiveIdx: setShortIdx,
    currentItem: currentShort,
  } = useFilteredTabIndex(
    shortAnswers,
    filteredShortAnswers,
    currentShortIndex,
    onJumpToShortIndex,
    statusFilter,
    resetStatusFilter
  );
  const [showShortAnswer, setShowShortAnswer] = useState<boolean>(false);

  useEffect(() => {
    setShowShortAnswer(false);
  }, [shortIdx, currentShort?.id]);

  // Essay drill state
  const {
    activeIdx: essayIdx,
    setActiveIdx: setEssayIdx,
    currentItem: currentEssay,
  } = useFilteredTabIndex(
    essays,
    filteredEssays,
    currentEssayIndex,
    onJumpToEssayIndex,
    statusFilter,
    resetStatusFilter
  );
  const [showEssayAnswer, setShowEssayAnswer] = useState<boolean>(false);

  useEffect(() => {
    setShowEssayAnswer(false);
  }, [essayIdx, currentEssay?.id]);

  // Reset copied badge on item or tab change
  useEffect(() => {
    setCopied(false);
  }, [activeTab, activeTermIdx, choiceIdx, tfIdx, fillIdx, shortIdx, essayIdx]);

  // Keyboard navigation across all 6 tabs
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) return;

      if (activeTab === 'terms') {
        if (e.code === 'Space') {
          e.preventDefault();
          setIsFlipped((prev) => !prev);
        } else if (e.key === 'j' || e.key === 'J' || e.key === 'ArrowLeft') {
          e.preventDefault();
          handleSetTermIdx(Math.max(0, activeTermIdx - 1));
        } else if (e.key === 'k' || e.key === 'K' || e.key === 'ArrowRight') {
          e.preventDefault();
          handleSetTermIdx(Math.min(Math.max(0, filteredTerms.length - 1), activeTermIdx + 1));
        } else if (e.key === 'm' || e.key === 'M') {
          if (currentTerm) {
            e.preventDefault();
            onToggleTermMemorized(currentTerm.id);
          }
        } else if (e.key === 's' || e.key === 'S') {
          if (currentTerm) {
            e.preventDefault();
            onToggleTermStarred(currentTerm.id);
          }
        }
      } else if (activeTab === 'choice') {
        if (e.key === 'j' || e.key === 'J' || e.key === 'ArrowLeft') {
          e.preventDefault();
          setChoiceIdx((p) => Math.max(0, p - 1));
        } else if (e.key === 'k' || e.key === 'K' || e.key === 'ArrowRight') {
          e.preventDefault();
          setChoiceIdx((p) => Math.min(Math.max(0, filteredChoices.length - 1), p + 1));
        } else if (e.code === 'Space') {
          e.preventDefault();
          setShowChoiceExplanation((p) => !p);
        } else if (e.key === 'm' || e.key === 'M') {
          if (currentChoice) {
            e.preventDefault();
            onToggleChoiceMemorized(currentChoice.id);
          }
        } else if (e.key === 's' || e.key === 'S') {
          if (currentChoice) {
            e.preventDefault();
            onToggleChoiceStarred(currentChoice.id);
          }
        }
      } else if (activeTab === 'truefalse') {
        if (e.key === 'j' || e.key === 'J' || e.key === 'ArrowLeft') {
          e.preventDefault();
          setTfIdx((p) => Math.max(0, p - 1));
        } else if (e.key === 'k' || e.key === 'K' || e.key === 'ArrowRight') {
          e.preventDefault();
          setTfIdx((p) => Math.min(Math.max(0, filteredTrueFalse.length - 1), p + 1));
        } else if (e.code === 'Space') {
          e.preventDefault();
          setShowTfExplanation((p) => !p);
        } else if (e.key === 'm' || e.key === 'M') {
          if (currentTF) {
            e.preventDefault();
            onToggleTfMemorized(currentTF.id);
          }
        } else if (e.key === 's' || e.key === 'S') {
          if (currentTF) {
            e.preventDefault();
            onToggleTfStarred(currentTF.id);
          }
        }
      } else if (activeTab === 'fill') {
        if (e.key === 'j' || e.key === 'J' || e.key === 'ArrowLeft') {
          e.preventDefault();
          setFillIdx((p) => Math.max(0, p - 1));
        } else if (e.key === 'k' || e.key === 'K' || e.key === 'ArrowRight') {
          e.preventDefault();
          setFillIdx((p) => Math.min(Math.max(0, filteredFillIns.length - 1), p + 1));
        } else if (e.code === 'Space') {
          e.preventDefault();
          setShowFillAnswer((p) => !p);
        } else if (e.key === 'm' || e.key === 'M') {
          if (currentFill) {
            e.preventDefault();
            onToggleFillMemorized(currentFill.id);
          }
        } else if (e.key === 's' || e.key === 'S') {
          if (currentFill) {
            e.preventDefault();
            onToggleFillStarred(currentFill.id);
          }
        }
      } else if (activeTab === 'short') {
        if (e.key === 'j' || e.key === 'J' || e.key === 'ArrowLeft') {
          e.preventDefault();
          setShortIdx((p) => Math.max(0, p - 1));
        } else if (e.key === 'k' || e.key === 'K' || e.key === 'ArrowRight') {
          e.preventDefault();
          setShortIdx((p) => Math.min(Math.max(0, filteredShortAnswers.length - 1), p + 1));
        } else if (e.code === 'Space') {
          e.preventDefault();
          setShowShortAnswer((p) => !p);
        } else if (e.key === 'm' || e.key === 'M') {
          if (currentShort) {
            e.preventDefault();
            onToggleShortMemorized(currentShort.id);
          }
        } else if (e.key === 's' || e.key === 'S') {
          if (currentShort) {
            e.preventDefault();
            onToggleShortStarred(currentShort.id);
          }
        }
      } else if (activeTab === 'essay') {
        if (e.key === 'j' || e.key === 'J' || e.key === 'ArrowLeft') {
          e.preventDefault();
          setEssayIdx((p) => Math.max(0, p - 1));
        } else if (e.key === 'k' || e.key === 'K' || e.key === 'ArrowRight') {
          e.preventDefault();
          setEssayIdx((p) => Math.min(Math.max(0, filteredEssays.length - 1), p + 1));
        } else if (e.code === 'Space') {
          e.preventDefault();
          setShowEssayAnswer((p) => !p);
        } else if (e.key === 'm' || e.key === 'M') {
          if (currentEssay) {
            e.preventDefault();
            onToggleEssayMemorized(currentEssay.id);
          }
        } else if (e.key === 's' || e.key === 'S') {
          if (currentEssay) {
            e.preventDefault();
            onToggleEssayStarred(currentEssay.id);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    activeTab,
    filteredTerms.length,
    currentTerm,
    activeTermIdx,
    filteredChoices.length,
    currentChoice,
    filteredTrueFalse.length,
    currentTF,
    filteredFillIns.length,
    currentFill,
    filteredShortAnswers.length,
    currentShort,
    filteredEssays.length,
    currentEssay,
    onToggleTermMemorized,
    onToggleTermStarred,
    onToggleChoiceMemorized,
    onToggleChoiceStarred,
    onToggleTfMemorized,
    onToggleTfStarred,
    onToggleFillMemorized,
    onToggleFillStarred,
    onToggleShortMemorized,
    onToggleShortStarred,
    onToggleEssayMemorized,
    onToggleEssayStarred,
  ]);

  // Active tab summary stats & filter pill counts
  const activeTabMeta = useMemo(() => {
    switch (activeTab) {
      case 'terms':
        return {
          items: searchTerms,
          filtered: filteredTerms,
          memorized: termMemorized,
          starred: termStarred,
          total: terms.length,
        };
      case 'fill':
        return {
          items: searchFillIns,
          filtered: filteredFillIns,
          memorized: fillMemorized,
          starred: fillStarred,
          total: fillIns.length,
        };
      case 'choice':
        return {
          items: searchChoices,
          filtered: filteredChoices,
          memorized: choiceMemorized,
          starred: choiceStarred,
          total: singleChoices.length,
        };
      case 'truefalse':
        return {
          items: searchTrueFalse,
          filtered: filteredTrueFalse,
          memorized: tfMemorized,
          starred: tfStarred,
          total: trueFalse.length,
        };
      case 'short':
        return {
          items: searchShortAnswers,
          filtered: filteredShortAnswers,
          memorized: shortMemorized,
          starred: shortStarred,
          total: shortAnswers.length,
        };
      case 'essay':
      default:
        return {
          items: searchEssays,
          filtered: filteredEssays,
          memorized: essayMemorized,
          starred: essayStarred,
          total: essays.length,
        };
    }
  }, [
    activeTab,
    searchTerms,
    filteredTerms,
    termMemorized,
    termStarred,
    terms.length,
    searchFillIns,
    filteredFillIns,
    fillMemorized,
    fillStarred,
    fillIns.length,
    searchChoices,
    filteredChoices,
    choiceMemorized,
    choiceStarred,
    singleChoices.length,
    searchTrueFalse,
    filteredTrueFalse,
    tfMemorized,
    tfStarred,
    trueFalse.length,
    searchShortAnswers,
    filteredShortAnswers,
    shortMemorized,
    shortStarred,
    shortAnswers.length,
    searchEssays,
    filteredEssays,
    essayMemorized,
    essayStarred,
    essays.length,
  ]);

  const activeStats = {
    mastered: activeTabMeta.memorized.length,
    starred: activeTabMeta.starred.length,
    total: activeTabMeta.total,
  };

  const pillCounts = useMemo(() => {
    const { items, memorized, starred } = activeTabMeta;
    let memorizedCount = 0;
    let unmemorizedCount = 0;
    let starredCount = 0;
    for (const item of items) {
      if (memorized.includes(item.id)) memorizedCount++;
      else unmemorizedCount++;
      if (starred.includes(item.id)) starredCount++;
    }
    return {
      all: items.length,
      unmemorized: unmemorizedCount,
      memorized: memorizedCount,
      starred: starredCount,
    };
  }, [activeTabMeta]);

  const tabItems: { id: PracticeTab; label: string; count: number }[] = [
    { id: 'terms', label: '名词解释', count: filteredTerms.length },
    { id: 'fill', label: '填空题', count: filteredFillIns.length },
    { id: 'choice', label: '单选题', count: filteredChoices.length },
    { id: 'truefalse', label: '判断改错题', count: filteredTrueFalse.length },
    { id: 'short', label: '简答题', count: filteredShortAnswers.length },
    { id: 'essay', label: '论述题', count: filteredEssays.length },
  ];

  const filterPills: { id: StatusFilter; label: string; count: number }[] = [
    { id: 'all', label: '全部', count: pillCounts.all },
    { id: 'unmemorized', label: '未掌握', count: pillCounts.unmemorized },
    { id: 'memorized', label: '已掌握', count: pillCounts.memorized },
    { id: 'starred', label: '收藏', count: pillCounts.starred },
  ];

  const renderCardFooterActions = (
    isMemorized: boolean,
    onToggleMemorized: () => void,
    isStarred: boolean,
    onToggleStar: () => void,
    chapterId: number,
    chapterTitleOverride?: string
  ) => (
    <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
      <span className="text-xs text-slate-400">
        {chapterTitleOverride || getChapterTitle(chapterId)}
      </span>

      <div className="flex items-center gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleStar();
          }}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
            isStarred
              ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
              : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-slate-50 hover:text-amber-500'
          }`}
        >
          <Star className={`w-4 h-4 ${isStarred ? 'fill-white text-white' : 'text-slate-400'}`} />
          <span>收藏</span>
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleMemorized();
          }}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
            isMemorized
              ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
              : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-slate-50 hover:text-emerald-600'
          }`}
        >
          {isMemorized ? (
            <CheckCircle2 className="w-4 h-4" />
          ) : (
            <Circle className="w-4 h-4 text-slate-400" />
          )}
          <span>掌握</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50/50 dark:bg-[#0b0f17] overflow-hidden select-text">
      {/* Top Mode Sub-Tabs */}
      <div className="bg-white dark:bg-[#151b26] border-b border-slate-200/80 dark:border-slate-800 px-4 py-2.5 flex flex-col gap-2 shadow-xs shrink-0">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div
            role="tablist"
            aria-label="专项练习题型"
            className="flex items-center gap-1.5 p-1 bg-slate-100/90 dark:bg-slate-800/90 rounded-2xl flex-wrap"
          >
            {tabItems.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 text-xs font-bold rounded-xl transition cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-white dark:bg-[#1f283b] text-blue-600 dark:text-blue-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {tab.label} (<span className="tabular-nums">{tab.count}</span>题)
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
            <span>
              已掌握: <span className="font-bold text-emerald-600 tabular-nums">{activeStats.mastered}</span> / <span className="tabular-nums">{activeStats.total}</span>
            </span>
            <span>
              已收藏: <span className="font-bold text-amber-500 tabular-nums">{activeStats.starred}</span>
            </span>
          </div>
        </div>

        {/* Compact Status Filter Pill Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            {filterPills.map((pill) => {
              const isActive = statusFilter === pill.id;
              return (
                <button
                  key={pill.id}
                  type="button"
                  onClick={() => setStatusFilter(pill.id)}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border transition cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                      : 'bg-slate-50 dark:bg-slate-800/70 text-slate-600 dark:text-slate-300 border-slate-200/80 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>{pill.label}</span>
                  <span
                    className={`tabular-nums text-[11px] px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-200/70 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {pill.count}
                  </span>
                </button>
              );
            })}
          </div>
          {normalizedQuery && (
            <span className="text-xs text-slate-400">
              搜索: “{searchQuery.trim()}”
            </span>
          )}
        </div>
      </div>

      {/* Empty State when filtered list is empty */}
      {activeTabMeta.filtered.length === 0 && (
        <div className="flex-1 overflow-y-auto p-4 md:p-8 flex items-center justify-center">
          <div className="w-full max-w-md bg-white dark:bg-[#151b26] rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 shadow-sm p-8 text-center space-y-4">
            <div className="text-base font-bold text-slate-800 dark:text-slate-100">
              当前筛选条件下暂无题目
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              {normalizedQuery
                ? '没有匹配当前搜索关键词与状态筛选的题目，请调整搜索词或重置筛选条件。'
                : '当前状态分类下暂时没有题目，点击下方按钮可恢复显示全部题目。'}
            </p>
            <button
              type="button"
              onClick={resetStatusFilter}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs transition cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>重置筛选</span>
            </button>
          </div>
        </div>
      )}

      {/* Tab 1: Terminology Flashcards */}
      {activeTab === 'terms' && currentTerm && (
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="px-3 pt-3 sm:px-5 sm:pt-4 shrink-0">
            <ClayQuestionNav
              key="terms"
              currentIndex={activeTermIdx}
              totalFiltered={filteredTerms.length}
              onPrev={() => handleSetTermIdx(Math.max(0, activeTermIdx - 1))}
              onNext={() => handleSetTermIdx(Math.min(Math.max(0, filteredTerms.length - 1), activeTermIdx + 1))}
              onJumpToIndex={handleSetTermIdx}
              allItemIds={filteredTerms.map((t) => t.id)}
              completedItemIds={termMemorized}
              starredItemIds={termStarred}
              isMemorized={termMemorized.includes(currentTerm.id)}
              onToggleMemorized={() => onToggleTermMemorized(currentTerm.id)}
              actionLabel="掌握"
              isStarred={termStarred.includes(currentTerm.id)}
              onToggleStar={() => onToggleTermStarred(currentTerm.id)}
              revealed={isFlipped}
              onToggleRevealed={() => setIsFlipped((p) => !p)}
              toggleLabel="定义"
              onCopy={() => {
                triggerCopy(`【${currentTerm.term}】\n${currentTerm.definition}`);
              }}
              isCopied={copied}
              modeBadge="名词解释"
            />
          </div>

          <div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col items-center">
            <div className="w-full max-w-3xl my-auto space-y-4">
              <div
                onClick={() => setIsFlipped((prev) => !prev)}
                className="w-full min-h-[320px] bg-white dark:bg-[#151b26] rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-lg transition-all p-6 sm:p-8 flex flex-col justify-between cursor-pointer select-none group"
              >
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-xl font-bold border border-blue-200 dark:border-blue-800">
                    名词解释 #{currentTerm.id}
                  </span>
                  {currentTerm.source && <span className="text-slate-500">{currentTerm.source}</span>}
                </div>

                <div className="my-8 text-center">
                  {!isFlipped ? (
                    <div className="space-y-4">
                      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 transition-colors">
                        {currentTerm.term}
                        {TERM_PPT_REFS[currentTerm.id] && (
                          <span className="font-mono text-base sm:text-lg font-semibold text-slate-500 dark:text-slate-400 ml-1.5 align-middle">
                            （{TERM_PPT_REFS[currentTerm.id]}）
                          </span>
                        )}
                      </h2>
                      <p className="text-sm text-slate-400 font-medium">
                        查看定义
                      </p>
                    </div>
                  ) : (
                    <div className="text-left space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {currentTerm.term}
                          {TERM_PPT_REFS[currentTerm.id] && (
                            <span className="font-mono text-sm font-semibold text-slate-500 dark:text-slate-400 ml-1">
                              （{TERM_PPT_REFS[currentTerm.id]}）
                            </span>
                          )}
                        </h3>
                      </div>
                      <div className="p-5 bg-slate-50/90 dark:bg-slate-900/60 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-base leading-relaxed text-slate-800 dark:text-slate-200">
                        <MarkdownViewer content={currentTerm.definition} maskKeywords={isMasking} />
                      </div>
                    </div>
                  )}
                </div>

                {renderCardFooterActions(
                  termMemorized.includes(currentTerm.id),
                  () => onToggleTermMemorized(currentTerm.id),
                  termStarred.includes(currentTerm.id),
                  () => onToggleTermStarred(currentTerm.id),
                  currentTerm.chapterId,
                  currentTerm.chapterTitle
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Single Choice Drill */}
      {activeTab === 'choice' && currentChoice && (
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="px-3 pt-3 sm:px-5 sm:pt-4 shrink-0">
            <ClayQuestionNav
              key="choice"
              currentIndex={choiceIdx}
              totalFiltered={filteredChoices.length}
              onPrev={() => setChoiceIdx((p) => Math.max(0, p - 1))}
              onNext={() => setChoiceIdx((p) => Math.min(Math.max(0, filteredChoices.length - 1), p + 1))}
              onJumpToIndex={(idx) => setChoiceIdx(idx)}
              allItemIds={filteredChoices.map((q) => q.id)}
              completedItemIds={choiceMemorized}
              starredItemIds={choiceStarred}
              isMemorized={choiceMemorized.includes(currentChoice.id)}
              onToggleMemorized={() => onToggleChoiceMemorized(currentChoice.id)}
              actionLabel="掌握"
              isStarred={choiceStarred.includes(currentChoice.id)}
              onToggleStar={() => onToggleChoiceStarred(currentChoice.id)}
              revealed={showChoiceExplanation}
              onToggleRevealed={() => setShowChoiceExplanation((p) => !p)}
              toggleLabel="解析"
              onCopy={() => {
                const opts = (['A', 'B', 'C', 'D'] as const)
                  .map((k) => `${k}. ${currentChoice.options[k]}`)
                  .join('\n');
                triggerCopy(
                  `【单选专项 #${currentChoice.id}】${currentChoice.stem}\n${opts}\n\n正确答案：${currentChoice.correctKey}\n解析：${currentChoice.rationale}`
                );
              }}
              isCopied={copied}
              modeBadge="单选题"
            />
          </div>

          <div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col items-center">
            <div className="w-full max-w-3xl my-auto space-y-4">
              <div className="w-full min-h-[320px] bg-white dark:bg-[#151b26] rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-lg transition-all p-6 sm:p-8 flex flex-col justify-between gap-6">
                {/* Top Card Meta */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="font-mono bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-xl font-bold border border-blue-200 dark:border-blue-800">
                      单选专项 #{currentChoice.id}
                    </span>
                    {currentChoice.recitationQuestionId && (
                      <span className="font-medium text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-xl border border-slate-200 dark:border-slate-700">
                        源自全书速记 #{currentChoice.recitationQuestionId}
                      </span>
                    )}
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                    第 {choiceIdx + 1} / {filteredChoices.length} 题
                  </span>
                </div>

                {/* Question Stem & Options */}
                <div className="space-y-5">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-relaxed">
                    <span className="font-mono mr-1.5">{choiceIdx + 1}.</span>
                    <span>{currentChoice.stem}</span>
                    {CHOICE_PPT_REFS[currentChoice.id] && (
                      <span className="font-mono text-sm font-semibold text-slate-500 dark:text-slate-400 ml-1">
                        （{CHOICE_PPT_REFS[currentChoice.id]}）
                      </span>
                    )}
                  </h3>

                  <div className="space-y-3">
                    {(['A', 'B', 'C', 'D'] as const).map((key) => {
                      const text = currentChoice.options[key];
                      const isSelected = selectedOption === key;
                      const isCorrect = key === currentChoice.correctKey;

                      let optClass =
                        'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200';

                      if (showChoiceExplanation) {
                        if (isCorrect) {
                          optClass =
                            'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold';
                        } else if (isSelected) {
                          optClass =
                            'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-900 dark:text-rose-200';
                        }
                      } else if (isSelected) {
                        optClass =
                          'border-blue-500 bg-blue-50/50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-100 font-bold';
                      }

                      return (
                        <button
                          key={key}
                          onClick={() => {
                            setSelectedOption(key);
                            setShowChoiceExplanation(true);
                          }}
                          className={`w-full p-4 rounded-2xl border text-left flex items-start gap-3 transition cursor-pointer text-sm ${optClass}`}
                        >
                          <span className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-xs shrink-0">
                            {key}
                          </span>
                          <span className="flex-1 pt-0.5">{text}</span>
                        </button>
                      );
                    })}
                  </div>

                  {showChoiceExplanation && (
                    <div className="p-5 bg-slate-50/90 dark:bg-slate-900/60 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-2 text-xs">
                      <div className="font-bold text-emerald-700 dark:text-emerald-400 text-sm">
                        正确答案：【{currentChoice.correctKey}】
                      </div>
                      <div className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
                        {currentChoice.rationale}
                      </div>
                    </div>
                  )}
                </div>

                {renderCardFooterActions(
                  choiceMemorized.includes(currentChoice.id),
                  () => onToggleChoiceMemorized(currentChoice.id),
                  choiceStarred.includes(currentChoice.id),
                  () => onToggleChoiceStarred(currentChoice.id),
                  currentChoice.chapterId
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: True / False Drill */}
      {activeTab === 'truefalse' && currentTF && (
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="px-3 pt-3 sm:px-5 sm:pt-4 shrink-0">
            <ClayQuestionNav
              key="truefalse"
              currentIndex={tfIdx}
              totalFiltered={filteredTrueFalse.length}
              onPrev={() => setTfIdx((p) => Math.max(0, p - 1))}
              onNext={() => setTfIdx((p) => Math.min(Math.max(0, filteredTrueFalse.length - 1), p + 1))}
              onJumpToIndex={(idx) => setTfIdx(idx)}
              allItemIds={filteredTrueFalse.map((q) => q.id)}
              completedItemIds={tfMemorized}
              starredItemIds={tfStarred}
              isMemorized={tfMemorized.includes(currentTF.id)}
              onToggleMemorized={() => onToggleTfMemorized(currentTF.id)}
              actionLabel="掌握"
              isStarred={tfStarred.includes(currentTF.id)}
              onToggleStar={() => onToggleTfStarred(currentTF.id)}
              revealed={showTfExplanation}
              onToggleRevealed={() => setShowTfExplanation((p) => !p)}
              toggleLabel="解析"
              onCopy={() => {
                triggerCopy(
                  `【判断改错 #${currentTF.id}】${currentTF.statement}\n判断：${currentTF.isCorrect ? '正确 (√)' : '错误 (×)'}\n解析：${currentTF.errorCorrection}`
                );
              }}
              isCopied={copied}
              modeBadge="判断改错题"
            />
          </div>

          <div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col items-center">
            <div className="w-full max-w-3xl my-auto space-y-4">
              <div className="w-full min-h-[320px] bg-white dark:bg-[#151b26] rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-lg transition-all p-6 sm:p-8 flex flex-col justify-between gap-6">
                {/* Top Card Meta */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="font-mono bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-xl font-bold border border-blue-200 dark:border-blue-800">
                      判断改错 #{currentTF.id}
                    </span>
                    {currentTF.recitationQuestionId && (
                      <span className="font-medium text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-xl border border-slate-200 dark:border-slate-700">
                        源自全书速记 #{currentTF.recitationQuestionId}
                      </span>
                    )}
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                    第 {tfIdx + 1} / {filteredTrueFalse.length} 题
                  </span>
                </div>

                {/* Statement & Answer Buttons */}
                <div className="space-y-6">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-relaxed">
                    <span className="font-mono mr-1.5">{tfIdx + 1}.</span>
                    <span>{currentTF.statement}</span>
                    {TF_PPT_REFS[currentTF.id] && (
                      <span className="font-mono text-sm font-semibold text-slate-500 dark:text-slate-400 ml-1">
                        （{TF_PPT_REFS[currentTF.id]}）
                      </span>
                    )}
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => {
                        setSelectedTf(true);
                        setShowTfExplanation(true);
                      }}
                      className={`p-4 rounded-2xl border flex items-center justify-center gap-2 font-bold transition text-sm cursor-pointer ${
                        showTfExplanation
                          ? currentTF.isCorrect
                            ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-bold'
                            : selectedTf === true
                            ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-800 dark:text-rose-200'
                            : 'border-slate-200 dark:border-slate-700 text-slate-500'
                          : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200'
                      }`}
                    >
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>正确 (√)</span>
                    </button>
                    <button
                      onClick={() => {
                        setSelectedTf(false);
                        setShowTfExplanation(true);
                      }}
                      className={`p-4 rounded-2xl border flex items-center justify-center gap-2 font-bold transition text-sm cursor-pointer ${
                        showTfExplanation
                          ? !currentTF.isCorrect
                            ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-bold'
                            : selectedTf === false
                            ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-800 dark:text-rose-200'
                            : 'border-slate-200 dark:border-slate-700 text-slate-500'
                          : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200'
                      }`}
                    >
                      <X className="w-4 h-4 text-rose-600" />
                      <span>错误 (×)</span>
                    </button>
                  </div>

                  {showTfExplanation && (
                    <div className="p-5 bg-slate-50/90 dark:bg-slate-900/60 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-2 text-xs">
                      <div className="font-bold text-slate-900 dark:text-white text-sm">
                        判断结果：本题陈述【{currentTF.isCorrect ? '正确 (√)' : '错误 (×)'}】
                      </div>
                      <div className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
                        {currentTF.errorCorrection}
                      </div>
                    </div>
                  )}
                </div>

                {renderCardFooterActions(
                  tfMemorized.includes(currentTF.id),
                  () => onToggleTfMemorized(currentTF.id),
                  tfStarred.includes(currentTF.id),
                  () => onToggleTfStarred(currentTF.id),
                  currentTF.chapterId
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Fill in blanks Drill */}
      {activeTab === 'fill' && currentFill && (
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="px-3 pt-3 sm:px-5 sm:pt-4 shrink-0">
            <ClayQuestionNav
              key="fill"
              currentIndex={fillIdx}
              totalFiltered={filteredFillIns.length}
              onPrev={() => setFillIdx((p) => Math.max(0, p - 1))}
              onNext={() => setFillIdx((p) => Math.min(Math.max(0, filteredFillIns.length - 1), p + 1))}
              onJumpToIndex={(idx) => setFillIdx(idx)}
              allItemIds={filteredFillIns.map((q) => q.id)}
              completedItemIds={fillMemorized}
              starredItemIds={fillStarred}
              isMemorized={fillMemorized.includes(currentFill.id)}
              onToggleMemorized={() => onToggleFillMemorized(currentFill.id)}
              actionLabel="掌握"
              isStarred={fillStarred.includes(currentFill.id)}
              onToggleStar={() => onToggleFillStarred(currentFill.id)}
              revealed={showFillAnswer}
              onToggleRevealed={() => setShowFillAnswer((prev) => !prev)}
              toggleLabel="答案"
              onCopy={() => {
                triggerCopy(
                  `【填空专项 #${currentFill.id}】${currentFill.stem}\n答案：${currentFill.answers.join(' / ')}${currentFill.explanation ? `\n解析：${currentFill.explanation}` : ''}`
                );
              }}
              isCopied={copied}
              modeBadge="填空题"
            />
          </div>

          <div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col items-center">
            <div className="w-full max-w-3xl my-auto space-y-4">
              <div
                onClick={() => setShowFillAnswer((prev) => !prev)}
                className="w-full min-h-[320px] bg-white dark:bg-[#151b26] rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-lg transition-all p-6 sm:p-8 flex flex-col justify-between gap-6 cursor-pointer select-none"
              >
                {/* Top Card Meta */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="font-mono bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-xl font-bold border border-blue-200 dark:border-blue-800">
                      填空专项 #{currentFill.id}
                    </span>
                    {currentFill.recitationQuestionId && (
                      <span className="font-medium text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-xl border border-slate-200 dark:border-slate-700">
                        源自全书速记 #{currentFill.recitationQuestionId}
                      </span>
                    )}
                  </div>
                </div>

                {/* Stem & Answer */}
                <div className="space-y-6 my-4">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-relaxed">
                    <span className="font-mono mr-1.5">{fillIdx + 1}.</span>
                    <span>{currentFill.stem}</span>
                    {FILL_PPT_REFS[currentFill.id] && (
                      <span className="font-mono text-sm font-semibold text-slate-500 dark:text-slate-400 ml-1">
                        （{FILL_PPT_REFS[currentFill.id]}）
                      </span>
                    )}
                  </h3>

                  {!showFillAnswer ? (
                    <p className="text-sm text-slate-400 font-medium">
                      查看答案
                    </p>
                  ) : (
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="p-5 bg-slate-50/90 dark:bg-slate-900/60 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-2.5 text-xs select-text cursor-auto"
                    >
                      <div className="font-bold text-slate-900 dark:text-slate-100 text-sm flex flex-wrap items-center gap-2">
                        <span>参考答案：</span>
                        {currentFill.answers.map((ans, aIdx) => (
                          <span
                            key={aIdx}
                            className="px-2.5 py-1 bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700 rounded-lg font-bold"
                          >
                            {ans}
                          </span>
                        ))}
                      </div>
                      {currentFill.explanation && (
                        <div className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
                          解析：{currentFill.explanation}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {renderCardFooterActions(
                  fillMemorized.includes(currentFill.id),
                  () => onToggleFillMemorized(currentFill.id),
                  fillStarred.includes(currentFill.id),
                  () => onToggleFillStarred(currentFill.id),
                  currentFill.chapterId
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: Short Answer Drill */}
      {activeTab === 'short' && currentShort && (
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="px-3 pt-3 sm:px-5 sm:pt-4 shrink-0">
            <ClayQuestionNav
              key="short"
              currentIndex={shortIdx}
              totalFiltered={filteredShortAnswers.length}
              onPrev={() => setShortIdx((p) => Math.max(0, p - 1))}
              onNext={() => setShortIdx((p) => Math.min(Math.max(0, filteredShortAnswers.length - 1), p + 1))}
              onJumpToIndex={(idx) => setShortIdx(idx)}
              allItemIds={filteredShortAnswers.map((q) => q.id)}
              completedItemIds={shortMemorized}
              starredItemIds={shortStarred}
              isMemorized={shortMemorized.includes(currentShort.id)}
              onToggleMemorized={() => onToggleShortMemorized(currentShort.id)}
              actionLabel="掌握"
              isStarred={shortStarred.includes(currentShort.id)}
              onToggleStar={() => onToggleShortStarred(currentShort.id)}
              revealed={showShortAnswer}
              onToggleRevealed={() => setShowShortAnswer((p) => !p)}
              toggleLabel="答案"
              onCopy={() => {
                const rubricText = (currentShort.rubricPoints || currentShort.rubrics || [])
                  .map((r, i) => `${i + 1}. ${r.point} (${r.score}分)`)
                  .join('\n');
                triggerCopy(
                  `【简答题 #${currentShort.id}】(${currentShort.totalPoints ?? currentShort.points ?? 6}分) ${currentShort.question}\n\n参考答案：\n${currentShort.sampleAnswer || currentShort.standardAnswer || ''}${rubricText ? `\n\n采分点：\n${rubricText}` : ''}`
                );
              }}
              isCopied={copied}
              modeBadge="简答题"
            />
          </div>

          <div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col items-center">
            <div className="w-full max-w-3xl my-auto space-y-4">
              <div className="w-full min-h-[320px] bg-white dark:bg-[#151b26] rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-lg transition-all p-6 sm:p-8 flex flex-col justify-between gap-6">
                {/* Top Card Meta */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-xl font-bold border border-blue-200 dark:border-blue-800">
                      简答题 #{currentShort.id}
                    </span>
                    <span className="font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-xl border border-slate-200 dark:border-slate-700">
                      {getChapterTitle(currentShort.chapterId)}
                    </span>
                    <span className="font-mono font-bold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 px-2.5 py-1 rounded-xl border border-amber-200 dark:border-amber-800">
                      {currentShort.totalPoints ?? currentShort.points ?? 6} 分
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                    第 {shortIdx + 1} / {filteredShortAnswers.length} 题
                  </span>
                </div>

                {/* Question & Expandable Sample Answer / Rubric */}
                <div className="space-y-5">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-relaxed">
                    <span className="font-mono mr-1.5">{shortIdx + 1}.</span>
                    <span>{currentShort.question}</span>
                    {SHORT_PPT_REFS[currentShort.id] && (
                      <span className="font-mono text-sm font-semibold text-slate-500 dark:text-slate-400 ml-1">
                        （{SHORT_PPT_REFS[currentShort.id]}）
                      </span>
                    )}
                  </h3>

                  {!showShortAnswer ? (
                    <div
                      onClick={() => setShowShortAnswer(true)}
                      className="p-5 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/30 text-center cursor-pointer hover:bg-slate-100/70 dark:hover:bg-slate-800/50 transition"
                    >
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                        展开参考答案
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="p-5 bg-slate-50/90 dark:bg-slate-900/60 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-3">
                        <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 tracking-wide">
                          参考答案
                        </div>
                        <div className="text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                          <MarkdownViewer content={currentShort.sampleAnswer || currentShort.standardAnswer || ''} />
                        </div>
                      </div>

                      {(currentShort.rubricPoints || currentShort.rubrics || []).length > 0 && (
                        <div className="p-4 bg-amber-50/50 dark:bg-amber-950/20 rounded-2xl border border-amber-200/70 dark:border-amber-800/50 space-y-2.5">
                          <div className="text-xs font-bold text-amber-800 dark:text-amber-300">
                            分步采分点（共 {currentShort.totalPoints ?? currentShort.points ?? 6} 分）
                          </div>
                          <div className="space-y-1.5">
                            {(currentShort.rubricPoints || currentShort.rubrics || []).map((r, rIdx) => (
                              <div
                                key={rIdx}
                                className="flex items-start justify-between gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 bg-white/80 dark:bg-slate-900/50 px-3 py-2 rounded-xl border border-amber-200/50 dark:border-amber-800/30"
                              >
                                <span className="flex-1 leading-relaxed">
                                  <span className="font-mono font-bold text-amber-600 mr-1.5">{rIdx + 1}.</span>
                                  {r.point}
                                </span>
                                <span className="shrink-0 font-mono font-bold text-xs px-2 py-0.5 rounded-lg bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200">
                                  {r.score} 分
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {renderCardFooterActions(
                  shortMemorized.includes(currentShort.id),
                  () => onToggleShortMemorized(currentShort.id),
                  shortStarred.includes(currentShort.id),
                  () => onToggleShortStarred(currentShort.id),
                  currentShort.chapterId
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 6: Essay Drill */}
      {activeTab === 'essay' && currentEssay && (
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="px-3 pt-3 sm:px-5 sm:pt-4 shrink-0">
            <ClayQuestionNav
              key="essay"
              currentIndex={essayIdx}
              totalFiltered={filteredEssays.length}
              onPrev={() => setEssayIdx((p) => Math.max(0, p - 1))}
              onNext={() => setEssayIdx((p) => Math.min(Math.max(0, filteredEssays.length - 1), p + 1))}
              onJumpToIndex={(idx) => setEssayIdx(idx)}
              allItemIds={filteredEssays.map((q) => q.id)}
              completedItemIds={essayMemorized}
              starredItemIds={essayStarred}
              isMemorized={essayMemorized.includes(currentEssay.id)}
              onToggleMemorized={() => onToggleEssayMemorized(currentEssay.id)}
              actionLabel="掌握"
              isStarred={essayStarred.includes(currentEssay.id)}
              onToggleStar={() => onToggleEssayStarred(currentEssay.id)}
              revealed={showEssayAnswer}
              onToggleRevealed={() => setShowEssayAnswer((p) => !p)}
              toggleLabel="答案"
              onCopy={() => {
                triggerCopy(
                  `【论述题 #${currentEssay.id}】${currentEssay.title} (${currentEssay.totalPoints ?? currentEssay.points ?? 20}分)\n${currentEssay.question}\n\n参考答案：\n${currentEssay.sampleAnswer || currentEssay.standardOutline || ''}`
                );
              }}
              isCopied={copied}
              modeBadge="论述题"
            />
          </div>

          <div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col items-center">
            <div className="w-full max-w-3xl my-auto space-y-4">
              <div className="w-full min-h-[320px] bg-white dark:bg-[#151b26] rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-lg transition-all p-6 sm:p-8 flex flex-col justify-between gap-6">
                {/* Top Card Meta */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-xl font-bold border border-blue-200 dark:border-blue-800">
                      论述题 #{currentEssay.id}
                    </span>
                    <span className="font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-xl border border-slate-200 dark:border-slate-700">
                      {currentEssay.chapterRange} · {currentEssay.topicCategory === 'monetary-policy' ? '货币政策专题' : '金融监管专题'}
                    </span>
                    <span className="font-mono font-bold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 px-2.5 py-1 rounded-xl border border-amber-200 dark:border-amber-800">
                      {currentEssay.totalPoints ?? currentEssay.points ?? 20} 分
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                    第 {essayIdx + 1} / {filteredEssays.length} 题
                  </span>
                </div>

                {/* Question & Expandable Sample Answer / Rubric */}
                <div className="space-y-5">
                  <div className="space-y-1.5">
                    {currentEssay.title && (
                      <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                        专题：{currentEssay.title}
                      </div>
                    )}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-relaxed">
                      <span className="font-mono mr-1.5">{essayIdx + 1}.</span>
                      <span>{currentEssay.question}</span>
                      {ESSAY_PPT_REFS[currentEssay.id] && (
                        <span className="font-mono text-sm font-semibold text-slate-500 dark:text-slate-400 ml-1">
                          （{ESSAY_PPT_REFS[currentEssay.id]}）
                        </span>
                      )}
                    </h3>
                  </div>

                  {!showEssayAnswer ? (
                    <div
                      onClick={() => setShowEssayAnswer(true)}
                      className="p-5 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/30 text-center cursor-pointer hover:bg-slate-100/70 dark:hover:bg-slate-800/50 transition"
                    >
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                        展开参考答案
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="p-5 bg-slate-50/90 dark:bg-slate-900/60 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-3">
                        <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 tracking-wide">
                          参考答案框架
                        </div>
                        <div className="text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                          <MarkdownViewer content={currentEssay.sampleAnswer || currentEssay.standardOutline || ''} />
                        </div>
                      </div>

                      {currentEssay.rubric && (
                        <div className="p-4 bg-amber-50/50 dark:bg-amber-950/20 rounded-2xl border border-amber-200/70 dark:border-amber-800/50 space-y-2.5">
                          <div className="text-xs font-bold text-amber-800 dark:text-amber-300">
                            四维评分标准（共 {currentEssay.totalPoints ?? currentEssay.points ?? 20} 分）
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {(
                              [
                                { key: 'theory', label: '一、理论基础' },
                                { key: 'mechanism', label: '二、作用机制' },
                                { key: 'practice', label: '三、现实结合' },
                                { key: 'conclusion', label: '四、政策结论' },
                              ] as const
                            ).map(({ key, label }) => {
                              const dim = currentEssay.rubric[key];
                              if (!dim) return null;
                              return (
                                <div
                                  key={key}
                                  className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/50 border border-amber-200/50 dark:border-amber-800/30 space-y-1"
                                >
                                  <div className="flex items-center justify-between gap-2">
                                    <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300">{label}</span>
                                    <span className="font-mono font-bold text-xs px-2 py-0.5 rounded-lg bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200">
                                      {dim.score} 分
                                    </span>
                                  </div>
                                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{dim.desc}</p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {renderCardFooterActions(
                  essayMemorized.includes(currentEssay.id),
                  () => onToggleEssayMemorized(currentEssay.id),
                  essayStarred.includes(currentEssay.id),
                  () => onToggleEssayStarred(currentEssay.id),
                  currentEssay.chapterId || 1,
                  currentEssay.chapterRange
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
