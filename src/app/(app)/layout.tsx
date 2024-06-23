"use client";
import Sidebar, { SidebarItem } from "./components/SideBar";
import { Icons } from "@/components/ui/icons";
import TopBar from "./components/TopBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-[#FBFDFF] dark:bg-slate-900 md:px-4 xl:px-6 md:h-screen">
      <div className="flex lg:gap-4">
        <Sidebar>
          <SidebarItem icon={<Icons.dashboard />} text="Dashboard" active />
          <SidebarItem icon={<Icons.wallet />} text="Learning Management" />
          <SidebarItem icon={<Icons.qrCode />} text="Lesson Videos" />
        </Sidebar>

        <main className="flex-1">
          <TopBar />
          {children}
        </main>
      </div>
    </div>
  );
}
