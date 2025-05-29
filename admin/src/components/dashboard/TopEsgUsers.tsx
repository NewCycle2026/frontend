const topUsers = [
  { name: "김지훈", count: 72 },
  { name: "이민정", count: 68 },
  { name: "박상우", count: 64 },
  { name: "최예린", count: 61 },
  { name: "정우성", count: 59 },
];

export default function TopEsgUsers() {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">🏅 ESG 활동 TOP 5 사용자</h2>
      <ul className="space-y-1">
        {topUsers.map((user, i) => (
          <li key={i} className="text-gray-700 dark:text-gray-300">
            {i + 1}. <strong>{user.name}</strong> - {user.count}회
          </li>
        ))}
      </ul>
    </div>
  );
}
