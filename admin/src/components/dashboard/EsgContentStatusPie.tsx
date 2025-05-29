import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "승인됨", value: 160 },
  { name: "대기중", value: 25 },
  { name: "블라인드 처리", value: 10 },
];

const COLORS = ["#10b981", "#facc15", "#ef4444"];

export default function EsgContentStatusPie() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">📋 게시글 상태 비율</h2>
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
