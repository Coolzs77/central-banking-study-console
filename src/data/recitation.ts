import { recitationQuestions as rawQuestions, TOTAL_RECITATION_QUESTIONS, TOTAL_RECITATION_POINTS } from './centralBankingData';
import { QUESTION_KEYWORDS, getQuestionKeywords } from './keywords';

export const recitationQuestions = rawQuestions.map((q) => ({
  ...q,
  keywords: QUESTION_KEYWORDS[q.id] || [],
}));

export { TOTAL_RECITATION_QUESTIONS, TOTAL_RECITATION_POINTS, QUESTION_KEYWORDS, getQuestionKeywords };
export default recitationQuestions;
