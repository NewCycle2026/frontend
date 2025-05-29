// src/pages/TravelCompanionPage.tsx
import SubLayout from "../layouts/LayoutSub";

export default function TravelCompanionPage() {
  // 샘플 동반자 데이터 (추후 API 연결 시 교체)
  const travelCompanions = [
    {
      id: 1,
      name: "김나연",
      destination: "제주",
      dates: "2025-06-10 ~ 2025-06-14",
      interests: "하이킹, 자연탐방, 로컬 맛집",
      status: "매칭 대기"
    },
    {
      id: 2,
      name: "박준호",
      destination: "부산",
      dates: "2025-07-01 ~ 2025-07-03",
      interests: "서핑, 바다사진, 해산물 투어",
      status: "매칭 확정"
    },
    {
      id: 3,
      name: "이수빈",
      destination: "강릉",
      dates: "2025-05-20 ~ 2025-05-22",
      interests: "카페 투어, 바닷가 산책, 사진 촬영",
      status: "매칭 대기"
    }
  ];

  return (
    <SubLayout>
      <h1 className="text-3xl font-bold text-teal-600 mb-4">🌍 여행 동반자 매칭</h1>
      <p className="mb-6">당신과 여행 일정 및 취향이 비슷한 여행 동반자를 추천합니다.</p>

      <div className="space-y-4">
        {travelCompanions.map(companion => (
          <div key={companion.id} className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-teal-700">{companion.name}</h2>
            <p><strong>여행지:</strong> {companion.destination}</p>
            <p><strong>여행 기간:</strong> {companion.dates}</p>
            <p><strong>관심사:</strong> {companion.interests}</p>
            <p><strong>상태:</strong> {companion.status}</p>
            <button className="mt-2 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700">
              프로필 보기
            </button>
          </div>
        ))}
      </div>

      <section className="mt-6">
        <a href="/" className="text-gray-500 hover:underline">← 홈으로 돌아가기</a>
      </section>
    </SubLayout>
  );
}
