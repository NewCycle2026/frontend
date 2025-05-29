// ✅ 발급 포인트 기준 Top 사용자
const topUsers = [
  { name: "이채민", points: 780 },
  { name: "김동우", points: 720 },
  { name: "정서윤", points: 710 },
  { name: "박지호", points: 690 },
  { name: "최예진", points: 670 },
];

export default function TopCreditUsers() {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">🏅 ESG 포인트 TOP5 사용자</h2>
      <ul className="space-y-2">
        {topUsers.map((u, i) => (
          <li key={i} className="text-gray-700 dark:text-gray-300">
            {i + 1}. <strong>{u.name}</strong> - {u.points}P
          </li>
        ))}
      </ul>
    </div>
  );
}
