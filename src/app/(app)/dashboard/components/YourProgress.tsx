import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Icons } from "@/components/ui/icons";

export default function YourProgress() {
  return (
    <div className="mt-6">
      <Card>
        <CardHeader className="flex flex-col gap-4 lg:flex-row lg:justify-between">
          <div>
            <CardTitle>Your Progress</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="instructor-led">
            <TabsList className="rounded-[32px]">
              <TabsTrigger className="rounded-[32px]" value="instructor-led">
                Skreak count
              </TabsTrigger>
              <TabsTrigger className="rounded-[32px]" value="self-paced">
                Your stats
              </TabsTrigger>
              <TabsTrigger className="rounded-[32px]" value="badges-earned">
                Badges Earned
              </TabsTrigger>
            </TabsList>
            <TabsContent value="instructor-led">
              <Content />
            </TabsContent>
            <TabsContent value="self-paced">fffjjkke</TabsContent>
            <TabsContent value="badges-earned">fffke</TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

function Content() {
  const dateData: { day: string; date: number; completed: boolean }[] = [
    {
      day: "Sun",
      date: 13,
      completed: true,
    },
    {
      day: "Mon",
      date: 14,
      completed: false,
    },
    {
      day: "Tue",
      date: 15,
      completed: false,
    },
    {
      day: "Wed",
      date: 16,
      completed: false,
    },
    {
      day: "Thu",
      date: 17,
      completed: false,
    },
    {
      day: "Fri",
      date: 18,
      completed: false,
    },
    {
      day: "Sat",
      date: 19,
      completed: false,
    },
  ];
  return (
    <Card className="p-4 md:px-5">
      <div className="flex justify-end">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-4 pb-4 bg-sec dark:bg-sec-dark">
        <div className="text-center flex flex-col gap-2 items-center mb-2 relative ">
          <Icons.eclipseBg className="absolute" />
          <p className="text-5xl leading-[150%] font-black text-neutral-950 streak-count">
            4
          </p>
          <CardTitle className="text-lg font-bold">Days Streak</CardTitle>
          <CardDescription>
            Are you sure you want to delete this item?
          </CardDescription>
        </div>
        <div className="flex items-center justify-center gap-5 flex-wrap">
          {dateData.map((data, i) => (
            <div
              key={i}
              className="flex flex-col justify-center gap-2 font-semibold text-center capitalize"
            >
              <p>{data.day}</p>
              {data.completed ? (
                <Icons.dateChecked />
              ) : (
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-neutral-100 text-neutral-900 dark:text-neutral-50 dark:bg-neutral-600">
                  <span> {data.date} </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
