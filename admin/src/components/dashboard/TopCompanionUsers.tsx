const topCompanions = [
  { name: "김은서", matches: 18 },
  { name: "정민호", matches: 17 },
  { name: "박세라", matches: 15 },
  { name: "이준호", matches: 14 },
  { name: "송하윤", matches: 12 },
];

export default function TopCompanionUsers() {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">👫 매칭 TOP 5 사용자</h2>
      <ul className="space-y-2">
        {topCompanions.map((u, i) => (
          <li key={i} className="text-gray-700 dark:text-gray-300">
            {i + 1}. {u.name} - <span className="font-semibold">{u.matches}회</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
