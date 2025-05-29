// src/layouts/AdminLayout.tsx

import { MeContext } from "@/contexts/MeContext"; // 마이페이지
import useMe from "@/hooks/useMe"; // 마이페이지


import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import { Outlet } from 'react-router-dom';



export default function AdminLayout() {
  const meState = useMe();

  return (
    <MeContext.Provider value={meState}>
      <div className="min-h-screen w-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        {/* TopBar */}
        <TopBar />

        {/* Content area with sidebar and main content */}
        <div className="flex w-full">

          <Sidebar />
          <main className="flex-1 px-6 py-4 overflow-x-hidden">
            <Outlet />
          </main>
        </div>
      </div>
    </MeContext.Provider>
  );
}
