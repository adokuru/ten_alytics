"use client";
import { Home, Settings, User } from "lucide-react";
import Sidebar, { SidebarItem } from "./components/SideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-white dark:bg-slate-900  lg:w-screen lg:h-screen pattern">
      <div className="flex">
        <Sidebar>
          <SidebarItem icon={<Home />} text="Home" active />
          <SidebarItem icon={<User />} text="Profile" />
          <SidebarItem icon={<Settings />} text="Settings" alert />
        </Sidebar>

        <main className="flex-1 p-4 ml-40">
          <div className="mb-16 lg:mb-[unset]">{children}</div>
        </main>
      </div>
    </div>
  );
}
