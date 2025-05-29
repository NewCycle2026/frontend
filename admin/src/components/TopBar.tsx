// ✅ 개선된 TopBar.tsx (UX 및 구조 최적화)

//import { useMeContext } from '@/contexts/MeContext';
import { useSidebar } from '@/contexts/SidebarContext';
import { useLogout } from '@/hooks/useLogout';
import { ChevronDown, LogOut, Menu, Monitor, Moon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';



const mainMenus = [
  {
    label: 'ESG 여행 콘텐츠',
    submenus: [
      { label: '추천 여행지 목록', path: '/admin/esg-recommend/destinations' },
      { label: '친환경 숙소 목록', path: '/admin/esg-recommend/accommodations' },
      { label: '친환경 교통수단 목록', path: '/admin/esg-recommend/transports' },
      { label: 'ESG/웰니스 테마 태그 관리', path: '/admin/esg-recommend/themes' },
    ],
  },
  {
    label: 'ESG 활동 모니터링',
    submenus: [
      { label: '활동 대시보드', path: '/admin/user-activities' },
      { label: '탄소 절감 활동 내역', path: '/admin/user-activities/carbon' },
      { label: '포인트 적립 내역', path: '/admin/user-activities/points' },
      { label: '활동 통계 (개인/기업)', path: '/admin/user-activities/stats' },
      { label: '인증 마일리지 정책 관리', path: '/admin/user-activities/rewards' },
    ],
  },
  {
    label: 'ESG 크레딧 거래 시스템',
    submenus: [
      { label: '운영 대시보드', path: '/admin/credit-trading' },
      { label: '크레딧 발급 요청 관리', path: '/admin/credit-trading/requests' },
      { label: '거래소 내역', path: '/admin/credit-trading/history' },
      { label: '외부 인증 연동 이력', path: '/admin/credit-trading/cert-logs' },
      { label: '포인트 소멸/환전 정책', path: '/admin/credit-trading/expiration' },
    ],
  },
  {
    label: 'ESG 출장 리포트',
    submenus: [
      { label: '출장 활동 목록', path: '/admin/esg-bis-reports/trips' },
      { label: '리포트 리스트', path: '/admin/esg-bis-reports/reports' },
      { label: '리포트 상세 보기', path: '/admin/esg-bis-reports/reports/:id' },
      { label: '리포트 기준 설정', path: '/admin/esg-bis-reports/settings' },
    ],
  },
  {
    label: 'ESG 동행자 매칭',
    submenus: [
      { label: '매칭 요청 목록', path: '/admin/companions/requests' },
      { label: '매칭 성사 현황', path: '/admin/companions/matched' },
      { label: '지역별 활동 통계', path: '/admin/companions/region-stats' },
      { label: '위험국가 매칭 경고', path: '/admin/companions/danger' },
    ]
  },
  {
    label: '실시간 안전 정보',
    submenus: [
      { label: '위험국가 등급 설정', path: '/admin/travel-safety/risk-countries' },
      { label: '실시간 재난 연동', path: '/admin/travel-safety/disasters' },
      { label: '공지사항 관리', path: '/admin/travel-safety/announcements' },
      { label: '자동 태깅 정책 설정', path: '/admin/travel-safety/auto-tagging' },
    ],
  },
];



export default function TopBar() {
  //const { me, loading } = useMeContext();
  const logout = useLogout();
  const navigate = useNavigate();
  const [now, setNow] = useState('');
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const { isCollapsed, toggleSidebar } = useSidebar();
  const goToDashboard = () => { navigate('/admin/dashboard'); };

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      const formatted = date.toLocaleString('ko-KR', {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', weekday: 'short',
      });
      setNow(formatted);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-full border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white">
      <div className="h-14 flex items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <span onClick={(goToDashboard)}className="text-lg font-bold">System Management</span>

          <div ref={menuRef} className="flex items-center gap-4 ml-4">
            {mainMenus.map((menu) => (
              <div key={menu.label} className="relative">
                <button
                  onClick={() => setActiveMenu(activeMenu === menu.label ? null : menu.label)}
                  className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-2 rounded flex items-center gap-1 text-sm"
                >
                  {menu.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeMenu === menu.label && (
                  <div className="absolute top-full left-0 bg-white dark:bg-gray-800 px-6 py-4 shadow-lg z-50 rounded w-max min-w-[240px] mt-2">
                    <ul className="flex flex-col">
                      {menu.submenus.map((submenu) => (
                        <li
                          key={submenu.path}
                          onClick={() => {
                            navigate(submenu.path);
                            setActiveMenu(null);
                          }}
                          className="px-4 py-2 hover:bg-gray-700 cursor-pointer rounded text-sm"
                        >
                          - {submenu.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="bg-[#404454] text-sm text-white px-3 py-2 rounded font-medium">{now}</div>
          {/*
          <div className="bg-[#404454] text-sm text-white px-3 py-2 rounded font-medium">
            <NavLink to="/admin/me" className={({ isActive }) => [
              'flex items-center rounded px-3 py-2 gap-2 text-sm transition',
              isCollapsed ? 'justify-center' : '', 
              isActive
                ? 'bg-[#5c7098] text-white font-bold shadow-sm ring-1 ring-[#5c7098]/40'
                : 'bg-[#4b5563] text-[#cbd5e1] hover:bg-[#64748b] hover:text-white hover:font-bold dark:bg-[#3b3f4e] dark:text-[#aeb4c0] dark:hover:bg-[#4e5667]'
              ].join(' ')}
            >
              {loading ? "불러오는 중..." : `${me?.role ?? 'ADMIN'} ${me?.email ?? ''}`}
            </NavLink>
          </div>
          */}

          <button onClick={toggleSidebar} className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded text-sm flex items-center gap-1" title={isCollapsed ? '메뉴 열기' : '메뉴 닫기'}>
            <Menu className="w-4 h-4" />
          </button>

          <button onClick={toggleFullscreen} className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded text-sm flex items-center gap-1" title={isFullscreen ? '전체 축소' : '전체 확대'}>
            <Monitor className="w-4 h-4" />
          </button>

          <button onClick={() => setIsDark((prev) => !prev)} className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded text-sm flex items-center gap-1" title={isDark ? '밝게' : '다크'}>
            <Moon className="w-4 h-4" />
          </button>

          <button onClick={logout} className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded text-sm flex items-center gap-1" title="로그아웃">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
