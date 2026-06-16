const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];

/** "6월 16일 (화)" from a YYYY-MM-DD string */
export function formatDateLabel(date: string): string {
  const [y, m, d] = date.split("-").map(Number);
  const wd = new Date(Date.UTC(y, m - 1, d)).getUTCDay();
  return `${m}월 ${d}일 (${WEEKDAYS[wd]})`;
}

/** short "6.16" */
export function shortDate(date: string): string {
  const [, m, d] = date.split("-").map(Number);
  return `${m}.${d}`;
}

/**
 * Convert an ET (EDT, UTC-4 during the tournament) kickoff to Korea time.
 * Returns the KST date key, time, weekday and a Korean date label.
 */
export function toKST(date: string, time: string) {
  const dt = new Date(`${date}T${time}:00-04:00`);
  const parts = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    weekday: "short",
    hour12: false,
  }).formatToParts(dt);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  return {
    dateKey: `${get("year")}-${get("month")}-${get("day")}`,
    time: `${get("hour")}:${get("minute")}`,
    weekday: get("weekday"),
    label: `${Number(get("month"))}월 ${Number(get("day"))}일 (${get("weekday")})`,
  };
}

/** KST date key (YYYY-MM-DD) for a scheduled ET kickoff. */
export function kstDateKey(date: string, time: string): string {
  return toKST(date, time).dateKey;
}

/** Group schedule items by their date field, ascending. */
export function groupByDate<T extends { date: string }>(
  items: T[],
): Array<[string, T[]]> {
  const map = new Map<string, T[]>();
  for (const item of items) {
    const arr = map.get(item.date) ?? [];
    arr.push(item);
    map.set(item.date, arr);
  }
  return [...map.entries()].sort(([a], [b]) => a.localeCompare(b));
}
