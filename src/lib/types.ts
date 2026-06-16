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

/** finished = has a real result; today = on the current frontier match day. */
export type MatchStatus = "finished" | "today" | "upcoming";
