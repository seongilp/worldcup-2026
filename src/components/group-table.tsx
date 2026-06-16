import { standingsForGroup } from "@/lib/standings";
import { cn } from "@/lib/utils";
import type { GroupId } from "@/lib/types";

export function GroupTable({ group }: { group: GroupId }) {
  const rows = standingsForGroup(group);
  const anyPlayed = rows.some((r) => r.played > 0);

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
      <div className="flex items-center gap-2 px-4 py-3.5">
        <span className="grid size-6 place-items-center rounded-lg bg-primary text-[13px] font-bold text-primary-foreground">
          {group}
        </span>
        <h3 className="text-[15px] font-semibold tracking-tight">{group}조</h3>
        {anyPlayed && (
          <span className="ml-auto rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary">
            {rows.reduce((s, r) => s + r.played, 0) / 2}경기 종료
          </span>
        )}
      </div>

      <table className="w-full text-[14px]">
        <thead>
          <tr className="text-[12px] text-muted-foreground">
            <th className="py-2 pl-4 pr-2 text-left font-medium">팀</th>
            <th className="w-8 px-1 text-center font-medium">경기</th>
            <th className="w-7 px-1 text-center font-medium">승</th>
            <th className="w-7 px-1 text-center font-medium">무</th>
            <th className="w-7 px-1 text-center font-medium">패</th>
            <th className="w-9 px-1 text-center font-medium">득실</th>
            <th className="w-10 px-1 pr-4 text-center font-medium">승점</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const advancing = i < 2;
            return (
              <tr
                key={row.team.code}
                className="border-t border-border/60 transition-colors hover:bg-muted/50"
              >
                <td className="py-3 pl-4 pr-2">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={cn(
                        "grid size-5 shrink-0 place-items-center rounded-md text-[11px] font-semibold tabular",
                        advancing && anyPlayed
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground",
                      )}
                    >
                      {i + 1}
                    </span>
                    <span className="text-[18px] leading-none" aria-hidden>
                      {row.team.flag}
                    </span>
                    <span className="font-medium tracking-tight">
                      {row.team.name}
                    </span>
                  </div>
                </td>
                <td className="px-1 text-center tabular text-muted-foreground">
                  {row.played}
                </td>
                <td className="px-1 text-center tabular">{row.won}</td>
                <td className="px-1 text-center tabular">{row.drawn}</td>
                <td className="px-1 text-center tabular">{row.lost}</td>
                <td className="px-1 text-center tabular text-muted-foreground">
                  {row.gd > 0 ? `+${row.gd}` : row.gd}
                </td>
                <td className="px-1 pr-4 text-center font-bold tabular">
                  {row.points}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
