import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export default function WelcomeBanner() {
  return (
    <Card className="rounded-none border-0 shadow-none md:shadow-sm md:border md:rounded-2xl">
      <CardContent className="pt-6 flex flex-col gap-3 lg:flex-row lg:justify-between lg:items-center">
        <div className="flex flex-col gap-3">
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            📆 Wednesday, June 5th 2024
          </CardDescription>
          <CardTitle>Welcome back, Kanyinsola 👋🏼</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Always stay updated in your student portal
          </CardDescription>
        </div>
        <Button className="bg-pri dark:bg-pri hover:opacity-80 hover:bg-pri hover:dark:bg-pri dark:text-neutral-50 sm:w-fit">
          Create a learning plan
        </Button>
      </CardContent>
    </Card>
  );
}
