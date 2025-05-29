// src/components/NavigationBar.tsx
import { AnimatePresence, motion } from 'framer-motion';
import type { JSX } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavigationBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const location = useLocation();
  const menuRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  const isActive = (path: string) => location.pathname.startsWith(path);

  const handleMenuHover = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  const getMenuLeftOffset = (menuKey: string) => {
    const button = menuRefs.current[menuKey];
    if (!button) return 0;
    const rect = button.getBoundingClientRect();
    return rect.left + window.scrollX;
  };

  const dropdownMenus: { [key: string]: JSX.Element } = {
    plan: (
      <div className="p-4 w-64">
        <h3 className="font-bold mb-2">여정 구성</h3>
        <Link to="/planner/create" className="block py-1 hover:underline">나의 여정 만들기</Link>
        <Link to="/planner/saved" className="block py-1 hover:underline">임시 저장 여정</Link>
        <h3 className="font-bold mt-4 mb-2">가이드</h3>
        <Link to="/planner/guide" className="block py-1 hover:underline">ESG 설계 가이드</Link>
        <Link to="/planner/share" className="block py-1 hover:underline">여정 공유하기</Link>
      </div>
    ),
    recommend: (
      <div className="p-4 w-64">
        <h3 className="font-bold mb-2">AI 추천</h3>
        <Link to="/recommend/ai" className="block py-1 hover:underline">나만의 ESG 루트</Link>
        <Link to="/recommend/ai-history" className="block py-1 hover:underline">이전 추천 불러오기</Link>
        <h3 className="font-bold mt-4 mb-2">ESG 테마</h3>
        <Link to="/recommend/esg" className="block py-1 hover:underline">제로 웨이스트 여행</Link>
        <Link to="/recommend/local" className="block py-1 hover:underline">지역 상생 코스</Link>
        <h3 className="font-bold mt-4 mb-2">웰니스</h3>
        <Link to="/recommend/wellness" className="block py-1 hover:underline">숲속 요가</Link>
        <Link to="/recommend/detox" className="block py-1 hover:underline">디지털 디톡스</Link>
      </div>
    ),
    companion: (
      <div className="p-4 w-64">
        <h3 className="font-bold mb-2">동행자 기능</h3>
        <Link to="/companion/request" className="block py-1 hover:underline">매칭 요청</Link>
        <Link to="/companion/recommend" className="block py-1 hover:underline">추천 동행자</Link>
        <h3 className="font-bold mt-4 mb-2">활동 관리</h3>
        <Link to="/companion/history" className="block py-1 hover:underline">매칭 내역</Link>
        <Link to="/companion/warning" className="block py-1 hover:underline">위험국가 설정</Link>
      </div>
    ),
    carbon: (
      <div className="p-4 w-64">
        <h3 className="font-bold mb-2">적립 현황</h3>
        <Link to="/carbon/summary" className="block py-1 hover:underline">나의 감축량</Link>
        <Link to="/carbon/points" className="block py-1 hover:underline">적립 내역</Link>
        <h3 className="font-bold mt-4 mb-2">거래/사용</h3>
        <Link to="/carbon/rewards" className="block py-1 hover:underline">포인트 사용처</Link>
        <Link to="/carbon/market" className="block py-1 hover:underline">크레딧 거래소</Link>
      </div>
    ),
    report: (
      <div className="p-4 w-64">
        <h3 className="font-bold mb-2">리포트 관리</h3>
        <Link to="/report/mine" className="block py-1 hover:underline">내 리포트</Link>
        <Link to="/report/share" className="block py-1 hover:underline">리포트 공유</Link>
        <h3 className="font-bold mt-4 mb-2">기업용</h3>
        <Link to="/report/business" className="block py-1 hover:underline">출장 리포트</Link>
        <Link to="/report/simulator" className="block py-1 hover:underline">ESG 점수 시뮬레이터</Link>
      </div>
    ),
    community: (
      <div className="p-4 w-64">
        <h3 className="font-bold mb-2">참여 콘텐츠</h3>
        <Link to="/community/reviews" className="block py-1 hover:underline">여행 후기</Link>
        <Link to="/community/challenge" className="block py-1 hover:underline">ESG 챌린지</Link>
        <h3 className="font-bold mt-4 mb-2">정보 나눔</h3>
        <Link to="/community/wellness" className="block py-1 hover:underline">웰니스 나눔</Link>
        <Link to="/community/qna" className="block py-1 hover:underline">Q&A</Link>
      </div>
    )
  };

  return (
    <div>
      <div className="w-full bg-emerald-700 fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-screen-xl px-4 py-2">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-white text-2xl font-bold">Wayple</Link>
            <div className="flex-grow flex justify-center mt-2">
              <input 
                type="text" 
                placeholder="검색" 
                className="p-2 text-black rounded w-full max-w-lg" 
              />
            </div>
            <div className="flex space-x-2 text-sm">
              <button onClick={() => alert("언어 선택 예정입니다.")}>🌐 Language</button>
              <button onClick={toggleDarkMode}>{darkMode ? "☀️ Light" : "🌙 Dark"}</button>
            </div>
          </div>
          <div className="flex justify-end space-x-2 text-sm mt-2 text-white">
            <Link to="/mypage" className="hover:text-yellow-300">마이페이지</Link>
            <Link to="/login" className="hover:text-yellow-300">로그인</Link>
            <Link to="/register" className="hover:text-yellow-300">회원가입</Link>
            <Link to="/support/support" className="hover:text-yellow-300">고객센터</Link>
          </div>
        </div>

        <div className="w-full bg-emerald-800 dark:bg-emerald-950 relative" onMouseLeave={handleMenuLeave}>
          <div className="mx-auto max-w-screen-xl flex justify-center space-x-6 py-2 font-semibold">
            {[
              { name: '여행 설계', key: 'plan' },
              { name: '추천 여행', key: 'recommend' },
              { name: '동행자 매칭', key: 'companion' },
              { name: '탄소 적립/거래', key: 'carbon' },
              { name: '리포트 서비스', key: 'report' },
              { name: '커뮤니티', key: 'community' },
            ].map(menu => (
              <button
                key={menu.key}
                ref={(el: HTMLButtonElement | null) => {
                  if (el) menuRefs.current[menu.key] = el;
                }}
                onMouseEnter={() => handleMenuHover(menu.key)}
                className={`text-lg px-3 py-2 ${activeMenu === menu.key ? 'text-yellow-300' : 'text-white'} hover:text-yellow-300`}
              >
                {menu.name}
              </button>
            ))}
          </div>

          <AnimatePresence>
            {activeMenu && (
              <motion.div
                key={activeMenu}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full rounded-xl bg-[#c1d0cc] text-black border border-emerald-600 shadow-xl z-50 backdrop-blur-md"
                style={{ left: getMenuLeftOffset(activeMenu) }}
              >
                <div className="p-5 w-72 space-y-2 text-sm leading-relaxed">
                  {dropdownMenus[activeMenu]}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="h-[120px]"></div>
    </div>
  );
};

export default NavigationBar;
