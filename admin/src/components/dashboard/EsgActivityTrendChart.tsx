import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { month: "1월", activities: 320 },
  { month: "2월", activities: 410 },
  { month: "3월", activities: 580 },
  { month: "4월", activities: 650 },
  { month: "5월", activities: 700 },
];

export default function EsgActivityTrendChart() {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">📈 월별 활동량 변화</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="activities" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
