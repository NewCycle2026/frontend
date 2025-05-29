// src/pages/MainDashboard.tsx
import Breadcrumb from "@/components/Breadcrumb";

import PlatformUsagePie from '@/components/dashboard/PlatformUsagePie';
import UserGrowthChart from '@/components/dashboard/UserGrowthChart';
import UserSegmentStats from '@/components/dashboard/UserSegmentStats';
import UserStatusPie from '@/components/dashboard/UserStatusPie';

import EsgActivityTrendChart from '@/components/dashboard/EsgActivityTrendChart';
import EsgActivityTypePie from '@/components/dashboard/EsgActivityTypePie';
import EsgCertificationGauge from '@/components/dashboard/EsgCertificationGauge';
import TopEsgUsers from '@/components/dashboard/TopEsgUsers';

import EsgContentStatusPie from '@/components/dashboard/EsgContentStatusPie';
import EsgContentTrendChart from '@/components/dashboard/EsgContentTrendChart';
import EsgContentTypePie from '@/components/dashboard/EsgContentTypePie';
import TopViewedContents from '@/components/dashboard/TopViewedContents';

import DangerZoneMatchingPie from '@/components/dashboard/DangerZoneMatchingPie';
import MatchingRegionChart from '@/components/dashboard/MatchingRegionChart';
import MatchingSuccessRate from '@/components/dashboard/MatchingSuccessRate';
import MatchingTrendChart from '@/components/dashboard/MatchingTrendChart';
import TopCompanionUsers from '@/components/dashboard/TopCompanionUsers';

import CreditDistributionPie from '@/components/dashboard/CreditDistributionPie';
import CreditStatsCards from '@/components/dashboard/CreditStatsCards';
import CreditTransactionChart from '@/components/dashboard/CreditTransactionChart';
import TopCreditUsers from '@/components/dashboard/TopCreditUsers';

import AdminLogTable from '@/components/dashboard/AdminLogTable';

export default function MainDashboard() {
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 space-y-12 min-h-screen">
      <Breadcrumb items={["대시보드", "통합 운용 요약"]} />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        📋 통합 운용 요약
      </h1>

      {/* 사용자 통계 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">👤 사용자 통계</h2>
        <UserSegmentStats />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <UserGrowthChart />
          <UserStatusPie />
          <PlatformUsagePie />
        </div>
      </section>

      {/* ESG 활동 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">📈 ESG 활동</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <EsgActivityTypePie />
          <EsgActivityTrendChart />
          <EsgCertificationGauge />
          <TopEsgUsers />
        </div>
      </section>

      {/* 콘텐츠 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">📝 ESG 콘텐츠</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <EsgContentTypePie />
          <EsgContentTrendChart />
          <EsgContentStatusPie />
          <TopViewedContents />
        </div>
      </section>

      {/* 동행자 매칭 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">👫 동행자 매칭</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MatchingRegionChart />
          <MatchingTrendChart />
          <MatchingSuccessRate />
          <DangerZoneMatchingPie />
          <TopCompanionUsers />
        </div>
      </section>

      {/* 크레딧 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">💰 ESG 크레딧</h2>
        <CreditStatsCards />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CreditTransactionChart />
          <CreditDistributionPie />
          <TopCreditUsers />
        </div>
      </section>

      {/* 감사 로그 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">🛡️ 관리자 감사 로그</h2>
        <AdminLogTable />
      </section>
    </div>
  );
}
