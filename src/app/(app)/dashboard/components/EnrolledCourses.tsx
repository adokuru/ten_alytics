import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HourglassIcon } from "lucide-react";

export default function EnrolledCourses() {
  return (
    <div className="mt-6">
      <Card>
        <CardHeader className="flex flex-col gap-4 lg:flex-row lg:justify-between">
          <div>
            <CardTitle>Enrolled Course</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="instructor-led">
            <TabsList className="rounded-[32px]">
              <TabsTrigger className="rounded-[32px]" value="instructor-led">
                Ongoing Lesson
              </TabsTrigger>
              <TabsTrigger className="rounded-[32px]" value="self-paced">
                Completed Lesson
              </TabsTrigger>
            </TabsList>
            <TabsContent value="instructor-led">
              <Courses />
            </TabsContent>
            <TabsContent value="self-paced">
              <Courses />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

function Courses() {
  return (
    <div>
      <Card className="bg-sec dark:bg-sec-dark border-sec dark:border-sec-dark">
        <CardContent className="p-4 md:flex gap-4">
          <div className="relative rounded-2xl border dark:border-neutral-600 border-dashed p-1 w-full mb-3.5 aspect-[326/186] h-[168px] flex-none md:w-[181px] md:aspect-[181/214] md:h-auto md:mb-0 md:p-0 md:border-none md:rounded-md">
            <Image
              src={"/card-img.png"}
              alt="card"
              width={304}
              height={304}
              sizes="100vh"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className="rounded-2xl"
            />
          </div>
          <div className="grid gap-2.5">
            <div className="flex items-center gap-2.5 py-1.5 px-4 text-xs font-semibold border w-fit rounded-2xl   border-neutral-200 bg-white text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 ">
              <Icons.coPresent /> <span> Instructor led course </span>
            </div>
            <CardTitle className="text-base font-extrabold md:text-lg">
              Full Stack Data Scientist
            </CardTitle>
            <CardDescription className="line-clamp-3 md:line-clamp-2">
              This course is designed for both beginners with no programming
              experience or experienced developers looking to make the jump to
              Data Science. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Ipsa su
            </CardDescription>
            <div className="flex w-full items-center gap-2">
              <span className="flex items-center flex-none text-xs gap-0.5">
                <span className="font-semibold">33%</span>
              </span>
              {/* N.B the "bg-pri rounded-full" was added in "@/components/ui/progress"  */}
              <Progress className="first:!bg-pri h-2" value={33} />
              <span className="flex items-center flex-none text-xs gap-0.5">
                <span className="font-semibold">100%</span>
              </span>
            </div>
            <div className="rounded-lg px-2 md:px-4 py-2 border border-dashed flex items-center gap-2 text-sm">
              <HourglassIcon />
              <span>Countdown Timer:</span>
              <span className="text-pri font-medium">
                89 days 22 hrs 28 min 54 sec
              </span>
            </div>
            <Button className="btn-primary !rounded-full w-fit" size={"sm"}>
              Continue learning
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
