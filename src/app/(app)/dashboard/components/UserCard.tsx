import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRightCircleIcon, ZapIcon } from "lucide-react";
import Image from "next/image";

export default function UserCard() {
  return (
    <Card className="rounded-2xl">
      <CardContent className="p-4">
        <Card className="rounded-xl overflow-hidden w-full">
          <CardContent className="py-4 flex flex-col gap-4 items-center">
            <Image
              src={"/card-img.png"}
              alt="User Image"
              width={104}
              height={104}
              className="object-cover rounded-2xl"
              style={{ height: "104px" }}
            />
            <div className="text-center">
              <CardTitle className="text-gray-900 dark:text-neutral-50 text-lg font-bold mb-1">
                Welcome Kanyinsola,
              </CardTitle>
              <p>Explore your Learning Paths with us</p>
            </div>
            <Button className="btn-secondary">
              Get started <ChevronRightCircleIcon className="ml-2" />
            </Button>
            <div className="bg-gray-100 dark:bg-gray-800 h-0.5 w-full"></div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 rounded-lg border-b border-[#E4BD34] py-2">
                <span className="rounded-lg w-7 h-7 flex flex-none items-center justify-center bg-[#FFF6E5]">
                  <ZapIcon
                    className="fill-[#E4BD34] text-[#E4BD34]"
                    size={20}
                  />
                </span>
                <div>
                  <p className="font-semibold">Start a new learning streak.</p>
                  <p className="text-sm mt-1 text-neutral-500 dark:text-neutral-400">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-lg border-b border-[#168704] py-2">
                <span className="rounded-lg w-7 h-7 flex flex-none items-center justify-center bg-[#BCF1C4]">
                  <ZapIcon
                    className="fill-[#168704] text-[#168704]"
                    size={20}
                  />
                </span>
                <div>
                  <p className="font-semibold">Join a leaderboard </p>
                  <p className="text-sm mt-1 text-neutral-500 dark:text-neutral-400">
                    Be the top student in your cohort by increasing your
                    learning streak.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-lg border-b border-[#168704] py-2">
                <span className="rounded-lg w-7 h-7 flex flex-none items-center justify-center bg-[#BCF1C4]">
                  <ZapIcon
                    className="fill-[#168704] text-[#168704]"
                    size={20}
                  />
                </span>
                <div>
                  <p className="font-semibold">Get certified</p>
                  <p className="text-sm mt-1 text-neutral-500 dark:text-neutral-400">
                    Be the top student in your cohort by increasing your
                    learning streak.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
