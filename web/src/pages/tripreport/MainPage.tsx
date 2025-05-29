// src/pages/tripreport/TripReportPage.tsx
import MainLayout from "../../layouts/LayoutMain";

export default function TripReportPage() {
  return (
    <MainLayout>
      {/* Page Header */}
      <section className="relative h-[20vh] bg-emerald-700 text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center px-4 max-w-lg mx-auto animate-fadeIn">
          <h1 className="text-3xl md:text-xl font-extrabold mb-4">기업용 ESG 출장 보고서 서비스</h1>
          <p className="text-lg">기업의 지속가능한 출장 문화를 위한 자동화된 ESG 리포트</p>
        </div>
      </section>

      {/* Why ESG Trip Report */}
      <section className="py-16 text-center animate-fadeIn">
        <h2 className="text-2xl font-bold mb-8">왜 필요한가?</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          글로벌 규제와 투자기관들은 기업의 탄소배출 및 ESG 데이터를 요구하고 있습니다.  
          Wayple은 출장 중 발생하는 탄소 데이터를 자동으로 측정하고, 신뢰성 높은 ESG 리포트를 제공합니다.
        </p>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-emerald-50 dark:bg-emerald-900 text-center animate-fadeIn">
        <h2 className="text-2xl font-bold mb-10">서비스 주요 기능</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { icon: "📊", title: "실시간 탄소 데이터 측정" },
            { icon: "✅", title: "출장 종료 후 자동 보고서 발급" },
            { icon: "💡", title: "ESG/탄소규제 대응 지원" },
            { icon: "🔒", title: "기업 데이터 보안 보장" },
          ].map((item, index) => (
            <div
              key={`feature-${index}`}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-center hover:scale-105 transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Sample Report Image */}
      <section className="py-16 text-center animate-fadeIn">
        <h2 className="text-2xl font-bold mb-8">샘플 리포트 미리보기</h2>
        <div className="max-w-3xl mx-auto">
          <img
            src="/images/sample-report.jpg"
            alt="Sample ESG Report"
            className="rounded-lg shadow mx-auto hover:scale-105 transition"
          />
        </div>
        <p className="mt-4 text-sm text-gray-500">※ 이미지 예시: 실제 보고서는 기업 로고 및 데이터 커스터마이징 가능</p>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-emerald-50 dark:bg-emerald-900 text-center animate-fadeIn">
        <h2 className="text-2xl font-bold mb-8">고객사 사례</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            "“Wayple 리포트 덕분에 연간 ESG 감사가 매우 간편해졌습니다.” - 대기업 Sustainability Team",
            "“출장마다 자동 리포트가 생성되어 시간과 비용이 절감됐습니다.” - 글로벌 IT 기업 CSR 매니저",
          ].map((text, index) => (
            <div key={`testimonial-${index}`} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-sm hover:scale-105 transition">
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 text-center animate-fadeIn">
        <h2 className="text-2xl font-bold mb-10">자주 묻는 질문</h2>
        <div className="max-w-4xl mx-auto space-y-8 text-left text-lg">
          <div>
            <h3 className="font-semibold mb-2">Q. 비용은 어떻게 되나요?</h3>
            <p>A. 기업 규모 및 출장 건수에 따라 맞춤 견적을 제공합니다.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Q. 데이터 보안은 어떻게 보장되나요?</h3>
            <p>A. ISO27001 기반 보안 시스템을 통해 안전하게 관리됩니다.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Q. 해외 출장도 지원하나요?</h3>
            <p>A. 네, 전 세계 15개국 이상 출장 데이터를 지원합니다.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Q. 어떤 기준으로 탄소 데이터가 계산되나요?</h3>
            <p>A. 공식 탄소계수 (DEFRA, IPCC 등) 기반으로 측정합니다.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-emerald-700 text-white text-center animate-fadeIn">
        <h2 className="text-2xl font-bold mb-6">우리 기업도 ESG 출장 보고서 이용하기</h2>
        <a
          href="#"
          className="inline-block bg-white text-emerald-700 px-8 py-3 text-lg font-semibold rounded-full hover:bg-gray-100 transition animate-pulse"
        >
          서비스 문의하기
        </a>
      </section>
    </MainLayout>
  );
}
