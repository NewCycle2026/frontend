import EsgActivityTrendChart from "@/components/dashboard/EsgActivityTrendChart";
import EsgActivityTypePie from "@/components/dashboard/EsgActivityTypePie";
import EsgCertificationGauge from "@/components/dashboard/EsgCertificationGauge";
import TopEsgUsers from "@/components/dashboard/TopEsgUsers";

export default function EsgActivityAnalytics() {
  return (
    <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">ESG 활동 통계</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <EsgActivityTypePie />
        <EsgActivityTrendChart />
        <EsgCertificationGauge />
        <TopEsgUsers />
      </div>
    </div>
  );
}
