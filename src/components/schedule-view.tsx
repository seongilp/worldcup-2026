"use client";

import { useMemo, useState } from "react";
import { CalendarDays } from "lucide-react";
import { MatchCard } from "./match-card";
import { GROUP_IDS } from "@/lib/teams";
import { STAGE_LABEL, STAGE_ORDER, TODAY } from "@/lib/fixtures";
import { toKST } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { ScheduleMatch } from "@/lib/schedule";
import type { GroupId, Stage } from "@/lib/types";

/** Group matches by their Korea-time date, ascending. */
function groupByKstDate(
  items: ScheduleMatch[],
): Array<[string, string, ScheduleMatch[]]> {
  const map = new Map<string, { label: string; items: ScheduleMatch[] }>();
  for (const m of items) {
    const k = toKST(m.date, m.time);
    const entry = map.get(k.dateKey) ?? { label: k.label, items: [] };
    entry.items.push(m);
    map.set(k.dateKey, entry);
  }
  return [...map.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, v]) => [key, v.label, v.items]);
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors",
        active
          ? "bg-foreground text-background"
          : "bg-card text-muted-foreground shadow-card hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}

export function ScheduleView({ matches }: { matches: ScheduleMatch[] }) {
  const [stage, setStage] = useState<Stage | "all">("all");
  const [group, setGroup] = useState<GroupId | "all">("all");

  const stagesPresent = useMemo(
    () => STAGE_ORDER.filter((s) => matches.some((m) => m.stage === s)),
    [matches],
  );

  const filtered = useMemo(
    () =>
      matches.filter((m) => {
        if (stage !== "all" && m.stage !== stage) return false;
        if (group !== "all" && m.group !== group) return false;
        return true;
      }),
    [matches, stage, group],
  );

  const byDate = useMemo(() => groupByKstDate(filtered), [filtered]);
  const showGroupFilter = stage === "all" || stage === "group";

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Chip active={stage === "all"} onClick={() => setStage("all")}>
            전체
          </Chip>
          {stagesPresent.map((s) => (
            <Chip key={s} active={stage === s} onClick={() => setStage(s)}>
              {STAGE_LABEL[s]}
            </Chip>
          ))}
        </div>

        {showGroupFilter && (
          <div className="flex flex-wrap items-center gap-1.5">
            <Chip active={group === "all"} onClick={() => setGroup("all")}>
              모든 조
            </Chip>
            {GROUP_IDS.map((g) => (
              <Chip key={g} active={group === g} onClick={() => setGroup(g)}>
                {g}
              </Chip>
            ))}
          </div>
        )}
      </div>

      {byDate.length === 0 ? (
        <div className="rounded-2xl border border-dashed py-16 text-center text-sm text-muted-foreground">
          해당하는 경기가 없습니다.
        </div>
      ) : (
        <div className="space-y-8">
          {byDate.map(([date, label, dayMatches]) => {
            const isToday = date === TODAY;
            return (
              <section key={date} className="animate-rise">
                <div className="mb-3.5 flex items-center gap-2">
                  <CalendarDays
                    className={cn(
                      "size-[18px]",
                      isToday ? "text-primary" : "text-muted-foreground",
                    )}
                  />
                  <h3 className="text-[16px] font-bold tracking-tight">
                    {label}
                  </h3>
                  {isToday && (
                    <span className="rounded-full bg-primary px-2 py-0.5 text-[11px] font-semibold text-primary-foreground">
                      오늘
                    </span>
                  )}
                  <span className="text-[13px] text-muted-foreground">
                    {dayMatches.length}경기
                  </span>
                </div>
                <div className="grid gap-3 lg:grid-cols-2">
                  {dayMatches.map((m) => (
                    <MatchCard key={m.id} match={m} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
