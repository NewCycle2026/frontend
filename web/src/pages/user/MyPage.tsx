// src/pages/MyPage.tsx
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/LayoutMain";

export default function MyPage() {
  const navigate = useNavigate();

  // ✅ mock recent activities
  const recentActivities = [
    { id: 1, title: "부산 ESG 여행 후기", author: "지민", date: "2025-05-10" },
    { id: 2, title: "제주도 친환경 트레킹 모집", author: "영호", date: "2025-05-09" },
    { id: 3, title: "서울 플로깅 후기", author: "수현", date: "2025-05-08" },
  ];

  return (
    <MainLayout>
      {/* ✅ Page Header */}
      <section className="relative h-[20vh] bg-emerald-700 text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative text-center px-4 max-w-lg mx-auto animate-fadeIn">
          <h1 className="text-3xl md:text-xl font-extrabold mb-4">마이페이지</h1>
          <p className="text-lg">나의 친환경 여행과 활동을 확인하세요.</p>
        </div>
      </section>

      {/* ✅ Profile + Stats + Trips */}
      <section className="py-8 animate-fadeIn max-w-6xl mx-auto px-4">
        <div className="shadow rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white p-6 flex flex-col md:flex-row items-start gap-6">
          {/* Profile */}
          <div className="basis-1/4 min-w-[180px] flex flex-col items-center text-center">
            <h2 className="text-sm text-gray-500 dark:text-gray-400">
              나만의 친환경 여행 여정을 기록해보세요!
            </h2>
            <div className="mt-4 w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">
              프로필
            </div>
            <h3 className="text-xl font-semibold mt-4">이승재</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">abc@example.com</p>
            <span className="mt-2 px-3 py-1 text-xs bg-emerald-100 text-emerald-700 rounded-full">
              개인 사용자 (B2C)
            </span>
            <span className="mt-1 text-xs text-gray-400 dark:text-gray-500">Explorer Lv.3</span>
          </div>

          {/* Stats */}
          <div className="basis-1/4 min-w-[200px] flex flex-row md:flex-col items-center justify-center gap-3">
            {[
              { label: "여행 횟수", value: "12", color: "emerald" },
              { label: "탄소 절감량", value: "245.5 kg", color: "emerald" },
              { label: "ESG 점수", value: "87", color: "blue" },
              { label: "", value: "정보수정", color: "blue" },
            ].map(({ label, value, color }, index) =>
              index === 3 ? (
                <div key={index} className="bg-white dark:bg-gray-700 shadow rounded-lg w-36 h-14 flex items-center justify-center">
                  <button
                    onClick={() => alert("정보수정 기능 예정")}
                    className="text-blue-600 dark:text-blue-400 font-bold text-lg hover:underline"
                  >
                    {value}
                  </button>
                </div>
              ) : (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 shadow rounded-lg w-36 h-14 flex flex-col justify-center items-center text-center gap-y-0.5"
                >
                  <p className={`text-${color}-600 dark:text-${color}-400 font-bold text-lg leading-tight`}>
                    {value}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-tight">{label}</p>
                </div>
              )
            )}
          </div>

          {/* Travel Plans */}
          <div className="flex-1">
            <h4 className="font-semibold text-md mb-2">여행 일정</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>✅ 2025-06-01 제주도 3박4일 [경비: $2,560]</li>
              <li>✅ 2025-07-15 오사카 4일 [경비: $4,560]</li>
              <li>✅ 2025-08-20 파리 5일 [경비: $930]</li>
            </ul>
            <h4 className="font-semibold text-md mt-4 mb-2">여행 메모</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>“오사카 도톤보리 최고! 파리 에펠탑 야경은 평생 기억”</li>
              <li>“지속가능한 친환경 호텔이 너무 만족스러웠다.”</li>
              <li>“제주 한라산 등반 성공! 탄소 절감 포인트 획득 👍”</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ✅ Features */}
      <section className="py-2 max-w-6xl mx-auto px-4 animate-fadeIn">
        <div className="shadow rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white p-6">
          <h3 className="text-2xl font-bold text-center mb-8">나의 관리 메뉴</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "여행 일정 관리", desc: "나의 여행 기록 및 예약 현황 확인" },
              { title: "탄소 포인트", desc: "여행 중 절감한 탄소 포인트 및 거래 내역" },
              { title: "ESG 리포트 확인", desc: "나의 ESG 활동 기록과 점수 조회" },
              { title: "여행 동반자 찾기", desc: "여행 동반자 매칭 및 커뮤니티 활동" },
              { title: "내 감상 메모", desc: "나의 여행 메모, 후기 및 감상 기록" },
              { title: "고객센터 문의 내역", desc: "내가 남긴 고객센터 문의 및 답변 확인" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 cursor-pointer hover:ring-2 hover:ring-emerald-500 transition"
                onClick={() => alert(`${item.title} 페이지로 이동 예정입니다.`)}
              >
                <h4 className="text-xl font-semibold mb-4 text-emerald-700 dark:text-emerald-300">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Recent Activities */}
      <section className="py-3 text-center animate-fadeIn max-w-6xl mx-auto px-4">
        <div className="shadow rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white p-6">
          <h2 className="text-2xl font-bold mb-6">최근 활동</h2>
          <div className="max-w-4xl mx-auto">
            {recentActivities.map((post) => (
              <div
                key={post.id}
                onClick={() => navigate(`/community/post/${post.id}`)}
                className="flex justify-between items-center bg-white dark:bg-gray-700 p-4 mb-4 rounded shadow hover:scale-105 transition cursor-pointer"
              >
                <div className="text-left">
                  <h3 className="text-md font-semibold text-emerald-700 dark:text-emerald-300">{post.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">by {post.author} | {post.date}</p>
                </div>
                <div className="text-sm text-gray-400">▶</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
