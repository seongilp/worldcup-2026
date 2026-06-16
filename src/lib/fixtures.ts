import { SCHEDULE, type ScheduleMatch } from "./schedule";
import { kstDateKey } from "./format";
import { getResult } from "./results";
import { SNAPSHOT_DATE } from "./snapshot";
import type { MatchStatus, Stage } from "./types";

/** KST date key (YYYY-MM-DD) for a match, since the whole UI is Korea-time based. */
export function kstDate(m: ScheduleMatch): string {
  return kstDateKey(m.date, m.time);
}

/** "Today" = the actual current date (KST), stamped when results were refreshed. */
export const TODAY: string = SNAPSHOT_DATE;

/** Date the results snapshot was last refreshed (for the "기준" note). */
export const UPDATED_AT = SNAPSHOT_DATE;

export const STAGE_LABEL: Record<Stage, string> = {
  group: "조별리그",
  r32: "32강",
  r16: "16강",
  qf: "8강",
  sf: "준결승",
  bronze: "3·4위전",
  final: "결승",
};

export const STAGE_ORDER: Stage[] = [
  "group",
  "r32",
  "r16",
  "qf",
  "sf",
  "bronze",
  "final",
];

export function matchStatus(m: ScheduleMatch): MatchStatus {
  if (getResult(m.id)) return "finished";
  const d = kstDate(m);
  // Past day without a result yet (snapshot lag) — treat as finished, not "today".
  if (d < TODAY) return "finished";
  return d === TODAY ? "today" : "upcoming";
}

export const ALL_MATCHES = SCHEDULE;

export const GROUP_MATCHES = SCHEDULE.filter((m) => m.stage === "group");
export const KNOCKOUT_MATCHES = SCHEDULE.filter((m) => m.stage !== "group");

export const TODAY_MATCHES = SCHEDULE.filter((m) => kstDate(m) === TODAY);

/** Tournament span for the header. */
export const FIRST_DATE = SCHEDULE[0].date;
export const FINAL_MATCH = SCHEDULE.find((m) => m.stage === "final")!;
