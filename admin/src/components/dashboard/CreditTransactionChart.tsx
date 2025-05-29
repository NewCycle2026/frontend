// ✅ 월별 ESG 크레딧 거래 현황 (발급 / 소멸 / 환전)
import {
  Bar,
  BarChart,
  Legend, ResponsiveContainer,
  Tooltip,
  XAxis, YAxis
} from "recharts";

const data = [
  { month: "1월", 발급: 920, 소멸: 180, 환전: 120 },
  { month: "2월", 발급: 1040, 소멸: 200, 환전: 190 },
  { month: "3월", 발급: 1280, 소멸: 260, 환전: 240 },
  { month: "4월", 발급: 1100, 소멸: 210, 환전: 195 },
  { month: "5월", 발급: 1320, 소멸: 280, 환전: 250 },
];

export default function CreditTransactionChart() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">💰 월별 ESG 크레딧 거래 현황</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="발급" fill="#10b981" />
          <Bar dataKey="소멸" fill="#f59e0b" />
          <Bar dataKey="환전" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
