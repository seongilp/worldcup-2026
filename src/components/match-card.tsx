import { MapPin } from "lucide-react";
import { getTeam } from "@/lib/teams";
import { toKST, toVenueLocal } from "@/lib/format";
import { matchStatus, STAGE_LABEL } from "@/lib/fixtures";
import { getResult } from "@/lib/results";
import { cn } from "@/lib/utils";
import type { ScheduleMatch } from "@/lib/schedule";

function stageTag(m: ScheduleMatch): string {
  if (m.stage === "group") return `${m.group}조 · ${m.matchday}차전`;
  return STAGE_LABEL[m.stage];
}

function Side({
  code,
  label,
  dim,
  align = "left",
}: {
  code?: string;
  label?: string;
  dim?: boolean;
  align?: "left" | "right";
}) {
  const team = code ? getTeam(code) : undefined;
  return (
    <div
      className={cn(
        "flex items-center gap-2.5",
        align === "right" && "flex-row-reverse text-right",
      )}
    >
      {team ? (
        <>
          <span className="text-[22px] leading-none" aria-hidden>
            {team.flag}
          </span>
          <span
            className={cn(
              "truncate text-[15px] font-semibold tracking-tight",
              dim && "text-muted-foreground",
            )}
          >
            {team.name}
          </span>
        </>
      ) : (
        <span className="truncate text-[14px] font-medium text-muted-foreground">
          {label}
        </span>
      )}
    </div>
  );
}

export function MatchCard({ match }: { match: ScheduleMatch }) {
  const status = matchStatus(match);
  const kst = toKST(match.date, match.time);
  const local = toVenueLocal(match.date, match.time, match.city);
  const result = getResult(match.id);
  const homeWin = result ? result.home > result.away : false;
  const awayWin = result ? result.away > result.home : false;
  const isToday = status === "today";

  return (
    <article
      className={cn(
        "group rounded-2xl border bg-card p-4 transition-all duration-200",
        "hover:-translate-y-0.5 hover:shadow-card-hover",
        isToday
          ? "card-glow border-primary/50"
          : "border-border shadow-card",
      )}
    >
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="text-[12px] font-medium text-muted-foreground">
          {stageTag(match)}
        </span>
        {status === "finished" ? (
          <span className="rounded-full bg-muted px-2.5 py-1 text-[12px] font-medium text-muted-foreground">
            경기 종료
          </span>
        ) : isToday ? (
          <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[12px] font-semibold text-primary">
            오늘 경기
          </span>
        ) : (
          <span className="text-[12px] font-medium text-muted-foreground">
            #{match.number}
          </span>
        )}
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <Side code={match.home} label={match.homeLabel} dim={result ? !homeWin : false} />

        <div className="flex min-w-[72px] flex-col items-center leading-tight">
          {result ? (
            <div className="flex items-center gap-2 text-[24px] font-bold tabular tracking-tight">
              <span className={cn(!homeWin && "text-muted-foreground")}>
                {result.home}
              </span>
              <span className="text-[16px] text-muted-foreground/50">:</span>
              <span className={cn(!awayWin && "text-muted-foreground")}>
                {result.away}
              </span>
            </div>
          ) : (
            <>
              <span className="text-[17px] font-bold tabular tracking-tight">
                {kst.time}
              </span>
              <span className="text-[11px] text-muted-foreground">한국시간</span>
            </>
          )}
        </div>

        <Side
          code={match.away}
          label={match.awayLabel}
          dim={result ? !awayWin : false}
          align="right"
        />
      </div>

      <div className="mt-3.5 flex items-center justify-between gap-2 border-t border-border pt-3 text-[12px] text-muted-foreground">
        <span className="flex min-w-0 items-center gap-1.5">
          <MapPin className="size-3.5 shrink-0" />
          <span className="truncate">
            {match.stadium} · {match.city} {match.flag}
          </span>
        </span>
        <span className="shrink-0 tabular">
          현지 {local.label} {local.time}
        </span>
      </div>
    </article>
  );
}
