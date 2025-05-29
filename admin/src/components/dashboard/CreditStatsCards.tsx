// ✅ ESG 포인트 총 합계 카드
const stats = [
  { label: "총 발급 포인트", value: "5,300P", color: "text-green-600" },
  { label: "총 소멸 포인트", value: "1,130P", color: "text-yellow-600" },
  { label: "총 환전 포인트", value: "995P", color: "text-blue-600" },
];

export default function CreditStatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow flex flex-col justify-between"
        >
          <span className="text-sm text-gray-500 dark:text-gray-300">{stat.label}</span>
          <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
        </div>
      ))}
    </div>
  );
}
