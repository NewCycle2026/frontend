// src/pages/community/travel/TravelBoardViewPage.tsx
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../../../layouts/LayoutMain";

export default function TravelBoardViewPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();

  const post = {
    title: "제주도 ESG 친환경 여행 후기",
    author: "지민",
    date: "2025-05-10",
    content: `이번 제주도 여행에서는 친환경 숙소와 플로깅 활동에 참여했습니다.
탄소 절감 인증서도 발급받고 좋은 사람들과 교류하며 정말 뜻깊은 시간을 보냈습니다.
Wayple 플랫폼 덕분에 많은 도움을 받았습니다. 모두도 꼭 추천해요!`,
  };

  const comments = [
    { id: 1, author: "영호", date: "2025-05-10", content: "정말 멋진 여행이네요! 다음에 저도 참여해보고 싶어요." },
    { id: 2, author: "수현", date: "2025-05-11", content: "플로깅 정말 좋은 활동이에요. 후기 감사합니다." },
  ];

  return (
    <MainLayout>
      {/* ✅ Page Header */}
      <section className="relative h-[20vh] bg-emerald-700 text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center px-4 max-w-lg mx-auto animate-fadeIn">
          <h1 className="text-3xl md:text-xl font-extrabold mb-4">여행 후기 상세보기</h1>
          <p className="text-lg">ESG 친환경 여행 경험을 공유하고 정보를 나누세요.</p>
        </div>
      </section>

      {/* ✅ 게시글 본문 */}
      <section className="py-10 animate-fadeIn max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-emerald-700 dark:text-emerald-300 hover:underline text-sm"
          >
            ← 목록으로 돌아가기
          </button>
        </div>

        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">by {post.author} | {post.date}</p>
        <p className="text-md text-gray-700 dark:text-gray-300 whitespace-pre-line">{post.content}</p>
      </section>

      {/* ✅ 댓글 영역 */}
      <section className="py-8 animate-fadeIn max-w-4xl mx-auto px-4">
        <h3 className="text-xl font-bold mb-6">댓글</h3>

        {/* ✅ 개선된 댓글 카드 스타일 */}
        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="flex justify-between items-center bg-white dark:bg-gray-700 p-4 rounded shadow cursor-pointer hover:ring-2 hover:ring-emerald-500 transition"
            >
              <div className="text-left">
                <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">
                  by {comment.author} | {comment.date}
                </p>
                <p className="text-md text-gray-700 dark:text-gray-100">{comment.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ 댓글 작성 폼 */}
        <div className="mt-8">
          <h4 className="text-md font-semibold mb-2">댓글 작성</h4>
          <textarea
            rows={3}
            placeholder="댓글을 입력하세요"
            className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 mb-2 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          ></textarea>
          <button
            type="button"
            className="bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-800 transition"
          >
            댓글 등록
          </button>
        </div>
        <div style={{ marginBottom: "40px" }}></div>
      </section>
    </MainLayout>
  );
}
