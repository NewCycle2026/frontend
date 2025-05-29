import CreditDistributionPie from "@/components/dashboard/CreditDistributionPie";
import CreditStatsCards from "@/components/dashboard/CreditStatsCards";
import CreditTransactionChart from "@/components/dashboard/CreditTransactionChart";
import TopCreditUsers from "@/components/dashboard/TopCreditUsers";

export default function CreditAnalytics() {
  return (
    <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* 페이지 타이틀 */}
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">ESG 크레딧 거래 통계</h1>

      {/* 총합 카드 */}
      <CreditStatsCards />

      {/* 그래프 영역 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CreditTransactionChart />
        <CreditDistributionPie />
        <TopCreditUsers />
      </div>
    </div>
  );
}
