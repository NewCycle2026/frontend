// src/contexts/SidebarContext.tsx

import { createContext, useContext, useState } from 'react';

interface SidebarContextType {
  isCollapsed: boolean;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('sidebar') === 'collapsed';
    }
    return false;
  });

  const toggleSidebar = () => {
    setIsCollapsed((prev) => {
      const next = !prev;
      localStorage.setItem('sidebar', next ? 'collapsed' : 'expanded');
      return next;
    });
  };

  return (
    <SidebarContext.Provider value={{ isCollapsed, isSidebarOpen: !isCollapsed, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) throw new Error('useSidebar must be used within SidebarProvider');
  return context;
};
