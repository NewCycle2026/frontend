import DangerZoneMatchingPie from "@/components/dashboard/DangerZoneMatchingPie";
import MatchingRegionChart from "@/components/dashboard/MatchingRegionChart";
import MatchingSuccessRate from "@/components/dashboard/MatchingSuccessRate";
import MatchingTrendChart from "@/components/dashboard/MatchingTrendChart";
import TopCompanionUsers from "@/components/dashboard/TopCompanionUsers";

export default function CompanionAnalytics() {
  return (
    <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">여행 동행자 매칭 통계</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MatchingRegionChart />
        <MatchingTrendChart />
        <MatchingSuccessRate />
        <DangerZoneMatchingPie />
        <TopCompanionUsers />
      </div>
    </div>
  );
}
