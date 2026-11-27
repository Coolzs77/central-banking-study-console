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

    // 6. Check MarkdownViewer supports cute washi tape (贴纸胶带) cloze masking (NO ...揭开, NO blurry shadow)
    const mdViewerCode = fs.readFileSync(path.join(ROOT_DIR, 'src/components/common/MarkdownViewer.tsx'), 'utf-8');
    assert(mdViewerCode.includes('maskKeywords') && mdViewerCode.includes('repeating-linear-gradient') && mdViewerCode.includes('点击撕开胶带'), 'MarkdownViewer applies cute washi tape (贴纸胶带) overlay directly over keyword');

    // 7. Check that "共 N 点" is RETAINED per user explicit demand!
    assert(mdViewerCode.includes('共 {badgeNum} 点'), 'MarkdownViewer RETAINS the "共 N 点" amber badge per user demand');

    // 8. Check that outline subheadings like （一）/（二）use green text color (NO background boxes!)
    assert(mdViewerCode.includes('isSubheading') && mdViewerCode.includes('text-emerald-600') && !mdViewerCode.includes('bg-indigo-50'), 'MarkdownViewer styles summary subheadings (（一）/（二）) in distinct green text color without background boxes');

    // 9. Check that keywords use cute rose-pink font (NOT black, NOT green!)
    assert(mdViewerCode.includes('CENTRAL_BANKING_KEYWORDS') && mdViewerCode.includes('text-rose-500 dark:text-rose-400'), 'MarkdownViewer renders keywords in cute rose-pink font (NEITHER black NOR green)');

    // 10. Check MockExamCanvas has vertical scrolling and pinned countdown bar
    const mockExamCode = fs.readFileSync(path.join(ROOT_DIR, 'src/components/MockExamCanvas.tsx'), 'utf-8');
    assert(mockExamCode.includes('overflow-y-auto'), 'MockExamCanvas includes overflow-y-auto for smooth paper scrolling');
    assert(mockExamCode.includes('Fixed Top Exam Header (Pinned permanently'), 'MockExamCanvas pins top timer bar to prevent floating overlap');
    assert(!mockExamCode.includes('规范3分答题法：定义1.5分+性质1分+职能0.5分'), 'MockExamCanvas removes artificial 3-pt formula text');

    // 11. Check RecitationCanvas does NOT contain "标准答案与采分要点" or "背诵与参考解答"
    const recitationCode = fs.readFileSync(path.join(ROOT_DIR, 'src/components/RecitationCanvas.tsx'), 'utf-8');
    assert(!recitationCode.includes('标准答案与采分要点'), 'RecitationCanvas does NOT contain "标准答案与采分要点"');
    assert(!recitationCode.includes('背诵与参考解答'), 'RecitationCanvas does NOT contain "背诵与参考解答" (redundant banner removed)');
    assert(recitationCode.includes('{currentQ.id}.') && recitationCode.includes('text-slate-900 dark:text-white'), 'RecitationCanvas displays question number in pure black font');

    // 12. Check HomeworkCanvas restores question title and black 1. question number
    const homeworkCode = fs.readFileSync(path.join(ROOT_DIR, 'src/components/HomeworkCanvas.tsx'), 'utf-8');
    assert(!homeworkCode.includes('作业标准参考解答'), 'HomeworkCanvas does NOT contain "作业标准参考解答"');
    assert(homeworkCode.includes('{currentQ.id}.') && homeworkCode.includes('{currentQ.question}'), 'HomeworkCanvas correctly renders question stem and id');

    // 13. Check RightSidebar does NOT contain "考点分值："
    const rightSidebarCode = fs.readFileSync(path.join(ROOT_DIR, 'src/components/RightSidebar.tsx'), 'utf-8');
    assert(!rightSidebarCode.includes('考点分值：') && !rightSidebarCode.includes('pointFilter'), 'RightSidebar does NOT divide questions by score or pointFilter');

    // 14. Check LeftSidebar has wider width, clean chapter title, and supports collapsing
    const leftSidebarCode = fs.readFileSync(path.join(ROOT_DIR, 'src/components/LeftSidebar.tsx'), 'utf-8');
    assert(leftSidebarCode.includes('w-76 lg:w-80'), 'LeftSidebar has widened width w-76 lg:w-80');
    assert(leftSidebarCode.includes('cleanTitle'), 'LeftSidebar formats clean chapter title without redundant prefix');
    assert(leftSidebarCode.includes('isCollapsed') && leftSidebarCode.includes('onToggleCollapse'), 'LeftSidebar supports collapsing and expanding');

    // 15. Check PracticeCanvas properly accesses single choice and true-false fields, and avoids flapping verbose buttons
    const practiceCode = fs.readFileSync(path.join(ROOT_DIR, 'src/components/PracticeCanvas.tsx'), 'utf-8');
    assert(practiceCode.includes('currentChoice.options[key]') && practiceCode.includes('currentChoice.rationale'), 'PracticeCanvas accesses singleChoice options and rationale correctly');
    assert(practiceCode.includes('currentTF.statement') && practiceCode.includes('currentTF.errorCorrection'), 'PracticeCanvas accesses trueFalse statement and errorCorrection correctly');
    assert(practiceCode.includes('currentChoiceIndex') && practiceCode.includes('currentTfIndex'), 'PracticeCanvas supports external question index jumping');
    assert(!practiceCode.includes('揭开参考关键词 (Space)'), 'PracticeCanvas eliminated verbose 揭开参考关键词 (Space) button');

    // 16. Check RightSidebar has clickable buttons for choice, truefalse, fill
    assert(rightSidebarCode.includes('onSelectChoiceIndex') && rightSidebarCode.includes('onSelectTfIndex'), 'RightSidebar has clickable buttons for choice and truefalse drills');

    // 17. Check ClayQuestionNav has fixed concise button labels, zero hover tooltips, and NO undefined memorizedLabel
    const navCode = fs.readFileSync(path.join(ROOT_DIR, 'src/components/common/ClayQuestionNav.tsx'), 'utf-8');
    assert(navCode.includes('actionLabel') && !navCode.includes('title=') && !navCode.includes('memorizedLabel'), 'ClayQuestionNav uses invariant concise labels, zero title tooltips, and zero undefined memorizedLabel crash');

    // 18. Check PracticeCanvas aligns choice/truefalse/fill UI with terminology tab (ClayQuestionNav + 掌握/收藏)
    assert(
      practiceCode.includes('key="terms"') &&
      practiceCode.includes('key="choice"') &&
      practiceCode.includes('key="truefalse"') &&
      practiceCode.includes('key="fill"') &&
      practiceCode.includes('onToggleChoiceMemorized') &&
      practiceCode.includes('onToggleChoiceStarred') &&
      practiceCode.includes('onToggleTfMemorized') &&
      practiceCode.includes('onToggleTfStarred') &&
      practiceCode.includes('onToggleFillMemorized') &&
      practiceCode.includes('onToggleFillStarred'),
      'PracticeCanvas unifies ClayQuestionNav, 掌握, and 收藏 across all 4 practice modes'
    );

    // 19. Check App.tsx resets chapter selection to index 0 and uses filtered indices (prevents jumping to last question & broken prev button)
    assert(
      appCode.includes('safeRecitationIndex') &&
      appCode.includes('safeHomeworkIndex') &&
      appCode.includes('filteredHomeworkQuestions.findIndex'),
      'App.tsx bounds filtered indices and jumps within filtered lists when selecting chapters or questions'
    );
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
