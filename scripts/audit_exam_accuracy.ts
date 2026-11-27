import {
  terminologyQuestions,
  fillInQuestions,
  singleChoiceQuestions,
  trueFalseQuestions,
  shortAnswerQuestions,
  essayQuestions,
} from '../src/data/examData';
import { recitationQuestions } from '../src/data/centralBankingData';

const qMap = new Map(recitationQuestions.map(q => [q.id, q]));

const BANNED_OUT_OF_BOOK_TERMS = [
  '三元悖论',
  '不可能三角',
  '巨斧',
  '巴杰特',
  '次级抵押贷款',
  'MBS',
  'CDO',
  'M0',
  'M1',
  'M3',
  'CCyB',
  '第二十九条',
  '马斯特里赫特',
  'q>1',
  'q < 1',
  '现金漏损',
  '名义总支出',
  'D-SIFIs',
  '三道红线',
  'HVPS',
  'BEPS',
  'SWIFT',
  'LCR',
  'NSFR',
  '垄断发行原则',
  '信用保证原则',
  '弹性原则',
];

function findBannedTerm(text: string): string | null {
  for (const term of BANNED_OUT_OF_BOOK_TERMS) {
    if (text.includes(term)) return term;
  }
  return null;
}

console.log('=== 1. Checking Fill-In Questions ===');
let fillInErrors = 0;
for (const f of fillInQuestions) {
  if (!f.recitationQuestionId || f.recitationQuestionId < 1 || f.recitationQuestionId > 162) {
    console.error(`[FAIL] FillIn ${f.id} has invalid recitationQuestionId: ${f.recitationQuestionId}`);
    fillInErrors++;
    continue;
  }
  const rq = qMap.get(f.recitationQuestionId)!;
  if (f.chapterId !== rq.chapterId) {
    console.error(`[FAIL] FillIn ${f.id}: chapterId ${f.chapterId} !== Recitation #${rq.id} chapterId ${rq.chapterId}`);
    fillInErrors++;
  }
  const fullText = rq.title + ' ' + rq.content;
  const match = f.answers.some(ans => fullText.includes(ans) || (ans.length > 4 && fullText.includes(ans.slice(0, 3))));
  if (!match) {
    console.error(`[FAIL] FillIn ${f.id}: answers [${f.answers.join(', ')}] not found in Recitation #${f.recitationQuestionId} (${rq.title})`);
    fillInErrors++;
  }
  const banned = findBannedTerm(`${f.stem} ${f.answers.join(' ')} ${f.explanation || ''}`);
  if (banned) {
    console.error(`[FAIL] FillIn ${f.id} contains out-of-book term "${banned}"`);
    fillInErrors++;
  }
}
console.log(`Fill-in Errors: ${fillInErrors} / ${fillInQuestions.length}`);

console.log('\n=== 2. Checking Single Choice Questions ===');
let choiceErrors = 0;
for (const c of singleChoiceQuestions) {
  if (!c.recitationQuestionId || c.recitationQuestionId < 1 || c.recitationQuestionId > 162) {
    console.error(`[FAIL] Choice ${c.id} has invalid recitationQuestionId: ${c.recitationQuestionId}`);
    choiceErrors++;
    continue;
  }
  const rq = qMap.get(c.recitationQuestionId)!;
  if (c.chapterId !== rq.chapterId) {
    console.error(`[FAIL] Choice ${c.id}: chapterId ${c.chapterId} !== Recitation #${rq.id} chapterId ${rq.chapterId}`);
    choiceErrors++;
  }
  const combined = `${c.stem} ${c.options.A} ${c.options.B} ${c.options.C} ${c.options.D} ${c.rationale}`;
  const banned = findBannedTerm(combined);
  if (banned) {
    console.error(`[FAIL] Choice ${c.id} contains out-of-book term "${banned}"`);
    choiceErrors++;
  }
}
console.log(`Choice Errors: ${choiceErrors} / ${singleChoiceQuestions.length}`);

console.log('\n=== 3. Checking True/False Questions ===');
let tfErrors = 0;
for (const tf of trueFalseQuestions) {
  if (!tf.recitationQuestionId || tf.recitationQuestionId < 1 || tf.recitationQuestionId > 162) {
    console.error(`[FAIL] TF ${tf.id} has invalid recitationQuestionId: ${tf.recitationQuestionId}`);
    tfErrors++;
    continue;
  }
  const rq = qMap.get(tf.recitationQuestionId)!;
  if (tf.chapterId !== rq.chapterId) {
    console.error(`[FAIL] TF ${tf.id}: chapterId ${tf.chapterId} !== Recitation #${rq.id} chapterId ${rq.chapterId}`);
    tfErrors++;
  }
  const banned = findBannedTerm(`${tf.statement} ${tf.errorCorrection}`);
  if (banned) {
    console.error(`[FAIL] TF ${tf.id} contains out-of-book term "${banned}"`);
    tfErrors++;
  }
}
console.log(`TF Errors: ${tfErrors} / ${trueFalseQuestions.length}`);

console.log('\n=== 4. Checking Terminology, Short Answers & Essays ===');
let otherErrors = 0;
for (const t of terminologyQuestions) {
  const banned = findBannedTerm(`${t.term} ${t.definition} ${t.nature || ''} ${t.functionOrFeature || ''}`);
  if (banned) {
    console.error(`[FAIL] Term ${t.id} (${t.term}) contains out-of-book term "${banned}"`);
    otherErrors++;
  }
}
for (const s of shortAnswerQuestions) {
  if (s.chapterId < 1 || s.chapterId > 11) {
    console.error(`[FAIL] ShortAnswer ${s.id} has invalid chapterId: ${s.chapterId}`);
    otherErrors++;
  }
  if (s.totalPoints !== 6 && s.totalPoints !== 8) {
    console.error(`[FAIL] ShortAnswer ${s.id} has invalid totalPoints: ${s.totalPoints}`);
    otherErrors++;
  }
  const rubricSum = Math.round(s.rubricPoints.reduce((acc, r) => acc + r.score, 0) * 100) / 100;
  if (Math.abs(rubricSum - s.totalPoints) > 0.01) {
    console.error(`[FAIL] ShortAnswer ${s.id} rubric sum (${rubricSum}) !== totalPoints (${s.totalPoints})`);
    otherErrors++;
  }
  const saText = `${s.question} ${s.sampleAnswer} ${s.rubricPoints.map(r => r.point).join(' ')}`;
  const banned = findBannedTerm(saText);
  if (banned) {
    console.error(`[FAIL] ShortAnswer ${s.id} contains out-of-book term "${banned}"`);
    otherErrors++;
  }
  if (s.id === 3 && (!saText.includes('避免政治性经济波动') || !saText.includes('决策与实施的统一'))) {
    console.error(`[FAIL] ShortAnswer 3 does not match Ch2 PPT Slide 11-12 5 points`);
    otherErrors++;
  }
}
for (const e of essayQuestions) {
  if (e.chapterId < 7 || e.chapterId > 11) {
    console.error(`[FAIL] Essay ${e.id} has invalid chapterId: ${e.chapterId}`);
    otherErrors++;
  }
  if (e.totalPoints !== 20) {
    console.error(`[FAIL] Essay ${e.id} has invalid totalPoints: ${e.totalPoints}`);
    otherErrors++;
  }
  const essaySum = e.rubric.theory.score + e.rubric.mechanism.score + e.rubric.practice.score + e.rubric.conclusion.score;
  if (essaySum !== 20) {
    console.error(`[FAIL] Essay ${e.id} rubric sum (${essaySum}) !== 20`);
    otherErrors++;
  }
  const essayText = `${e.title} ${e.question} ${e.sampleAnswer} ${e.rubric.theory.desc} ${e.rubric.mechanism.desc} ${e.rubric.practice.desc} ${e.rubric.conclusion.desc}`;
  const banned = findBannedTerm(essayText);
  if (banned) {
    console.error(`[FAIL] Essay ${e.id} contains out-of-book term "${banned}"`);
    otherErrors++;
  }
}
console.log(`Other Exam Bank Errors: ${otherErrors}`);

if (fillInErrors === 0 && choiceErrors === 0 && tfErrors === 0 && otherErrors === 0) {
  console.log('\nALL EXAM QUESTIONS ARE 100% GROUNDED IN 162 PPT RECITATION QUESTIONS!');
} else {
  process.exit(1);
}
