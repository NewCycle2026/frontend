// src/components/Sidebar.tsx

import { useSidebar } from '@/contexts/SidebarContext';
import {
  ActivitySquare,
  BadgeDollarSign,
  BookOpenCheck, CalendarClock, ChevronDown, ChevronRight,
  ExternalLink,
  FileBarChart2,
  FileText, Globe,
  LayoutDashboard, Menu,
  ShieldCheck, User, Users, UsersRound
} from 'lucide-react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { useMeContext } from "@/contexts/MeContext";

export default function Sidebar() {
  const { isCollapsed, toggleSidebar } = useSidebar();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navigate = useNavigate();
  const { me, loading } = useMeContext(); // 마이페이지
  
  const toggleMenu = (menu: string) => {
    setOpenMenu(prev => (prev === menu ? null : menu));
  };

  const renderSubItem = (to: string, label: string) => (
    <NavLink
      to={to}
      className={({ isActive }) => [
        'ml-7 flex items-center rounded px-3 py-1 text-sm transition',
        isActive
          ? 'bg-[#5c7098] text-white font-bold'
          : 'text-[#cbd5e1] hover:text-white hover:font-bold dark:text-[#aeb4c0]'
      ].join(' ')}
    >
      {!isCollapsed && <span>{label}</span>}
    </NavLink>
  );

  const renderExternalItem = (href: string, label: string) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="ml-7 flex items-center rounded px-3 py-1 text-sm text-[#cbd5e1] hover:text-white hover:font-bold dark:text-[#aeb4c0]"
    >
      {!isCollapsed && <span>{label}</span>}
      {!isCollapsed && <ExternalLink className="ml-1 w-3 h-3" />}
    </a>
  );

  return (
    <aside
      className={`bg-[#343c48] dark:bg-[#292f3f] border-r border-gray-700 text-white transition-all duration-300 flex flex-col py-4
        ${isCollapsed ? 'w-16' : 'w-56 items-start px-4'}`}
    >
      <button
        onClick={toggleSidebar}
        className={`flex items-center px-3 py-2 gap-2 text-sm font-semibold rounded mb-4 transition hover:bg-[#4e5667] text-left
          ${isCollapsed ? 'justify-center' : 'w-full'}`}
      >
        <Menu className="w-4 h-4" />
        {!isCollapsed && <span>메뉴 토글</span>}
      </button>

      <ul className="space-y-2 w-full">
        {/* 대시보드 */}
        <li>
          <button
            onClick={() => {
              toggleMenu('dashboard');
              navigate('/admin/dashboard');
            }}
            className="flex items-center gap-2 px-3 py-2 w-full rounded hover:bg-[#4e5667] text-left"
          >
            <LayoutDashboard className="w-4 h-4" />
            {!isCollapsed && <span>대시보드</span>}
            {!isCollapsed && (openMenu === 'dashboard' ? <ChevronDown className="ml-auto w-4 h-4" /> : <ChevronRight className="ml-auto w-4 h-4" />)}
          </button>
          {openMenu === 'dashboard' && !isCollapsed && (
            <div className="space-y-1">
              {renderSubItem('/admin/dashboard', '통합 운영 요약')}
              {renderSubItem('/admin/user-activities/stats', 'ESG 활동 통계')}
              {renderSubItem('/admin/companions/region-stats', '매칭 통계 분석')}
              {renderSubItem('/admin/credit-trading/history', '크레딧 거래 통계')}
              {renderSubItem('/admin/pship-poli/roles', '관리자 활동 로그')}
            </div>
          )}
        </li>

        {/* 예약·일정 관리 */}
        <li>
          <button onClick={() => toggleMenu('schedule')} className="flex items-center gap-2 px-3 py-2 w-full rounded hover:bg-[#4e5667] text-left">
            <CalendarClock className="w-4 h-4" />
            {!isCollapsed && <span>예약·일정</span>}
            {!isCollapsed && (openMenu === 'schedule' ? <ChevronDown className="ml-auto w-4 h-4" /> : <ChevronRight className="ml-auto w-4 h-4" />)}
          </button>
          {openMenu === 'schedule' && !isCollapsed && (
            <div className="space-y-1">
              {renderSubItem('/admin/schedule/ai-routes', 'AI 추천 일정 내역')}    {/* 사용자 요청 기반 생성된 경로/일정 추천 결과 로그 */}
              {renderSubItem('/admin/schedule/user-plans', '사용자 일정표 관리')}   {/* 사용자 일정표 편집/삭제 및 전체 일정보기 (캘린더 등) */}
              {renderSubItem('/admin/schedule/flights', '항공 예약 현황')}          {/* 사용자 항공권 예약 내역, 상태 필터링 */}
              {renderSubItem('/admin/schedule/accommodation', '숙박 예약 현황')}    {/* ESG 인증 숙소 우선순 포함 숙소 예약 리스트 */}
              {renderSubItem('/admin/schedule/transport', '교통 예약 현황')}        {/* 전기차/버스/KTX 등 교통 수단 선택과 예약 상태 확인 */}
              {renderSubItem('/admin/schedule/conflicts', '예약-일정 충돌 감지')}   {/* 일정표 상 이동 시간과 실제 예약 시간 불일치 탐지 */}
              {renderSubItem('/admin/schedule/sync-logs', '예약 연동 상태 로그')}   {/* OTA 연동 실패/지연 로그 자동 기록 */}
              {renderSubItem('/admin/schedule/esg-stats', 'ESG 우선 예약 통계')}    {/* ESG 인증 숙소/수단의 예약 비율 */}
            </div>
          )}
        </li>

        {/* ESG 데이터 관리 */}
        <li>
          <button onClick={() => toggleMenu('esgdata')} className="flex items-center gap-2 px-3 py-2 w-full rounded hover:bg-[#4e5667] text-left">
            <Globe className="w-4 h-4" />
            {!isCollapsed && <span>ESG 데이터</span>}
            {!isCollapsed && (openMenu === 'esgdata' ? <ChevronDown className="ml-auto w-4 h-4" /> : <ChevronRight className="ml-auto w-4 h-4" />)}
          </button>
          {openMenu === 'esgdata' && !isCollapsed && (
            <div className="space-y-1">
              {renderSubItem('/admin/esgdata/footprint-calculator', '탄소 절감 계산기')}
              {renderSubItem('/admin/esgdata/point-records', '포인트 적립 내역')}
              {renderSubItem('/admin/esgdata/user-scores', '사용자 ESG 점수')}
            </div>
          )}
        </li>

        {/* 여행 동행자 관리 */}
        <li>
          <button onClick={() => toggleMenu('companions')} className="flex items-center gap-2 px-3 py-2 w-full rounded hover:bg-[#4e5667] text-left">
            <UsersRound className="w-4 h-4" />
            {!isCollapsed && <span>ESG 동행 매칭</span>}
            {!isCollapsed && (openMenu === 'companions' ? <ChevronDown className="ml-auto w-4 h-4" /> : <ChevronRight className="ml-auto w-4 h-4" />)}
          </button>
          {openMenu === 'companions' && !isCollapsed && (
            <div className="space-y-1">
              {renderSubItem('/admin/companions/footprint-calculator', '매칭 요청 목록')}
              {renderSubItem('/admin/companions/point-records', '매칭 성사 현황')}
              {renderSubItem('/admin/companions/user-scores', '지역별 활동 통계')}
              {renderSubItem('/admin/companions/user-scores', '위험 국가 매칭 경고')}
            </div>
          )}
        </li>

        {/* 리포트 관리 */}
        <li>
          <button onClick={() => toggleMenu('report')} className="flex items-center gap-2 px-3 py-2 w-full rounded hover:bg-[#4e5667] text-left">
            <FileBarChart2 className="w-4 h-4" />
            {!isCollapsed && <span>TRIP 리포트</span>}
            {!isCollapsed && (openMenu === 'report' ? <ChevronDown className="ml-auto w-4 h-4" /> : <ChevronRight className="ml-auto w-4 h-4" />)}
          </button>
          {openMenu === 'report' && !isCollapsed && (
            <div className="space-y-1">
              {renderSubItem('/admin/report/personal', '개인용 ESG 리포트')}
              {renderSubItem('/admin/report/business', '기업 출장 분석 리포트')}
            </div>
          )}
        </li>


        {/* 커뮤니티 관리 */}
        <li>
          <button onClick={() => toggleMenu('community')} className="flex items-center gap-2 px-3 py-2 w-full rounded hover:bg-[#4e5667] text-left">
            <BookOpenCheck className="w-4 h-4" />
            {!isCollapsed && <span>커뮤니티</span>}
            {!isCollapsed && (openMenu === 'community' ? <ChevronDown className="ml-auto w-4 h-4" /> : <ChevronRight className="ml-auto w-4 h-4" />)}
          </button>
          {openMenu === 'community' && !isCollapsed && (
            <div className="space-y-1">
              {renderSubItem('/admin/community/posts', '여행 후기 관리')}
              {renderSubItem('/admin/community/qna', 'Q&A / 팁 관리')}
              {renderSubItem('/admin/community/matching', '동행자 매칭 관리')}
              {renderSubItem('/admin/community/warning', '위험국가 알림 관리')}
            </div>
          )}
        </li>

        {/* 여행 콘텐츠 관리 */}
        <li>
          <button onClick={() => toggleMenu('tripcontents')} className="flex items-center gap-2 px-3 py-2 w-full rounded hover:bg-[#4e5667] text-left">
            <FileText className="w-4 h-4" />
            {!isCollapsed && <span>여행 콘텐츠</span>}
            {!isCollapsed && (openMenu === 'tripcontents' ? <ChevronDown className="ml-auto w-4 h-4" /> : <ChevronRight className="ml-auto w-4 h-4" />)}
          </button>
          {openMenu === 'tripcontents' && !isCollapsed && (
            <div className="space-y-1">
              {renderSubItem('/admin/tripcontents/personal', '추천 여행지  관리')}
              {renderSubItem('/admin/tripcontents/business', '친환경 숙소 관리')}
              {renderSubItem('/admin/tripcontents/personal', '친환경 교통 수단')}
              {renderSubItem('/admin/tripcontents/business', '웰니스 콘텐츠')}
              {renderSubItem('/admin/tripcontents/personal', 'ESG 테마 태그 관리')}
            </div>
          )}
        </li>

        

        {/* ESG 크레딧 */}
        <li>
          <button onClick={() => toggleMenu('credit')} className="flex items-center gap-2 px-3 py-2 w-full rounded hover:bg-[#4e5667] text-left">
            <BadgeDollarSign className="w-4 h-4" />
            {!isCollapsed && <span>ESG 크레딧</span>}
            {!isCollapsed && (openMenu === 'credit' ? <ChevronDown className="ml-auto w-4 h-4" /> : <ChevronRight className="ml-auto w-4 h-4" />)}
          </button>
          {openMenu === 'credit' && !isCollapsed && (
            <div className="space-y-1">
              {renderSubItem('/admin/credit/history', '크레딧 지급 내역')}
              {renderSubItem('/admin/credit/mileage', '마일리지 교환 관리')}
              {renderSubItem('/admin/credit/exchange', '기업 거래소 관리')}
            </div>
          )}
        </li>

        {/* 사용자 */}
        <li>
          <button
            onClick={() => toggleMenu('users')}
            className="flex items-center gap-2 px-3 py-2 w-full rounded hover:bg-[#4e5667] text-left"
          >
            <Users className="w-4 h-4" />
            {!isCollapsed && <span>사용자 관리</span>}
            {!isCollapsed && (openMenu === 'users' ? <ChevronDown className="ml-auto w-4 h-4" /> : <ChevronRight className="ml-auto w-4 h-4" />)}
          </button>
          {openMenu === 'users' && !isCollapsed && (
            <div className="space-y-1">
              {renderSubItem('/admin/users/b2c', 'B2C 사용자')}
              {renderSubItem('/admin/users/b2b', 'B2B 사용자')}
              {renderSubItem('/admin/users/b2g', 'B2G 사용자')}
              {renderSubItem('/admin/users/profiles', '성향 및 ESG 프로필 분석')}
            </div>
          )}
        </li>

        {/* 파트너십 */}
        <li>
          <button
            onClick={() => toggleMenu('partnership')}
            className="flex items-center gap-2 px-3 py-2 w-full rounded hover:bg-[#4e5667] text-left"
          >
            <Users className="w-4 h-4" />
            {!isCollapsed && <span>파트너십 관리</span>}
            {!isCollapsed && (openMenu === 'partnership' ? <ChevronDown className="ml-auto w-4 h-4" /> : <ChevronRight className="ml-auto w-4 h-4" />)}
          </button>
          {openMenu === 'partnership' && !isCollapsed && (
            <div className="space-y-1">
              {renderSubItem('/admin/partnership/b2c', 'ESG 인증 제휴사')}
              {renderSubItem('/admin/partnership/b2b', '공공기관 제휴')}
              {renderSubItem('/admin/partnership/b2c', '기업 ESG 협약')}
              {renderSubItem('/admin/partnership/b2b', '파트너 요청 검토')}
              {renderSubItem('/admin/partnership/b2c', '제휴 통계/리포트')}
            </div>
          )}
        </li>

        {/* 실시간 정보 관리 */}
        <li>
          <button
            onClick={() => toggleMenu('realtime')}
            className="flex items-center gap-2 px-3 py-2 w-full rounded hover:bg-[#4e5667] text-left"
          >
            <ActivitySquare className="w-4 h-4" />
            {!isCollapsed && <span>실시간 안전</span>}
            {!isCollapsed && (openMenu === 'realtime' ? <ChevronDown className="ml-auto w-4 h-4" /> : <ChevronRight className="ml-auto w-4 h-4" />)}
          </button>
          {openMenu === 'realtime' && !isCollapsed && (
            <div className="space-y-1">
              {renderSubItem('/admin/realtime/b2c', '공지사항')}
              {renderSubItem('/admin/realtime/b2b', '위험국가 등급 설정')}
              {renderSubItem('/admin/realtime/b2b', '실시간 재난 연동')}
              {renderSubItem('/admin/realtime/b2b', '자동 태깅 정책 설정')}
            </div>
          )}
        </li>

         {/* 외부 제휴 포털 */}
        <li>
          <button
            onClick={() => toggleMenu('external')}
            className="flex items-center gap-2 px-3 py-2 w-full rounded hover:bg-[#4e5667] text-left"
          >
            <ExternalLink className="w-4 h-4" />
            {!isCollapsed && <span>제휴 관리</span>}
            {!isCollapsed && (openMenu === 'external' ? <ChevronDown className="ml-auto w-4 h-4" /> : <ChevronRight className="ml-auto w-4 h-4" />)}
          </button>
          {openMenu === 'external' && !isCollapsed && (
            <div className="space-y-1">
              {renderSubItem('/admin/partner/certified', 'ESG 인증 제휴사')}
              {renderSubItem('/admin/partner/public', '공공기관/지자체 연계')}
              {renderSubItem('/admin/partner/business', '기업 ESG 제휴')}
            </div>
          )}
        </li>

        {/* 게시판 */}
        <li>
          <button
            onClick={() => {
              toggleMenu('board');
              navigate('/admin/board/list');
            }}
            className="flex items-center gap-2 px-3 py-2 w-full rounded hover:bg-[#4e5667] text-left"
          >
            <FileText className="w-4 h-4" />
            {!isCollapsed && <span>게시판 관리</span>}
            {!isCollapsed && (openMenu === 'board' ? <ChevronDown className="ml-auto w-4 h-4" /> : <ChevronRight className="ml-auto w-4 h-4" />)}
          </button>
          {openMenu === 'board' && !isCollapsed && (
            <div className="space-y-1">
              {renderSubItem('/admin/board/list', '게시판 목록')}
              {renderSubItem('/admin/board/create', '게시판 생성')}
              {renderSubItem('/admin/board/tree', '계층 구조 관리')}
              {renderSubItem('/admin/board/usage', '게시판 사용 현황')}
            </div>
          )}
        </li>

        {/* STAFF 관리자 */}
        <li>
          <button
            onClick={() => toggleMenu('admin')}
            className="flex items-center gap-2 px-3 py-2 w-full rounded hover:bg-[#4e5667] text-left"
          >
            <ShieldCheck className="w-4 h-4" />
            {!isCollapsed && <span>STAFF</span>}
            {!isCollapsed && (openMenu === 'admin' ? <ChevronDown className="ml-auto w-4 h-4" /> : <ChevronRight className="ml-auto w-4 h-4" />)}
          </button>
          {openMenu === 'admin' && !isCollapsed && (
            <div className="space-y-1">
              {renderSubItem('/admin/list', '목록 조회')}
              {renderSubItem('/admin/create', '계정 생성')}
            </div>
          )}
        </li>

        {/* ME */}
        <li>
          <NavLink
            to="/admin/me"
            className={({ isActive }) => [
              'flex items-center rounded px-3 py-2 gap-2 text-sm transition',
              isCollapsed ? 'justify-center' : '',
              isActive
                ? 'bg-[#5c7098] text-white font-bold shadow-sm ring-1 ring-[#5c7098]/40'
                : 'bg-[#4b5563] text-[#cbd5e1] hover:bg-[#64748b] hover:text-white hover:font-bold dark:bg-[#3b3f4e] dark:text-[#aeb4c0] dark:hover:bg-[#4e5667]'
            ].join(' ')}
          >
            <User className="w-4 h-4" />
            {loading 
              ? "불러오는 중..." 
              : `${me?.role} ${me?.email}`}
              {/* //: `${me?.role ?? "ADMIN"} / ${me?.email ?? "example@wayple.io"}`} */}
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
