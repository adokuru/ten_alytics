import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";

export default function CourseBenefitCard() {
  return (
    <Card className="rounded-2xl">
      <CardContent className="p-4">
        <Card className="rounded-xl overflow-hidden w-full">
          <CardHeader className="bg-neutral-100 dark:bg-neutral-900">
            <CardTitle className="text-gray-900 dark:text-neutral-50 text-base md:text-lg font-bold">
              Course Benefit
            </CardTitle>
          </CardHeader>
          <CardContent className="py-4 px-2 grid gap-2">
            <Benefit />
            <Benefit />
            <Benefit />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}

function Benefit() {
  return (
    <Card>
      <CardContent className="p-2 flex items-center gap-2">
        <Icons.doubleTick />
        <span className="text-sm font-semibold">
          One-month free intensive INTERNSHIP!!!
        </span>
      </CardContent>
    </Card>
  );
}
