import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "친환경 숙소", value: 320 },
  { name: "지속가능 교통", value: 270 },
  { name: "ESG 인증 참여", value: 180 },
  { name: "ESG 설문 응답", value: 90 },
];

const COLORS = ["#34d399", "#60a5fa", "#fbbf24", "#f87171"];

export default function EsgActivityTypePie() {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">🌱 활동 유형별 비율</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
