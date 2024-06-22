import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRightCircle } from "lucide-react";
import Courses from "./Courses";

export default function RecommendedCourses() {
  return (
    <div className="mt-6">
      <Card>
        <CardHeader className="flex flex-col gap-4 lg:flex-row lg:justify-between">
          <div>
            <CardTitle>Recommended Courses</CardTitle>
            <CardDescription className="mt-2">
              These courses where selected for you based on your learning plan
            </CardDescription>
          </div>
          <Button className="btn-secondary md:w-fit">
            View all <ChevronRightCircle className="ml-2" />{" "}
          </Button>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="instructor-led">
            <TabsList className="rounded-[32px]">
              <TabsTrigger className="rounded-[32px]" value="instructor-led">
                Instructor led courses
              </TabsTrigger>
              <TabsTrigger className="rounded-[32px]" value="self-paced">
                Self paced courses
              </TabsTrigger>
            </TabsList>
            <TabsContent value="instructor-led">
              <Courses />
            </TabsContent>
            <TabsContent value="self-paced">
              Change your password here.
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
