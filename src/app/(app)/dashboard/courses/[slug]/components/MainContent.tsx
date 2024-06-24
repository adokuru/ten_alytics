import { Card, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseCurriculum from "./CourseCurriculum";
import SelectedCourseSideBar from "./SelectedCourseSideBar";

export default function MainContent() {
  return (
    <Card className="p-4">
      <Tabs defaultValue="curriculum">
        <TabsList className="rounded-[32px] flex-wrap h-fit mb-4">
          <TabsTrigger className="rounded-[32px]" value="curriculum">
            Curriculum
          </TabsTrigger>
          <TabsTrigger className="rounded-[32px]" value="course-benefit">
            Course Benefit
          </TabsTrigger>
          <TabsTrigger className="rounded-[32px]" value="job-opportunity">
            Job opportunity
          </TabsTrigger>
          <TabsTrigger className="rounded-[32px]" value="reviews">
            Reviews
          </TabsTrigger>
        </TabsList>
        <TabsContent value="curriculum">
          <div className="grid gap-5 md:grid-cols-3 grid-auto-rows">
            <CardTitle className="text-base font-bold md:text-lg md:col-span-3">
              Course Curriculum
            </CardTitle>
            <CourseCurriculum />
            <SelectedCourseSideBar />
          </div>
        </TabsContent>
        <TabsContent value="self-paced">dd</TabsContent>
      </Tabs>
    </Card>
  );
}
