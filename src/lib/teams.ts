import type { GroupId, Team } from "./types";

/**
 * Official 2026 FIFA World Cup group draw (48 teams, groups A–L).
 * Source: FIFA published match schedule (FWC26-Match-Schedule).
 */
export const TEAMS: Team[] = [
  // Group A
  { code: "MEX", name: "멕시코", flag: "🇲🇽", group: "A" },
  { code: "RSA", name: "남아프리카공화국", flag: "🇿🇦", group: "A" },
  { code: "KOR", name: "대한민국", flag: "🇰🇷", group: "A" },
  { code: "CZE", name: "체코", flag: "🇨🇿", group: "A" },
  // Group B
  { code: "CAN", name: "캐나다", flag: "🇨🇦", group: "B" },
  { code: "BIH", name: "보스니아 헤르체고비나", flag: "🇧🇦", group: "B" },
  { code: "QAT", name: "카타르", flag: "🇶🇦", group: "B" },
  { code: "SUI", name: "스위스", flag: "🇨🇭", group: "B" },
  // Group C
  { code: "BRA", name: "브라질", flag: "🇧🇷", group: "C" },
  { code: "MAR", name: "모로코", flag: "🇲🇦", group: "C" },
  { code: "HAI", name: "아이티", flag: "🇭🇹", group: "C" },
  { code: "SCO", name: "스코틀랜드", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", group: "C" },
  // Group D
  { code: "USA", name: "미국", flag: "🇺🇸", group: "D" },
  { code: "PAR", name: "파라과이", flag: "🇵🇾", group: "D" },
  { code: "AUS", name: "호주", flag: "🇦🇺", group: "D" },
  { code: "TUR", name: "튀르키예", flag: "🇹🇷", group: "D" },
  // Group E
  { code: "GER", name: "독일", flag: "🇩🇪", group: "E" },
  { code: "CUW", name: "쿠라소", flag: "🇨🇼", group: "E" },
  { code: "CIV", name: "코트디부아르", flag: "🇨🇮", group: "E" },
  { code: "ECU", name: "에콰도르", flag: "🇪🇨", group: "E" },
  // Group F
  { code: "NED", name: "네덜란드", flag: "🇳🇱", group: "F" },
  { code: "JPN", name: "일본", flag: "🇯🇵", group: "F" },
  { code: "SWE", name: "스웨덴", flag: "🇸🇪", group: "F" },
  { code: "TUN", name: "튀니지", flag: "🇹🇳", group: "F" },
  // Group G
  { code: "BEL", name: "벨기에", flag: "🇧🇪", group: "G" },
  { code: "EGY", name: "이집트", flag: "🇪🇬", group: "G" },
  { code: "IRN", name: "이란", flag: "🇮🇷", group: "G" },
  { code: "NZL", name: "뉴질랜드", flag: "🇳🇿", group: "G" },
  // Group H
  { code: "ESP", name: "스페인", flag: "🇪🇸", group: "H" },
  { code: "CPV", name: "카보베르데", flag: "🇨🇻", group: "H" },
  { code: "KSA", name: "사우디아라비아", flag: "🇸🇦", group: "H" },
  { code: "URU", name: "우루과이", flag: "🇺🇾", group: "H" },
  // Group I
  { code: "FRA", name: "프랑스", flag: "🇫🇷", group: "I" },
  { code: "SEN", name: "세네갈", flag: "🇸🇳", group: "I" },
  { code: "IRQ", name: "이라크", flag: "🇮🇶", group: "I" },
  { code: "NOR", name: "노르웨이", flag: "🇳🇴", group: "I" },
  // Group J
  { code: "ARG", name: "아르헨티나", flag: "🇦🇷", group: "J" },
  { code: "ALG", name: "알제리", flag: "🇩🇿", group: "J" },
  { code: "AUT", name: "오스트리아", flag: "🇦🇹", group: "J" },
  { code: "JOR", name: "요르단", flag: "🇯🇴", group: "J" },
  // Group K
  { code: "POR", name: "포르투갈", flag: "🇵🇹", group: "K" },
  { code: "COD", name: "콩고민주공화국", flag: "🇨🇩", group: "K" },
  { code: "UZB", name: "우즈베키스탄", flag: "🇺🇿", group: "K" },
  { code: "COL", name: "콜롬비아", flag: "🇨🇴", group: "K" },
  // Group L
  { code: "ENG", name: "잉글랜드", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", group: "L" },
  { code: "CRO", name: "크로아티아", flag: "🇭🇷", group: "L" },
  { code: "GHA", name: "가나", flag: "🇬🇭", group: "L" },
  { code: "PAN", name: "파나마", flag: "🇵🇦", group: "L" },
];

export const GROUP_IDS: GroupId[] = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
];

const TEAM_MAP = new Map(TEAMS.map((t) => [t.code, t]));

export function getTeam(code: string): Team | undefined {
  return TEAM_MAP.get(code);
}

export function teamsByGroup(group: GroupId): Team[] {
  return TEAMS.filter((t) => t.group === group);
}
