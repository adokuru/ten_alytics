import { PlayIcon } from "lucide-react";

export default function CourseVideo() {
  return (
    <>
      <div className="relative rounded-2xl border dark:border-neutral-600 p-1 w-full mb-3.5 h-[168px] lg:h-auto aspect-[324/170] bg-neutral-500 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full flex items-center justify-center bg-neutral-900 opacity-70 ">
          <PlayIcon className="fill-neutral-500  text-neutral-500 " />
        </div>
      </div>
    </>
  );
}
