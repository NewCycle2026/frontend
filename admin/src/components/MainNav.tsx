// src/components/MainNav.tsx

export default function MainNav() {
  return (
    <nav className="bg-[#374151] dark:bg-[#1f2937] text-white w-full px-6 py-4 border-b border-gray-700 flex justify-around text-sm">
      {/* 친환경 추천 여행 */}
      <div className="space-y-1">
        <div className="font-semibold">친환경 추천 여행</div>
        <ul className="text-gray-300 space-y-0.5">
          <li>- 추천 여행지 현황</li>
          <li>- 추천 여행지 등록</li>
        </ul>
      </div>

      {/* ESG 탄소 적립 */}
      <div className="space-y-1">
        <div className="font-semibold">ESG 탄소 적립</div>
        <ul className="text-gray-300 space-y-0.5">
          <li>- 탄소 적립 현황</li>
          <li>- 탄소 적립 소유</li>
          <li>- 탄소 적립 기업</li>
        </ul>
      </div>

      {/* 동행자 매칭 */}
      <div className="space-y-1">
        <div className="font-semibold">동행자 매칭</div>
        <ul className="text-gray-300 space-y-0.5">
          <li>- 동행자 매칭 현황</li>
          <li>- 동행자 칭찬</li>
          <li>- 동행자 신고</li>
        </ul>
      </div>

      {/* 실시간 안전정보 */}
      <div className="space-y-1">
        <div className="font-semibold">실시간 안전정보</div>
        <ul className="text-gray-300 space-y-0.5">
          <li>- 세계 안전 현황</li>
          <li>- 긴급 안전 현황</li>
        </ul>
      </div>
    </nav>
  );
}
