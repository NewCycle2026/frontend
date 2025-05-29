// src/pages/companions/MatchedListPage.tsx

const matches = [
  { id: 1, date: "2025-05-20", user1: "최예린", user2: "정우성", region: "강릉" },
  { id: 2, date: "2025-05-18", user1: "홍지민", user2: "김도현", region: "전주" },
];

export default function MatchedListPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">매칭 성사 현황</h1>
      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">일자</th>
            <th className="p-2">사용자1</th>
            <th className="p-2">사용자2</th>
            <th className="p-2">지역</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match) => (
            <tr key={match.id} className="text-center border-t">
              <td className="p-2">{match.date}</td>
              <td className="p-2">{match.user1}</td>
              <td className="p-2">{match.user2}</td>
              <td className="p-2">{match.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}