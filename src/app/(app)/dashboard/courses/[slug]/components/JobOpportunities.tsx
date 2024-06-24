import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WebhookIcon } from "lucide-react";

export default function JobOpportunities() {
  const jobsData = [
    {
      name: "Data Analysis",
    },
    {
      name: "Data Engineer",
    },
    {
      name: "Data scientist",
    },
    {
      name: "Data Architect",
    },
    {
      name: "Machine Learning Engineer",
    },
  ];

  return (
    <Card className="p-4">
      <CardHeader className="p-0">
        <CardTitle className="text-base font-bold">Job Opportunities</CardTitle>
        <CardDescription>
          With our Data Analytics Cerificate, you get to work as any of the
          following:
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 mt-4">
        <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap">
          {jobsData.map((data, i) => {
            const colors = ["#F9F5FE", "#FEF5F5", "#F5FBFE"];
            const getRandomColor = (): string => {
              const randomIndex = Math.floor(Math.random() * colors.length);
              return colors[randomIndex];
            };
            return (
              <Card
                key={i}
                className={`flex gap-3 items-center px-3 py-3 dark:opacity-80 dark:text-neutral-950 w-fit flex-none capitalize text-sm md:text-base font-bold`}
                style={{ backgroundColor: getRandomColor() }}
              >
                <WebhookIcon /> <span>{data.name}</span>
              </Card>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
