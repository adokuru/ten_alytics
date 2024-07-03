"use client";
import { Icons } from "@/components/ui/icons";
import { usePathname } from "next/navigation";
import Sidebar, { SidebarItem } from "./components/SideBar";
import ToggleNavProvider from "./components/ToggleNav";
import TopBar from "./components/TopBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname === "/dashboard";

  return (
    <div className="relative bg-[#FBFDFF] dark:bg-slate-900 md:px-4 xl:px-6 md:h-screen md:overflow-hidden">
      <ToggleNavProvider>
        <div className="flex h-full lg:gap-4">
          <Sidebar>
            <SidebarItem
              icon={<Icons.dashboard />}
              text="Dashboard"
              active={isDashboard}
              href="/dashboard"
            />
            <SidebarItem
              icon={<Icons.courses />}
              text="Courses"
              href="/courses"
              active={pathname === "/courses"}
            />
            <SidebarItem
              icon={<Icons.learningManagement />}
              text="Learning Management"
              href="/learning-management"
              active={pathname === "/learning-management"}
            />
            <SidebarItem
              icon={<Icons.qrCode />}
              text="Lesson Videos"
              href="/lesson-videos"
              active={pathname === "/lesson-videos"}
            />
          </Sidebar>

          <main className="flex-1 h-full md:overflow-hidden md:overflow-y-auto hide-scrollbar pb-5">
            <TopBar />
            <div className="pt-4 md:pt-0 px-5 md:px-0">{children}</div>
          </main>
        </div>
      </ToggleNavProvider>
    </div>
  );
}
