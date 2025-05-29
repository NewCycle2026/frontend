// src/pages/AdminApiPage.tsx
import WebLayout from "../../layouts/LayoutSub";

export default function AdminApiPage() {
  // 샘플 API 데이터 (추후 실제 DB/API 연결 예정)
  const apiList = [
    {
      id: 1,
      name: "여행 일정 추천 API",
      endpoint: "/api/recommendations",
      method: "GET",
      description: "사용자의 여행 성향을 기반으로 추천 일정을 제공합니다."
    },
    {
      id: 2,
      name: "탄소 절감 조회 API",
      endpoint: "/api/carbon-points",
      method: "GET",
      description: "사용자의 탄소 절감 및 포인트 정보를 조회합니다."
    },
    {
      id: 3,
      name: "탄소 크레딧 거래 API",
      endpoint: "/api/carbon-credits",
      method: "POST",
      description: "탄소 크레딧 구매 또는 판매 요청을 처리합니다."
    }
  ];

  return (
    <WebLayout>
      
      <h1 className="text-3xl font-bold text-cyan-700 mb-4">🛠️ 관리자 API 관리 페이지</h1>
      <p className="mb-6">Wayple 플랫폼에서 제공하는 API 목록을 확인하고 관리할 수 있습니다.</p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">ID</th>
              <th className="px-4 py-2 border-b">API 이름</th>
              <th className="px-4 py-2 border-b">Endpoint</th>
              <th className="px-4 py-2 border-b">Method</th>
              <th className="px-4 py-2 border-b">설명</th>
            </tr>
          </thead>
          <tbody>
            {apiList.map(api => (
              <tr key={api.id} className="text-center">
                <td className="px-4 py-2 border-b">{api.id}</td>
                <td className="px-4 py-2 border-b">{api.name}</td>
                <td className="px-4 py-2 border-b font-mono text-blue-600">{api.endpoint}</td>
                <td className="px-4 py-2 border-b">
                  <span className="inline-block px-2 py-1 bg-cyan-600 text-white text-xs rounded">
                    {api.method}
                  </span>
                </td>
                <td className="px-4 py-2 border-b text-left">{api.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="mt-6">
        <a href="/" className="text-gray-500 hover:underline">← 홈으로 돌아가기</a>
      </section>
    </WebLayout>
  );
}
