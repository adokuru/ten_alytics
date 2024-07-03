"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ChevronFirst, ChevronLast } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Alytics } from "../10Alytics";
import { useToggleNav } from "./ToggleNav";

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
    <aside
      // className={cn("h-screen fixed top-0 left-0 z-50 w-full bg-g")}
      className='h-[calc(100vh-2.5rem)] min-h-[500px] my-5'>
      <MobileSiderBar expanded={true}>{children}</MobileSiderBar>
      <div
        className={cn(
          "rounded-2xl bg-white dark:bg-black border dark:border-stone-700 h-full hidden lg:flex lg:flex-col",
          expanded ? "w-[268px]" : ""
        )}>
        <div
          className={cn(
            "flex  items-center pt-5 pb-4 pr-4 border-b dark:border-stone-700",
            expanded ? "justify-between" : "px-4 justify-start"
          )}>
          <div className={cn(expanded ? "" : "w-0 overflow-hidden")}>
            <Alytics />
          </div>
          <Button
            onClick={() => setExpanded((curr) => !curr)}
            className={"shadow w-8 h-8"}
            size={"icon"}
            variant={"outline"}>
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </Button>
        </div>
        <nav className='h-full'>
          <SidebarContext.Provider value={{ expanded }}>
            <ul className='flex-1 flex flex-col gap-4 px-4 pt-4'>{children}</ul>
          </SidebarContext.Provider>
        </nav>
        <div className='border-t py-4 leading-4 text-center text-xs text-gray-600'>
          © 2024
          <span className={cn(expanded ? "" : "block")}> 10alytics</span>
        </div>
      </div>
    </aside>
  );
}

function MobileSiderBar({
  expanded,
  children,
}: {
  expanded: boolean;
  children: ReactNode;
}) {
  const { isCollapsed, toggleIsCollaped } = useToggleNav();
  return (
    <nav className='lg:hidden'>
      <Sheet open={isCollapsed} onOpenChange={toggleIsCollaped}>
        {/* <SheetTrigger asChild>
          <div className="absolute top-0 left-2 md:left-7 md:top-5 h-16 flex items-center">
            <Button variant={"ghost"} size={"icon"}>
              <MenuIcon />
            </Button>
          </div>
        </SheetTrigger> */}
        <SheetOverlay className='lg:hidden'>
          <SheetContent
            side={"left"}
            className='p-0 py-4 lg:hidden h-full flex flex-col'>
            <SheetHeader className='border-b pb-4'>
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
              <Alytics />
            </SheetHeader>
            <SidebarContext.Provider value={{ expanded }}>
              <ul className='flex-1 flex flex-col gap-4 px-4 pt-4 h-full'>
                {children}
              </ul>
            </SidebarContext.Provider>
            <SheetFooter className='w-full sm:flex-col'>
              <div className='border-t py-4 leading-4 text-center text-xs text-gray-600'>
                © 2024
                <span className={cn(expanded ? "" : "block")}> 10alytics</span>
              </div>
            </SheetFooter>
          </SheetContent>
        </SheetOverlay>
      </Sheet>
    </nav>
  );
}

interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
  href: string;
}

export function SidebarItem({
  icon,
  text,
  active,
  alert,
  href,
}: SidebarItemProps) {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error(
      "SidebarItem must be used within a SidebarContext.Provider"
    );
  }

  const { expanded } = context;

  return (
    <li>
      <Link
        className={`
        relative flex items-center py-2 px-3
        font-semibold rounded-md cursor-pointer
        transition-colors group  hover:text-pri
        ${
          active
            ? "bg-sec text-pri font-bold dark:bg-sec-dark"
            : "text-neutral-500 dark:text-neutral-400"
        }
    `}
        href={href}>
        <span
          className={!active ? "text-neutral-900 dark:text-neutral-400" : ""}>
          {icon}
        </span>
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-48 ml-3" : "w-0 ml-0"
          }`}>
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
      `}>
            {text}
          </div>
        )}
      </Link>
    </li>
  );
}
