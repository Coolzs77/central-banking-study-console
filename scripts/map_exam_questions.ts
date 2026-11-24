import { fillInQuestions, singleChoiceQuestions, trueFalseQuestions, shortAnswerQuestions, essayQuestions } from '../src/data/examData';
import { recitationQuestions } from '../src/data/centralBankingData';
import { QUESTION_KEYWORDS } from '../src/data/keywords';

console.log('Mapping exam questions to 161 recitation questions:');

// Function to find the best recitation question ID
function getBestRecitationId(stem: string, answersOrExplanation: string, chapterId: number): { id: number; title: string; score: number } {
  let bestId = -1;
  let maxScore = -1;
  let bestTitle = '';

  for (const q of recitationQuestions) {
    if (q.chapterId !== chapterId) continue;
    let score = 0;
    
    // Check keywords for this question
    const kws = QUESTION_KEYWORDS[q.id] || [];
    for (const kw of kws) {
      if (stem.includes(kw)) score += kw.length * 3;
      if (answersOrExplanation.includes(kw)) score += kw.length * 4;
      if (q.content.includes(kw) && (stem.includes(kw) || answersOrExplanation.includes(kw))) {
        score += kw.length * 2;
      }
    }

    if (score > maxScore) {
      maxScore = score;
      bestId = q.id;
      bestTitle = q.title;
    }
  }

  return { id: bestId, title: bestTitle, score: maxScore };
}

console.log('Sample FillIn mappings:');
fillInQuestions.slice(0, 10).forEach(f => {
  const qId = getBestRecitationId(f.stem, f.answers.join(' ') + ' ' + (f.explanation || ''), f.chapterId);
  const matchedQ = recitationQuestions.find(q => q.id === qId);
  console.log(`FillIn #${f.id} -> Q${qId} (${matchedQ?.title}): [${f.answers.join('/')}] ${f.stem.slice(0, 30)}...`);
});

console.log('\nSample Choice mappings:');
singleChoiceQuestions.slice(0, 10).forEach(c => {
  const qId = getBestRecitationId(c.stem, c.options[c.correctKey] + ' ' + c.rationale, c.chapterId);
  const matchedQ = recitationQuestions.find(q => q.id === qId);
  console.log(`Choice #${c.id} -> Q${qId} (${matchedQ?.title}): ${c.stem.slice(0, 30)}...`);
});

console.log('\nSample True/False mappings:');
trueFalseQuestions.slice(0, 10).forEach(tf => {
  const qId = getBestRecitationId(tf.statement, tf.errorCorrection, tf.chapterId);
  const matchedQ = recitationQuestions.find(q => q.id === qId);
  console.log(`TF #${tf.id} -> Q${qId} (${matchedQ?.title}): ${tf.statement.slice(0, 30)}...`);
});
