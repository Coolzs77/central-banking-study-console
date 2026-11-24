// TypeScript interfaces for Central Banking Study Console

export interface ChapterMeta {
  id: number;
  title: string;
  totalQuestions: number;
  totalPoints: number;
  sections: {
    id: string;
    title: string;
    questionCount: number;
    points: number;
  }[];
}

export type MasteryStatus = 'unlearned' | 'mastered' | 'reviewing'; // 'unlearned' (gray), 'mastered' (green), 'reviewing' (yellow)

export interface UserMasteryState {
  // Keyed by recitation question id (1..161)
  mastery: Record<number, MasteryStatus>;
  // Starred/favorited question IDs
  starred: number[];
  // Completed homework question IDs (1..54)
  homeworkCompleted: number[];
  // User exam records
  examHistory: ExamRecord[];
  // Terminology practice progress
  termMastery: Record<number, boolean>;
}

export interface RecitationQuestion {
  id: number; // 1 to 161
  chapterId: number; // 1 to 11
  chapterTitle: string;
  sectionId: string; // e.g. "1.1"
  sectionTitle: string;
  title: string;
  points: number;
  content: string; // rich markdown / text with bold **keywords**
  isCore?: boolean;
}

export interface HomeworkQuestion {
  id: number; // 1 to 54
  chapterId: number; // 1 to 11
  chapterTitle: string;
  question: string;
  answer: string; // concise handwritten-style answer
  points: number;
}

export interface TerminologyQuestion {
  id: number; // 1 to 28
  term: string;
  definition: string; // 1.5 pt
  nature: string; // 1.0 pt
  functionOrFeature: string; // 0.5 pt
  totalPoints: number; // 3 pt
  chapterId: number;
  chapterTitle: string;
}

export interface FillInQuestion {
  id: number;
  stem: string; // with _____ placeholders
  answers: string[]; // accepted answers / keywords
  points: number; // 1 pt
  chapterId: number;
  explanation?: string;
}

export interface SingleChoiceQuestion {
  id: number;
  stem: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctKey: 'A' | 'B' | 'C' | 'D';
  rationale: string;
  points: number; // 1 pt
  chapterId: number;
}

export interface TrueFalseQuestion {
  id: number;
  statement: string;
  isCorrect: boolean;
  errorCorrection: string; // explanation / correction if false
  points: number; // 1 pt
  chapterId: number;
}

export interface ShortAnswerRubric {
  point: string;
  score: number;
}

export interface ShortAnswerQuestion {
  id: number;
  question: string;
  rubricPoints: ShortAnswerRubric[];
  totalPoints: number; // 6 or 8
  chapterId: number;
  sampleAnswer?: string;
}

export interface EssayRubric {
  theory: { desc: string; score: number }; // 4 pt
  mechanism: { desc: string; score: number }; // 8 pt
  practice: { desc: string; score: number }; // 6 pt
  conclusion: { desc: string; score: number }; // 2 pt
}

export interface EssayQuestion {
  id: number;
  question: string;
  rubric: EssayRubric;
  totalPoints: number; // 20 pt
  chapterId: number;
  sampleAnswer?: string;
}

export interface ExamPaper {
  id: string;
  createdAt: number;
  durationMinutes: number; // 120
  terms: TerminologyQuestion[]; // 5 questions (15 pt)
  fillIns: FillInQuestion[]; // 15 questions (15 pt)
  singleChoices: SingleChoiceQuestion[]; // 15 questions (15 pt)
  trueFalse: TrueFalseQuestion[]; // 15 questions (15 pt)
  shortAnswers: ShortAnswerQuestion[]; // 3 questions (20 pt: 6, 6, 8)
  essay: EssayQuestion; // 1 question (20 pt)
  totalPoints: number; // 100 pt
}

export interface ExamUserAnswers {
  terms: Record<number, string>; // user answer text
  fillIns: Record<number, string[]>; // user fill-in inputs
  singleChoices: Record<number, 'A' | 'B' | 'C' | 'D' | ''>;
  trueFalse: Record<number, boolean | null>;
  shortAnswers: Record<number, string>;
  essay: Record<number, string>;
}

export interface ExamUserScores {
  termScores: Record<number, number>; // user self-graded (0-3)
  fillInScores: Record<number, number>; // auto-graded (0 or 1)
  singleChoiceScores: Record<number, number>; // auto-graded (0 or 1)
  trueFalseScores: Record<number, number>; // auto-graded (0 or 1)
  shortAnswerScores: Record<number, number>; // self-graded (0-6 or 0-8)
  essayScore: number; // self-graded (0-20)
  totalScore: number;
}

export interface ExamRecord {
  id: string;
  date: string;
  durationSecondsUsed: number;
  scores: ExamUserScores;
}
