import SubLayout from "../layouts/LayoutSub";

export default function ApiManagementPage() {
  const apis = [
    { name: "User API", description: "사용자 정보 조회 및 관리", endpoint: "/api/users", status: "Active" },
    { name: "Trip API", description: "여행 일정 추천 및 관리", endpoint: "/api/trips", status: "Active" },
    { name: "Carbon API", description: "탄소 포인트 적립 및 거래", endpoint: "/api/carbon", status: "Active" },
    { name: "Community API", description: "커뮤니티 글 및 댓글 관리", endpoint: "/api/community", status: "Inactive" },
    { name: "Admin API", description: "관리자 전용 API", endpoint: "/api/admin", status: "Active" },
  ];

  return (
    <SubLayout>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-green-600 mb-8">🚀 Wayple API 관리</h1>

        <p className="mb-10 text-gray-600 text-base leading-relaxed">
          Wayple이 제공하는 공식 API 목록입니다. 협력사 및 파트너 기업에서 사용할 수 있습니다.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-300 shadow-lg text-base">
            <thead>
              <tr className="bg-green-100 text-gray-700">
                <th className="py-4 px-6 border-b border-gray-300 text-left">API 이름</th>
                <th className="py-4 px-6 border-b border-gray-300 text-left">설명</th>
                <th className="py-4 px-6 border-b border-gray-300 text-left">Endpoint</th>
                <th className="py-4 px-6 border-b border-gray-300 text-left">상태</th>
              </tr>
            </thead>
            <tbody>
              {apis.map((api) => (
                <tr key={api.name} className="hover:bg-gray-100">
                  <td className="py-4 px-6 border-b border-gray-300">{api.name}</td>
                  <td className="py-4 px-6 border-b border-gray-300">{api.description}</td>
                  <td className="py-4 px-6 border-b border-gray-300 text-blue-600">{api.endpoint}</td>
                  <td className="py-4 px-6 border-b border-gray-300">
                    {api.status === "Active" ? (
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">Active</span>
                    ) : (
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-red-700 bg-red-100 rounded-full">Inactive</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SubLayout>
  );
}
