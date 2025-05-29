// src/layouts/AuthLayout.tsx
import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-800 dark:to-gray-900">
      <div className="w-full max-w-md px-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
