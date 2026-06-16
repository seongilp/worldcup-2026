import type { GroupId, Stage } from "./types";

export interface ScheduleMatch {
  id: string;
  number: number;
  stage: Stage;
  group?: GroupId;
  matchday?: number;
  /** local kickoff date at the venue, YYYY-MM-DD */
  date: string;
  /** local kickoff time (Eastern Time, ET) HH:MM */
  time: string;
  home?: string;
  away?: string;
  homeLabel?: string;
  awayLabel?: string;
  city: string;
  stadium: string;
  flag: string;
}

/**
 * Official FIFA World Cup 2026 match schedule (all 104 matches).
 * Source: FIFA published match schedule (FWC26-Match-Schedule). Times are ET.
 * Group draw, dates, kickoff times and venues are official. Scores are not
 * included (no live results feed).
 */
export const SCHEDULE: ScheduleMatch[] = [
  {"id": "M1", "number": 1, "stage": "group", "group": "A", "matchday": 1, "date": "2026-06-11", "time": "15:00", "home": "MEX", "away": "RSA", "city": "멕시코시티", "stadium": "에스타디오 아즈테카", "flag": "🇲🇽"},
  {"id": "M2", "number": 2, "stage": "group", "group": "A", "matchday": 1, "date": "2026-06-11", "time": "22:00", "home": "KOR", "away": "CZE", "city": "과달라하라", "stadium": "에스타디오 아크론", "flag": "🇲🇽"},
  {"id": "M3", "number": 3, "stage": "group", "group": "B", "matchday": 1, "date": "2026-06-12", "time": "15:00", "home": "CAN", "away": "BIH", "city": "토론토", "stadium": "BMO 필드", "flag": "🇨🇦"},
  {"id": "M4", "number": 4, "stage": "group", "group": "D", "matchday": 1, "date": "2026-06-12", "time": "21:00", "home": "USA", "away": "PAR", "city": "로스앤젤레스", "stadium": "소파이 스타디움", "flag": "🇺🇸"},
  {"id": "M5", "number": 5, "stage": "group", "group": "C", "matchday": 1, "date": "2026-06-13", "time": "21:00", "home": "HAI", "away": "SCO", "city": "보스턴", "stadium": "질레트 스타디움", "flag": "🇺🇸"},
  {"id": "M6", "number": 6, "stage": "group", "group": "D", "matchday": 1, "date": "2026-06-13", "time": "00:00", "home": "AUS", "away": "TUR", "city": "밴쿠버", "stadium": "BC 플레이스", "flag": "🇨🇦"},
  {"id": "M7", "number": 7, "stage": "group", "group": "C", "matchday": 1, "date": "2026-06-13", "time": "18:00", "home": "BRA", "away": "MAR", "city": "뉴욕/뉴저지", "stadium": "메트라이프 스타디움", "flag": "🇺🇸"},
  {"id": "M8", "number": 8, "stage": "group", "group": "B", "matchday": 1, "date": "2026-06-13", "time": "15:00", "home": "QAT", "away": "SUI", "city": "샌프란시스코 베이", "stadium": "리바이스 스타디움", "flag": "🇺🇸"},
  {"id": "M9", "number": 9, "stage": "group", "group": "E", "matchday": 1, "date": "2026-06-14", "time": "19:00", "home": "CIV", "away": "ECU", "city": "필라델피아", "stadium": "링컨 파이낸셜 필드", "flag": "🇺🇸"},
  {"id": "M10", "number": 10, "stage": "group", "group": "E", "matchday": 1, "date": "2026-06-14", "time": "13:00", "home": "GER", "away": "CUW", "city": "휴스턴", "stadium": "NRG 스타디움", "flag": "🇺🇸"},
  {"id": "M11", "number": 11, "stage": "group", "group": "F", "matchday": 1, "date": "2026-06-14", "time": "16:00", "home": "NED", "away": "JPN", "city": "댈러스", "stadium": "AT&T 스타디움", "flag": "🇺🇸"},
  {"id": "M12", "number": 12, "stage": "group", "group": "F", "matchday": 1, "date": "2026-06-14", "time": "22:00", "home": "SWE", "away": "TUN", "city": "몬테레이", "stadium": "에스타디오 BBVA", "flag": "🇲🇽"},
  {"id": "M13", "number": 13, "stage": "group", "group": "H", "matchday": 1, "date": "2026-06-15", "time": "18:00", "home": "KSA", "away": "URU", "city": "마이애미", "stadium": "하드록 스타디움", "flag": "🇺🇸"},
  {"id": "M14", "number": 14, "stage": "group", "group": "H", "matchday": 1, "date": "2026-06-15", "time": "12:00", "home": "ESP", "away": "CPV", "city": "애틀랜타", "stadium": "메르세데스-벤츠 스타디움", "flag": "🇺🇸"},
  {"id": "M15", "number": 15, "stage": "group", "group": "G", "matchday": 1, "date": "2026-06-15", "time": "21:00", "home": "IRN", "away": "NZL", "city": "로스앤젤레스", "stadium": "소파이 스타디움", "flag": "🇺🇸"},
  {"id": "M16", "number": 16, "stage": "group", "group": "G", "matchday": 1, "date": "2026-06-15", "time": "15:00", "home": "BEL", "away": "EGY", "city": "시애틀", "stadium": "루멘 필드", "flag": "🇺🇸"},
  {"id": "M17", "number": 17, "stage": "group", "group": "I", "matchday": 1, "date": "2026-06-16", "time": "15:00", "home": "FRA", "away": "SEN", "city": "뉴욕/뉴저지", "stadium": "메트라이프 스타디움", "flag": "🇺🇸"},
  {"id": "M18", "number": 18, "stage": "group", "group": "I", "matchday": 1, "date": "2026-06-16", "time": "18:00", "home": "IRQ", "away": "NOR", "city": "보스턴", "stadium": "질레트 스타디움", "flag": "🇺🇸"},
  {"id": "M19", "number": 19, "stage": "group", "group": "J", "matchday": 1, "date": "2026-06-16", "time": "21:00", "home": "ARG", "away": "ALG", "city": "캔자스시티", "stadium": "애로헤드 스타디움", "flag": "🇺🇸"},
  {"id": "M20", "number": 20, "stage": "group", "group": "J", "matchday": 1, "date": "2026-06-16", "time": "00:00", "home": "AUT", "away": "JOR", "city": "샌프란시스코 베이", "stadium": "리바이스 스타디움", "flag": "🇺🇸"},
  {"id": "M21", "number": 21, "stage": "group", "group": "L", "matchday": 1, "date": "2026-06-17", "time": "19:00", "home": "GHA", "away": "PAN", "city": "토론토", "stadium": "BMO 필드", "flag": "🇨🇦"},
  {"id": "M22", "number": 22, "stage": "group", "group": "L", "matchday": 1, "date": "2026-06-17", "time": "16:00", "home": "ENG", "away": "CRO", "city": "댈러스", "stadium": "AT&T 스타디움", "flag": "🇺🇸"},
  {"id": "M23", "number": 23, "stage": "group", "group": "K", "matchday": 1, "date": "2026-06-17", "time": "13:00", "home": "POR", "away": "COD", "city": "휴스턴", "stadium": "NRG 스타디움", "flag": "🇺🇸"},
  {"id": "M24", "number": 24, "stage": "group", "group": "K", "matchday": 1, "date": "2026-06-17", "time": "22:00", "home": "UZB", "away": "COL", "city": "멕시코시티", "stadium": "에스타디오 아즈테카", "flag": "🇲🇽"},
  {"id": "M25", "number": 25, "stage": "group", "group": "A", "matchday": 2, "date": "2026-06-18", "time": "12:00", "home": "CZE", "away": "RSA", "city": "애틀랜타", "stadium": "메르세데스-벤츠 스타디움", "flag": "🇺🇸"},
  {"id": "M26", "number": 26, "stage": "group", "group": "B", "matchday": 2, "date": "2026-06-18", "time": "15:00", "home": "SUI", "away": "BIH", "city": "로스앤젤레스", "stadium": "소파이 스타디움", "flag": "🇺🇸"},
  {"id": "M27", "number": 27, "stage": "group", "group": "B", "matchday": 2, "date": "2026-06-18", "time": "18:00", "home": "CAN", "away": "QAT", "city": "밴쿠버", "stadium": "BC 플레이스", "flag": "🇨🇦"},
  {"id": "M28", "number": 28, "stage": "group", "group": "A", "matchday": 2, "date": "2026-06-18", "time": "21:00", "home": "MEX", "away": "KOR", "city": "과달라하라", "stadium": "에스타디오 아크론", "flag": "🇲🇽"},
  {"id": "M29", "number": 29, "stage": "group", "group": "C", "matchday": 2, "date": "2026-06-19", "time": "20:30", "home": "BRA", "away": "HAI", "city": "필라델피아", "stadium": "링컨 파이낸셜 필드", "flag": "🇺🇸"},
  {"id": "M30", "number": 30, "stage": "group", "group": "C", "matchday": 2, "date": "2026-06-19", "time": "18:00", "home": "SCO", "away": "MAR", "city": "보스턴", "stadium": "질레트 스타디움", "flag": "🇺🇸"},
  {"id": "M31", "number": 31, "stage": "group", "group": "D", "matchday": 2, "date": "2026-06-19", "time": "23:00", "home": "TUR", "away": "PAR", "city": "샌프란시스코 베이", "stadium": "리바이스 스타디움", "flag": "🇺🇸"},
  {"id": "M32", "number": 32, "stage": "group", "group": "D", "matchday": 2, "date": "2026-06-19", "time": "15:00", "home": "USA", "away": "AUS", "city": "시애틀", "stadium": "루멘 필드", "flag": "🇺🇸"},
  {"id": "M33", "number": 33, "stage": "group", "group": "E", "matchday": 2, "date": "2026-06-20", "time": "16:00", "home": "GER", "away": "CIV", "city": "토론토", "stadium": "BMO 필드", "flag": "🇨🇦"},
  {"id": "M34", "number": 34, "stage": "group", "group": "E", "matchday": 2, "date": "2026-06-20", "time": "20:00", "home": "ECU", "away": "CUW", "city": "캔자스시티", "stadium": "애로헤드 스타디움", "flag": "🇺🇸"},
  {"id": "M35", "number": 35, "stage": "group", "group": "F", "matchday": 2, "date": "2026-06-20", "time": "13:00", "home": "NED", "away": "SWE", "city": "휴스턴", "stadium": "NRG 스타디움", "flag": "🇺🇸"},
  {"id": "M36", "number": 36, "stage": "group", "group": "F", "matchday": 2, "date": "2026-06-20", "time": "00:00", "home": "TUN", "away": "JPN", "city": "몬테레이", "stadium": "에스타디오 BBVA", "flag": "🇲🇽"},
  {"id": "M37", "number": 37, "stage": "group", "group": "H", "matchday": 2, "date": "2026-06-21", "time": "18:00", "home": "URU", "away": "CPV", "city": "마이애미", "stadium": "하드록 스타디움", "flag": "🇺🇸"},
  {"id": "M38", "number": 38, "stage": "group", "group": "H", "matchday": 2, "date": "2026-06-21", "time": "12:00", "home": "ESP", "away": "KSA", "city": "애틀랜타", "stadium": "메르세데스-벤츠 스타디움", "flag": "🇺🇸"},
  {"id": "M39", "number": 39, "stage": "group", "group": "G", "matchday": 2, "date": "2026-06-21", "time": "15:00", "home": "BEL", "away": "IRN", "city": "로스앤젤레스", "stadium": "소파이 스타디움", "flag": "🇺🇸"},
  {"id": "M40", "number": 40, "stage": "group", "group": "G", "matchday": 2, "date": "2026-06-21", "time": "21:00", "home": "NZL", "away": "EGY", "city": "밴쿠버", "stadium": "BC 플레이스", "flag": "🇨🇦"},
  {"id": "M41", "number": 41, "stage": "group", "group": "I", "matchday": 2, "date": "2026-06-22", "time": "20:00", "home": "NOR", "away": "SEN", "city": "뉴욕/뉴저지", "stadium": "메트라이프 스타디움", "flag": "🇺🇸"},
  {"id": "M42", "number": 42, "stage": "group", "group": "I", "matchday": 2, "date": "2026-06-22", "time": "17:00", "home": "FRA", "away": "IRQ", "city": "필라델피아", "stadium": "링컨 파이낸셜 필드", "flag": "🇺🇸"},
  {"id": "M43", "number": 43, "stage": "group", "group": "J", "matchday": 2, "date": "2026-06-22", "time": "13:00", "home": "ARG", "away": "AUT", "city": "댈러스", "stadium": "AT&T 스타디움", "flag": "🇺🇸"},
  {"id": "M44", "number": 44, "stage": "group", "group": "J", "matchday": 2, "date": "2026-06-22", "time": "23:00", "home": "JOR", "away": "ALG", "city": "샌프란시스코 베이", "stadium": "리바이스 스타디움", "flag": "🇺🇸"},
  {"id": "M45", "number": 45, "stage": "group", "group": "L", "matchday": 2, "date": "2026-06-23", "time": "16:00", "home": "ENG", "away": "GHA", "city": "보스턴", "stadium": "질레트 스타디움", "flag": "🇺🇸"},
  {"id": "M46", "number": 46, "stage": "group", "group": "L", "matchday": 2, "date": "2026-06-23", "time": "19:00", "home": "PAN", "away": "CRO", "city": "토론토", "stadium": "BMO 필드", "flag": "🇨🇦"},
  {"id": "M47", "number": 47, "stage": "group", "group": "K", "matchday": 2, "date": "2026-06-23", "time": "13:00", "home": "POR", "away": "UZB", "city": "휴스턴", "stadium": "NRG 스타디움", "flag": "🇺🇸"},
  {"id": "M48", "number": 48, "stage": "group", "group": "K", "matchday": 2, "date": "2026-06-23", "time": "22:00", "home": "COL", "away": "COD", "city": "과달라하라", "stadium": "에스타디오 아크론", "flag": "🇲🇽"},
  {"id": "M49", "number": 49, "stage": "group", "group": "C", "matchday": 3, "date": "2026-06-24", "time": "18:00", "home": "SCO", "away": "BRA", "city": "마이애미", "stadium": "하드록 스타디움", "flag": "🇺🇸"},
  {"id": "M50", "number": 50, "stage": "group", "group": "C", "matchday": 3, "date": "2026-06-24", "time": "18:00", "home": "MAR", "away": "HAI", "city": "애틀랜타", "stadium": "메르세데스-벤츠 스타디움", "flag": "🇺🇸"},
  {"id": "M51", "number": 51, "stage": "group", "group": "B", "matchday": 3, "date": "2026-06-24", "time": "15:00", "home": "SUI", "away": "CAN", "city": "밴쿠버", "stadium": "BC 플레이스", "flag": "🇨🇦"},
  {"id": "M52", "number": 52, "stage": "group", "group": "B", "matchday": 3, "date": "2026-06-24", "time": "15:00", "home": "BIH", "away": "QAT", "city": "시애틀", "stadium": "루멘 필드", "flag": "🇺🇸"},
  {"id": "M53", "number": 53, "stage": "group", "group": "A", "matchday": 3, "date": "2026-06-24", "time": "21:00", "home": "CZE", "away": "MEX", "city": "멕시코시티", "stadium": "에스타디오 아즈테카", "flag": "🇲🇽"},
  {"id": "M54", "number": 54, "stage": "group", "group": "A", "matchday": 3, "date": "2026-06-24", "time": "21:00", "home": "RSA", "away": "KOR", "city": "몬테레이", "stadium": "에스타디오 BBVA", "flag": "🇲🇽"},
  {"id": "M55", "number": 55, "stage": "group", "group": "E", "matchday": 3, "date": "2026-06-25", "time": "16:00", "home": "CUW", "away": "CIV", "city": "필라델피아", "stadium": "링컨 파이낸셜 필드", "flag": "🇺🇸"},
  {"id": "M56", "number": 56, "stage": "group", "group": "E", "matchday": 3, "date": "2026-06-25", "time": "16:00", "home": "ECU", "away": "GER", "city": "뉴욕/뉴저지", "stadium": "메트라이프 스타디움", "flag": "🇺🇸"},
  {"id": "M57", "number": 57, "stage": "group", "group": "F", "matchday": 3, "date": "2026-06-25", "time": "19:00", "home": "JPN", "away": "SWE", "city": "댈러스", "stadium": "AT&T 스타디움", "flag": "🇺🇸"},
  {"id": "M58", "number": 58, "stage": "group", "group": "F", "matchday": 3, "date": "2026-06-25", "time": "19:00", "home": "TUN", "away": "NED", "city": "캔자스시티", "stadium": "애로헤드 스타디움", "flag": "🇺🇸"},
  {"id": "M59", "number": 59, "stage": "group", "group": "D", "matchday": 3, "date": "2026-06-25", "time": "22:00", "home": "TUR", "away": "USA", "city": "로스앤젤레스", "stadium": "소파이 스타디움", "flag": "🇺🇸"},
  {"id": "M60", "number": 60, "stage": "group", "group": "D", "matchday": 3, "date": "2026-06-25", "time": "22:00", "home": "PAR", "away": "AUS", "city": "샌프란시스코 베이", "stadium": "리바이스 스타디움", "flag": "🇺🇸"},
  {"id": "M61", "number": 61, "stage": "group", "group": "I", "matchday": 3, "date": "2026-06-26", "time": "15:00", "home": "NOR", "away": "FRA", "city": "보스턴", "stadium": "질레트 스타디움", "flag": "🇺🇸"},
  {"id": "M62", "number": 62, "stage": "group", "group": "I", "matchday": 3, "date": "2026-06-26", "time": "15:00", "home": "SEN", "away": "IRQ", "city": "토론토", "stadium": "BMO 필드", "flag": "🇨🇦"},
  {"id": "M63", "number": 63, "stage": "group", "group": "G", "matchday": 3, "date": "2026-06-26", "time": "23:00", "home": "EGY", "away": "IRN", "city": "시애틀", "stadium": "루멘 필드", "flag": "🇺🇸"},
  {"id": "M64", "number": 64, "stage": "group", "group": "G", "matchday": 3, "date": "2026-06-26", "time": "23:00", "home": "NZL", "away": "BEL", "city": "밴쿠버", "stadium": "BC 플레이스", "flag": "🇨🇦"},
  {"id": "M65", "number": 65, "stage": "group", "group": "H", "matchday": 3, "date": "2026-06-26", "time": "20:00", "home": "CPV", "away": "KSA", "city": "휴스턴", "stadium": "NRG 스타디움", "flag": "🇺🇸"},
  {"id": "M66", "number": 66, "stage": "group", "group": "H", "matchday": 3, "date": "2026-06-26", "time": "20:00", "home": "URU", "away": "ESP", "city": "과달라하라", "stadium": "에스타디오 아크론", "flag": "🇲🇽"},
  {"id": "M67", "number": 67, "stage": "group", "group": "L", "matchday": 3, "date": "2026-06-27", "time": "17:00", "home": "PAN", "away": "ENG", "city": "뉴욕/뉴저지", "stadium": "메트라이프 스타디움", "flag": "🇺🇸"},
  {"id": "M68", "number": 68, "stage": "group", "group": "L", "matchday": 3, "date": "2026-06-27", "time": "17:00", "home": "CRO", "away": "GHA", "city": "필라델피아", "stadium": "링컨 파이낸셜 필드", "flag": "🇺🇸"},
  {"id": "M69", "number": 69, "stage": "group", "group": "J", "matchday": 3, "date": "2026-06-27", "time": "22:00", "home": "ALG", "away": "AUT", "city": "캔자스시티", "stadium": "애로헤드 스타디움", "flag": "🇺🇸"},
  {"id": "M70", "number": 70, "stage": "group", "group": "J", "matchday": 3, "date": "2026-06-27", "time": "22:00", "home": "JOR", "away": "ARG", "city": "댈러스", "stadium": "AT&T 스타디움", "flag": "🇺🇸"},
  {"id": "M71", "number": 71, "stage": "group", "group": "K", "matchday": 3, "date": "2026-06-27", "time": "19:30", "home": "COL", "away": "POR", "city": "마이애미", "stadium": "하드록 스타디움", "flag": "🇺🇸"},
  {"id": "M72", "number": 72, "stage": "group", "group": "K", "matchday": 3, "date": "2026-06-27", "time": "19:30", "home": "COD", "away": "UZB", "city": "애틀랜타", "stadium": "메르세데스-벤츠 스타디움", "flag": "🇺🇸"},
  {"id": "M73", "number": 73, "stage": "r32", "date": "2026-06-28", "time": "15:00", "homeLabel": "A조 2위", "awayLabel": "B조 2위", "city": "로스앤젤레스", "stadium": "소파이 스타디움", "flag": "🇺🇸"},
  {"id": "M74", "number": 74, "stage": "r32", "date": "2026-06-29", "time": "16:30", "homeLabel": "E조 1위", "awayLabel": "3위 (ABCDF)", "city": "보스턴", "stadium": "질레트 스타디움", "flag": "🇺🇸"},
  {"id": "M75", "number": 75, "stage": "r32", "date": "2026-06-29", "time": "21:00", "homeLabel": "F조 1위", "awayLabel": "C조 2위", "city": "몬테레이", "stadium": "에스타디오 BBVA", "flag": "🇲🇽"},
  {"id": "M76", "number": 76, "stage": "r32", "date": "2026-06-29", "time": "13:00", "homeLabel": "C조 1위", "awayLabel": "F조 2위", "city": "휴스턴", "stadium": "NRG 스타디움", "flag": "🇺🇸"},
  {"id": "M77", "number": 77, "stage": "r32", "date": "2026-06-30", "time": "17:00", "homeLabel": "I조 1위", "awayLabel": "3위 (CDFGH)", "city": "뉴욕/뉴저지", "stadium": "메트라이프 스타디움", "flag": "🇺🇸"},
  {"id": "M78", "number": 78, "stage": "r32", "date": "2026-06-30", "time": "13:00", "homeLabel": "E조 2위", "awayLabel": "I조 2위", "city": "댈러스", "stadium": "AT&T 스타디움", "flag": "🇺🇸"},
  {"id": "M79", "number": 79, "stage": "r32", "date": "2026-06-30", "time": "21:00", "homeLabel": "A조 1위", "awayLabel": "3위 (CEFHI)", "city": "멕시코시티", "stadium": "에스타디오 아즈테카", "flag": "🇲🇽"},
  {"id": "M80", "number": 80, "stage": "r32", "date": "2026-07-01", "time": "12:00", "homeLabel": "L조 1위", "awayLabel": "3위 (EHIJK)", "city": "애틀랜타", "stadium": "메르세데스-벤츠 스타디움", "flag": "🇺🇸"},
  {"id": "M81", "number": 81, "stage": "r32", "date": "2026-07-01", "time": "20:00", "homeLabel": "D조 1위", "awayLabel": "3위 (BEFIJ)", "city": "샌프란시스코 베이", "stadium": "리바이스 스타디움", "flag": "🇺🇸"},
  {"id": "M82", "number": 82, "stage": "r32", "date": "2026-07-01", "time": "16:00", "homeLabel": "G조 1위", "awayLabel": "3위 (AEHIJ)", "city": "시애틀", "stadium": "루멘 필드", "flag": "🇺🇸"},
  {"id": "M83", "number": 83, "stage": "r32", "date": "2026-07-02", "time": "19:00", "homeLabel": "K조 2위", "awayLabel": "L조 2위", "city": "토론토", "stadium": "BMO 필드", "flag": "🇨🇦"},
  {"id": "M84", "number": 84, "stage": "r32", "date": "2026-07-02", "time": "15:00", "homeLabel": "H조 1위", "awayLabel": "J조 2위", "city": "로스앤젤레스", "stadium": "소파이 스타디움", "flag": "🇺🇸"},
  {"id": "M85", "number": 85, "stage": "r32", "date": "2026-07-02", "time": "23:00", "homeLabel": "B조 1위", "awayLabel": "3위 (EFGIJ)", "city": "밴쿠버", "stadium": "BC 플레이스", "flag": "🇨🇦"},
  {"id": "M86", "number": 86, "stage": "r32", "date": "2026-07-03", "time": "18:00", "homeLabel": "J조 1위", "awayLabel": "H조 2위", "city": "마이애미", "stadium": "하드록 스타디움", "flag": "🇺🇸"},
  {"id": "M87", "number": 87, "stage": "r32", "date": "2026-07-03", "time": "21:30", "homeLabel": "K조 1위", "awayLabel": "3위 (DEIJL)", "city": "캔자스시티", "stadium": "애로헤드 스타디움", "flag": "🇺🇸"},
  {"id": "M88", "number": 88, "stage": "r32", "date": "2026-07-03", "time": "14:00", "homeLabel": "D조 2위", "awayLabel": "G조 2위", "city": "댈러스", "stadium": "AT&T 스타디움", "flag": "🇺🇸"},
  {"id": "M89", "number": 89, "stage": "r16", "date": "2026-07-04", "time": "17:00", "homeLabel": "74경기 승자", "awayLabel": "77경기 승자", "city": "필라델피아", "stadium": "링컨 파이낸셜 필드", "flag": "🇺🇸"},
  {"id": "M90", "number": 90, "stage": "r16", "date": "2026-07-04", "time": "13:00", "homeLabel": "73경기 승자", "awayLabel": "75경기 승자", "city": "휴스턴", "stadium": "NRG 스타디움", "flag": "🇺🇸"},
  {"id": "M91", "number": 91, "stage": "r16", "date": "2026-07-05", "time": "16:00", "homeLabel": "76경기 승자", "awayLabel": "78경기 승자", "city": "뉴욕/뉴저지", "stadium": "메트라이프 스타디움", "flag": "🇺🇸"},
  {"id": "M92", "number": 92, "stage": "r16", "date": "2026-07-05", "time": "20:00", "homeLabel": "79경기 승자", "awayLabel": "80경기 승자", "city": "멕시코시티", "stadium": "에스타디오 아즈테카", "flag": "🇲🇽"},
  {"id": "M93", "number": 93, "stage": "r16", "date": "2026-07-06", "time": "15:00", "homeLabel": "83경기 승자", "awayLabel": "84경기 승자", "city": "댈러스", "stadium": "AT&T 스타디움", "flag": "🇺🇸"},
  {"id": "M94", "number": 94, "stage": "r16", "date": "2026-07-06", "time": "20:00", "homeLabel": "81경기 승자", "awayLabel": "82경기 승자", "city": "시애틀", "stadium": "루멘 필드", "flag": "🇺🇸"},
  {"id": "M95", "number": 95, "stage": "r16", "date": "2026-07-07", "time": "12:00", "homeLabel": "86경기 승자", "awayLabel": "88경기 승자", "city": "애틀랜타", "stadium": "메르세데스-벤츠 스타디움", "flag": "🇺🇸"},
  {"id": "M96", "number": 96, "stage": "r16", "date": "2026-07-07", "time": "16:00", "homeLabel": "85경기 승자", "awayLabel": "87경기 승자", "city": "밴쿠버", "stadium": "BC 플레이스", "flag": "🇨🇦"},
  {"id": "M97", "number": 97, "stage": "qf", "date": "2026-07-09", "time": "16:00", "homeLabel": "89경기 승자", "awayLabel": "90경기 승자", "city": "보스턴", "stadium": "질레트 스타디움", "flag": "🇺🇸"},
  {"id": "M98", "number": 98, "stage": "qf", "date": "2026-07-10", "time": "15:00", "homeLabel": "93경기 승자", "awayLabel": "94경기 승자", "city": "로스앤젤레스", "stadium": "소파이 스타디움", "flag": "🇺🇸"},
  {"id": "M99", "number": 99, "stage": "qf", "date": "2026-07-11", "time": "17:00", "homeLabel": "91경기 승자", "awayLabel": "92경기 승자", "city": "마이애미", "stadium": "하드록 스타디움", "flag": "🇺🇸"},
  {"id": "M100", "number": 100, "stage": "qf", "date": "2026-07-11", "time": "21:00", "homeLabel": "95경기 승자", "awayLabel": "96경기 승자", "city": "캔자스시티", "stadium": "애로헤드 스타디움", "flag": "🇺🇸"},
  {"id": "M101", "number": 101, "stage": "sf", "date": "2026-07-14", "time": "15:00", "homeLabel": "97경기 승자", "awayLabel": "98경기 승자", "city": "댈러스", "stadium": "AT&T 스타디움", "flag": "🇺🇸"},
  {"id": "M102", "number": 102, "stage": "sf", "date": "2026-07-15", "time": "15:00", "homeLabel": "99경기 승자", "awayLabel": "100경기 승자", "city": "애틀랜타", "stadium": "메르세데스-벤츠 스타디움", "flag": "🇺🇸"},
  {"id": "M103", "number": 103, "stage": "bronze", "date": "2026-07-18", "time": "17:00", "homeLabel": "101경기 패자", "awayLabel": "102경기 패자", "city": "마이애미", "stadium": "하드록 스타디움", "flag": "🇺🇸"},
  {"id": "M104", "number": 104, "stage": "final", "date": "2026-07-19", "time": "15:00", "homeLabel": "101경기 승자", "awayLabel": "102경기 승자", "city": "뉴욕/뉴저지", "stadium": "메트라이프 스타디움", "flag": "🇺🇸"}
];
