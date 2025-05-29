// src/utils/logout.ts
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();

  return () => {
    localStorage.removeItem("accessToken"); // ✅ 토큰 제거
    navigate("/admin/login", { replace: true });  // ✅ 로그인 페이지로 이동 (히스토리 삭제)
  };
}
