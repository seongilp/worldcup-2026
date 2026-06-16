import { GROUP_IDS } from "@/lib/teams";
import { GroupTable } from "./group-table";

export function GroupsGrid() {
  return (
    <div className="space-y-5">
      <p className="text-[13px] leading-relaxed text-muted-foreground">
        48개국이 12개 조로 나뉘어 조별리그를 치릅니다. 각 조 1·2위와 각 조
        3위 중 상위 8개 팀, 총 32개 팀이 32강에 진출합니다. 순위는{" "}
        <span className="text-foreground">종료된 경기 결과(네이버 스포츠
        기준)</span>로 실시간 계산됩니다.
      </p>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {GROUP_IDS.map((g) => (
          <GroupTable key={g} group={g} />
        ))}
      </div>
    </div>
  );
}
