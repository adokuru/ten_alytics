import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import CourseCards from "./components/CourseCards";

export default function CoursesPage() {
  return (
    <>
      <Card className="px-4 py-5">
        <CardContent className="p-0">
          <div>
            <CardTitle className="text-base font-bold md:text-lg mb-2">
              Instructor-based Learning
            </CardTitle>
            <CardDescription>
              Engage in a dynamic and interactive learning environment led by
              professional instructors. It allows for real-time feedback and
              personalized support, ensuring that complex concepts are
              effectively understood and applied.
            </CardDescription>
          </div>
          <div className="mt-10 lg:mt-7">
            <CourseCards />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
