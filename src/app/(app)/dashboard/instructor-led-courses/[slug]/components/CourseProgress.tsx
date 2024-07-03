import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { InfoIcon } from "lucide-react";

export default function CourseProgress() {
  return (
    <>
      <Card className="px-4 py-5">
        <CardContent className="p-0">
          <CardTitle className="text-base font-bold md:text-lg mb-2">
            Your Progess
          </CardTitle>
          <Tabs defaultValue="badges-earned" className="">
            <TabsList className="rounded-[32px] flex-wrap h-fit mb-4">
              <TabsTrigger className="rounded-[32px]" value="streak-count">
                Streak Count
              </TabsTrigger>
              <TabsTrigger className="rounded-[32px]" value="your-stats">
                Your Stats
              </TabsTrigger>
              <TabsTrigger className="rounded-[32px]" value="badges-earned">
                Badges Earned
              </TabsTrigger>
            </TabsList>
            <TabsContent value="streak-count">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="your-stats">
              Change your password here.
            </TabsContent>
            <TabsContent value="badges-earned">
              <BadgesEarned />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
}

function BadgesEarned() {
  const data = [
    {
      name: "Data Discovery",
      status: "COMPLETED",
    },
    {
      name: "Data Discovery",
      status: "INCOMPLETED",
    },
    {
      name: "Data Discovery",
      status: "INCOMPLETED",
    },
    {
      name: "Data Discovery",
      status: "INCOMPLETED",
    },
    {
      name: "Data Discovery",
      status: "INCOMPLETED",
    },
    {
      name: "Data Discovery",
      status: "INCOMPLETED",
    },
  ];
  return (
    <Card className="p-4 max-w-[400px]">
      <CardContent className="p-0 grid grid-cols-2 sm:grid-cols-3 gap-1.5">
        {data.map((dt, i) => (
          <div
            key={i}
            className={cn(
              "aspect-[114.75/113.25]  rounded-lg border   col-span-1 flex flex-col items-center justify-center gap-1.5 relative",
              dt.status === "COMPLETED"
                ? "border-pri"
                : "border-neutral-200 dark:border-neutral-800"
            )}
          >
            <span className="absolute top-2 right-2">
              <InfoIcon
                size={8.5}
                className={cn(dt.status === "COMPLETED" ? "" : "opacity-50")}
              />
            </span>
            {dt.status === "COMPLETED" ? (
              <Icons.badge />
            ) : (
              <Icons.badgeDisabled />
            )}
            <p>Data Discovery</p>
            <span
              className={cn(
                " px-1 rounded text-[0.625rem] font-bold",
                dt.status === "COMPLETED"
                  ? "text-green-500 bg-green-50"
                  : "text-neutral-500  bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-300"
              )}
            >
              {dt.status}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
