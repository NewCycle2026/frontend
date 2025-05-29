// src/components/dashboard/UserStatusPie.tsx
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "활성 사용자", value: 82 },
  { name: "비활성 사용자", value: 12 },
  { name: "탈퇴 사용자", value: 6 },
];

const COLORS = ["#10b981", "#fbbf24", "#ef4444"];

export default function UserStatusPie() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">👥 사용자 상태 비율</h2>
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
