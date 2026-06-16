import { GROUP_MATCHES } from "./fixtures";
import { getResult } from "./results";
import { teamsByGroup } from "./teams";
import type { GroupId, Team } from "./types";

export interface StandingRow {
  team: Team;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  gf: number;
  ga: number;
  gd: number;
  points: number;
}

/** Group table computed from finished (simulated) results. */
export function standingsForGroup(group: GroupId): StandingRow[] {
  const rows = new Map<string, StandingRow>();
  for (const team of teamsByGroup(group)) {
    rows.set(team.code, {
      team,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    });
  }

  for (const m of GROUP_MATCHES) {
    if (m.group !== group || !m.home || !m.away) continue;
    const r = getResult(m.id);
    if (!r) continue;
    const home = rows.get(m.home);
    const away = rows.get(m.away);
    if (!home || !away) continue;

    home.played++;
    away.played++;
    home.gf += r.home;
    home.ga += r.away;
    away.gf += r.away;
    away.ga += r.home;

    if (r.home > r.away) {
      home.won++;
      away.lost++;
      home.points += 3;
    } else if (r.home < r.away) {
      away.won++;
      home.lost++;
      away.points += 3;
    } else {
      home.drawn++;
      away.drawn++;
      home.points++;
      away.points++;
    }
    home.gd = home.gf - home.ga;
    away.gd = away.gf - away.ga;
  }

  return [...rows.values()].sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.gd !== a.gd) return b.gd - a.gd;
    if (b.gf !== a.gf) return b.gf - a.gf;
    return a.team.name.localeCompare(b.team.name, "ko");
  });
}
