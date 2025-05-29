// src/pages/companions/DangerMatchPage.tsx

const dangers = [
  { id: 1, user: "안지호", country: "이라크", date: "2025-06-01", status: "관리자 검토중" },
  { id: 2, user: "서수민", country: "아프가니스탄", date: "2025-06-05", status: "자동 차단됨" },
];

export default function DangerMatchPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">위험국가 매칭 경고</h1>
      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">사용자</th>
            <th className="p-2">위험국가</th>
            <th className="p-2">출발일</th>
            <th className="p-2">상태</th>
          </tr>
        </thead>
        <tbody>
          {dangers.map((d) => (
            <tr key={d.id} className="text-center border-t">
              <td className="p-2">{d.user}</td>
              <td className="p-2">{d.country}</td>
              <td className="p-2">{d.date}</td>
              <td className="p-2">{d.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}