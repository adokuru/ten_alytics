"use client";
import { ReactNode, createContext, useContext, useState } from "react";

type ToggleNavContextType = {
  isCollapsed: boolean;
  toggleIsCollaped?: (status: boolean) => void;
};

const ToggleNavContext = createContext<ToggleNavContextType>({
  isCollapsed: false,
});

export default function ToggleNavProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  function toggleIsCollaped(status: boolean) {
    setIsCollapsed(status);
  }
  return (
    <>
      <ToggleNavContext.Provider value={{ isCollapsed, toggleIsCollaped }}>
        {children}
      </ToggleNavContext.Provider>
    </>
  );
}

export function useToggleNav() {
  const context = useContext(ToggleNavContext);
  return context;
}
