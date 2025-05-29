import PlatformUsagePie from "@/components/dashboard/PlatformUsagePie";
import UserGrowthChart from "@/components/dashboard/UserGrowthChart";
import UserSegmentStats from "@/components/dashboard/UserSegmentStats";
import UserStatusPie from "@/components/dashboard/UserStatusPie";

export default function UserAnalytics() {
  return (
    <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">사용자 통계 분석</h1>

      <UserSegmentStats />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UserGrowthChart />
        <UserStatusPie />
        <PlatformUsagePie />
      </div>
    </div>
  );
}
