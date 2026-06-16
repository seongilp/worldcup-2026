import { SiteHeader } from "@/components/site-header";
import { Dashboard } from "@/components/dashboard";
import { GroupsGrid } from "@/components/groups-grid";
import { KnockoutBracket } from "@/components/knockout-bracket";
import { ALL_MATCHES, TODAY_MATCHES } from "@/lib/fixtures";

export default function Home() {
  return (
    <main className="relative flex-1">
      <SiteHeader todayCount={TODAY_MATCHES.length} />

      <div className="mx-auto w-full max-w-5xl px-5 py-9">
        <Dashboard
          matches={ALL_MATCHES}
          groups={<GroupsGrid />}
          bracket={<KnockoutBracket />}
        />
      </div>

      <footer className="border-t border-border">
        <div className="mx-auto w-full max-w-5xl px-5 py-8 text-[13px] text-muted-foreground">
          <p className="text-[15px] font-bold tracking-tight text-foreground">
            월드컵 2026
          </p>
          <p className="mt-2 max-w-xl leading-relaxed">
            조 편성·날짜·경기 시간(현지/ET)·개최지는 FIFA 공식 매치 스케줄
            기준이며, 경기 결과·순위는 네이버 스포츠 데이터를 참고했습니다.
          </p>
        </div>
      </footer>
    </main>
  );
}
