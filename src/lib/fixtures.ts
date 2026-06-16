import { SCHEDULE, type ScheduleMatch } from "./schedule";
import { kstDateKey } from "./format";
import { getResult } from "./results";
import { SNAPSHOT_DATE } from "./snapshot";
import type { MatchStatus, Stage } from "./types";

/** KST date key (YYYY-MM-DD) for a match, since the whole UI is Korea-time based. */
export function kstDate(m: ScheduleMatch): string {
  return kstDateKey(m.date, m.time);
}

/**
 * "Today" = the current frontier, i.e. the earliest match day (KST) that still
 * has an unplayed match. Derived from the live results so it advances on its own
 * as the snapshot refreshes — no hard-coded date.
 */
export const TODAY: string = (() => {
  const unplayed = SCHEDULE.filter((m) => !getResult(m.id)).map(kstDate);
  return unplayed.length ? unplayed.sort()[0] : kstDate(SCHEDULE[SCHEDULE.length - 1]);
})();

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
  return kstDate(m) === TODAY ? "today" : "upcoming";
}

export const ALL_MATCHES = SCHEDULE;

export const GROUP_MATCHES = SCHEDULE.filter((m) => m.stage === "group");
export const KNOCKOUT_MATCHES = SCHEDULE.filter((m) => m.stage !== "group");

export const TODAY_MATCHES = SCHEDULE.filter((m) => kstDate(m) === TODAY);

/** Tournament span for the header. */
export const FIRST_DATE = SCHEDULE[0].date;
export const FINAL_MATCH = SCHEDULE.find((m) => m.stage === "final")!;
