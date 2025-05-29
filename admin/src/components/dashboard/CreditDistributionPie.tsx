// ✅ 거래 유형 비율 분석 (전체 중 비중 확인)
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "발급", value: 5300 },
  { name: "소멸", value: 1130 },
  { name: "환전", value: 995 },
];

const COLORS = ["#10b981", "#fbbf24", "#60a5fa"];

export default function CreditDistributionPie() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">📊 거래 비율 분석</h2>
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
