import { RESULTS, type SnapshotResult } from "./snapshot";

export type Result = SnapshotResult;

export function getResult(id: string): Result | null {
  return RESULTS[id] ?? null;
}

export const RESULT_COUNT = Object.keys(RESULTS).length;
