import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { StarIcon } from "lucide-react";

export default function CourseReviews() {
  return (
    <Card className="p-4">
      <CardHeader className="p-0">
        <CardTitle className="text-base font-bold">Course Reviews</CardTitle>
      </CardHeader>
      <CardContent className="p-0 mt-4">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <Card>
            <CardContent className="p-3 grid gap-3">
              <div className="flex items-center gap-2">
                <StarIcon color="gold" fill="gold" size={12} />
                <StarIcon color="gold" fill="gold" size={12} />
                <StarIcon color="gold" fill="gold" size={12} />
                <StarIcon color="gold" fill="gold" size={12} />
                <StarIcon color="gold" fill="gold" size={12} />
              </div>
              <p className="text-sm font-semibold line-clamp-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloremque, porro maiores laboriosam amet vero voluptatem
                praesentium accusantium voluptatibus vitae similique commodi
                illum in, rem dignissimos aperiam quas dolores et ex.
              </p>
              <div className="flex items-center gap-1.5">
                <Avatar className="flex-none">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5 w-full">
                  <p className="font-bold truncate">Olugbemi</p>
                  <p className="truncate text-neutral-500 dark:text-neutral-400 font-light">
                    Business data analyst
                  </p>
                </div>
                <Avatar className="w-8 h-8 flex-none">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>NGN</AvatarFallback>
                </Avatar>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 grid gap-3">
              <div className="flex items-center gap-2">
                <StarIcon color="gold" fill="gold" size={12} />
                <StarIcon color="gold" fill="gold" size={12} />
                <StarIcon color="gold" fill="gold" size={12} />
                <StarIcon color="gold" fill="gold" size={12} />
                <StarIcon color="gold" fill="gold" size={12} />
              </div>
              <p className="text-sm font-semibold line-clamp-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloremque, porro maiores laboriosam amet vero voluptatem
                praesentium accusantium voluptatibus vitae similique commodi
                illum in, rem dignissimos aperiam quas dolores et ex.
              </p>
              <div className="flex items-center gap-1.5">
                <Avatar className="flex-none">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5 w-full">
                  <p className="font-bold truncate">Olugbemi</p>
                  <p className="truncate text-neutral-500 dark:text-neutral-400 font-light">
                    Business data analyst
                  </p>
                </div>
                <Avatar className="w-8 h-8 flex-none">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>NGN</AvatarFallback>
                </Avatar>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 grid gap-3">
              <div className="flex items-center gap-2">
                <StarIcon color="gold" fill="gold" size={12} />
                <StarIcon color="gold" fill="gold" size={12} />
                <StarIcon color="gold" fill="gold" size={12} />
                <StarIcon color="gold" fill="gold" size={12} />
                <StarIcon color="gold" fill="gold" size={12} />
              </div>
              <p className="text-sm font-semibold line-clamp-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloremque, porro maiores laboriosam amet vero voluptatem
                praesentium accusantium voluptatibus vitae similique commodi
                illum in, rem dignissimos aperiam quas dolores et ex.
              </p>
              <div className="flex items-center gap-1.5">
                <Avatar className="flex-none">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5 w-full">
                  <p className="font-bold truncate">Olugbemi</p>
                  <p className="truncate text-neutral-500 dark:text-neutral-400 font-light">
                    Business data analyst
                  </p>
                </div>
                <Avatar className="w-8 h-8 flex-none">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>NGN</AvatarFallback>
                </Avatar>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 grid gap-3">
              <div className="flex items-center gap-2">
                <StarIcon color="gold" fill="gold" size={12} />
                <StarIcon color="gold" fill="gold" size={12} />
                <StarIcon color="gold" fill="gold" size={12} />
                <StarIcon color="gold" fill="gold" size={12} />
                <StarIcon color="gold" fill="gold" size={12} />
              </div>
              <p className="text-sm font-semibold line-clamp-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloremque, porro maiores laboriosam amet vero voluptatem
                praesentium accusantium voluptatibus vitae similique commodi
                illum in, rem dignissimos aperiam quas dolores et ex.
              </p>
              <div className="flex items-center gap-1.5">
                <Avatar className="flex-none">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5 w-full">
                  <p className="font-bold truncate">Olugbemi</p>
                  <p className="truncate text-neutral-500 dark:text-neutral-400 font-light">
                    Business data analyst
                  </p>
                </div>
                <Avatar className="w-8 h-8 flex-none">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>NGN</AvatarFallback>
                </Avatar>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
      <CardFooter className="p-0 mt-4 flex-col">
        <p>Our learners work at top companies</p>
        <div className="flex justify-center flex-wrap gap-x-4 lg:gap-x-6 mt-2">
          <Icons.deloitte />
          <Icons.maze />
          <Icons.microsoft />
          <Icons.tMobile />
        </div>
      </CardFooter>
    </Card>
  );
}
