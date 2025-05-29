// src/pages/RecommendPage.tsx
import SubLayout from "../layouts/LayoutSub";

export default function RecommendPage() {
  // 샘플 추천 일정 (추후 API로 대체 가능)
  const sampleTrips = [
    { id: 1, title: "서울 1박 2일 친환경 여행", description: "서울의 공원, 친환경 숙소, 로컬 식당을 추천합니다." },
    { id: 2, title: "부산 2박 3일 해양 생태 투어", description: "부산의 해양 보호구역과 에코 투어 코스를 추천합니다." },
    { id: 3, title: "제주 3박 4일 탄소절감 여행", description: "전기차 렌트, 제주 에코 숙소, 친환경 맛집 코스를 추천합니다." }
  ];

  return (
    <SubLayout>
      <div className="bg-white shadow-md rounded-lg p-6 min-w-[800px]">
      <h1 className="text-3xl font-bold text-purple-600 mb-4">🗺️ 여행 일정 추천</h1>
      <p className="mb-4">당신의 여행 스타일과 ESG 기준에 맞는 추천 일정을 제공합니다.</p>

      <div className="space-y-4">
        {sampleTrips.map(trip => (
          <div key={trip.id} className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-purple-700">{trip.title}</h2>
            <p className="text-gray-600">{trip.description}</p>
            <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
              추천 상세 보기
            </button>
          </div>
        ))}
      </div>

      <section className="mt-6">
        <a href="/" className="text-gray-500 hover:underline">← 홈으로 돌아가기</a>
      </section>
      </div>
    </SubLayout>
  );
}
