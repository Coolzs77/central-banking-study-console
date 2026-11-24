import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execSync } from 'node:child_process';

const ROOT_DIR = 'e:\\workspace\\central-banking-study-console';

console.log('====================================================');
console.log('   Central Banking Study Console - QA Test Suite    ');
console.log('====================================================\n');

let failedAssertions = 0;
let passedAssertions = 0;

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
  console.log('--- Phase 1: File Existence Verification ---');
  const expectedFiles = [
    'src/data/types.ts',
    'src/data/chapters.ts',
    'src/data/recitation.ts',
    'src/data/homework.ts',
    'src/data/terminology.ts',
    'src/data/examData.ts',
    'src/services/syncService.ts',
    'src/components/common/MarkdownViewer.tsx',
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
    'src/index.css',
  ];

  for (const relPath of expectedFiles) {
    const fullPath = path.join(ROOT_DIR, relPath);
    const exists = fs.existsSync(fullPath);
    assert(exists, `File exists: ${relPath}`);
  }

  console.log('\n--- Phase 2: Data Integrity Verification ---');
  try {
    const recitationModule = await import(pathToFileURL(path.join(ROOT_DIR, 'src/data/recitation.ts')).href);
    const recitationQuestions = recitationModule.recitationQuestions || recitationModule.default || [];

    assert(Array.isArray(recitationQuestions), 'recitationQuestions is an array');
    assert(recitationQuestions.length === 161, `Recitation count is 161 (actual: ${recitationQuestions.length})`);

    const totalPoints = recitationQuestions.reduce((sum, q) => sum + (q.points || 0), 0);
    assert(totalPoints === 516, `Recitation total points is 516 (actual: ${totalPoints})`);

    const hasSequentialIds = recitationQuestions.every((q, idx) => q.id === idx + 1);
    assert(hasSequentialIds, 'Recitation IDs are continuous 1..161');

    const chaptersInRecitation = new Set(recitationQuestions.map((q) => q.chapterId));
    assert(chaptersInRecitation.size === 11, `Recitation covers 11 chapters (actual: ${chaptersInRecitation.size})`);
  } catch (err) {
    console.error('Error testing recitation.ts:', err.message);
    failedAssertions++;
  }

  try {
    const homeworkModule = await import(pathToFileURL(path.join(ROOT_DIR, 'src/data/homework.ts')).href);
    const homeworkQuestions = homeworkModule.homeworkQuestions || homeworkModule.default || [];

    assert(Array.isArray(homeworkQuestions), 'homeworkQuestions is an array');
    assert(homeworkQuestions.length === 54, `Homework count is 54 (actual: ${homeworkQuestions.length})`);

    const expectedChapterDist = [6, 6, 3, 6, 5, 5, 5, 4, 2, 5, 7];
    const actualChapterDist = [];
    for (let ch = 1; ch <= 11; ch++) {
      const cnt = homeworkQuestions.filter((q) => q.chapterId === ch).length;
      actualChapterDist.push(cnt);
    }
    const distMatches = JSON.stringify(actualChapterDist) === JSON.stringify(expectedChapterDist);
    assert(distMatches, `Homework chapter distribution matches 6+6+3+6+5+5+5+4+2+5+7 (actual: ${actualChapterDist.join('+')})`);

    const hasSequentialHwIds = homeworkQuestions.every((q, idx) => q.id === idx + 1);
    assert(hasSequentialHwIds, 'Homework IDs are continuous 1..54');
  } catch (err) {
    console.error('Error testing homework.ts:', err.message);
    failedAssertions++;
  }

  try {
    const termModule = await import(pathToFileURL(path.join(ROOT_DIR, 'src/data/terminology.ts')).href);
    const terminologyList = termModule.terminologyList || termModule.default || [];

    assert(Array.isArray(terminologyList), 'terminologyList is an array');
    assert(terminologyList.length <= 30, `Terminology count <= 30 (actual: ${terminologyList.length})`);
    assert(terminologyList.length === 30, `Terminology count is exactly 30 (actual: ${terminologyList.length})`);

    // Homework Ch 5 Q1 terms (8 terms)
    const ch5Terms = ['中央银行资产', '再贴现业务', '再贴现利率', '中央银行贷款', '证券买卖业务', '正回购', '逆回购', '国际储备'];
    const hasAllCh5 = ch5Terms.every((term) => terminologyList.some((t) => t.term === term));
    assert(hasAllCh5, 'Terminology includes all 8 terms from Homework Chapter 5 Question 1');

    // Homework Ch 8 Q1 terms (12 terms)
    const ch8Terms = ['一般性货币政策工具', '选择性货币政策工具', '法定存款准备金政策', '再贴现政策', '公开市场业务', '消费者信用控制', '证券市场信用控制', '不动产信用控制', '信用配额', '流动性比率管理', '道义劝告', '窗口指导'];
    const hasAllCh8 = ch8Terms.every((term) => terminologyList.some((t) => t.term === term));
    assert(hasAllCh8, 'Terminology includes all 12 terms from Homework Chapter 8 Question 1');

    // Check that definitions contain bold keywords
    const hasBoldKeywords = terminologyList.every((t) => /\*\*[^*]+\*\*/.test(t.definition));
    assert(hasBoldKeywords, 'All 30 terminology definitions contain bold **keywords** for cloze masking');
  } catch (err) {
    console.error('Error testing terminology.ts:', err.message);
    failedAssertions++;
  }

  console.log('\n--- Phase 3: Layout & Feature Verification ---');
  try {
    // Check Header full-width
    const headerCode = fs.readFileSync(path.join(ROOT_DIR, 'src/components/Header.tsx'), 'utf-8');
    assert(!headerCode.includes('max-w-[1600px] mx-auto'), 'Header does NOT contain max-w-[1600px] mx-auto (full width achieved)');

    // Check App full-width
    const appCode = fs.readFileSync(path.join(ROOT_DIR, 'src/App.tsx'), 'utf-8');
    assert(!appCode.includes('max-w-[1600px] w-full mx-auto'), 'App does NOT contain max-w-[1600px] w-full mx-auto (full width layout)');

    // Check that RightSidebar is rendered in all 4 modes
    assert(appCode.includes('<RightSidebar'), 'RightSidebar is mounted');
    assert(!appCode.includes("{currentMode === 'recitation' && (\n          <RightSidebar"), 'RightSidebar is NOT restricted only to recitation mode');

    // Check that "已吃透" is discarded from study state and canvases
    const studyStateCode = fs.readFileSync(path.join(ROOT_DIR, 'src/hooks/useStudyState.ts'), 'utf-8');
    assert(!studyStateCode.includes('已吃透') && !studyStateCode.includes('masteryMap'), 'Study state uses clean memorized array, discarded old 已吃透');

    // Check sync service implementation
    const syncCode = fs.readFileSync(path.join(ROOT_DIR, 'src/services/syncService.ts'), 'utf-8');
    assert(syncCode.includes('api.textdb.online') && syncCode.includes('sha256Hex'), 'SyncService uses textdb.online SHA-256 cloud KV sync');

    // Check MarkdownViewer cloze keyword masking
    const mdViewerCode = fs.readFileSync(path.join(ROOT_DIR, 'src/components/common/MarkdownViewer.tsx'), 'utf-8');
    assert(mdViewerCode.includes('maskKeywords') && mdViewerCode.includes('··· 揭开'), 'MarkdownViewer supports keyword-only cloze masking and reveal');
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
