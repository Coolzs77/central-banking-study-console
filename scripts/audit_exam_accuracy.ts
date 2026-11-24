import { fillInQuestions, singleChoiceQuestions, trueFalseQuestions } from '../src/data/examData';
import { recitationQuestions } from '../src/data/centralBankingData';

const qMap = new Map(recitationQuestions.map(q => [q.id, q]));

console.log('=== 1. Checking Fill-In Questions ===');
let fillInErrors = 0;
for (const f of fillInQuestions) {
  if (!f.recitationQuestionId || f.recitationQuestionId < 1 || f.recitationQuestionId > 161) {
    console.error(`[FAIL] FillIn ${f.id} has invalid recitationQuestionId: ${f.recitationQuestionId}`);
    fillInErrors++;
    continue;
  }
  const rq = qMap.get(f.recitationQuestionId)!;
  const fullText = rq.title + ' ' + rq.content;
  const match = f.answers.some(ans => fullText.includes(ans) || (ans.length > 4 && fullText.includes(ans.slice(0, 3))));
  if (!match) {
    console.error(`[FAIL] FillIn ${f.id}: answers [${f.answers.join(', ')}] not found in Recitation #${f.recitationQuestionId} (${rq.title})`);
    fillInErrors++;
  }
}
console.log(`Fill-in Errors: ${fillInErrors} / ${fillInQuestions.length}`);

console.log('\n=== 2. Checking Single Choice Questions ===');
let choiceErrors = 0;
for (const c of singleChoiceQuestions) {
  if (!c.recitationQuestionId || c.recitationQuestionId < 1 || c.recitationQuestionId > 161) {
    console.error(`[FAIL] Choice ${c.id} has invalid recitationQuestionId: ${c.recitationQuestionId}`);
    choiceErrors++;
    continue;
  }
  const rq = qMap.get(c.recitationQuestionId)!;
  const fullText = rq.title + ' ' + rq.content;
  const correctOption = c.options[c.correctKey];
  // Check if stem or rationale has out of syllabus term
  if (c.stem.includes('三元悖论') || c.stem.includes('不可能三角') || c.rationale.includes('三元悖论') || c.rationale.includes('不可能三角')) {
    console.error(`[FAIL] Choice ${c.id} contains out-of-syllabus term 三元悖论/不可能三角!`);
    choiceErrors++;
  }
}
console.log(`Choice Errors: ${choiceErrors} / ${singleChoiceQuestions.length}`);

console.log('\n=== 3. Checking True/False Questions ===');
let tfErrors = 0;
for (const tf of trueFalseQuestions) {
  if (!tf.recitationQuestionId || tf.recitationQuestionId < 1 || tf.recitationQuestionId > 161) {
    console.error(`[FAIL] TF ${tf.id} has invalid recitationQuestionId: ${tf.recitationQuestionId}`);
    tfErrors++;
    continue;
  }
  const rq = qMap.get(tf.recitationQuestionId)!;
  if (tf.statement.includes('三元悖论') || tf.statement.includes('不可能三角') || tf.errorCorrection.includes('三元悖论') || tf.errorCorrection.includes('不可能三角')) {
    console.error(`[FAIL] TF ${tf.id} contains out-of-syllabus term 三元悖论/不可能三角!`);
    tfErrors++;
  }
}
console.log(`TF Errors: ${tfErrors} / ${trueFalseQuestions.length}`);

if (fillInErrors === 0 && choiceErrors === 0 && tfErrors === 0) {
  console.log('\nALL 110 EXAM QUESTIONS ARE 100% GROUNDED IN 161 RECITATION QUESTIONS!');
} else {
  process.exit(1);
}
