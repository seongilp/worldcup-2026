import { Trophy } from "lucide-react";
import { KNOCKOUT_MATCHES, STAGE_LABEL } from "@/lib/fixtures";
import { toKST } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { ScheduleMatch } from "@/lib/schedule";
import type { Stage } from "@/lib/types";

const COLUMNS: Stage[] = ["r32", "r16", "qf", "sf", "final"];

function Slot({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-2 px-3.5 py-2.5">
      <span className="grid size-5 shrink-0 place-items-center rounded-md bg-muted text-[11px] text-muted-foreground">
        ?
      </span>
      <span className="truncate text-[13px] font-medium text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

function BracketCard({ m, final }: { m: ScheduleMatch; final?: boolean }) {
  const kst = toKST(m.date, m.time);
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border bg-card shadow-card",
        final ? "border-primary/30 ring-1 ring-primary/15" : "border-border",
      )}
    >
      <Slot label={m.homeLabel} />
      <div className="h-px bg-border" />
      <Slot label={m.awayLabel} />
      <div className="border-t border-border bg-muted/40 px-3.5 py-2 text-[11px] text-muted-foreground">
        {kst.label} · {kst.time} (KST) · {m.city}
      </div>
    </div>
  );
}

export function KnockoutBracket() {
  const bronze = KNOCKOUT_MATCHES.find((m) => m.stage === "bronze");

  return (
    <div className="space-y-5">
      <p className="text-[14px] leading-relaxed text-muted-foreground">
        조별리그 결과에 따라 32강 대진이 확정됩니다. 결승전은 7월 19일{" "}
        <span className="font-medium text-foreground">
          뉴욕/뉴저지 메트라이프 스타디움
        </span>
        에서 열립니다.
      </p>

      <div className="overflow-x-auto pb-2">
        <div className="flex min-w-max gap-4">
          {COLUMNS.map((stage) => {
            const ms = KNOCKOUT_MATCHES.filter((m) => m.stage === stage);
            const isFinal = stage === "final";
            return (
              <div key={stage} className="flex w-56 shrink-0 flex-col gap-3">
                <div className="flex items-center gap-1.5 px-1">
                  {isFinal && <Trophy className="size-4 text-primary" />}
                  <h3
                    className={cn(
                      "text-[15px] font-bold tracking-tight",
                      isFinal && "text-primary",
                    )}
                  >
                    {STAGE_LABEL[stage]}
                  </h3>
                  <span className="text-[13px] text-muted-foreground">
                    {ms.length}경기
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-around gap-2.5">
                  {ms.map((m) => (
                    <BracketCard key={m.id} m={m} final={isFinal} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {bronze && (
        <div className="max-w-sm">
          <div className="mb-2 flex items-center gap-1.5 px-1">
            <h3 className="text-[15px] font-bold tracking-tight">
              {STAGE_LABEL.bronze}
            </h3>
          </div>
          <BracketCard m={bronze} />
        </div>
      )}
    </div>
  );
}
