import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CoursesCards() {
  return (
    <div className="px-6 md:px-0 mt-6 flex flex-col gap-4 md:flex-row">
      <Card className="rounded-2xl overflow-hidden w-full">
        <CardHeader className="bg-orange-50 dark:bg-orange-950">
          <CardTitle className="text-gray-900 dark:text-neutral-50 text-lg font-bold">
            Enrolled Courses
          </CardTitle>
        </CardHeader>
        <CardContent className="py-6 text-xl md:text-2xl lg:text-3xl font-bold">
          1
        </CardContent>
      </Card>
      <Card className="rounded-2xl overflow-hidden w-full">
        <CardHeader className="bg-green-50 dark:bg-green-950">
          <CardTitle className="text-gray-900 dark:text-neutral-50 text-lg font-bold">
            Completed Courses
          </CardTitle>
        </CardHeader>
        <CardContent className="py-6 text-xl md:text-2xl lg:text-3xl font-bold">
          0
        </CardContent>
      </Card>
    </div>
  );
}
