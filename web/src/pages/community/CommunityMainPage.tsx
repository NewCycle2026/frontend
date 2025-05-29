// src/pages/community/CommunityMainPage.tsx
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/LayoutMain";

export default function CommunityMainPage() {
  const navigate = useNavigate();

  // ✅ 임시 최신 글 mock data
  const latestPosts = [
    { id: 1, title: "부산 ESG 여행 후기", author: "지민", date: "2025-05-10" },
    { id: 2, title: "동행 구합니다 : 제주도 친환경 트레킹", author: "영호", date: "2025-05-09" },
    { id: 3, title: "서울 플로깅 모임 후기", author: "수현", date: "2025-05-08" },
    { id: 4, title: "탄소 절감 캠페인 참여 인증", author: "민준", date: "2025-05-07" },
    { id: 5, title: "부산 ESG 여행 후기", author: "지민", date: "2025-05-10" },
    { id: 6, title: "동행 구합니다 : 제주도 친환경 트레킹", author: "영호", date: "2025-05-09" },
    { id: 7, title: "서울 플로깅 모임 후기", author: "수현", date: "2025-05-08" },
    { id: 8, title: "탄소 절감 캠페인 참여 인증", author: "민준", date: "2025-05-07" },
    { id: 9, title: "부산 ESG 여행 후기", author: "지민", date: "2025-05-10" },
    { id: 10, title: "동행 구합니다 : 제주도 친환경 트레킹", author: "영호", date: "2025-05-09" },
  ];

  return (
    <MainLayout>
      {/* ✅ Page Header */}
      <section className="relative h-[20vh] bg-emerald-700 text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center px-4 max-w-lg mx-auto animate-fadeIn">
          <h1 className="text-3xl md:text-xl font-extrabold mb-4">웨이플 커뮤니티</h1>
          <p className="text-lg">지속 가능한 여행을 사랑하는 여행자들의 친환경 소통 공간입니다.</p>
        </div>
      </section>

      {/* ✅ 커뮤니티 주요 메뉴 */}
      <section className="py-12 text-center animate-fadeIn">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div onClick={() => navigate("/community/list")} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:scale-105 transition cursor-pointer">
            <h3 className="text-lg font-semibold mb-3">여행 후기 게시판</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">나의 여행 이야기, ESG 여행 경험을 자유롭게 공유하세요.</p>
          </div>
          <div onClick={() => navigate("/community/travelmates")} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:scale-105 transition cursor-pointer">
            <h3 className="text-lg font-semibold mb-3">여행 동반자 찾기</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">함께 지속 가능한 여행을 떠날 동행을 찾으세요.</p>
          </div>
          <div onClick={() => navigate("/community/carbon")} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:scale-105 transition cursor-pointer">
            <h3 className="text-lg font-semibold mb-3">탄소 절감 인증</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">내 탄소 절감 활동을 기록하고 인증받으세요.</p>
          </div>
          <div onClick={() => navigate("/community/esgtips")} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:scale-105 transition cursor-pointer">
            <h3 className="text-lg font-semibold mb-3">ESG 여행 Tip</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">친환경 여행 노하우와 정보를 공유하세요.</p>
          </div>
          <div onClick={() => navigate("/community/free")} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:scale-105 transition cursor-pointer">
            <h3 className="text-lg font-semibold mb-3">자유게시판</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">친환경, 여행, Wayple 관련 자유로운 대화를 나누세요.</p>
          </div>
          <div onClick={() => navigate("/community/notice")} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:scale-105 transition cursor-pointer">
            <h3 className="text-lg font-semibold mb-3">공지사항</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">웨이플 운영팀의 공지 및 이벤트 정보를 확인하세요.</p>
          </div>
        </div>
      </section>

      {/* ✅ 커뮤니티 최신 이야기 */}
      <section className="py-12 text-center animate-fadeIn bg-emerald-50 dark:bg-gray-800">
        <h2 className="text-2xl font-bold mb-6">커뮤니티 최신 이야기</h2>
        <div className="max-w-4xl mx-auto">
          {latestPosts.map((post) => (
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
      </section>
    </MainLayout>
  );
}
