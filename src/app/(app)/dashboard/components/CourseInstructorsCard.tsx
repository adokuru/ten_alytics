import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function CourseInstructorsCard() {
  return (
    <Card className="rounded-2xl">
      <CardContent className="p-4">
        <Card className="rounded-xl overflow-hidden w-full">
          <CardHeader className="bg-neutral-100 dark:bg-neutral-900">
            <CardTitle className="text-gray-900 dark:text-neutral-50 text-base md:text-lg font-bold">
              Course instructors
            </CardTitle>
          </CardHeader>
          <CardContent className="py-4 px-2 grid gap-2">
            <Instructor />
            <Instructor />
            <Instructor />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}

function Instructor() {
  return (
    <Card>
      <CardContent className="p-2 h-[60px] flex items-center gap-2">
        <Avatar className="rounded-md">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="grid">
          <CardTitle className="text-sm truncate">Efemena Ikpro</CardTitle>
          <CardDescription className="text-xs line-clamp-2">
            Global Business Systems Analyst, Teleflex, UK
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  );
}
