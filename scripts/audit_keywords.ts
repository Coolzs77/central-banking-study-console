import { recitationQuestions } from '../src/data/centralBankingData';
import { CENTRAL_BANKING_KEYWORDS } from '../src/data/keywords';

console.log('Total questions:', recitationQuestions.length);
console.log('Total keywords:', CENTRAL_BANKING_KEYWORDS.length);

let totalMatches = 0;
let questionsWithoutKeywords: number[] = [];

for (const q of recitationQuestions) {
  let matched: string[] = [];
  for (const kw of CENTRAL_BANKING_KEYWORDS) {
    if (q.content.includes(kw)) {
      matched.push(kw);
    }
  }
  if (matched.length === 0) {
    questionsWithoutKeywords.push(q.id);
  }
}

console.log('Questions with ZERO matches from CENTRAL_BANKING_KEYWORDS:', questionsWithoutKeywords);
console.log('Number of questions with 0 matches:', questionsWithoutKeywords.length);

// Also look at bold terms in content
let questionsWithoutBold: number[] = [];
let sampleAnalyses: any[] = [];

for (const q of recitationQuestions.slice(0, 10)) {
  const boldMatches = q.content.match(/\*\*[^*]+\*\*/g) || [];
  sampleAnalyses.push({
    id: q.id,
    title: q.title,
    boldCount: boldMatches.length,
    boldTerms: boldMatches.slice(0, 3)
  });
}
console.log('First 10 sample analyses:');
console.log(JSON.stringify(sampleAnalyses, null, 2));
