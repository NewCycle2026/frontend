// src/components/MainLayoutProps.tsx
import { ReactNode } from "react";
import Footer from "./LayoutFooter";

interface MainLayoutProps {
  children: ReactNode;
}

export default function WebLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative z-0 w-full min-h-screen bg-white dark:bg-gray-900 dark:text-white flex flex-col pb-16">
      {/* ✅ 페이지 컨텐츠 */}
      <main className="flex-1">{children}</main>

      {/* ✅ 공통 Footer */}
      <Footer />
    </div>
  );
}
