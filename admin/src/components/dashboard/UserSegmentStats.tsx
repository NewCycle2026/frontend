// src/components/dashboard/UserSegmentStats.tsx

const userStats = [
  { type: "B2C 사용자", value: "3,412명", bg: "bg-blue-100", text: "text-blue-900" },
  { type: "B2B 기업", value: "182곳", bg: "bg-green-100", text: "text-green-900" },
  { type: "B2G 기관", value: "21기관", bg: "bg-yellow-100", text: "text-yellow-900" },
];

export default function UserSegmentStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {userStats.map((item, i) => (
        <div
          key={i}
          className={`${item.bg} ${item.text} p-4 rounded-lg shadow-md dark:bg-opacity-10`}
        >
          <div className="text-sm">{item.type}</div>
          <div className="text-xl font-bold">{item.value}</div>
        </div>
      ))}
    </div>
  );
}
