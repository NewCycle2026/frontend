/**
 * Wayple 관리자 어플리케이션 라우팅 설정
 * - 로그인 / 보호된 관리자 영역 분리
 * - 각 도메인별 실제 서비스 기능 라우팅 구성
 */

import AlertBanner from "@/components/dashboard/AlertBanner";
import { AuthProvider } from "@/contexts/AuthContext";
import { SidebarProvider } from '@/contexts/SidebarContext';
import AdminLayout from '@/layouts/AdminLayout';
import AuthLayout from '@/layouts/AuthLayout';
import LoginPage from '@/pages/LoginPage';
import ProtectedRoute from '@/routes/ProtectedRoute';
import { adminRoutes } from "@/routes/adminRoutes";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export default function App() {
  return (
    <SidebarProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* 🧭 초기 진입 → 로그인 페이지로 이동 */}
            <Route path="/" element={<Navigate to="/admin/login" replace />} />

            {/* 🔐 로그인 화면 */}
            <Route path="/admin/login" element={ 
              <AuthLayout>
                <LoginPage />
              </AuthLayout>
            }/>

            {/* 🔒 보호된 관리자 라우트 */}
            <Route path="/admin/*" element={
              <ProtectedRoute>
                <>
                  <ToastContainer position="top-right" autoClose={3000} />
                  <AlertBanner />
                  <AdminLayout />
                </>
              </ProtectedRoute>
            }>
              {adminRoutes}
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </SidebarProvider>
  );
}