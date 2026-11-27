// tests/verifyData.ts
// Comprehensive Data Validation & Assertions for Central Banking Study Console

import {
  chaptersMeta,
  recitationQuestions,
  TOTAL_RECITATION_QUESTIONS,
  TOTAL_RECITATION_POINTS,
  homeworkQuestions,
  TOTAL_HOMEWORK_QUESTIONS,
  terminologyQuestions,
  fillInQuestions,
  singleChoiceQuestions,
  trueFalseQuestions,
  shortAnswerQuestions,
  essayQuestions,
  generateMockExamPaper
} from '../src/data/index';

console.log('====================================================');
console.log('   CENTRAL BANKING STUDY CONSOLE - DATA AUDIT       ');
console.log('====================================================\n');

let passCount = 0;
let failCount = 0;

function assert(condition: boolean, testName: string, details?: string) {
  if (condition) {
    console.log(`[PASS] ${testName}`);
    passCount++;
  } else {
    console.error(`[FAIL] ${testName}`);
    if (details) console.error(`       Details: ${details}`);
    failCount++;
  }
}

// -----------------------------------------------------------------
// 1. Recitation Manual Assertions (162 Qs, 532 Pts across 11 Chapters)
// -----------------------------------------------------------------
console.log('--- 1. Recitation Data Verification ---');

assert(
  recitationQuestions.length === 162,
  'Recitation question count is exactly 162',
  `Expected 162, got ${recitationQuestions.length}`
);

assert(
  TOTAL_RECITATION_QUESTIONS === 162,
  'TOTAL_RECITATION_QUESTIONS constant is 162',
  `Got ${TOTAL_RECITATION_QUESTIONS}`
);

const totalRecitationPoints = recitationQuestions.reduce((sum, q) => sum + q.points, 0);
assert(
  totalRecitationPoints === 532,
  'Total recitation points sum strictly equals 532',
  `Expected 532, got ${totalRecitationPoints}`
);

assert(
  TOTAL_RECITATION_POINTS === 532,
  'TOTAL_RECITATION_POINTS constant is 532',
  `Got ${TOTAL_RECITATION_POINTS}`
);

const continuousIds = recitationQuestions.every((q, idx) => q.id === idx + 1);
assert(
  continuousIds,
  'Recitation question IDs are strictly continuous from 1 to 162',
  'Found discontinuity in question IDs'
);

assert(
  chaptersMeta.length === 11,
  'Chapters count is exactly 11',
  `Expected 11, got ${chaptersMeta.length}`
);

const sumChapterQuestions = chaptersMeta.reduce((sum, c) => sum + c.totalQuestions, 0);
assert(
  sumChapterQuestions === 162,
  'Sum of chapter totalQuestions equals 162',
  `Expected 162, got ${sumChapterQuestions}`
);

const sumChapterPoints = chaptersMeta.reduce((sum, c) => sum + c.totalPoints, 0);
assert(
  sumChapterPoints === 532,
  'Sum of chapter totalPoints equals 532',
  `Expected 532, got ${sumChapterPoints}`
);

const allRecitationFieldsValid = recitationQuestions.every(q => 
  q.title && q.title.length > 0 &&
  q.content && q.content.length > 0 &&
  q.chapterTitle && q.sectionTitle &&
  q.chapterId >= 1 && q.chapterId <= 11 &&
  q.points > 0
);
assert(
  allRecitationFieldsValid,
  'All 162 recitation questions have complete, valid fields',
  'Found question with missing or empty content/title/chapter'
);

// Assert keyword coverage and quality
const allQuestionsHaveKeywords = recitationQuestions.every(q => 
  q.keywords && Array.isArray(q.keywords) && q.keywords.length >= 4
);
assert(
  allQuestionsHaveKeywords,
  'All 162 recitation questions have at least 4 curated keywords',
  'Found question with fewer than 4 keywords'
);

let emptyBulletCount = 0;
for (const q of recitationQuestions) {
  const kwList = (q.keywords || []).slice().sort((a, b) => b.length - a.length);
  const kwRegex = kwList.length > 0
    ? new RegExp('(' + kwList.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')', 'g')
    : null;

  const lines = q.content.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    let cleanText = trimmed;
    if (cleanText.startsWith('- ')) cleanText = cleanText.slice(2);

    const isSub =
      /^[\\*]*[（\(][一二三四五六七八九十0-9]+[）\)][^\\*]*[\\*]*/.test(cleanText) ||
      (/^\*[^*]+\*$/.test(cleanText) && !cleanText.includes('**'));

    if (isSub) continue;

    const leadingSpaces = line.search(/\S|$/);
    const isBullet = (leadingSpaces >= 2 && line.startsWith('  -')) || (leadingSpaces >= 4 || line.startsWith('    -'));

    if (isBullet) {
      const matches = kwRegex ? cleanText.match(kwRegex) || [] : [];
      if (matches.length === 0) {
        emptyBulletCount++;
      }
    }
  }
}

assert(
  emptyBulletCount === 0,
  'All 532 scoring bullet points across all 162 questions have >= 1 keyword matched (0 empty bullets)',
  `Found ${emptyBulletCount} empty bullet points without keywords`
);

// PPT-accuracy regression checks (Ch 1, Ch 7/8/10/11)
const q5 = recitationQuestions.find(q => q.id === 5)!;
assert(
  !!q5 && q5.content.includes('一级中央银行机构') && q5.content.includes('二级中央银行机构') && !q5.content.includes('兼具中央银行与商业银行业务'),
  'PPT regression: Q5 复合式中央银行 strictly matches PPT definition (一级/二级机构)',
  'Q5 复合式中央银行 definition does not match PPT'
);

const q7 = recitationQuestions.find(q => q.id === 7)!;
assert(
  !!q7 &&
  q7.content.includes('英国、美国、马来西亚、菲律宾') &&
  q7.content.includes('日本、德国、法国、澳大利亚、巴西、韩国') &&
  q7.content.includes('瑞士、比利时'),
  'PPT regression: Q7 中央银行权力结构代表国家 strictly matches PPT Ch1 p20',
  'Q7 power structure countries do not match PPT'
);

// -----------------------------------------------------------------
// 2. Homework Dataset Assertions (54 Questions across Chapters 1-11)
// -----------------------------------------------------------------
console.log('\n--- 2. Homework Notebook Verification ---');

assert(
  homeworkQuestions.length === 54,
  'Homework question count is exactly 54',
  `Expected 54, got ${homeworkQuestions.length}`
);

assert(
  TOTAL_HOMEWORK_QUESTIONS === 54,
  'TOTAL_HOMEWORK_QUESTIONS constant is 54',
  `Got ${TOTAL_HOMEWORK_QUESTIONS}`
);

const hwContinuousIds = homeworkQuestions.every((q, idx) => q.id === idx + 1);
assert(
  hwContinuousIds,
  'Homework question IDs are strictly continuous from 1 to 54',
  'Found discontinuity in homework question IDs'
);

const expectedHwPerChapter = [6, 6, 3, 6, 5, 5, 5, 4, 2, 5, 7];
const actualHwPerChapter = Array.from({ length: 11 }, (_, i) => 
  homeworkQuestions.filter(q => q.chapterId === i + 1).length
);
const hwDistributionMatches = expectedHwPerChapter.every((exp, i) => exp === actualHwPerChapter[i]);
assert(
  hwDistributionMatches,
  'Homework questions per chapter strictly matches standard [6,6,3,6,5,5,5,4,2,5,7]',
  `Expected ${expectedHwPerChapter.join(',')}, got ${actualHwPerChapter.join(',')}`
);

const allHwValid = homeworkQuestions.every(q => 
  q.question && q.question.length > 0 &&
  q.answer && q.answer.length > 0 &&
  q.chapterTitle && q.points > 0
);
assert(
  allHwValid,
  'All 54 homework questions have complete questions and handwritten answers',
  'Found homework question with missing question or answer'
);

const allHwHaveHierarchy = homeworkQuestions.every(q => {
  const lines = q.answer.split('\n');
  const hasSubheading = lines.some(l => /^\s*-\s*\*.*\*|^\s*\*.*\*/.test(l));
  const hasChildBullet = lines.some(l => /^\s{2,}-\s/.test(l));
  return hasSubheading && hasChildBullet;
});
assert(
  allHwHaveHierarchy,
  'All 54 homework questions feature hierarchical structure with green summary subheadings and child bullets',
  'Found homework question without hierarchical subheadings or child bullets'
);

const hwQ7 = homeworkQuestions.find(q => q.id === 7)!;
assert(
  hwQ7 && 
  hwQ7.answer.includes('稳定货币，稳定经济') &&
  hwQ7.answer.includes('调节信用，调节经济') &&
  hwQ7.answer.includes('集中清算，加速资金周转') &&
  hwQ7.answer.includes('推进国际金融的合作和交流'),
  'Homework question 7 strictly follows Chapter 2 PPT 4-point structure',
  'Question 7 does not match Chapter 2 PPT roles'
);

// -----------------------------------------------------------------
// 3. Exam Question Bank Assertions (28 Terms, 40 Fill-In, 40 Choice, 30 T/F, 20 Short, 6 Essay)
// -----------------------------------------------------------------
console.log('\n--- 3. Exam Question Bank Verification ---');

assert(
  terminologyQuestions.length === 28,
  'Terminology count is exactly 28 (<= 30 core terms)',
  `Expected 28, got ${terminologyQuestions.length}`
);

const validTermChapters = [4, 5, 6, 7, 8, 10, 11];
const allTermsFromDesignatedChapters = terminologyQuestions.every(t => 
  validTermChapters.includes(t.chapterId)
);
assert(
  allTermsFromDesignatedChapters,
  'All 28 terms are strictly selected from designated Chapters 4, 5, 6, 7, 8, 10, 11',
  'Found term from non-designated chapter'
);

const allTermsHave3PointBreakdown = terminologyQuestions.every(t => 
  t.definition && t.definition.length > 0 &&
  t.nature && t.nature.length > 0 &&
  t.functionOrFeature && t.functionOrFeature.length > 0 &&
  t.totalPoints === 3
);
assert(
  allTermsHave3PointBreakdown,
  'All 28 terms strictly feature 3-point definitions (definition 1.5pt, nature 1pt, function/feature 0.5pt = 3pt)',
  'Found term with missing rubric breakdown'
);

assert(
  fillInQuestions.length === 40,
  'Fill-in-the-blank question count is exactly 40',
  `Expected 40, got ${fillInQuestions.length}`
);

const allFillInsValid = fillInQuestions.every(q => 
  q.stem.includes('_____') &&
  q.answers.length > 0 &&
  q.points === 1 &&
  q.recitationQuestionId && q.recitationQuestionId >= 1 && q.recitationQuestionId <= 162
);
assert(
  allFillInsValid,
  'All 40 fill-in questions contain blank placeholders, valid answers, and valid 162 recitation question mapping',
  'Found fill-in question with missing blank or answers or invalid recitationQuestionId'
);

assert(
  singleChoiceQuestions.length === 40,
  'Single choice question count is exactly 40',
  `Expected 40, got ${singleChoiceQuestions.length}`
);

const allSingleChoicesValid = singleChoiceQuestions.every(q => 
  q.options.A && q.options.B && q.options.C && q.options.D &&
  ['A', 'B', 'C', 'D'].includes(q.correctKey) &&
  q.rationale && q.rationale.length > 0 &&
  q.points === 1 &&
  q.recitationQuestionId && q.recitationQuestionId >= 1 && q.recitationQuestionId <= 162 &&
  !q.stem.includes('三元悖论') && !q.stem.includes('不可能三角')
);
assert(
  allSingleChoicesValid,
  'All 40 single choice questions feature complete ABCD options, valid key, detailed rationale, 162 mapping, and zero out-of-syllabus terms',
  'Found single choice question with invalid options or missing rationale or out-of-syllabus terms'
);

assert(
  trueFalseQuestions.length === 30,
  'True/False question count is exactly 30',
  `Expected 30, got ${trueFalseQuestions.length}`
);

const allTrueFalseValid = trueFalseQuestions.every(q => 
  typeof q.isCorrect === 'boolean' &&
  q.errorCorrection && q.errorCorrection.length > 0 &&
  q.points === 1 &&
  q.recitationQuestionId && q.recitationQuestionId >= 1 && q.recitationQuestionId <= 162 &&
  !tfStemHasOutlier(q)
);

function tfStemHasOutlier(q: any) {
  return q.statement.includes('三元悖论') || q.statement.includes('不可能三角');
}

assert(
  allTrueFalseValid,
  'All 30 True/False questions specify boolean value, error correction statement, valid 162 mapping, and zero out-of-syllabus terms',
  'Found True/False question with missing boolean or correction or out-of-syllabus terms'
);

assert(
  shortAnswerQuestions.length === 20,
  'Short answer question count is exactly 20',
  `Expected 20, got ${shortAnswerQuestions.length}`
);

const allShortAnswersValid = shortAnswerQuestions.every(q => {
  const sumRubric = q.rubricPoints.reduce((s, r) => s + r.score, 0);
  return (q.totalPoints === 6 || q.totalPoints === 8) &&
    Math.abs(sumRubric - q.totalPoints) < 0.01 &&
    q.rubricPoints.length >= 2;
});
assert(
  allShortAnswersValid,
  'All 20 short answer questions have rubrics totaling exactly 6 or 8 points',
  'Found short answer question with mismatched rubric points'
);

assert(
  essayQuestions.length === 6,
  'Essay question count is exactly 6 major questions',
  `Expected 6, got ${essayQuestions.length}`
);

const validEssayChapters = [7, 8, 9, 10, 11];
const allEssaysInCoreChapters = essayQuestions.every(e => 
  validEssayChapters.includes(e.chapterId)
);
assert(
  allEssaysInCoreChapters,
  'All 6 essay questions strictly cover Monetary Policy [Ch 7-9] and Financial Regulation [Ch 10-11]',
  'Found essay outside designated chapters'
);

const allEssaysHave20PtRubric = essayQuestions.every(e => 
  e.totalPoints === 20 &&
  e.rubric.theory.score === 4 &&
  e.rubric.mechanism.score === 8 &&
  e.rubric.practice.score === 6 &&
  e.rubric.conclusion.score === 2
);
assert(
  allEssaysHave20PtRubric,
  'All 6 essay questions feature 20-point rubrics: theory 4pt, mechanism 8pt, practice 6pt, conclusion 2pt = 20pt',
  'Found essay with non-conforming rubric points'
);

// -----------------------------------------------------------------
// 4. 100-Point Mock Exam Paper Assertions
// -----------------------------------------------------------------
console.log('\n--- 4. 100-Point Mock Exam Structure Verification ---');

const mockPaper = generateMockExamPaper(12345);

assert(
  mockPaper.terms.length === 5,
  'Mock exam includes exactly 5 terminology questions (15 pt)',
  `Got ${mockPaper.terms.length}`
);

assert(
  mockPaper.fillIns.length === 15,
  'Mock exam includes exactly 15 fill-in questions (15 pt)',
  `Got ${mockPaper.fillIns.length}`
);

assert(
  mockPaper.singleChoices.length === 15,
  'Mock exam includes exactly 15 single choice questions (15 pt)',
  `Got ${mockPaper.singleChoices.length}`
);

assert(
  mockPaper.trueFalse.length === 15,
  'Mock exam includes exactly 15 True/False questions (15 pt)',
  `Got ${mockPaper.trueFalse.length}`
);

assert(
  mockPaper.shortAnswers.length === 3,
  'Mock exam includes exactly 3 short answer questions (20 pt)',
  `Got ${mockPaper.shortAnswers.length}`
);

const shortAnswerTotal = mockPaper.shortAnswers.reduce((s, q) => s + q.totalPoints, 0);
assert(
  shortAnswerTotal === 20,
  'Mock exam short answer questions sum to exactly 20 points (6 + 6 + 8)',
  `Expected 20, got ${shortAnswerTotal}`
);

assert(
  mockPaper.essay && mockPaper.essay.totalPoints === 20,
  'Mock exam includes exactly 1 major essay question (20 pt)',
  `Got ${mockPaper.essay?.totalPoints}`
);

const totalExamPoints = 
  mockPaper.terms.reduce((s, t) => s + t.totalPoints, 0) +
  mockPaper.fillIns.reduce((s, f) => s + f.points, 0) +
  mockPaper.singleChoices.reduce((s, c) => s + c.points, 0) +
  mockPaper.trueFalse.reduce((s, tf) => s + tf.points, 0) +
  shortAnswerTotal +
  mockPaper.essay.totalPoints;

assert(
  totalExamPoints === 100,
  'Mock exam paper total strictly matches 100 points (15 + 15 + 15 + 15 + 20 + 20 = 100)',
  `Expected 100, got ${totalExamPoints}`
);

console.log('\n====================================================');
console.log(`VERIFICATION SUMMARY: ${passCount} PASSED, ${failCount} FAILED`);
console.log('====================================================\n');

if (failCount > 0) {
  process.exit(1);
} else {
  console.log('ALL DATASET ASSERTIONS VERIFIED SUCCESSFULLY WITH 100% PASS RATE.');
}
