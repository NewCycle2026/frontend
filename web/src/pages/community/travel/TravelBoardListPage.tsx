// src/pages/community/travel/TravelBoardList.tsx
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../layouts/LayoutMain";

export default function TravelBoardList() {
  const navigate = useNavigate();

  // ✅ 임시 게시글 mock data
  const posts = [
    { id: 1, title: "제주도 친환경 여행 코스 추천", author: "지민", date: "2025-05-10", comments: 5 },
    { id: 2, title: "서울 플로깅 플랜 후기", author: "영호", date: "2025-05-09", comments: 2 },
    { id: 3, title: "부산 ESG 여행 팁 공유", author: "수현", date: "2025-05-08", comments: 7 },
    { id: 4, title: "강릉 자전거 탄소절감 여행기", author: "민준", date: "2025-05-07", comments: 3 },
    { id: 5, title: "제주도 친환경 여행 코스 추천", author: "지민", date: "2025-05-10", comments: 5 },
    { id: 6, title: "서울 플로깅 플랜 후기", author: "영호", date: "2025-05-09", comments: 2 },
    { id: 7, title: "부산 ESG 여행 팁 공유", author: "수현", date: "2025-05-08", comments: 7 },
    { id: 8, title: "강릉 자전거 탄소절감 여행기", author: "민준", date: "2025-05-07", comments: 3 },
    { id: 9, title: "제주도 친환경 여행 코스 추천", author: "지민", date: "2025-05-10", comments: 5 },
    { id: 10, title: "서울 플로깅 플랜 후기", author: "영호", date: "2025-05-09", comments: 2 },
    { id: 11, title: "부산 ESG 여행 팁 공유", author: "수현", date: "2025-05-08", comments: 7 },
    { id: 12, title: "강릉 자전거 탄소절감 여행기", author: "민준", date: "2025-05-07", comments: 3 },
    { id: 13, title: "서울 플로깅 플랜 후기", author: "영호", date: "2025-05-09", comments: 2 },
    { id: 14, title: "부산 ESG 여행 팁 공유", author: "수현", date: "2025-05-08", comments: 7 },
    { id: 15, title: "강릉 자전거 탄소절감 여행기", author: "민준", date: "2025-05-07", comments: 3 },
    { id: 16, title: "부산 ESG 여행 팁 공유", author: "수현", date: "2025-05-08", comments: 7 },
    { id: 17, title: "강릉 자전거 탄소절감 여행기", author: "민준", date: "2025-05-07", comments: 3 },
    { id: 18, title: "서울 플로깅 플랜 후기", author: "영호", date: "2025-05-09", comments: 2 },
    { id: 19, title: "부산 ESG 여행 팁 공유", author: "수현", date: "2025-05-08", comments: 7 },
    { id: 20, title: "강릉 자전거 탄소절감 여행기", author: "민준", date: "2025-05-07", comments: 3 },
  ];

  return (
    <MainLayout>
      {/* ✅ Page Header */}
      <section className="relative h-[20vh] bg-emerald-700 text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center px-4 max-w-lg mx-auto animate-fadeIn">
          <h1 className="text-3xl md:text-xl font-extrabold mb-4">여행 후기 게시판</h1>
          <p className="text-lg">ESG 친환경 여행 경험을 공유하고 정보를 나누세요.</p>
        </div>
      </section>

      {/* ✅ 글쓰기 버튼 + 리스트 */}
      <section className="py-10 animate-fadeIn max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">게시글 목록</h2>
          <button
            type="button"
            onClick={() => navigate("/community/write")}
            className="bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-800 transition"
          >
            글쓰기
          </button>
        </div>

        {/* ✅ 게시글 리스트 */}
        <div>
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => navigate(`/community/post/${post.id}`)}
              className="flex justify-between items-center bg-white dark:bg-gray-700 p-4 mb-4 rounded shadow hover:scale-105 transition cursor-pointer"
            >
              <div className="text-left">
                <h3 className="text-md font-semibold text-emerald-700 dark:text-emerald-300">{post.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">by {post.author} | {post.date}</p>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">💬 {post.comments}</div>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
