import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "추천 여행지", value: 120 },
  { name: "친환경 숙소", value: 80 },
  { name: "친환경 교통", value: 50 },
  { name: "테마 태그", value: 60 },
];

const COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#ef4444"];

export default function EsgContentTypePie() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">🗂️ 콘텐츠 유형별 등록 비율</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" outerRadius={80} label dataKey="value">
            {data.map((entry, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
