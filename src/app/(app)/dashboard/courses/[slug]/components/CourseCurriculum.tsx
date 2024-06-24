import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlayIcon } from "lucide-react";
import { Icons } from "@/components/ui/icons";

export default function CourseCurriculum() {
  const curriculumData = [
    {
      id: "23",
      week: 1,
      title: "Microsoft Excel and Data Cleaning",
      description:
        "The Microsoft Excel and Data Cleaning is for both beginner with no experience or experienced professionals",
      modules: [
        {
          id: "43",
          module: 1,
          title: "Introduction to excel",
          courses: [
            {
              id: "888",
              title: "Overview of excel for Data Analysis",
            },
            {
              id: "78",
              title: "Introduction to excel",
            },
            {
              id: "95",
              title: "Cell Referencing",
            },
          ],
        },
        {
          id: "49",
          module: 2,
          title: "Excel Operations",
          courses: [
            {
              id: "080",
              title: "Overview of excel for Data Analysis",
            },
            {
              id: "7800",
              title: "Introduction to excel",
            },
            {
              id: "9885",
              title: "Cell Referencing",
            },
          ],
        },
        {
          id: "83",
          module: 3,
          title: "Data Cleaning Functions",
          courses: [
            {
              id: "9008",
              title: "Overview of excel for Data Analysis",
            },
            {
              id: "27842",
              title: "Introduction to excel",
            },
            {
              id: "921115",
              title: "Cell Referencing",
            },
          ],
        },
      ],
    },
    {
      id: "20993",
      week: 2,
      title: "Excel and Data Cleaning",
      description:
        "The Microsoft Excel and Data Cleaning is for both beginner with no experience or experienced professionals",
      modules: [
        {
          id: "43",
          module: 1,
          title: "Introduction to excel",
          courses: [
            {
              id: "888",
              title: "Overview of excel for Data Analysis",
            },
            {
              id: "78",
              title: "Introduction to excel",
            },
            {
              id: "95",
              title: "Cell Referencing",
            },
          ],
        },
        {
          id: "49",
          module: 2,
          title: "Excel Operations",
          courses: [
            {
              id: "080",
              title: "Overview of excel for Data Analysis",
            },
            {
              id: "7800",
              title: "Introduction to excel",
            },
            {
              id: "9885",
              title: "Cell Referencing",
            },
          ],
        },
        {
          id: "83",
          module: 3,
          title: "Data Cleaning Functions",
          courses: [
            {
              id: "9008",
              title: "Overview of excel for Data Analysis",
            },
            {
              id: "27842",
              title: "Introduction to excel",
            },
            {
              id: "921115",
              title: "Cell Referencing",
            },
          ],
        },
      ],
    },
    {
      id: "1103",
      week: 3,
      title: "Data Cleaning",
      description:
        "The Microsoft Excel and Data Cleaning is for both beginner with no experience or experienced professionals",
      modules: [
        {
          id: "43",
          module: 1,
          title: "Introduction to excel",
          courses: [
            {
              id: "888",
              title: "Overview of excel for Data Analysis",
            },
            {
              id: "78",
              title: "Introduction to excel",
            },
            {
              id: "95",
              title: "Cell Referencing",
            },
          ],
        },
        {
          id: "49",
          module: 2,
          title: "Excel Operations",
          courses: [
            {
              id: "080",
              title: "Overview of excel for Data Analysis",
            },
            {
              id: "7800",
              title: "Introduction to excel",
            },
            {
              id: "9885",
              title: "Cell Referencing",
            },
          ],
        },
        {
          id: "83",
          module: 3,
          title: "Data Cleaning Functions",
          courses: [
            {
              id: "9008",
              title: "Overview of excel for Data Analysis",
            },
            {
              id: "27842",
              title: "Introduction to excel",
            },
            {
              id: "921115",
              title: "Cell Referencing",
            },
          ],
        },
      ],
    },
  ];
  return (
    <div className="grid gap-6 md:col-span-2 h-fit">
      <Accordion
        type="single"
        defaultValue={curriculumData ? curriculumData[0].id + "curriculum" : ""}
        collapsible
      >
        {curriculumData.map((main) => (
          <Card key={main.id} className="p-4 h-fit">
            <CardContent className="p-0">
              <AccordionItem
                value={main.id + "curriculum"}
                className="border-0"
              >
                <AccordionTrigger className="p-0">
                  <div className="grid gap-2 text-start">
                    <p className="rounded-md uppercase text-sm font-bold px-2 py-1.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 w-fit">
                      Week {main.week}
                    </p>
                    <CardTitle className=" font-bold text-lg">
                      {main.title}
                    </CardTitle>
                    <CardDescription>{main.description}</CardDescription>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <Modules data={main.modules} />
                </AccordionContent>
              </AccordionItem>
            </CardContent>
          </Card>
        ))}
      </Accordion>
    </div>
  );
}

function Modules({ data }: { data: any }) {
  return (
    <Accordion
      type="single"
      defaultValue={data ? data[0].id + "module" : ""}
      collapsible
    >
      <div>
        {data.map((module: any) => (
          <Card key={module.id} className="p-2 md:px-3.5 mt-4">
            <AccordionItem value={module.id + "module"} className="border-0">
              <AccordionTrigger className="flex-row-reverse justify-end gap-4 w-full text-start">
                <div className="ml-auto flex items-center gap-1 md:gap-2">
                  <Icons.circleCheck className="text-neutral-500 dark:text-neutral-400" />
                  <Icons.lock className="text-neutral-500 dark:text-neutral-400" />
                </div>
                <p>
                  Module {module.module}: {module.title}
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <Courses data={module.courses} />
              </AccordionContent>
            </AccordionItem>
          </Card>
        ))}
      </div>
    </Accordion>
  );
}

function Courses({ data }: { data: any }) {
  return (
    <>
      {data.map((course: any) => (
        <div
          key={course.id}
          className="flex items-center gap-2 p-2 md:p-3 bg-neutral-100 dark:bg-neutral-800 rounded-xl mb-3 md:mb-4"
        >
          <PlayIcon
            size={16}
            className="text-neutral-500 dark:text-neutral-400"
          />{" "}
          <p className="font-bold text-sm capitalize"> {course.title}</p>
        </div>
      ))}
    </>
  );
}
