// src/components/Header.tsx
import { useAuth } from "@/contexts/AuthContext";
import { useLogout } from "@/hooks/useLogout";
import { LogOut } from "lucide-react";

export default function Header() {
  const { admin, loading } = useAuth();
  const logout = useLogout();

  if (loading) return null;

  return (
    <header className="flex justify-between items-center h-16 px-6 bg-white dark:bg-gray-900 shadow-sm border-b">
      <div className="text-xl font-bold text-gray-800 dark:text-white">
        Wayple Admin
      </div>
      <div className="flex items-center space-x-4 text-sm text-gray-700 dark:text-gray-300">
        <span>👤 {admin?.email}</span>
        <button
          onClick={logout}
          className="flex items-center space-x-1 text-red-500 hover:text-red-600"
        >
          <LogOut className="w-4 h-4" />
          <span>로그아웃</span>
        </button>
      </div>
    </header>
  );
}
