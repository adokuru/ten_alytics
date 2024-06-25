import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { AlarmClock, PlayIcon, StarIcon } from "lucide-react";

export default function CourseDetails() {
  return (
    <>
      <Card>
        <CardContent className="p-4 flex flex-col md:flex-row md:items-center gap-6">
          <div className="grid gap-4 md:gap-5">
            <div className="flex items-center gap-4 justify-between md:justify-start">
              <div className="w-fit flex items-center gap-2.5 text-neutral-500 dark:text-neutral-400 text-[10px] font-semibold  opacity-80 rounded-lg ">
                <Icons.coPresent /> <span> Instructor led course </span>
              </div>
              <div className="font-semibold text-sm flex gap-1 items-center">
                <AlarmClock size={14} /> <span>4 month duration</span>
              </div>
            </div>
            <div className="w-fit flex gap-1 items-center px-2 py-1  bg-gradient-to-r from-yellow-100 via-amber-400 to-yellow-500 rounded-lg">
              <StarIcon className="fill-[#925E08] text-[#925E08]" />{" "}
              <span className="text-xs text-[#553500] font-bold leading-[18px]">
                {" "}
                Top rated course{" "}
              </span>
            </div>
            <CardTitle className="text-base font-bold md:text-lg">
              Business Analysis
            </CardTitle>
            <CardDescription className="line-clamp-4 md:line-clamp-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              nisi maxime quidem ipsum voluptatum dolore iste tempora et
              distinctio odit praesentium asperiores at reprehenderit, explicabo
              assumenda fugiat! Aliquid, voluptas quo! Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Sunt blanditiis quae officiis
              ut saepe veniam nihil beatae eum quidem ullam excepturi, error,
              rerum omnis quaerat laborum placeat dignissimos ipsum ducimus!
            </CardDescription>
            <div className="text-sm text-neutral-500 dark:text-neutral-400 flex gap-1 items-center">
              <div className="flex items-center gap-1">
                <Icons.barsOne /> <span>Beginner</span>
              </div>
              <span> &</span>
              <div className="flex items-center gap-1">
                <Icons.barsFull /> <span>Experience</span>
              </div>
              <div className="flex items-center gap-1">
                <PlayIcon size={16} /> <span>Experience</span>
              </div>
            </div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400 flex gap-3 items-center">
              <div className="flex flex-row-reverse items-center ml-2 [&>*]:-ml-2 [&>*]:border">
                <Avatar className="rounded-md">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="rounded-md">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="rounded-md">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <p>3 Course instructors</p>
            </div>
          </div>
          <Card className="rounded-3xl md:p-2 border-0 md:border">
            <Card className="rounded-3xl ">
              <CardContent className="p-3">
                <div className="relative rounded-2xl border dark:border-neutral-600 border-dashed p-1 w-full mb-3.5 h-[168px] aspect-[324/170] bg-neutral-500 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-neutral-900 opacity-70 ">
                    <PlayIcon className="fill-neutral-500  text-neutral-500 " />
                  </div>
                </div>

                <div className="bg-sec dark:bg-sec-dark px-3 py-4 rounded-xl border border-dashed border-pri flex flex-col gap-2 md:text-center md:items-center">
                  <div className="mb-3 md:flex md:flex-col md:items-center">
                    <p className="flex items-center gap-3 mb-2">
                      <span className="text-pri font-bold text-lg">
                        {" "}
                        &#8358;540,000
                      </span>{" "}
                      <span className="text-xs text-neutral-500 dark:text-neutral-400 line-through">
                        &#8358;720,000
                      </span>
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-400 font-light">
                      {" "}
                      Program fee payment can be in 2 instalments
                    </p>
                  </div>
                  <Button className="btn-primary">Enroll now</Button>
                  <Button className="btn-secondary">Download Brochure</Button>
                </div>
              </CardContent>
            </Card>
          </Card>
        </CardContent>
      </Card>
    </>
  );
}
