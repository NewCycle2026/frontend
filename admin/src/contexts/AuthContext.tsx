// src/contexts/AuthContext.tsx
import axios from "@/lib/axios";
import { createContext, useContext, useEffect, useState } from "react";

type Admin = {
  id: number;
  email: string;
  name: string;
  role: string;
};

const AuthContext = createContext<{
  admin: Admin | null;
  loading: boolean;
}>({ admin: null, loading: true });

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await axios.get<Admin>("/admin-account/me");
        setAdmin(res.data);
      } catch {
        setAdmin(null);
        localStorage.removeItem("accessToken");
      } finally {
        setLoading(false);
      }
    };

    fetchMe();
  }, []);

  return (
    <AuthContext.Provider value={{ admin, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

// ✅ 여기 핵심: export를 "하나의 객체로"
export { AuthProvider, useAuth };

