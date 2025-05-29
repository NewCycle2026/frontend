// src/pages/carbon/CarbonSavingPage.tsx
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/LayoutMain";

export default function CarbonSavingPage() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      {/* ✅ Page Header (웨이플 서브페이지 통일형) */}
      <section className="relative h-[20vh] bg-emerald-700 text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center px-4 max-w-lg mx-auto animate-fadeIn">
          <h1 className="text-3xl md:text-xl font-extrabold mb-4">탄소 적립 및 거래</h1>
          <p className="text-lg">탄소 감축 활동으로 포인트를 적립하고, 탄소 크레딧으로 전환해 거래하세요.</p>
        </div>
      </section>

      {/* ✅ 탄소 적립 소개 */}
      <section className="py-16 bg-emerald-50 dark:bg-gray-800 text-center animate-fadeIn">
        <h2 className="text-3xl font-bold mb-6">탄소 적립이란?</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 mb-6">
          탄소 적립은 개인이나 기업이 일상에서 탄소 배출을 줄이는 활동을 통해 포인트를 적립받는 제도입니다.
          적립된 포인트는 다양한 혜택 또는 탄소 크레딧으로 전환될 수 있습니다.
        </p>
        <h3 className="text-xl font-semibold mb-4">주요 적립 활동</h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li>에너지 절약: 전기, 가스, 수도 사용량 절감</li>
          <li>친환경 소비: 텀블러 사용, 전자영수증 발급 등</li>
          <li>대중교통 이용: 자가용 대신 대중교통 사용</li>
          <li>친환경 제품 구매: 인증 친환경 제품 구매</li>
        </ul>
      </section>

      {/* ✅ 탄소 거래소 소개 */}
      <section className="py-16 text-center animate-fadeIn">
        <h2 className="text-3xl font-bold mb-6">탄소 거래소</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 mb-6">
          Wayple 탄소 거래소는 탄소 감축 활동을 통해 적립한 포인트를 국제 인증 탄소 크레딧으로 전환하고,
          기업 또는 개인 간 자유롭게 거래할 수 있도록 지원하는 플랫폼입니다.
        </p>

        <h3 className="text-xl font-semibold mb-4">탄소 거래란 무엇인가요?</h3>
        <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 mb-6">
          기업 및 개인이 탄소 배출량을 감축하거나, 감축된 크레딧을 구매해 탄소중립을 실천하는 제도입니다.
          Wayple은 개인과 기업 모두가 참여할 수 있는 자발적 글로벌 탄소 거래소를 지향합니다.
        </p>

        <h3 className="text-xl font-semibold mb-4">탄소 거래 절차</h3>
        <ol className="list-decimal list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li>탄소 감축 활동 수행 (예: 친환경 여행, 재활용, 에너지 절약 등)</li>
          <li>감축 활동 인증 및 탄소 포인트 적립</li>
          <li>탄소 포인트를 국제 인증 탄소 크레딧으로 전환</li>
          <li>탄소 거래소에서 크레딧을 판매하거나 거래</li>
          <li>거래 수익으로 친환경 활동에 재투자 또는 현금화</li>
        </ol>

        <h3 className="text-xl font-semibold mt-8 mb-4">참고하세요</h3>
        <p className="max-w-3xl mx-auto text-sm text-gray-500 dark:text-gray-400">
          Wayple은 Verra, Gold Standard 등 국제 탄소표준을 참고하여 투명하고 신뢰성 높은 탄소 거래 시스템을 구축하고 있습니다.
        </p>
      </section>

      {/* ✅ 이벤트 / 캠페인 유도 */}
      <section className="py-16 text-center animate-fadeIn">
        <h2 className="text-3xl font-bold mb-4">ESG 탄소 절감 캠페인 참여</h2>
        <p className="max-w-2xl mx-auto text-lg mb-6 text-gray-600 dark:text-gray-400">
          ESG 친환경 여행 및 탄소 감축 활동에 참여하고 포인트 및 특별 혜택을 받아보세요.
        </p>
        <button
          type="button"
          onClick={() => navigate("/event")}
          className="bg-emerald-700 text-white px-8 py-3 text-lg font-semibold rounded-full hover:bg-emerald-800 transition animate-pulse"
        >
          캠페인 참여하기
        </button>
      </section>
    </MainLayout>
  );
}
