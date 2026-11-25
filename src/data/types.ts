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

export interface UserMasteryState {
  // Question IDs marked as memorized [✓] (1..161)
  memorized: number[];
  // Starred/favorited question IDs (1..161)
  starred: number[];
  // Completed homework question IDs (1..54)
  homeworkCompleted: number[];
  // Terminology memorized & starred IDs (1..28)
  termMemorized: number[];
  termStarred?: number[];
  // Practice single-choice memorized & starred IDs (1..40)
  choiceMemorized?: number[];
  choiceStarred?: number[];
  // Practice true/false memorized & starred IDs (1..30)
  tfMemorized?: number[];
  tfStarred?: number[];
  // Practice fill-in memorized & starred IDs (1..40)
  fillMemorized?: number[];
  fillStarred?: number[];
  // User exam records
  examHistory: ExamRecord[];
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
  keywords?: string[]; // Core score-bearing keywords for this question
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
  definition: string; // concise definition with **bold keywords**
  nature?: string;
  functionOrFeature?: string;
  totalPoints?: number;
  chapterId: number;
  chapterTitle: string;
  source?: string; // e.g. "作业本第5章第1题"
}

export interface FillInQuestion {
  id: number;
  stem: string; // with _____ placeholders
  answers: string[]; // accepted answers / keywords
  points: number; // 1 pt
  chapterId: number;
  recitationQuestionId?: number;
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
  recitationQuestionId?: number;
}

export interface TrueFalseQuestion {
  id: number;
  statement: string;
  isCorrect: boolean;
  errorCorrection: string; // explanation / correction if false
  points: number; // 1 pt
  chapterId: number;
  recitationQuestionId?: number;
}

export interface ShortAnswerRubric {
  point: string;
  score: number;
}

export interface ShortAnswerQuestion {
  id: number;
  title: string;
  question: string;
  points: number; // 6 or 8 pt
  chapterId: number;
  standardAnswer: string;
  rubrics: ShortAnswerRubric[];
}

export interface EssayRubricPart {
  dimension: string; // e.g. "理论基础", "作用机制", "现实结合", "政策结论"
  score: number; // 4, 8, 6, 2 pt
  criterion: string;
}

export interface EssayQuestion {
  id: number;
  topicCategory: 'monetary-policy' | 'financial-regulation';
  title: string;
  question: string;
  points: number; // 20 pt
  chapterRange: string;
  standardOutline: string;
  rubrics: EssayRubricPart[];
}

export interface ExamPaper {
  id: string;
  generatedAt: number;
  durationMinutes: number; // 120
  totalPoints: number; // 100
  sections: {
    terminology: {
      items: TerminologyQuestion[];
      pointsPerItem: number; // 3 pt
      totalPoints: number; // 15 pt
    };
    fillIn: {
      items: FillInQuestion[];
      pointsPerItem: number; // 1 pt
      totalPoints: number; // 15 pt
    };
    singleChoice: {
      items: SingleChoiceQuestion[];
      pointsPerItem: number; // 1 pt
      totalPoints: number; // 15 pt
    };
    trueFalse: {
      items: TrueFalseQuestion[];
      pointsPerItem: number; // 1 pt
      totalPoints: number; // 15 pt
    };
    shortAnswer: {
      items: ShortAnswerQuestion[];
      totalPoints: number; // 20 pt (6 + 6 + 8)
    };
    essay: {
      items: EssayQuestion[];
      totalPoints: number; // 20 pt
    };
  };
}

export interface ExamRecord {
  id: string;
  timestamp: number;
  durationMinutes: number;
  score: number;
  details: {
    terminologyScore: number;
    fillInScore: number;
    singleChoiceScore: number;
    trueFalseScore: number;
    shortAnswerScore: number;
    essayScore: number;
  };
}

export interface SyncStatus {
  account: string;
  autoSyncEnabled: boolean;
  isSyncing: boolean;
  lastSyncedAt: number | null;
  statusText: string;
}
