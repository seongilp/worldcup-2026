export type GroupId =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L";

export interface Team {
  /** FIFA tri-code, e.g. "KOR" */
  code: string;
  /** Korean display name */
  name: string;
  /** Flag emoji */
  flag: string;
  group: GroupId;
}

export type Stage =
  | "group"
  | "r32"
  | "r16"
  | "qf"
  | "sf"
  | "bronze"
  | "final";

/** Status derived purely from the schedule date vs. today (no fabricated scores). */
export type MatchStatus = "past" | "today" | "upcoming";
