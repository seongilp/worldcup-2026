"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScheduleView } from "./schedule-view";
import type { ScheduleMatch } from "@/lib/schedule";

const TRIGGER_CLASS =
  "h-9 rounded-lg px-4 text-[14px] font-semibold text-muted-foreground data-active:bg-card data-active:text-foreground data-active:shadow-card dark:data-active:bg-card dark:data-active:text-foreground";

export function Dashboard({
  matches,
  groups,
  bracket,
}: {
  matches: ScheduleMatch[];
  groups: React.ReactNode;
  bracket: React.ReactNode;
}) {
  return (
    <Tabs defaultValue="schedule" className="gap-7">
      <TabsList className="h-auto w-full justify-start gap-1 rounded-xl bg-muted p-1 sm:w-fit">
        <TabsTrigger value="schedule" className={TRIGGER_CLASS}>
          일정 · 결과
        </TabsTrigger>
        <TabsTrigger value="groups" className={TRIGGER_CLASS}>
          조별 순위
        </TabsTrigger>
        <TabsTrigger value="knockout" className={TRIGGER_CLASS}>
          토너먼트
        </TabsTrigger>
      </TabsList>

      <TabsContent value="schedule">
        <ScheduleView matches={matches} />
      </TabsContent>
      <TabsContent value="groups">{groups}</TabsContent>
      <TabsContent value="knockout">{bracket}</TabsContent>
    </Tabs>
  );
}
