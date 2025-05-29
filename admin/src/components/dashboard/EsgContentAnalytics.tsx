import EsgContentStatusPie from "@/components/dashboard/EsgContentStatusPie";
import EsgContentTrendChart from "@/components/dashboard/EsgContentTrendChart";
import EsgContentTypePie from "@/components/dashboard/EsgContentTypePie";
import TopViewedContents from "@/components/dashboard/TopViewedContents";

export default function EsgContentAnalytics() {
  return (
    <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">ESG 콘텐츠 통계</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <EsgContentTypePie />
        <EsgContentTrendChart />
        <EsgContentStatusPie />
        <TopViewedContents />
      </div>
    </div>
  );
}
