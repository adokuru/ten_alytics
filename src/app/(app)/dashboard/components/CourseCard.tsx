import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { AlarmClockIcon, StarIcon } from "lucide-react";
import Image from "next/image";

export default function CourseCard() {
  return (
    <Card className="rounded-3xl ">
      <CardContent className="p-3">
        <div className="relative rounded-2xl border dark:border-neutral-600 border-dashed p-1 w-full mb-3.5 h-[168px]">
          <div className="top-2.5 right-2.5 absolute flex gap-1 items-center px-2 py-1  bg-gradient-to-r from-yellow-100 via-amber-400 to-yellow-500 rounded-lg">
            <StarIcon className="fill-[#925E08] text-[#925E08]" />{" "}
            <span className="text-xs text-[#553500] font-bold leading-[18px]">
              {" "}
              Top rated course{" "}
            </span>
          </div>
          <div className="absolute bottom-2.5 left-2.5 flex items-center gap-2.5 py-1.5 px-2.5 text-[#65FF8B] text-[10px] font-semibold bg-neutral-900 opacity-80 rounded-lg ">
            <Icons.coPresent /> <span> Instructor led course </span>
          </div>
          <Image
            src={"/card-img.png"}
            alt="card"
            width={324}
            height={170}
            sizes="100vh"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            className="rounded-2xl"
          />
        </div>
        <CardTitle className="text-base font-extrabold md:text-lg mb-2">
          Full Stack Data Scientist
        </CardTitle>
        <div
          className={cn(
            buttonVariants({ variant: "default" }),
            "bg-sec dark:bg-sec-dark text-neutral-900 dark:text-neutral-50 shadow-sm hover:bg-sec hover:dark:bg-sec-dark cursor-default"
          )}
        >
          <AlarmClockIcon />
          <span className="ml-2">4 month duration</span>
        </div>
        <CardDescription className="line-clamp-3 my-2">
          This course is designed for both beginners with no programming
          experience or experienced developers looking to make the jump to Data
          Science. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Ipsa su
        </CardDescription>
        <div className="bg-sec dark:bg-sec-dark px-3 py-4 rounded-xl">
          <div className="mb-3">
            <p className="flex items-center gap-3 mb-2">
              <span className="text-pri font-bold text-lg">
                {" "}
                &#8358;540,000
              </span>{" "}
              <span className="text-xs text-neutral-500 dark:text-neutral-400 line-through">
                &#8358;720,000
              </span>
            </p>
            <p className="text-neutral-500 dark:text-neutral-400 font-light text-xs">
              {" "}
              Program fee payment can be in 2 instalments
            </p>
          </div>
          <Button className="btn-primary">Preview course</Button>
        </div>
      </CardContent>
    </Card>
  );
}
