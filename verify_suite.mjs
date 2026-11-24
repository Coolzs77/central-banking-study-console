import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();
let passedAssertions = 0;
let failedAssertions = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  [PASS] ${message}`);
    passedAssertions++;
  } else {
    console.error(`  [FAIL] ${message}`);
    failedAssertions++;
  }
}

async function runTests() {
  console.log('====================================================');
  console.log('   Central Banking Study Console - QA Test Suite    ');
  console.log('====================================================\n');

  console.log('--- Phase 1: File Existence Verification ---');
  const requiredFiles = [
    'src/data/types.ts',
    'src/data/chapters.ts',
    'src/data/recitation.ts',
    'src/data/homework.ts',
    'src/data/terminology.ts',
    'src/data/examData.ts',
    'src/data/keywords.ts',
    'src/services/syncService.ts',
    'src/components/common/MarkdownViewer.tsx',
    'src/components/common/ClayQuestionNav.tsx',
    'src/components/MiddleNav.tsx',
    'src/components/Header.tsx',
    'src/components/LeftSidebar.tsx',
    'src/components/RightSidebar.tsx',
    'src/components/RecitationCanvas.tsx',
    'src/components/HomeworkCanvas.tsx',
    'src/components/PracticeCanvas.tsx',
    'src/components/MockExamCanvas.tsx',
    'src/components/SyncModal.tsx',
    'src/App.tsx',
    'src/index.css'
  ];

  for (const file of requiredFiles) {
    const filePath = path.join(ROOT_DIR, file);
    assert(fs.existsSync(filePath), `File exists: ${file}`);
  }

  console.log('\n--- Phase 2: Code & Feature Verification ---');
  try {
    // 1. Check Header full-width
    const headerCode = fs.readFileSync(path.join(ROOT_DIR, 'src/components/Header.tsx'), 'utf-8');
    assert(!headerCode.includes('max-w-[1600px] mx-auto'), 'Header does NOT contain max-w-[1600px] mx-auto (full width achieved)');

    // 2. Check App full-width
    const appCode = fs.readFileSync(path.join(ROOT_DIR, 'src/App.tsx'), 'utf-8');
    assert(!appCode.includes('max-w-[1600px] w-full mx-auto'), 'App does NOT contain max-w-[1600px] w-full mx-auto (full width layout)');

    // 3. Check RightSidebar is rendered in all modes
    assert(appCode.includes('<RightSidebar'), 'RightSidebar is mounted');
    assert(!appCode.includes("{currentMode === 'recitation' && (\n          <RightSidebar"), 'RightSidebar is NOT restricted only to recitation mode');

    // 4. Check that "已吃透" is discarded
    assert(!appCode.includes('masteredList') && !appCode.includes('toggleMastered'), 'Study state uses clean memorized array, discarded old 已吃透');

    // 5. Check SyncService uses textdb.online
    const syncCode = fs.readFileSync(path.join(ROOT_DIR, 'src/services/syncService.ts'), 'utf-8');
    assert(syncCode.includes('textdb.online') && syncCode.includes('SHA-256'), 'SyncService uses textdb.online SHA-256 cloud KV sync');

    // 6. Check MarkdownViewer supports keyword-only cloze masking and reveal
    const mdViewerCode = fs.readFileSync(path.join(ROOT_DIR, 'src/components/common/MarkdownViewer.tsx'), 'utf-8');
    assert(mdViewerCode.includes('maskKeywords') && mdViewerCode.includes('··· 揭开'), 'MarkdownViewer supports keyword-only cloze masking and reveal');

    // 7. Check that "共 N 点" is RETAINED per user explicit demand!
    assert(mdViewerCode.includes('共 {badgeNum} 点'), 'MarkdownViewer RETAINS the "共 N 点" amber badge per user demand');

    // 8. Check that outline subheadings like （一）/（二）have distinct colored text style (NO background boxes!)
    assert(mdViewerCode.includes('isSubheading') && mdViewerCode.includes('text-indigo-600') && !mdViewerCode.includes('bg-indigo-50'), 'MarkdownViewer styles summary subheadings (（一）/（二）) in distinct indigo text color without background boxes');

    // 9. Check that real keywords are scanned and highlighted directly with text color (NO background boxes!)
    assert(mdViewerCode.includes('CENTRAL_BANKING_KEYWORDS') && mdViewerCode.includes('text-blue-600') && !mdViewerCode.includes('bg-blue-50/90'), 'MarkdownViewer uses pure text color highlighting for keywords without background boxes');

    // 10. Check MockExamCanvas has vertical scrolling and pinned countdown bar
    const mockExamCode = fs.readFileSync(path.join(ROOT_DIR, 'src/components/MockExamCanvas.tsx'), 'utf-8');
    assert(mockExamCode.includes('overflow-y-auto'), 'MockExamCanvas includes overflow-y-auto for smooth paper scrolling');
    assert(mockExamCode.includes('Fixed Top Exam Header (Pinned permanently'), 'MockExamCanvas pins top timer bar to prevent floating overlap');
    assert(!mockExamCode.includes('规范3分答题法：定义1.5分+性质1分+职能0.5分'), 'MockExamCanvas removes artificial 3-pt formula text');

    // 11. Check RecitationCanvas does NOT contain "标准答案与采分要点" or "背诵与参考解答"
    const recitationCode = fs.readFileSync(path.join(ROOT_DIR, 'src/components/RecitationCanvas.tsx'), 'utf-8');
    assert(!recitationCode.includes('标准答案与采分要点'), 'RecitationCanvas does NOT contain "标准答案与采分要点"');
    assert(!recitationCode.includes('背诵与参考解答'), 'RecitationCanvas does NOT contain "背诵与参考解答" (redundant banner removed)');
    assert(recitationCode.includes('第 {currentQ.id} 题'), 'RecitationCanvas prominently displays question number in title heading');

    // 12. Check HomeworkCanvas does NOT contain "作业标准参考解答" and displays question number
    const homeworkCode = fs.readFileSync(path.join(ROOT_DIR, 'src/components/HomeworkCanvas.tsx'), 'utf-8');
    assert(!homeworkCode.includes('作业标准参考解答'), 'HomeworkCanvas does NOT contain "作业标准参考解答"');
    assert(homeworkCode.includes('第 {currentQ.questionNumber} 题'), 'HomeworkCanvas prominently displays question number in title heading');

    // 13. Check RightSidebar does NOT contain "考点分值："
    const rightSidebarCode = fs.readFileSync(path.join(ROOT_DIR, 'src/components/RightSidebar.tsx'), 'utf-8');
    assert(!rightSidebarCode.includes('考点分值：') && !rightSidebarCode.includes('pointFilter'), 'RightSidebar does NOT divide questions by score or pointFilter');

    // 14. Check LeftSidebar has wider width and clean chapter title
    const leftSidebarCode = fs.readFileSync(path.join(ROOT_DIR, 'src/components/LeftSidebar.tsx'), 'utf-8');
    assert(leftSidebarCode.includes('w-76 lg:w-80'), 'LeftSidebar has widened width w-76 lg:w-80');
    assert(leftSidebarCode.includes('cleanTitle'), 'LeftSidebar formats clean chapter title without redundant prefix');

    // 15. Check PracticeCanvas properly accesses single choice and true-false fields
    const practiceCode = fs.readFileSync(path.join(ROOT_DIR, 'src/components/PracticeCanvas.tsx'), 'utf-8');
    assert(practiceCode.includes('currentChoice.options[key]') && practiceCode.includes('currentChoice.rationale'), 'PracticeCanvas accesses singleChoice options and rationale correctly');
    assert(practiceCode.includes('currentTF.statement') && practiceCode.includes('currentTF.errorCorrection'), 'PracticeCanvas accesses trueFalse statement and errorCorrection correctly');
    assert(practiceCode.includes('currentChoiceIndex') && practiceCode.includes('currentTfIndex'), 'PracticeCanvas supports external question index jumping');

    // 16. Check RightSidebar has clickable buttons for choice, truefalse, fill
    assert(rightSidebarCode.includes('onSelectChoiceIndex') && rightSidebarCode.includes('onSelectTfIndex'), 'RightSidebar has clickable buttons for choice and truefalse drills');
  } catch (err) {
    console.error('Error checking layout & features:', err.message);
    failedAssertions++;
  }

  console.log('\n====================================================');
  console.log(`   QA Suite Finished: ${passedAssertions} PASSED, ${failedAssertions} FAILED`);
  console.log('====================================================\n');

  if (failedAssertions > 0) {
    process.exit(1);
  }
}

runTests();
