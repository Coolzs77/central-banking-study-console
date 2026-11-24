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
    'src/data/exam.ts',
    'src/components/Header.tsx',
    'src/components/LeftSidebar.tsx',
    'src/components/RightSidebar.tsx',
    'src/components/RecitationCanvas.tsx',
    'src/components/HomeworkCanvas.tsx',
    'src/components/MockExamCanvas.tsx',
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
    // Dynamic import of TypeScript files via Node experimental strip types or jiti
    const recitationModule = await import(pathToFileURL(path.join(ROOT_DIR, 'src/data/recitation.ts')).href);
    const recitationQuestions = recitationModule.recitationQuestions || recitationModule.default || [];
    
    assert(Array.isArray(recitationQuestions), 'recitationQuestions is an array');
    assert(recitationQuestions.length === 161, `Recitation count is 161 (actual: ${recitationQuestions.length})`);
    
    const totalPoints = recitationQuestions.reduce((sum, q) => sum + (q.points || 0), 0);
    assert(totalPoints === 516, `Recitation total points is 516 (actual: ${totalPoints})`);

    const hasSequentialIds = recitationQuestions.every((q, idx) => q.id === idx + 1);
    assert(hasSequentialIds, 'Recitation IDs are continuous 1..161');

    const chaptersInRecitation = new Set(recitationQuestions.map(q => q.chapterId));
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
      const cnt = homeworkQuestions.filter(q => q.chapterId === ch).length;
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
    assert(terminologyList.length === 28, `Terminology count is exactly 28 (actual: ${terminologyList.length})`);

    const allHave3Points = terminologyList.every(t => t.totalPoints === 3);
    assert(allHave3Points, 'All terminology items have 3.0 totalPoints allocation');
  } catch (err) {
    console.error('Error testing terminology.ts:', err.message);
    failedAssertions++;
  }

  try {
    const examModule = await import(pathToFileURL(path.join(ROOT_DIR, 'src/data/exam.ts')).href);
    const {
      examQuestionBank,
      generateExamPaper,
      fillInBank,
      singleChoiceBank,
      trueFalseBank,
      shortAnswerBank,
      essayBank,
    } = examModule;

    const fillIns = fillInBank || examQuestionBank?.fillIns || [];
    const singles = singleChoiceBank || examQuestionBank?.singleChoices || [];
    const tfs = trueFalseBank || examQuestionBank?.trueFalse || [];
    const shortAnswers = shortAnswerBank || examQuestionBank?.shortAnswers || [];
    const essays = essayBank || examQuestionBank?.essays || [];

    assert(fillIns.length >= 15, `Fill-in question pool >= 15 (actual: ${fillIns.length})`);
    assert(singles.length >= 15, `Single-choice question pool >= 15 (actual: ${singles.length})`);
    assert(tfs.length >= 15, `True/false question pool >= 15 (actual: ${tfs.length})`);
    assert(shortAnswers.length >= 3, `Short-answer question pool >= 3 (actual: ${shortAnswers.length})`);
    assert(essays.length >= 1, `Essay question pool >= 1 (actual: ${essays.length})`);

    if (typeof generateExamPaper === 'function') {
      const paper = generateExamPaper();
      assert(paper.durationMinutes === 120, 'Mock exam duration is 120 minutes');
      assert(paper.terms?.length === 5, `Mock exam terms count is 5 (actual: ${paper.terms?.length})`);
      assert(paper.fillIns?.length === 15, `Mock exam fill-ins count is 15 (actual: ${paper.fillIns?.length})`);
      assert(paper.singleChoices?.length === 15, `Mock exam single choices count is 15 (actual: ${paper.singleChoices?.length})`);
      assert(paper.trueFalse?.length === 15, `Mock exam true/false count is 15 (actual: ${paper.trueFalse?.length})`);
      assert(paper.shortAnswers?.length === 3, `Mock exam short answers count is 3 (actual: ${paper.shortAnswers?.length})`);
      assert(!!paper.essay, 'Mock exam has 1 essay question');

      const termPts = (paper.terms || []).reduce((s, q) => s + (q.totalPoints || 3), 0);
      const fillPts = (paper.fillIns || []).reduce((s, q) => s + (q.points || 1), 0);
      const singlePts = (paper.singleChoices || []).reduce((s, q) => s + (q.points || 1), 0);
      const tfPts = (paper.trueFalse || []).reduce((s, q) => s + (q.points || 1), 0);
      const shortPts = (paper.shortAnswers || []).reduce((s, q) => s + (q.totalPoints || 0), 0);
      const essayPts = paper.essay ? (paper.essay.totalPoints || 20) : 0;
      const totalExamPts = termPts + fillPts + singlePts + tfPts + shortPts + essayPts;

      assert(termPts === 15, `Terms score is 15 pt (actual: ${termPts})`);
      assert(fillPts === 15, `Fill-in score is 15 pt (actual: ${fillPts})`);
      assert(singlePts === 15, `Single-choice score is 15 pt (actual: ${singlePts})`);
      assert(tfPts === 15, `True/false score is 15 pt (actual: ${tfPts})`);
      assert(shortPts === 20, `Short-answer score is 20 pt (actual: ${shortPts})`);
      assert(essayPts === 20, `Essay score is 20 pt (actual: ${essayPts})`);
      assert(totalExamPts === 100, `Total exam paper score is strictly 100 pt (actual: ${totalExamPts})`);
    } else {
      console.warn('generateExamPaper function not found in exam.ts');
    }
  } catch (err) {
    console.error('Error testing exam.ts:', err.message);
    failedAssertions++;
  }

  console.log('\n--- Phase 3: UI & Claymorphism Standards Verification ---');
  const indexCss = fs.readFileSync(path.join(ROOT_DIR, 'src/index.css'), 'utf-8');
  assert(indexCss.includes('--clay-card-shadow'), 'index.css defines --clay-card-shadow');
  assert(indexCss.includes('--clay-button-shadow'), 'index.css defines --clay-button-shadow');
  assert(indexCss.includes('--clay-inset-groove'), 'index.css defines --clay-inset-groove');

  const headerSrc = fs.readFileSync(path.join(ROOT_DIR, 'src/components/Header.tsx'), 'utf-8');
  assert(headerSrc.includes('中央银行学'), 'Header has clean title "中央银行学"');
  assert(!headerSrc.includes('颠覆') && !headerSrc.includes('神级') && !headerSrc.includes('降维打击'), 'Header has zero marketing fluff');

  const recitationSrc = fs.readFileSync(path.join(ROOT_DIR, 'src/components/RecitationCanvas.tsx'), 'utf-8');
  assert(recitationSrc.includes("code === 'Space'"), 'RecitationCanvas implements Space key mask/reveal toggle');
  assert(recitationSrc.includes('handleRandomJump'), 'RecitationCanvas implements random jump');

  const homeworkSrc = fs.readFileSync(path.join(ROOT_DIR, 'src/components/HomeworkCanvas.tsx'), 'utf-8');
  assert(homeworkSrc.includes('clipboard.writeText'), 'HomeworkCanvas implements one-click copy button');
  assert(homeworkSrc.includes('onToggleCompleted'), 'HomeworkCanvas implements checkbox tracking');

  const rightSidebarSrc = fs.readFileSync(path.join(ROOT_DIR, 'src/components/RightSidebar.tsx'), 'utf-8');
  assert(rightSidebarSrc.includes('scrollToQuestion'), 'RightSidebar implements scrollToQuestion click-to-scroll');
  assert(rightSidebarSrc.includes('grid grid-cols-8'), 'RightSidebar renders matrix heatmap grid');

  console.log('\n--- Phase 4: Production Build Verification ---');
  try {
    console.log('  Running npm run build...');
    const buildOutput = execSync('npm run build', { cwd: ROOT_DIR, encoding: 'utf-8' });
    console.log('  Build successful!');
    assert(true, 'npm run build exited with code 0');
    assert(fs.existsSync(path.join(ROOT_DIR, 'dist/index.html')), 'dist/index.html generated');
  } catch (err) {
    console.error('  Build failed:', err.message);
    assert(false, 'npm run build failed');
  }

  console.log('\n====================================================');
  console.log(`Results: ${passedAssertions} PASSED, ${failedAssertions} FAILED`);
  console.log('====================================================');
  if (failedAssertions > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

runTests();
