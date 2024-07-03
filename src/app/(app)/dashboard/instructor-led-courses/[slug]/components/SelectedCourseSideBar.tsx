import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle2Icon,
  CheckCircleIcon,
  ChevronDownIcon,
  LockKeyholeIcon,
  MenuIcon,
  PlayCircleIcon,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Icons } from "@/components/ui/icons";

export default function SelectedCourseSideBar() {
  const data = [
    {
      id: "55",
      week: 1,
      title: "Building your Dashboard in Power BI",
      modules: [
        {
          id: "551",
          module: 1,
          courses: [
            {
              id: "552",
              title: "Introduction to Excel",
              isCompleted: true,
              assessmentTest: "COMPLETED",
            },
            {
              id: "553",
              title: "Introduction to Excel",
              isCompleted: true,
              assessmentTest: "COMPLETED",
            },
            {
              id: "554",
              title: "Introduction to Excel",
              isCompleted: true,
              assessmentTest: "COMPLETED",
            },
          ],
        },
      ],
    },
  ];

  return (
    <Card className="grid w-full gap-4 md:col-span-1 px-2 py-3">
      <CardContent className="p-0">
        <Card className="rounded-xl overflow-hidden w-full">
          <CardHeader className="bg-neutral-100 dark:bg-neutral-900">
            <CardTitle className="text-gray-900 dark:text-neutral-50 text-base md:text-lg font-bold flex gap-2">
              <MenuIcon /> Course Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent className="py-4 px-2 grid gap-2">
            <Accordion type="single" collapsible>
              {data.map((dt) => (
                <Card key={dt.id} className="p-2">
                  <p className="px-2 py-1 bg-neutral-100 dark:bg-neutral-900 w-fit font-bold text-xs text-neutral-500 dark:text-neutral-400 rounded-lg mb-5">
                    WEEK {dt.week}
                  </p>

                  <AccordionItem value="item-1" className="border-0">
                    <div className="rounded-lg bg-neutral-100 dark:bg-neutral-900 p-2">
                      <AccordionTrigger className="font-semibold text-start">
                        {dt.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <Modules data={dt.modules} />
                      </AccordionContent>
                    </div>
                  </AccordionItem>
                </Card>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}

function Modules({ data }: any) {
  return (
    <Accordion type="single" collapsible>
      {data.map((dt: any) => (
        <AccordionItem key={dt.id} value="item-1" className="border-0">
          <div className="rounded-md bg-sec dark:bg-sec-dark p-1.5 pb-0 mt-4">
            <AccordionTrigger>
              <span className="text-pri">Module {dt.module}:</span>
              <div className="ml-auto flex items-center gap-1 md:gap-2">
                <Icons.lock className="text-neutral-500 dark:text-neutral-400" />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Courses />
            </AccordionContent>
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function Courses({ data }: any) {
  return (
    <>
      <ul>
        <li className="p-1 flex items-center gap-2">
          <PlayCircleIcon /> <span>Introduction to Excel </span>
          <Icons.circleCheck className="text-neutral-500 dark:text-neutral-400 ml-auto" />
        </li>
      </ul>
    </>
  );
}
