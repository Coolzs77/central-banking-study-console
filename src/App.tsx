import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Header } from './components/Header';
import { LeftSidebar, AppMode } from './components/LeftSidebar';
import { RightSidebar } from './components/RightSidebar';
import { RecitationCanvas } from './components/RecitationCanvas';
import { HomeworkCanvas } from './components/HomeworkCanvas';
import { MockExamCanvas } from './components/MockExamCanvas';
import { PracticeCanvas } from './components/PracticeCanvas';
import { SyncModal } from './components/SyncModal';
import { useStudyState } from './hooks/useStudyState';
import { syncService } from './services/syncService';

// Authoritative datasets
import { chaptersMeta } from './data/chapters';
import { recitationQuestions } from './data/recitation';
import { homeworkQuestions } from './data/homework';
import { terminologyList } from './data/terminology';
import {
  fillInQuestions,
  singleChoiceQuestions,
  trueFalseQuestions,
  shortAnswerQuestions,
  essayQuestions,
} from './data/examData';

export function App() {
  const {
    state,
    toggleMemorized,
    toggleStarred,
    toggleHomeworkCompleted,
    toggleTermMemorized,
    toggleTermStarred,
    toggleChoiceMemorized,
    toggleChoiceStarred,
    toggleTfMemorized,
    toggleTfStarred,
    toggleFillMemorized,
    toggleFillStarred,
    toggleShortMemorized,
    toggleShortStarred,
    toggleEssayMemorized,
    toggleEssayStarred,
    addExamRecord,
    importState,
  } = useStudyState();

  // Load persisted navigation state (mode, chapter, practiceTab, and per-mode indices)
  const initialNavState = useMemo(() => {
    try {
      const raw = localStorage.getItem('cb_nav_state');
      if (raw) return JSON.parse(raw);
    } catch {
      // Ignore storage errors
    }
    return {};
  }, []);

  // Navigation & filters state
  const [currentMode, setCurrentMode] = useState<AppMode>(initialNavState.currentMode || 'recitation');
  const [selectedChapterId, setSelectedChapterId] = useState<number | null>(
    initialNavState.selectedChapterId ?? null
  );
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'memorized' | 'unmemorized' | 'starred'>('all');
  const [practiceTab, setPracticeTab] = useState<'terms' | 'fill' | 'choice' | 'truefalse' | 'short' | 'essay'>(
    initialNavState.practiceTab || 'terms'
  );

  // Single Source of Truth for question navigation indices (0-based)
  const [recitationIndex, setRecitationIndex] = useState<number>(initialNavState.recitationIndex || 0);
  const [homeworkIndex, setHomeworkIndex] = useState<number>(initialNavState.homeworkIndex || 0);
  const [practiceTermIndex, setPracticeTermIndex] = useState<number>(initialNavState.practiceTermIndex || 0);
  const [practiceChoiceIndex, setPracticeChoiceIndex] = useState<number>(initialNavState.practiceChoiceIndex || 0);
  const [practiceTfIndex, setPracticeTfIndex] = useState<number>(initialNavState.practiceTfIndex || 0);
  const [practiceFillIndex, setPracticeFillIndex] = useState<number>(initialNavState.practiceFillIndex || 0);
  const [practiceShortIndex, setPracticeShortIndex] = useState<number>(initialNavState.practiceShortIndex || 0);
  const [practiceEssayIndex, setPracticeEssayIndex] = useState<number>(initialNavState.practiceEssayIndex || 0);

  // Persist navigation state on change
  useEffect(() => {
    try {
      localStorage.setItem(
        'cb_nav_state',
        JSON.stringify({
          currentMode,
          selectedChapterId,
          practiceTab,
          recitationIndex,
          homeworkIndex,
          practiceTermIndex,
          practiceChoiceIndex,
          practiceTfIndex,
          practiceFillIndex,
          practiceShortIndex,
          practiceEssayIndex,
        })
      );
    } catch {
      // Ignore storage errors
    }
  }, [
    currentMode,
    selectedChapterId,
    practiceTab,
    recitationIndex,
    homeworkIndex,
    practiceTermIndex,
    practiceChoiceIndex,
    practiceTfIndex,
    practiceFillIndex,
    practiceShortIndex,
    practiceEssayIndex,
  ]);

  // Modals & UI state
  const [syncModalOpen, setSyncModalOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [leftSidebarCollapsed, setLeftSidebarCollapsed] = useState<boolean>(() => {
    try {
      return localStorage.getItem('cb_left_sidebar_collapsed') === 'true';
    } catch {
      return false;
    }
  });

  const toggleLeftSidebarCollapsed = useCallback(() => {
    setLeftSidebarCollapsed((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('cb_left_sidebar_collapsed', String(next));
      } catch {
        // Ignore storage errors
      }
      return next;
    });
  }, []);

  // Filtered Recitation Questions
  const filteredRecitationQuestions = useMemo(() => {
    return recitationQuestions.filter((q) => {
      if (selectedChapterId && q.chapterId !== selectedChapterId) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = q.title.toLowerCase().includes(query);
        const matchesContent = q.content.toLowerCase().includes(query);
        if (!matchesTitle && !matchesContent) return false;
      }
      if (activeFilter === 'memorized' && !state.memorized.includes(q.id)) return false;
      if (activeFilter === 'unmemorized' && state.memorized.includes(q.id)) return false;
      if (activeFilter === 'starred' && !state.starred.includes(q.id)) return false;
      return true;
    });
  }, [selectedChapterId, searchQuery, activeFilter, state.memorized, state.starred]);

  // Filtered Homework Questions
  const filteredHomeworkQuestions = useMemo(() => {
    return homeworkQuestions.filter((q) => {
      if (selectedChapterId && q.chapterId !== selectedChapterId) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchTitle = q.question.toLowerCase().includes(query);
        const matchAns = q.answer.toLowerCase().includes(query);
        if (!matchTitle && !matchAns) return false;
      }
      return true;
    });
  }, [selectedChapterId, searchQuery]);

  // Handle Chapter selection from LeftSidebar (filtered list starts at index 0)
  const handleSelectChapter = useCallback((chId: number | null) => {
    setSelectedChapterId(chId);
    setRecitationIndex(0);
    setHomeworkIndex(0);
  }, []);

  // Jump to specific recitation question by absolute question id
  const handleJumpToRecitationId = useCallback((qId: number) => {
    const filteredIdx = filteredRecitationQuestions.findIndex((q) => q.id === qId);
    if (filteredIdx !== -1) {
      setRecitationIndex(filteredIdx);
      return;
    }
    const idx = recitationQuestions.findIndex((q) => q.id === qId);
    if (idx !== -1) {
      const targetQ = recitationQuestions[idx];
      if (selectedChapterId && targetQ.chapterId !== selectedChapterId) {
        setSelectedChapterId(null);
      }
      if (activeFilter !== 'all') {
        setActiveFilter('all');
      }
      if (searchQuery.trim()) {
        setSearchQuery('');
      }
      setRecitationIndex(idx);
    }
  }, [filteredRecitationQuestions, selectedChapterId, activeFilter, searchQuery]);

  // Jump to specific homework question by absolute question id
  const handleJumpToHomeworkId = useCallback((qId: number) => {
    const filteredIdx = filteredHomeworkQuestions.findIndex((q) => q.id === qId);
    if (filteredIdx !== -1) {
      setHomeworkIndex(filteredIdx);
      return;
    }
    const idx = homeworkQuestions.findIndex((q) => q.id === qId);
    if (idx !== -1) {
      const targetQ = homeworkQuestions[idx];
      if (selectedChapterId && targetQ.chapterId !== selectedChapterId) {
        setSelectedChapterId(null);
      }
      if (searchQuery.trim()) {
        setSearchQuery('');
      }
      setHomeworkIndex(idx);
    }
  }, [filteredHomeworkQuestions, selectedChapterId, searchQuery]);

  // Bounded indices & current active questions
  const safeRecitationIndex = Math.min(
    Math.max(0, recitationIndex),
    Math.max(0, filteredRecitationQuestions.length - 1)
  );
  const safeHomeworkIndex = Math.min(
    Math.max(0, homeworkIndex),
    Math.max(0, filteredHomeworkQuestions.length - 1)
  );
  const currentRecitationQ = filteredRecitationQuestions[safeRecitationIndex];
  const currentHomeworkQ = filteredHomeworkQuestions[safeHomeworkIndex];
  const currentTerm = terminologyList[practiceTermIndex] || terminologyList[0];

  // Check URL query parameters for QR code sync handoff (?account=xxx&sync=pull)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const acc = params.get('account');
    const shouldSync = params.get('sync') === 'pull';
    if (acc) {
      syncService.setAccount(acc);
      if (shouldSync) {
        syncService.pullFromCloud().then((res) => {
          if (res.ok && res.found && res.state) {
            importState(res.state as any);
          }
        });
      }
    }
  }, [importState]);

  return (
    <div className="min-h-screen bg-[#eef2f7] dark:bg-[#0b0f17] text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-xl focus:text-xs focus:font-bold focus:shadow-lg"
      >
        跳至主内容
      </a>
      {/* 1. Header (Clean edge-to-edge, zero fluff) */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenSync={() => setSyncModalOpen(true)}
        onToggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
        isLeftCollapsed={leftSidebarCollapsed}
        onToggleLeftCollapsed={toggleLeftSidebarCollapsed}
        activeMode={currentMode}
      />

      {/* 2. Main Full-Width Tri-Column Layout */}
      <div className="flex-1 w-full flex items-start overflow-hidden">
        {/* Left Sidebar (Desktop + Mobile Drawer) */}
        <LeftSidebar
          currentMode={currentMode}
          onSelectMode={setCurrentMode}
          chapters={chaptersMeta || []}
          selectedChapterId={selectedChapterId}
          onSelectChapter={handleSelectChapter}
          memorizedList={state.memorized}
          recitationQuestions={recitationQuestions || []}
          homeworkCompleted={state.homeworkCompleted}
          homeworkQuestions={homeworkQuestions || []}
          className={`${mobileMenuOpen ? 'fixed inset-y-0 left-0 z-40 block shadow-2xl' : 'hidden md:flex'}`}
          onCloseMobile={() => setMobileMenuOpen(false)}
          isCollapsed={mobileMenuOpen ? false : leftSidebarCollapsed}
          onToggleCollapse={toggleLeftSidebarCollapsed}
        />

        {/* Backdrop for Mobile Sidebar */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-slate-900/40 z-30 md:hidden backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Middle Canvas (Edge-to-edge controlled canvas) */}
        <main id="main-content" className="flex-1 min-w-0 h-[calc(100vh-4rem)] overflow-hidden flex flex-col">
          {currentMode === 'recitation' && (
            <RecitationCanvas
              questions={filteredRecitationQuestions}
              currentIndex={safeRecitationIndex}
              onPrev={() => setRecitationIndex(Math.max(0, safeRecitationIndex - 1))}
              onNext={() =>
                setRecitationIndex(Math.min(Math.max(0, filteredRecitationQuestions.length - 1), safeRecitationIndex + 1))
              }
              onJumpToIndex={setRecitationIndex}
              memorizedList={state.memorized}
              starredList={state.starred}
              onToggleMemorized={toggleMemorized}
              onToggleStar={toggleStarred}
            />
          )}

          {currentMode === 'homework' && (
            <HomeworkCanvas
              questions={filteredHomeworkQuestions}
              currentIndex={safeHomeworkIndex}
              onPrev={() => setHomeworkIndex(Math.max(0, safeHomeworkIndex - 1))}
              onNext={() =>
                setHomeworkIndex(Math.min(Math.max(0, filteredHomeworkQuestions.length - 1), safeHomeworkIndex + 1))
              }
              onJumpToIndex={setHomeworkIndex}
              completedList={state.homeworkCompleted}
              onToggleCompleted={toggleHomeworkCompleted}
              starredList={state.starred}
              onToggleStar={toggleStarred}
            />
          )}

          {currentMode === 'practice' && (
            <PracticeCanvas
              terms={terminologyList}
              currentTermIndex={practiceTermIndex}
              onJumpToTermIndex={setPracticeTermIndex}
              singleChoices={singleChoiceQuestions}
              currentChoiceIndex={practiceChoiceIndex}
              onJumpToChoiceIndex={setPracticeChoiceIndex}
              trueFalse={trueFalseQuestions}
              currentTfIndex={practiceTfIndex}
              onJumpToTfIndex={setPracticeTfIndex}
              fillIns={fillInQuestions}
              currentFillIndex={practiceFillIndex}
              onJumpToFillIndex={setPracticeFillIndex}
              shortAnswers={shortAnswerQuestions}
              currentShortIndex={practiceShortIndex}
              onJumpToShortIndex={setPracticeShortIndex}
              essays={essayQuestions}
              currentEssayIndex={practiceEssayIndex}
              onJumpToEssayIndex={setPracticeEssayIndex}
              termMemorized={state.termMemorized}
              onToggleTermMemorized={toggleTermMemorized}
              termStarred={state.termStarred || []}
              onToggleTermStarred={toggleTermStarred}
              choiceMemorized={state.choiceMemorized || []}
              onToggleChoiceMemorized={toggleChoiceMemorized}
              choiceStarred={state.choiceStarred || []}
              onToggleChoiceStarred={toggleChoiceStarred}
              tfMemorized={state.tfMemorized || []}
              onToggleTfMemorized={toggleTfMemorized}
              tfStarred={state.tfStarred || []}
              onToggleTfStarred={toggleTfStarred}
              fillMemorized={state.fillMemorized || []}
              onToggleFillMemorized={toggleFillMemorized}
              fillStarred={state.fillStarred || []}
              onToggleFillStarred={toggleFillStarred}
              shortMemorized={state.shortMemorized || []}
              onToggleShortMemorized={toggleShortMemorized}
              shortStarred={state.shortStarred || []}
              onToggleShortStarred={toggleShortStarred}
              essayMemorized={state.essayMemorized || []}
              onToggleEssayMemorized={toggleEssayMemorized}
              essayStarred={state.essayStarred || []}
              onToggleEssayStarred={toggleEssayStarred}
              activePracticeTab={practiceTab}
              onPracticeTabChange={setPracticeTab}
            />
          )}

          {currentMode === 'mock-exam' && (
            <MockExamCanvas
              termsBank={terminologyList}
              fillInsBank={fillInQuestions}
              singleChoicesBank={singleChoiceQuestions}
              trueFalseBank={trueFalseQuestions}
              shortAnswersBank={shortAnswerQuestions}
              essaysBank={essayQuestions}
              onFinishExam={addExamRecord}
            />
          )}
        </main>

        {/* Right Sidebar (Tri-column present across ALL 4 modes) */}
        <RightSidebar
          currentMode={currentMode === 'mock-exam' ? 'exam' : currentMode}
          // Recitation props
          recitationQuestions={recitationQuestions}
          currentRecitationQuestionId={currentRecitationQ?.id || 1}
          onSelectRecitationQuestionId={handleJumpToRecitationId}
          memorizedList={state.memorized}
          starredList={state.starred}
          activeFilter={activeFilter}
          onSelectFilter={setActiveFilter}
          // Homework props
          homeworkQuestions={homeworkQuestions}
          currentHomeworkQuestionId={currentHomeworkQ?.id || 1}
          onSelectHomeworkQuestionId={handleJumpToHomeworkId}
          homeworkCompletedList={state.homeworkCompleted}
          selectedHomeworkChapter={selectedChapterId}
          onSelectHomeworkChapter={handleSelectChapter}
          // Terminology & Practice props
          terminologyList={terminologyList}
          currentTermId={currentTerm?.id || 1}
          onSelectTermId={(termId) => {
            const tIdx = terminologyList.findIndex((t) => t.id === termId);
            if (tIdx !== -1) setPracticeTermIndex(tIdx);
          }}
          termMemorizedList={state.termMemorized}
          termStarredList={state.termStarred || []}
          choiceMemorizedList={state.choiceMemorized || []}
          choiceStarredList={state.choiceStarred || []}
          tfMemorizedList={state.tfMemorized || []}
          tfStarredList={state.tfStarred || []}
          fillMemorizedList={state.fillMemorized || []}
          fillStarredList={state.fillStarred || []}
          shortMemorizedList={state.shortMemorized || []}
          shortStarredList={state.shortStarred || []}
          essayMemorizedList={state.essayMemorized || []}
          essayStarredList={state.essayStarred || []}
          practiceTab={practiceTab}
          choiceCount={singleChoiceQuestions.length}
          tfCount={trueFalseQuestions.length}
          fillCount={fillInQuestions.length}
          shortCount={shortAnswerQuestions.length}
          essayCount={essayQuestions.length}
          currentChoiceIndex={practiceChoiceIndex}
          onSelectChoiceIndex={setPracticeChoiceIndex}
          currentTfIndex={practiceTfIndex}
          onSelectTfIndex={setPracticeTfIndex}
          currentFillIndex={practiceFillIndex}
          onSelectFillIndex={setPracticeFillIndex}
          currentShortIndex={practiceShortIndex}
          onSelectShortIndex={setPracticeShortIndex}
          currentEssayIndex={practiceEssayIndex}
          onSelectEssayIndex={setPracticeEssayIndex}
          // Chapter metadata
          currentChapterId={
            currentMode === 'homework'
              ? currentHomeworkQ?.chapterId || 1
              : currentRecitationQ?.chapterId || 1
          }
          chapters={chaptersMeta}
          className="hidden lg:flex"
        />
      </div>

      {/* 3. Multi-device Short Account Sync Modal */}
      <SyncModal
        isOpen={syncModalOpen}
        onClose={() => setSyncModalOpen(false)}
        state={state}
        onImportState={importState}
      />
    </div>
  );
}

export default App;
