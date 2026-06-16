import { CalendarClock } from "lucide-react";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-2xl font-bold tracking-tight tabular text-foreground sm:text-[28px]">
        {value}
      </span>
      <span className="text-[13px] text-muted-foreground">{label}</span>
    </div>
  );
}

export function SiteHeader({ todayCount }: { todayCount: number }) {
  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto w-full max-w-5xl px-5 pb-9 pt-12 sm:pt-16">
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-semibold text-primary">
            FIFA World Cup 2026
          </span>
          <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
            공식 일정
          </span>
        </div>

        <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-[34px] font-bold leading-tight tracking-[-0.02em] text-foreground sm:text-[44px]">
              월드컵 경기 일정
            </h1>
            <p className="mt-2.5 max-w-md text-balance text-[15px] leading-relaxed text-muted-foreground">
              미국·캐나다·멕시코 공동 개최, 사상 첫 48개국 본선. FIFA 공식
              매치 스케줄 기준 104경기를 한눈에.
            </p>
          </div>

          {todayCount > 0 && (
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-primary/10 px-3.5 py-2 text-[14px] font-semibold text-primary">
              <CalendarClock className="size-4" />
              오늘 {todayCount}경기
            </div>
          )}
        </div>

        <div className="mt-9 grid grid-cols-3 gap-y-6 sm:flex sm:gap-12">
          <Stat value="48" label="참가국" />
          <Stat value="104" label="경기" />
          <Stat value="12" label="조" />
          <Stat value="16" label="개최 도시" />
          <Stat value="6.11–7.19" label="대회 기간" />
        </div>
      </div>
    </header>
  );
}
