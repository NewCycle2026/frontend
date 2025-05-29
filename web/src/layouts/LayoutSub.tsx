// components/SubLayout.tsx
import { ReactNode } from "react";
import Footer from "./LayoutFooter";

interface SubLayoutProps {
  children: ReactNode;
}

export default function SubLayout({ children }: SubLayoutProps) {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900 dark:text-white flex flex-col pb-16">
      <main className="flex-1 px-4">{children}</main>
      <Footer />
    </div>
  );
}
