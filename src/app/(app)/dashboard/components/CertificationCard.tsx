import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export default function CertificationCard() {
  return (
    <Card className="rounded-2xl">
      <CardContent className="p-4">
        <Card className="rounded-xl overflow-hidden w-full">
          <CardHeader className="bg-neutral-100 dark:bg-neutral-900">
            <CardTitle className="text-gray-900 dark:text-neutral-50 text-lg font-bold flex items-center gap-2">
              <Icons.cert /> Certification
            </CardTitle>
          </CardHeader>
          <CardContent className="py-4 ">
            <Card className="p-2 w-full dark:opacity-70">
              <Image
                src={"/cerf.svg"}
                alt="cerfiicate"
                width={267}
                height={130}
                sizes="100vh"
                style={{ width: "100%", height: "100%" }}
              />
            </Card>
          </CardContent>
          <CardFooter className="flex-col gap-4 mt-4">
            <div className="flex w-full items-center gap-2">
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
            <p className="text-center font-bold text-sm w-full">
              You are 50% away from being certified.
            </p>
          </CardFooter>
        </Card>
      </CardContent>
    </Card>
  );
}
