import { SCHEDULE, type ScheduleMatch } from "./schedule";
import { kstDateKey } from "./format";
import type { MatchStatus, Stage } from "./types";

/** "Today" in Korea time for the demo. Group stage is under way. */
export const TODAY = "2026-06-16";

/** KST date key (YYYY-MM-DD) for a match, since the whole UI is Korea-time based. */
export function kstDate(m: ScheduleMatch): string {
  return kstDateKey(m.date, m.time);
}

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
  const d = kstDate(m);
  if (d === TODAY) return "today";
  return d < TODAY ? "past" : "upcoming";
}

export const ALL_MATCHES = SCHEDULE;

export const GROUP_MATCHES = SCHEDULE.filter((m) => m.stage === "group");
export const KNOCKOUT_MATCHES = SCHEDULE.filter((m) => m.stage !== "group");

export const TODAY_MATCHES = SCHEDULE.filter((m) => kstDate(m) === TODAY);

/** Tournament span for the header. */
export const FIRST_DATE = SCHEDULE[0].date;
export const FINAL_MATCH = SCHEDULE.find((m) => m.stage === "final")!;
