import React, { useState, useEffect } from 'react';
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
    addExamRecord,
    importState,
  } = useStudyState();

  // Navigation & filters state
  const [currentMode, setCurrentMode] = useState<AppMode>('recitation');
  const [selectedChapterId, setSelectedChapterId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'memorized' | 'unmemorized' | 'starred'>('all');
  const [pointFilter, setPointFilter] = useState<number | null>(null);

  // Selected question/term IDs across canvases & right sidebar
  const [selectedQuestionId, setSelectedQuestionId] = useState<number | null>(1);
  const [selectedHomeworkId, setSelectedHomeworkId] = useState<number | null>(1);
  const [selectedTermId, setSelectedTermId] = useState<number | null>(1);

  // Modals & UI state
  const [syncModalOpen, setSyncModalOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

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
      {/* 1. Header (Clean edge-to-edge, zero fluff) */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenSync={() => setSyncModalOpen(true)}
        onToggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
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
          onSelectChapter={setSelectedChapterId}
          memorizedList={state.memorized}
          recitationQuestions={recitationQuestions || []}
          homeworkCompleted={state.homeworkCompleted}
          homeworkQuestions={homeworkQuestions || []}
          className={`${mobileMenuOpen ? 'fixed inset-y-0 left-0 z-40 block shadow-2xl' : 'hidden md:flex'}`}
          onCloseMobile={() => setMobileMenuOpen(false)}
        />

        {/* Backdrop for Mobile Sidebar */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-slate-900/40 z-30 md:hidden backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Middle Canvas (Edge-to-edge flexible layout) */}
        <main className="flex-1 min-w-0 h-[calc(100vh-4rem)] overflow-hidden flex flex-col">
          {currentMode === 'recitation' && (
            <RecitationCanvas
              questions={recitationQuestions || []}
              memorizedList={state.memorized}
              starredList={state.starred}
              onToggleMemorized={toggleMemorized}
              onToggleStar={toggleStarred}
              searchQuery={searchQuery}
              selectedChapterId={selectedChapterId}
              activeFilter={activeFilter}
              pointFilter={pointFilter}
              selectedQuestionId={selectedQuestionId}
              onSelectQuestion={setSelectedQuestionId}
            />
          )}

          {currentMode === 'homework' && (
            <HomeworkCanvas
              questions={homeworkQuestions || []}
              completedList={state.homeworkCompleted}
              onToggleCompleted={toggleHomeworkCompleted}
              starredList={state.starred}
              onToggleStar={toggleStarred}
              selectedChapterId={selectedChapterId}
              onSelectChapter={setSelectedChapterId}
              selectedQuestionId={selectedHomeworkId}
              onSelectQuestion={setSelectedHomeworkId}
            />
          )}

          {currentMode === 'practice' && (
            <PracticeCanvas
              terms={terminologyList}
              singleChoices={singleChoiceQuestions}
              trueFalse={trueFalseQuestions}
              fillIns={fillInQuestions}
              termMemorized={state.termMemorized}
              onToggleTermMemorized={toggleTermMemorized}
              selectedTermId={selectedTermId}
              onSelectTerm={setSelectedTermId}
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
          recitationQuestions={recitationQuestions || []}
          memorizedList={state.memorized}
          starredList={state.starred}
          selectedQuestionId={selectedQuestionId}
          onSelectRecitationQuestion={setSelectedQuestionId}
          activeFilter={activeFilter}
          onSelectFilter={setActiveFilter}
          pointFilter={pointFilter}
          onSelectPointFilter={setPointFilter}
          homeworkQuestions={homeworkQuestions || []}
          homeworkCompletedList={state.homeworkCompleted}
          selectedHomeworkId={selectedHomeworkId}
          onSelectHomeworkQuestion={setSelectedHomeworkId}
          selectedHomeworkChapter={selectedChapterId}
          onSelectHomeworkChapter={setSelectedChapterId}
          terminologyList={terminologyList}
          termMemorizedList={state.termMemorized}
          selectedTermId={selectedTermId}
          onSelectTerm={setSelectedTermId}
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
