// src/pages/LoginPage.tsx
import axios from "@/lib/axios";
import { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    type LoginResponse = {
      accessToken: string;
    };

    try {
      const res = await axios.post<LoginResponse>("/admin-auth/login", form);
      const { accessToken } = res.data;

      // ✅ 토큰 저장
      localStorage.setItem("accessToken", accessToken);

      // ✅ 대시보드 이동
      navigate("/admin/dashboard");
    } catch (err: any) {
      console.error("로그인 오류:", err.response?.data || err.message);
      setError("이메일 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-6">관리자 로그인</h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">이메일</label>
          <div className="flex items-center border rounded px-3 py-2">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="admin@wayple.io"
              className="w-full outline-none"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">비밀번호</label>
          <div className="flex items-center border rounded px-3 py-2">
            <FaLock className="text-gray-400 mr-2" />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full outline-none"
              required
            />
          </div>
        </div>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          로그인
        </button>
      </form>
    </div>
  );
}
