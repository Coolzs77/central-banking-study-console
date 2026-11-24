import fs from 'fs';
import { recitationQuestions } from '../src/data/centralBankingData';
import { QUESTION_KEYWORDS } from '../src/data/keywords';
import {
  fillInQuestions,
  singleChoiceQuestions,
  trueFalseQuestions,
  shortAnswerQuestions,
  essayQuestions,
  terminologyQuestions,
  TOTAL_EXAM_TERMS,
  TOTAL_FILL_IN,
  TOTAL_SINGLE_CHOICE,
  TOTAL_TRUE_FALSE,
  TOTAL_SHORT_ANSWER,
  TOTAL_ESSAYS
} from '../src/data/examData';

function getBestRecitationId(stem: string, answersOrExplanation: string, chapterId: number): number {
  let bestId = -1;
  let maxScore = -1;

  for (const q of recitationQuestions) {
    if (q.chapterId !== chapterId) continue;
    let score = 0;
    
    // Check keywords for this question
    const kws = QUESTION_KEYWORDS[q.id] || [];
    for (const kw of kws) {
      if (stem.includes(kw)) score += kw.length * 3;
      if (answersOrExplanation.includes(kw)) score += kw.length * 4;
    }

    if (score > maxScore) {
      maxScore = score;
      bestId = q.id;
    }
  }

  // fallback to first question of that chapter if no keyword match
  if (bestId === -1) {
    const firstQ = recitationQuestions.find(q => q.chapterId === chapterId);
    bestId = firstQ ? firstQ.id : 1;
  }

  return bestId;
}

const updatedFillIns = fillInQuestions.map(f => ({
  ...f,
  recitationQuestionId: getBestRecitationId(f.stem, f.answers.join(' ') + ' ' + (f.explanation || ''), f.chapterId)
}));

const updatedChoices = singleChoiceQuestions.map(c => ({
  ...c,
  recitationQuestionId: getBestRecitationId(c.stem, c.options[c.correctKey] + ' ' + c.rationale, c.chapterId)
}));

const updatedTrueFalse = trueFalseQuestions.map(tf => ({
  ...tf,
  recitationQuestionId: getBestRecitationId(tf.statement, tf.errorCorrection, tf.chapterId)
}));

console.log('Annotated:');
console.log('FillIns:', updatedFillIns.length);
console.log('Choices:', updatedChoices.length);
console.log('True/False:', updatedTrueFalse.length);

const examDataCode = `// Central Banking 100-Point Exam Question Bank
// Generated with authoritative coverage of Chapters 1-11
// Contains:
// - 28 Terminology questions (<= 30 core terms, selected from Ch 4, 5, 6, 7, 8, 10, 11 with 3-pt definitions: 1.5pt def, 1.0pt nature, 0.5pt function)
// - 40 Fill-in-the-blank questions (1pt each)
// - 40 Single-choice questions (1pt each, ABCD with rationale)
// - 30 True/False with correction questions (1pt each, with errorCorrection)
// - 20 Short-answer questions (6/6/8pt rubrics from 161 manual)
// - 6 Major essay questions (20pt each with detailed 4-part rubric: theory 4pt, mechanism 8pt, practice 6pt, conclusion 2pt)

import {
  TerminologyQuestion,
  FillInQuestion,
  SingleChoiceQuestion,
  TrueFalseQuestion,
  ShortAnswerQuestion,
  EssayQuestion,
  ExamPaper
} from './types';

import { terminologyList } from './terminology';
export const TOTAL_EXAM_TERMS = ${TOTAL_EXAM_TERMS};
export const TOTAL_FILL_IN = ${TOTAL_FILL_IN};
export const TOTAL_SINGLE_CHOICE = ${TOTAL_SINGLE_CHOICE};
export const TOTAL_TRUE_FALSE = ${TOTAL_TRUE_FALSE};
export const TOTAL_SHORT_ANSWER = ${TOTAL_SHORT_ANSWER};
export const TOTAL_ESSAYS = ${TOTAL_ESSAYS};

export const terminologyQuestions: TerminologyQuestion[] = terminologyList;

export const fillInQuestions: FillInQuestion[] = ${JSON.stringify(updatedFillIns, null, 2)};

export const singleChoiceQuestions: SingleChoiceQuestion[] = ${JSON.stringify(updatedChoices, null, 2)};

export const trueFalseQuestions: TrueFalseQuestion[] = ${JSON.stringify(updatedTrueFalse, null, 2)};

export const shortAnswerQuestions: ShortAnswerQuestion[] = ${JSON.stringify(shortAnswerQuestions, null, 2)};

export const essayQuestions: EssayQuestion[] = ${JSON.stringify(essayQuestions, null, 2)};

/**
 * Generate a 100-point balanced mock exam paper:
 * - 5 Terms * 3 pt = 15 pt
 * - 15 Fill-ins * 1 pt = 15 pt
 * - 15 Single Choices * 1 pt = 15 pt
 * - 15 True/False * 1 pt = 15 pt
 * - 3 Short Answers = 20 pt (two 6-pt + one 8-pt)
 * - 1 Essay * 20 pt = 20 pt
 * Total: 100 pt
 */
export function generateMockExamPaper(customSeed?: number): ExamPaper {
  const seed = customSeed ?? Date.now();
  
  // Deterministic pseudo-random picker
  function pseudoRandomPick<T>(arr: T[], count: number, offset: number): T[] {
    const copy = [...arr];
    const picked: T[] = [];
    let cur = (seed + offset) % copy.length;
    for (let i = 0; i < count && copy.length > 0; i++) {
      cur = (cur + 7) % copy.length;
      picked.push(copy.splice(cur, 1)[0]);
    }
    return picked;
  }

  // 1. Pick 5 Terms (15 pt)
  const terms = pseudoRandomPick(terminologyQuestions, 5, 11);

  // 2. Pick 15 Fill-ins (15 pt)
  const fillIns = pseudoRandomPick(fillInQuestions, 15, 23);

  // 3. Pick 15 Single Choices (15 pt)
  const singleChoices = pseudoRandomPick(singleChoiceQuestions, 15, 37);

  // 4. Pick 15 True/False (15 pt)
  const trueFalse = pseudoRandomPick(trueFalseQuestions, 15, 41);

  // 5. Pick 3 Short Answers: exactly two 6-pt questions + one 8-pt question = 20 pt
  const sixPtPool = shortAnswerQuestions.filter(q => q.totalPoints === 6);
  const eightPtPool = shortAnswerQuestions.filter(q => q.totalPoints === 8);
  const pickedSix = pseudoRandomPick(sixPtPool, 2, 53);
  const pickedEight = pseudoRandomPick(eightPtPool, 1, 67);
  const shortAnswers = [...pickedSix, ...pickedEight];

  // 6. Pick 1 Essay (20 pt)
  const pickedEssay = pseudoRandomPick(essayQuestions, 1, 79)[0];

  return {
    id: \`exam-\${seed}\`,
    createdAt: Date.now(),
    durationMinutes: 120,
    terms,
    fillIns,
    singleChoices,
    trueFalse,
    shortAnswers,
    essay: pickedEssay,
    totalPoints: 100
  };
}
`;

fs.writeFileSync('src/data/examData.ts', examDataCode);
console.log('Successfully written updated examData.ts with recitation links!');
