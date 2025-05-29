// src/pages/companions/MatchRequestPage.tsx

const requests = [
  { id: 1, user: "김지훈", region: "제주", date: "2025-06-10", status: "대기" },
  { id: 2, user: "이민정", region: "부산", date: "2025-06-12", status: "대기" },
  { id: 3, user: "박세라", region: "서울", date: "2025-06-15", status: "거절" },
];

export default function MatchRequestPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">매칭 요청 목록</h1>
      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">요청자</th>
            <th className="p-2">희망 지역</th>
            <th className="p-2">출발일</th>
            <th className="p-2">상태</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req) => (
            <tr key={req.id} className="text-center border-t">
              <td className="p-2">{req.user}</td>
              <td className="p-2">{req.region}</td>
              <td className="p-2">{req.date}</td>
              <td className="p-2">{req.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}