import { OceanScores, OceanDimension, MatchResult, LogisticsAnswers } from "./types";
import { MATCHING_WEIGHTS } from "./constants";

const MAX_DIMENSION_SCORE = 16; // 4 questions x max score 4
const MIN_DIMENSION_SCORE = 4; // 4 questions x min score 1
const MAX_DIFFERENCE = MAX_DIMENSION_SCORE - MIN_DIMENSION_SCORE; // 12

function dimensionSimilarity(scoreA: number, scoreB: number): number {
  return 1 - Math.abs(scoreA - scoreB) / MAX_DIFFERENCE;
}

function passesLogisticsFilter(a: LogisticsAnswers, b: LogisticsAnswers): boolean {
  return (
    a.city === b.city ||
    a.city === "Other / Flexible" ||
    b.city === "Other / Flexible"
  );
}

export function calculateMatch(
  scoresA: OceanScores,
  scoresB: OceanScores,
  logisticsA: LogisticsAnswers,
  logisticsB: LogisticsAnswers
): MatchResult {
  const dimensions: OceanDimension[] = [
    "conscientiousness",
    "openness",
    "extraversion",
    "agreeableness",
    "emotionalStability",
  ];

  const dimensionSimilarities = {} as Record<OceanDimension, number>;
  let weightedSum = 0;

  for (const dim of dimensions) {
    const sim = dimensionSimilarity(scoresA[dim], scoresB[dim]);
    dimensionSimilarities[dim] = sim;
    weightedSum += sim * MATCHING_WEIGHTS[dim];
  }

  return {
    matchPercentage: Math.round(weightedSum * 100),
    dimensionSimilarities,
    logisticsMatch: passesLogisticsFilter(logisticsA, logisticsB),
  };
}

export function calculateOceanScores(answers: Record<number, number>): OceanScores {
  const sum = (ids: number[]) => ids.reduce((acc, id) => acc + (answers[id] || 0), 0);

  return {
    conscientiousness: sum([1, 2, 3, 4]),
    openness: sum([5, 6, 7, 8]),
    extraversion: sum([9, 10, 11, 12]),
    agreeableness: sum([13, 14, 15, 16]),
    emotionalStability: sum([17, 18, 19, 20]),
  };
}

export function generateMockMatch(): number {
  return 72 + Math.floor(Math.random() * 22);
}
