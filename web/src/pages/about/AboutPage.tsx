// src/pages/about/AboutPage.tsx
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/LayoutMain";

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      {/* ✅ Page Header */}
      <section className="relative h-[20vh] bg-emerald-700 text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center px-4 max-w-lg mx-auto animate-fadeIn">
          <h1 className="text-3xl md:text-xl font-extrabold mb-4">지속 가능한 여행의 미래</h1>
          <p className="text-lg">Wayple은 AI와 ESG 혁신을 통해 지속 가능한 글로벌 여행 생태계를 선도합니다.</p>
        </div>
      </section>

      {/* ✅ Company Introduction */}
      <section className="py-16 text-center animate-fadeIn">
        <h2 className="text-3xl font-bold mb-6">Wayple 소개</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
          Wayple은 전 세계 여행자와 기업들이 환경 발자국을 최소화하도록 돕는 글로벌 친환경 여행 플랫폼입니다.
          AI와 데이터 분석을 통해 지속 가능한 여행 추천, 탄소 배출량 추적, ESG 출장 보고서 제공, 탄소 거래소 서비스를 운영합니다.
        </p>
      </section>

      {/* ✅ Services Table */}
      <section className="py-16 text-center animate-fadeIn bg-emerald-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold mb-8">Wayple 주요 서비스</h2>
        <div className="overflow-x-auto">
          <table className="table-auto mx-auto text-left text-gray-700 dark:text-gray-300">
            <thead>
              <tr className="bg-emerald-700 text-white">
                <th className="px-4 py-2">서비스</th>
                <th className="px-4 py-2">설명</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-emerald-100 dark:hover:bg-gray-700">
                <td className="border px-4 py-2">친환경 여행 추천</td>
                <td className="border px-4 py-2">탄소 배출량 최소화 경로 및 숙소 추천</td>
              </tr>
              <tr className="hover:bg-emerald-100 dark:hover:bg-gray-700">
                <td className="border px-4 py-2">ESG 출장 리포트</td>
                <td className="border px-4 py-2">기업용 친환경 출장 분석 리포트 자동 발행</td>
              </tr>
              <tr className="hover:bg-emerald-100 dark:hover:bg-gray-700">
                <td className="border px-4 py-2">탄소 적립 & 거래소</td>
                <td className="border px-4 py-2">여행자의 탄소 절감 포인트 및 거래소 운영</td>
              </tr>
              <tr className="hover:bg-emerald-100 dark:hover:bg-gray-700">
                <td className="border px-4 py-2">AI 기반 동행 추천</td>
                <td className="border px-4 py-2">취향 기반 여행 동행 매칭</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ✅ Our Journey */}
      <section className="py-16 text-center animate-fadeIn">
        <h2 className="text-3xl font-bold mb-8">Wayple의 여정</h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <div>2019 : Wayple 아이디어 구상</div>
          <div>2021 : 특허출원: 국내 및 PCT 사용자 주도형 여행 설계 서버 및 방법</div>
          <div>2022 : 특허출원: 국내 사용자 주도형 여행 설계 서버 및 방법</div>
          <div>2024 : 글로벌 파트너십 및 탄소 거래소 런칭</div>
          <div>2025 : 글로벌 100만 사용자 목표 추진</div>
        </div>
      </section>

      {/* ✅ Global Partner Network */}
      <section className="py-16 bg-emerald-100 dark:bg-gray-700 text-center animate-fadeIn">
        <h2 className="text-3xl font-bold mb-8">Global Partner Network</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["GreenTravel", "EcoHotel", "CarbonNeutral", "ESGGroup", "ZeroCarbon Alliance"].map(
            (name) => (
              <div
                key={name}
                className="w-36 h-16 bg-white dark:bg-gray-600 text-emerald-700 dark:text-emerald-300 p-2 flex items-center justify-center rounded shadow hover:scale-105 transition"
              >
                {name}
              </div>
            )
          )}
        </div>
      </section>

      {/* ✅ Event Promotion */}
      <section className="py-16 text-center animate-fadeIn">
        <h2 className="text-3xl font-bold mb-4">Wayple ESG 캠페인 참여</h2>
        <p className="max-w-2xl mx-auto text-lg mb-6 text-gray-600 dark:text-gray-400">
          ESG 친환경 여행을 위한 글로벌 캠페인에 참여하세요. 지금 등록하고 특별한 탄소 적립 혜택을 받아보세요!
        </p>
        <button
          type="button"
          onClick={() => navigate("/event")}
          className="bg-emerald-700 text-white px-8 py-3 text-lg font-semibold rounded-full hover:bg-emerald-800 transition animate-pulse"
        >
          캠페인 참여하기
        </button>
      </section>

      {/* ✅ Call to Action */}
      <section className="py-16 text-center animate-fadeIn">
        <h2 className="text-3xl font-bold mb-6">지속 가능한 여행 혁신에 동참하세요</h2>
        <button
          type="button"
          onClick={() => navigate("/partner")}
          className="bg-emerald-700 text-white px-8 py-3 text-lg font-semibold rounded-full hover:bg-emerald-800 transition animate-pulse"
        >
          파트너십 문의
        </button>
      </section>
    </MainLayout>
  );
}
