// src/pages/Member/RegisterPage.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/LayoutMain";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("회원가입 성공 (테스트)");
    navigate("/login");
  };

  return (
    <MainLayout>
      {/* ✅ Page Header */}
      <section className="relative h-[20vh] bg-emerald-700 text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative text-center px-4 max-w-lg mx-auto animate-fadeIn">
          <h1 className="text-3xl md:text-xl font-extrabold mb-4">회원가입</h1>
          <p className="text-lg">Wayple과 함께 지속 가능한 여행을 시작하세요.</p>
        </div>
      </section>

      {/* ✅ 회원가입 Form */}
      <section className="py-10 animate-fadeIn max-w-md mx-auto px-4">
        <div className="shadow-lg rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white p-6">

          {/* ✅ 소셜 로그인 */}
          <div className="space-y-3 mb-6">
            <button
              onClick={() => alert("Google 회원가입 예정")}
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white py-2 rounded hover:ring-2 hover:ring-emerald-500 transition"
            >
              <span className="font-semibold">Google</span> 계정으로 가입
            </button>
            <button
              onClick={() => alert("Naver 회원가입 예정")}
              className="w-full border border-gray-300 dark:border-gray-600 bg-[#03C75A] text-white py-2 rounded hover:ring-2 hover:ring-emerald-500 transition"
            >
              <span className="font-semibold">Naver</span> 계정으로 가입
            </button>
            <button
              onClick={() => alert("Kakao 회원가입 예정")}
              className="w-full border border-gray-300 dark:border-gray-600 bg-[#FEE500] text-black py-2 rounded hover:ring-2 hover:ring-emerald-500 transition"
            >
              <span className="font-semibold">Kakao</span> 계정으로 가입
            </button>
          </div>

          {/* ✅ Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300 dark:border-gray-600" />
            <span className="mx-4 text-xs text-gray-400">또는 이메일로 가입</span>
            <hr className="flex-grow border-gray-300 dark:border-gray-600" />
          </div>

          {/* ✅ 기본 회원가입 */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="이름"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-4 py-2 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              type="email"
              name="email"
              placeholder="이메일"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-4 py-2 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-4 py-2 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="비밀번호 확인"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-4 py-2 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <button
              type="submit"
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-2 rounded transition"
            >
              이메일로 가입
            </button>
          </form>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
            이미 계정이 있으신가요?{" "}
            <span
              className="text-emerald-700 dark:text-emerald-300 hover:underline cursor-pointer"
              onClick={() => navigate("/login")}
            >
              로그인
            </span>
          </p>
        </div>
      </section>
    </MainLayout>
  );
}
