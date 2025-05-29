// src/pages/partner/PartnerGuidePage.tsx
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/LayoutMain";

export default function PartnerGuidePage() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      {/* ✅ Page Header */}
      <section className="relative h-[20vh] bg-emerald-700 text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center px-4 max-w-lg mx-auto animate-fadeIn">
          <h1 className="text-3xl md:text-xl font-extrabold mb-4">Wayple Partner Program</h1>
          <p className="text-lg">웨이플과 함께 글로벌 친환경 여행 생태계를 만들어 가세요.</p>
        </div>
      </section>

      {/* ✅ Partner Program 소개 */}
      <section className="py-16 text-center animate-fadeIn">
        <h2 className="text-3xl font-bold mb-6">웨이플 파트너 프로그램</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
          Wayple Partner Program은 글로벌 여행사, OTA, 친환경 숙소, ESG 인증 기관, 지역 관광청 등 다양한 파트너와 협력하여
          지속 가능한 여행 생태계를 만들어 갑니다.  
          파트너는 웨이플 플랫폼을 통해 고객에게 친환경 여행 상품을 제공하고 탄소 절감 활동 데이터를 공유할 수 있습니다.
        </p>
      </section>

      {/* ✅ 파트너 참여 대상 */}
      <section className="py-16 bg-emerald-50 dark:bg-gray-800 text-center animate-fadeIn">
        <h2 className="text-3xl font-bold mb-8">누가 참여할 수 있나요?</h2>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 max-w-2xl mx-auto space-y-2 text-left">
          <li>여행사, OTA, 지역 관광청</li>
          <li>ESG 인증 친환경 숙박업체</li>
          <li>친환경 교통, 레저 업체</li>
          <li>탄소 배출 절감 프로젝트 운영 기관</li>
        </ul>
      </section>

      {/* ✅ 파트너 참여 혜택 */}
      <section className="py-16 text-center animate-fadeIn">
        <h2 className="text-3xl font-bold mb-8">파트너 혜택</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-gray-700 dark:text-gray-300">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">1. 친환경 여행 상품 등록</h3>
            <p>자사 여행 상품을 Wayple 플랫폼에 등록하고 글로벌 고객에게 노출할 수 있습니다.</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">2. ESG 탄소 절감 리포트 제공</h3>
            <p>고객 활동 데이터를 기반으로 기업 맞춤형 ESG 탄소 절감 리포트를 자동 발급받을 수 있습니다.</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">3. 브랜드 인지도 향상</h3>
            <p>웨이플과의 공동 마케팅, 글로벌 프로모션 참여 기회를 얻을 수 있습니다.</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">4. 탄소 크레딧 거래소 연동</h3>
            <p>파트너 기업은 Wayple 탄소 거래소에 참여하여 ESG 경영 효과를 극대화할 수 있습니다.</p>
          </div>
        </div>
      </section>

      {/* ✅ 파트너 참여 절차 */}
      <section className="py-16 bg-emerald-50 dark:bg-gray-800 text-center animate-fadeIn">
        <h2 className="text-3xl font-bold mb-8">참여 절차</h2>
        <ol className="list-decimal list-inside text-gray-600 dark:text-gray-400 max-w-2xl mx-auto space-y-2 text-left">
          <li>Wayple Partner Program 문의</li>
          <li>파트너 등록 및 협약 체결</li>
          <li>여행 상품 등록 및 서비스 연동</li>
          <li>고객 참여 데이터 기반 ESG 리포트 발급</li>
          <li>글로벌 프로모션 및 탄소 거래소 연계</li>
        </ol>
      </section>

      {/* ✅ Call to Action */}
      <section className="py-16 text-center animate-fadeIn">
        <h2 className="text-3xl font-bold mb-6">웨이플과 파트너로 성장하세요</h2>
        <button
          type="button"
          onClick={() => navigate("/partner-apply")}
          className="bg-emerald-700 text-white px-8 py-3 text-lg font-semibold rounded-full hover:bg-emerald-800 transition animate-pulse"
        >
          파트너 신청하기
        </button>
      </section>
    </MainLayout>
  );
}
