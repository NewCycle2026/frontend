import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "안전 지역", value: 340 },
  { name: "위험 국가 포함", value: 56 },
];

const COLORS = ["#3b82f6", "#ef4444"];

export default function DangerZoneMatchingPie() {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">🚨 위험국가 매칭 비중</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" outerRadius={80} dataKey="value" label>
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
