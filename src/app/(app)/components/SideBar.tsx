"use client";

import { ChevronFirst, ChevronLast } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Alytics } from "../10Alytics";

interface SidebarContextProps {
  expanded: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

interface SidebarProps {
  children: ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
  const [expanded, setExpanded] = useState<boolean>(true);

  const pathname = usePathname();
  const isDashboard = pathname === "/dashboard";
  useEffect(() => {
    if (isDashboard) {
      setExpanded(false);
      return;
    }
    setExpanded(true);
  }, [isDashboard]);

  return (
    <aside className="h-screen fixed top-0 left-10 z-50 py-10">
      <nav className="h-full flex flex-col rounded-lg bg-white border border-gray-300 shadow-lg">
        <div className="px-4 pb-4 flex justify-between items-center">
          <div
            className={`overflow-hidden transition-all ${
              expanded ? "w-50" : "w-0"
            }`}
          >
            <Alytics />
          </div>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-2 rounded-sm bg-white shadow-lg searchDashboard hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <div
            className={`
              flex justify-center items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4 text-center">
              <span className="text-xs text-center text-gray-600">
                ©2024 10alytics
              </span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}

interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
}

export function SidebarItem({ icon, text, active, alert }: SidebarItemProps) {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error(
      "SidebarItem must be used within a SidebarContext.Provider"
    );
  }

  const { expanded } = context;

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
