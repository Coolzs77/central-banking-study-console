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

// Authoritative datasets
import { chaptersMeta } from './data/chapters';
import { recitationQuestions } from './data/recitation';
import { homeworkQuestions } from './data/homework';

// Exam question bank (imported with fallback)
import * as examModule from './data/exam';
import * as termModule from './data/terminology';

export function App() {
  const {
    state,
    setMastery,
    toggleStar,
    toggleHomework,
    toggleTermMastery,
    saveExamRecord,
    resetAllState,
    exportBase64State,
    importBase64State,
  } = useStudyState();

  // Navigation & filters state
  const [currentMode, setCurrentMode] = useState<AppMode>('recitation');
  const [selectedChapterId, setSelectedChapterId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'mastered' | 'reviewing' | 'unlearned' | 'starred'>('all');
  const [pointFilter, setPointFilter] = useState<number | null>(null);

  // Modals & UI state
  const [syncModalOpen, setSyncModalOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Safe fallback for exam banks
  const termsBank = (termModule as any).terminologyList || (examModule as any).termsBank || [];
  const fillInsBank = (examModule as any).fillInBank || (examModule as any).examQuestionBank?.fillIns || [];
  const singleChoicesBank = (examModule as any).singleChoiceBank || (examModule as any).examQuestionBank?.singleChoices || [];
  const trueFalseBank = (examModule as any).trueFalseBank || (examModule as any).examQuestionBank?.trueFalse || [];
  const shortAnswersBank = (examModule as any).shortAnswerBank || (examModule as any).examQuestionBank?.shortAnswers || [];
  const essaysBank = (examModule as any).essayBank || (examModule as any).examQuestionBank?.essays || [];

  return (
    <div className="min-h-screen bg-[#eef2f7] dark:bg-[#0b0f17] text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* 1. Header (Zero fluff, clean title "中央银行学") */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenSync={() => setSyncModalOpen(true)}
        onToggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
        activeMode={currentMode}
      />

      {/* 2. Main Tri-Column Layout */}
      <div className="flex-1 max-w-[1600px] w-full mx-auto flex items-start">
        {/* Left Sidebar (Desktop + Mobile Drawer) */}
        <LeftSidebar
          currentMode={currentMode}
          onSelectMode={setCurrentMode}
          chapters={chaptersMeta || []}
          selectedChapterId={selectedChapterId}
          onSelectChapter={setSelectedChapterId}
          masteryMap={state.mastery}
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

        {/* Middle Canvas */}
        <main className="flex-1 min-w-0 min-h-[calc(100vh-4rem)]">
          {currentMode === 'recitation' && (
            <RecitationCanvas
              questions={recitationQuestions || []}
              masteryMap={state.mastery}
              starredList={state.starred}
              onSetMastery={setMastery}
              onToggleStar={toggleStar}
              searchQuery={searchQuery}
              selectedChapterId={selectedChapterId}
              activeFilter={activeFilter}
              pointFilter={pointFilter}
            />
          )}

          {currentMode === 'homework' && (
            <HomeworkCanvas
              questions={homeworkQuestions || []}
              completedList={state.homeworkCompleted}
              onToggleCompleted={toggleHomework}
              selectedChapterId={selectedChapterId}
              onSelectChapter={setSelectedChapterId}
            />
          )}

          {currentMode === 'practice' && (
            <PracticeCanvas
              terms={termsBank}
              singleChoices={singleChoicesBank}
              trueFalse={trueFalseBank}
              fillIns={fillInsBank}
              termMastery={state.termMastery}
              onToggleTermMastery={toggleTermMastery}
            />
          )}

          {currentMode === 'mock-exam' && (
            <MockExamCanvas
              termsBank={termsBank}
              fillInsBank={fillInsBank}
              singleChoicesBank={singleChoicesBank}
              trueFalseBank={trueFalseBank}
              shortAnswersBank={shortAnswersBank}
              essaysBank={essaysBank}
              onFinishExam={saveExamRecord}
            />
          )}
        </main>

        {/* Right Sidebar: 161 Questions Heatmap Matrix (Active in recitation mode on desktop) */}
        {currentMode === 'recitation' && (
          <RightSidebar
            questions={recitationQuestions || []}
            masteryMap={state.mastery}
            starredList={state.starred}
            activeFilter={activeFilter}
            onSelectFilter={setActiveFilter}
            pointFilter={pointFilter}
            onSelectPointFilter={setPointFilter}
            className="hidden xl:flex"
          />
        )}
      </div>

      {/* 3. Multi-device Sync Modal */}
      <SyncModal
        isOpen={syncModalOpen}
        onClose={() => setSyncModalOpen(false)}
        exportBase64={exportBase64State}
        importBase64={importBase64State}
        onResetAll={resetAllState}
      />
    </div>
  );
}

export default App;
