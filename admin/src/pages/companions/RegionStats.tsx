// src/pages/companions/RegionStatsPage.tsx

const stats = [
  { id: 1, region: "서울", count: 48 },
  { id: 2, region: "제주", count: 65 },
  { id: 3, region: "부산", count: 37 },
  { id: 4, region: "강릉", count: 29 },
];

export default function RegionStatsPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">지역별 매칭 활동 통계</h1>
      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">지역</th>
            <th className="p-2">매칭 수</th>
          </tr>
        </thead>
        <tbody>
          {stats.map((s) => (
            <tr key={s.id} className="text-center border-t">
              <td className="p-2">{s.region}</td>
              <td className="p-2">{s.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}