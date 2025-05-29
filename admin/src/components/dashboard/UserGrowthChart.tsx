// src/components/dashboard/UserGrowthChart.tsx
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { month: "1월", users: 320 },
  { month: "2월", users: 410 },
  { month: "3월", users: 580 },
  { month: "4월", users: 740 },
  { month: "5월", users: 890 },
];

export default function UserGrowthChart() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">📈 월별 사용자 증가 추이</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
