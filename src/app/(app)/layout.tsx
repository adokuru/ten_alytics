"use client";
import Sidebar, { SidebarItem } from "./components/SideBar";
import { Icons } from "@/components/ui/icons";
import TopBar from "./components/TopBar";
import ToggleNavProvider from "./components/ToggleNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-[#FBFDFF] dark:bg-slate-900 md:px-4 xl:px-6 md:h-screen md:overflow-hidden">
      <ToggleNavProvider>
        <div className="flex h-full lg:gap-4">
          <Sidebar>
            <SidebarItem icon={<Icons.dashboard />} text="Dashboard" active />
            <SidebarItem icon={<Icons.courses />} text="Courses" />
            <SidebarItem icon={<Icons.wallet />} text="Learning Management" />
            <SidebarItem icon={<Icons.qrCode />} text="Lesson Videos" />
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
