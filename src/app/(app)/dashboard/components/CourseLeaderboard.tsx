import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Progress } from "@/components/ui/progress";

export default function CourseLeaderboard({ newUser }: { newUser: boolean }) {
  return (
    <Card className="rounded-2xl">
      <CardContent className="p-4">
        <Card className="rounded-xl overflow-hidden w-full">
          <CardHeader className="bg-neutral-100 dark:bg-neutral-900">
            <CardTitle className="text-gray-900 dark:text-neutral-50 text-lg font-bold">
              Course Leaderboard
            </CardTitle>
          </CardHeader>
          <CardContent className="py-4 ">
            {newUser ? <EmptyState /> : <Content />}
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center text-center">
      <p className="font-bold">No course leader data to display !</p>
      <div className="p-1 rounded-lg">
        <Icons.fileSearch />
      </div>
      <p className="text-neutral-600 dark:text-neutral-500 text-sm">
        Enroll to join the next cohort
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="grid gap-2.5">
      {/* Leaders 1 */}
      <div className="p-2 h-[60px] flex items-center gap-2">
        <Avatar className="rounded-md flex-none">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="w-full grid truncate">
          <p className="font-bold truncate">Kanyinsola B.</p>

          <div className="flex w-full items-center gap-2 mt-2">
            <span className="flex items-center flex-none text-xs gap-0.5">
              Starter - <span className="font-semibold">33%</span>
            </span>
            {/* N.B the "bg-pri rounded-full" was added in "@/components/ui/progress"  */}
            <Progress
              className="!bg-sec dark:!bg-sec-dark first:!bg-pri"
              value={33}
            />
            <span className="flex items-center flex-none text-xs gap-0.5">
              Expert -
              <span className="text-yellow-500 font-semibold">100%</span>
            </span>
          </div>
        </div>
      </div>
      {/* Leaders 2 */}
      <div className="p-2 h-[60px] flex items-center gap-2">
        <Avatar className="rounded-md flex-none">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="w-full grid truncate">
          <p className="font-bold truncate">Kanyinsola B.</p>

          <div className="flex w-full items-center gap-2 mt-2">
            <span className="flex items-center flex-none text-xs gap-0.5">
              Starter - <span className="font-semibold">33%</span>
            </span>
            {/* N.B the "bg-pri rounded-full" was added in "@/components/ui/progress"  */}
            <Progress
              className="!bg-sec dark:!bg-sec-dark first:!bg-pri"
              value={33}
            />
            <span className="flex items-center flex-none text-xs gap-0.5">
              Expert -
              <span className="text-yellow-500 font-semibold">100%</span>
            </span>
          </div>
        </div>
      </div>
      {/* Leaders 3 */}
      <div className="p-2 h-[60px] flex items-center gap-2">
        <Avatar className="rounded-md flex-none">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="w-full grid truncate">
          <p className="font-bold truncate">Kanyinsola B.</p>

          <div className="flex w-full items-center gap-2 mt-2">
            <span className="flex items-center flex-none text-xs gap-0.5">
              Starter - <span className="font-semibold">33%</span>
            </span>
            {/* N.B the "bg-pri rounded-full" was added in "@/components/ui/progress"  */}
            <Progress
              className="!bg-sec dark:!bg-sec-dark first:!bg-pri"
              value={33}
            />
            <span className="flex items-center flex-none text-xs gap-0.5">
              Expert -
              <span className="text-yellow-500 font-semibold">100%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
