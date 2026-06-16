/**
 * Real finished-match results from Naver Sports (2026 FIFA World Cup).
 * Source: https://m.sports.naver.com/fifaworldcup2026/record (api-gw.sports.naver.com).
 * Only games already played are listed; remaining matches have no result yet.
 * Snapshot taken for the 2026-06-16 demo date.
 */
export interface Result {
  home: number;
  away: number;
}

export const RESULTS: Record<string, Result> = {
  "M1": { home: 2, away: 0 },
  "M2": { home: 2, away: 1 },
  "M3": { home: 1, away: 1 },
  "M4": { home: 4, away: 1 },
  "M5": { home: 0, away: 1 },
  "M6": { home: 2, away: 0 },
  "M7": { home: 1, away: 1 },
  "M8": { home: 1, away: 1 },
  "M9": { home: 1, away: 0 },
  "M10": { home: 7, away: 1 },
  "M11": { home: 2, away: 2 },
  "M12": { home: 5, away: 1 },
  "M13": { home: 1, away: 1 },
  "M14": { home: 0, away: 0 },
  "M15": { home: 2, away: 2 },
  "M16": { home: 1, away: 1 },
};

export function getResult(id: string): Result | null {
  return RESULTS[id] ?? null;
}

export const RESULT_COUNT = Object.keys(RESULTS).length;
