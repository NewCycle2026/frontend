import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { month: "1월", 신청: 50, 성사: 38 },
  { month: "2월", 신청: 72, 성사: 55 },
  { month: "3월", 신청: 80, 성사: 68 },
  { month: "4월", 신청: 94, 성사: 74 },
  { month: "5월", 신청: 103, 성사: 89 },
];

export default function MatchingTrendChart() {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">📊 월별 매칭 신청 vs 성사</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="신청" fill="#facc15" />
          <Bar dataKey="성사" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
