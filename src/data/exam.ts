import * as examData from './examData';
export * from './examData';

// Aliases matching verify_suite and canvas components
export const termsBank = examData.terminologyQuestions;
export const fillInBank = examData.fillInQuestions;
export const singleChoiceBank = examData.singleChoiceQuestions;
export const trueFalseBank = examData.trueFalseQuestions;
export const shortAnswerBank = examData.shortAnswerQuestions;
export const essayBank = examData.essayQuestions;
export const generateExamPaper = examData.generateMockExamPaper;

export const examQuestionBank = {
  terms: examData.terminologyQuestions,
  fillIns: examData.fillInQuestions,
  singleChoices: examData.singleChoiceQuestions,
  trueFalse: examData.trueFalseQuestions,
  shortAnswers: examData.shortAnswerQuestions,
  essays: examData.essayQuestions,
};

export default examData;
