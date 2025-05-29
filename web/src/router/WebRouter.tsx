// 📄 파일: /src/router/WebRouter.tsx

import { Route, Routes } from "react-router-dom";

// Pages
import AboutPage from "@/pages/about/AboutPage";
import CarbonSavingPage from "@/pages/carbon/CarbonSavingPage";
import CarbonMarketplacePage from "@/pages/CarbonMarketplacePage";
import PartnerGuidePage from "@/pages/partner/PartnerGuidePage";
import SupportMainPage from "@/pages/support/SupportMainPage";
import TripReportPage from "@/pages/tripreport/MainPage";
import HomePage from "../pages/HomePage";

// Member (✅ 오타 수정: Mebmer → member)
import LoginPage from "@/pages/user/LoginPage";
import MyPage from "@/pages/user/MyPage";
import RegisterPage from "@/pages/user/RegisterPage";

// Community
import CommunityMainPage from "@/pages/community/CommunityMainPage";
import TravelBoardListPage from "@/pages/community/travel/TravelBoardListPage";
import TravelBoardViewPage from "@/pages/community/travel/TravelBoardViewPage";
import TravelBoardWritePage from "@/pages/community/travel/TravelBoardWritePage";

// Admin
import AdminApiPage from "../pages/Admin/AdminApiPage";

export default function WebRouter() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/tripreport" element={<TripReportPage />} />
      <Route path="/carbonsaving" element={<CarbonSavingPage />} />
      <Route path="/carbonmarket" element={<CarbonMarketplacePage />} />
      <Route path="/partner" element={<PartnerGuidePage />} />
      <Route path="/support/support" element={<SupportMainPage />} />

      {/* Community */}
      <Route path="/communitymain" element={<CommunityMainPage />} />
      <Route path="/community/list" element={<TravelBoardListPage />} />
      <Route path="/community/post/:id" element={<TravelBoardViewPage />} />
      <Route path="/community/write" element={<TravelBoardWritePage />} />

      {/* Member */}
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Admin */}
      <Route path="/admin-api" element={<AdminApiPage />} />
    </Routes>
  );
}
