// src/components/dashboard/PlatformUsagePie.tsx
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "모바일 가입", value: 62 },
  { name: "웹 가입", value: 38 },
];

const COLORS = ["#60a5fa", "#a78bfa"];

export default function PlatformUsagePie() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">📱 플랫폼 가입 비율</h2>
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
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
