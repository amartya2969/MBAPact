export type OceanDimension =
  | "conscientiousness"
  | "openness"
  | "extraversion"
  | "agreeableness"
  | "emotionalStability";

export interface QuestionOption {
  text: string;
  score: number;
}

export interface Question {
  id: number;
  dimension: OceanDimension;
  category: string;
  text: string;
  options: QuestionOption[];
}

export interface LogisticsQuestion {
  id: string;
  category: string;
  text: string;
  options: string[];
}

export interface OceanScores {
  conscientiousness: number;
  openness: number;
  extraversion: number;
  agreeableness: number;
  emotionalStability: number;
}

export interface LogisticsAnswers {
  city: string;
  career: string;
  sunday: string;
}

export interface QuizResults {
  oceanScores: OceanScores;
  logistics: LogisticsAnswers;
  completedAt: string;
}

export interface MatchResult {
  matchPercentage: number;
  dimensionSimilarities: Record<OceanDimension, number>;
  logisticsMatch: boolean;
}

export type AppStep = "landing" | "verify" | "questionnaire" | "dashboard";

export interface UserState {
  currentStep: AppStep;
  profile: { email: string; school: string } | null;
  quizResults: QuizResults | null;
  answers: Record<number, number>;
  logisticsAnswers: Partial<LogisticsAnswers>;
}
