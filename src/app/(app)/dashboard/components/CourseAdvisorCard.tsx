import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";

export default function CourseAdvisorCard() {
  return (
    <Card className="rounded-2xl">
      <CardContent className="p-4">
        <Card className="rounded-xl overflow-hidden w-full">
          <CardHeader className="bg-neutral-100 dark:bg-neutral-900">
            <CardTitle className="text-gray-900 dark:text-neutral-50 text-lg font-bold">
              Speak with course advisor
            </CardTitle>
          </CardHeader>
          <CardContent className="py-4 flex items-center justify-center">
            <div className="p-1 dark:bg-neutral-400 rounded-lg">
              <Icons.callCenterGirl />
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-center">
            <Button
              className="rounded-full flex items-center gap-1 shadow dark:border dark:border-neutral-800"
              variant={"ghost"}
            >
              <Icons.calanderFav />
              <span className="font-bold text-[#DA6728]">
                Schedule Appointment
              </span>
            </Button>
          </CardFooter>
        </Card>
      </CardContent>
    </Card>
  );
}
