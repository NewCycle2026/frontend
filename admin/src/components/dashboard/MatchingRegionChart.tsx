import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { region: "서울", value: 85 },
  { region: "제주", value: 65 },
  { region: "부산", value: 45 },
  { region: "강릉", value: 30 },
  { region: "해외", value: 20 },
];

export default function MatchingRegionChart() {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">📍 지역별 매칭 활동</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="region" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#60a5fa" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
