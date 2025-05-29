import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { month: "1월", count: 40 },
  { month: "2월", count: 58 },
  { month: "3월", count: 74 },
  { month: "4월", count: 96 },
  { month: "5월", count: 115 },
];

export default function EsgContentTrendChart() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">📈 월별 콘텐츠 등록 추이</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
