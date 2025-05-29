// src/routes/adminRoutes.tsx
import { Route } from "react-router-dom";

// 👉 Dashboard
import DashboardPage from "@/pages/DashboardPage";

// 1️⃣ ESG 여행 콘텐츠
import ESGRecommendDashboard from "@/pages/esg-recommend";
import AccommodationList from "@/pages/esg-recommend/AccommodationList";
import DestinationList from "@/pages/esg-recommend/DestinationList";
import ThemeTags from "@/pages/esg-recommend/ThemeTags";
import TransportList from "@/pages/esg-recommend/TransportList";

// 2️⃣ 사용자 ESG 활동
import UserActivityDashboard from "@/pages/user-activities";
import ActivityStats from "@/pages/user-activities/ActivityStats";
import CarbonHistory from "@/pages/user-activities/CarbonHistory";
import PointsLedger from "@/pages/user-activities/PointsLedger";
import RewardPolicy from "@/pages/user-activities/RewardPolicy";

// 3️⃣ ESG 크레딧 거래 시스템
import CreditDashboard from "@/pages/credit-trading";
import ExpirationRules from "@/pages/credit-trading/ExpirationRules";
import ExternalCertLog from "@/pages/credit-trading/ExternalCertLog";
import IssueRequests from "@/pages/credit-trading/IssueRequests";
import TradingHistory from "@/pages/credit-trading/TradingHistory";

// 4️⃣ 기업 출장 리포트
import BusinessReportsDashboard from "@/pages/esg-bis-reports";
import CompanyTrips from "@/pages/esg-bis-reports/CompanyTrips";
import ReportDetail from "@/pages/esg-bis-reports/ReportDetail";
import Reports from "@/pages/esg-bis-reports/Reports";
import ReportSettings from "@/pages/esg-bis-reports/ReportSettings";

// 5️⃣ 실시간 안전 정보
import TravelSafetyDashboard from "@/pages/travel-safety";
import Announcements from "@/pages/travel-safety/Announcements";
import AutoTaggingRules from "@/pages/travel-safety/AutoTaggingRules";
import DisasterFeed from "@/pages/travel-safety/DisasterFeed";
import RiskCountries from "@/pages/travel-safety/RiskCountries";

// 6️⃣ 플랫폼 정책/제휴 관리
import PolicyDashboard from "@/pages/pship-poli";
import AdminRoles from "@/pages/pship-poli/AdminRoles";
import CertifiedProviders from "@/pages/pship-poli/CertifiedProviders";
import Partners from "@/pages/pship-poli/Partners";
import TermsVersion from "@/pages/pship-poli/TermsVersion";

// 동행자 매칭 페이지 import
import DangerMatch from "@/pages/companions/DangerMatch";
import MatchedList from "@/pages/companions/MatchedList";
import MatchRequest from "@/pages/companions/MatchRequest";
import RegionStats from "@/pages/companions/RegionStats";

// 게시판
import BoardCreatePage from "@/pages/board/BoardCreatePage";
import BoardDetailPage from "@/pages/board/BoardDetailPage";
import BoardEditPage from "@/pages/board/BoardEditPage";
import BoardListPage from "@/pages/board/BoardListPage";
import BoardTreePage from "@/pages/board/BoardTreePage";


export const adminRoutes = (
  <>
    {/* 기본 대시보드 */}
    <Route path="dashboard" element={<DashboardPage />} />

    {/* ESG 여행 콘텐츠 */}
    <Route path="esg-recommend" element={<ESGRecommendDashboard />} />
    <Route path="esg-recommend/destinations" element={<DestinationList />} />
    <Route path="esg-recommend/accommodations" element={<AccommodationList />} />
    <Route path="esg-recommend/transports" element={<TransportList />} />
    <Route path="esg-recommend/themes" element={<ThemeTags />} />

    {/* 사용자 ESG 활동 */}
    <Route path="user-activities" element={<UserActivityDashboard />} />
    <Route path="user-activities/carbon" element={<CarbonHistory />} />
    <Route path="user-activities/points" element={<PointsLedger />} />
    <Route path="user-activities/stats" element={<ActivityStats />} />
    <Route path="user-activities/rewards" element={<RewardPolicy />} />

    {/* ESG 크레딧 거래 시스템 */}
    <Route path="credit-trading" element={<CreditDashboard />} />
    <Route path="credit-trading/requests" element={<IssueRequests />} />
    <Route path="credit-trading/history" element={<TradingHistory />} />
    <Route path="credit-trading/cert-logs" element={<ExternalCertLog />} />
    <Route path="credit-trading/expiration" element={<ExpirationRules />} />

    {/* 출장 리포트 */}
    <Route path="esg-bis-reports" element={<BusinessReportsDashboard />} />
    <Route path="esg-bis-reports/trips" element={<CompanyTrips />} />
    <Route path="esg-bis-reports/reports" element={<Reports />} />
    <Route path="esg-bis-reports/reports/:id" element={<ReportDetail />} />
    <Route path="esg-bis-reports/settings" element={<ReportSettings />} />

    {/* 여행 안전 정보 */}
    <Route path="travel-safety" element={<TravelSafetyDashboard />} />
    <Route path="travel-safety/risk-countries" element={<RiskCountries />} />
    <Route path="travel-safety/disasters" element={<DisasterFeed />} />
    <Route path="travel-safety/announcements" element={<Announcements />} />
    <Route path="travel-safety/auto-tagging" element={<AutoTaggingRules />} />

    {/* 플랫폼 정책 / 제휴 */}
    <Route path="pship-poli" element={<PolicyDashboard />} />
    <Route path="pship-poli/partners" element={<Partners />} />
    <Route path="pship-poli/certified" element={<CertifiedProviders />} />
    <Route path="pship-poli/terms" element={<TermsVersion />} />
    <Route path="pship-poli/roles" element={<AdminRoles />} />

    {/* ESG 동행자 매칭 */}  
    <Route path="companions/requests" element={<MatchRequest />} />
    <Route path="companions/matched" element={<MatchedList />} />
    <Route path="companions/region-stats" element={<RegionStats />} />
    <Route path="companions/danger" element={<DangerMatch />} />  

    {/* 게시판 */} 
    <Route path="board/create" element={<BoardCreatePage />} />  
    <Route path="board/list" element={<BoardListPage />} />
    <Route path="board/:id" element={<BoardDetailPage />} />
    <Route path="board/:id/edit" element={<BoardEditPage />} />
    <Route path="board/tree" element={<BoardTreePage />} />
    
  </>
);