import MainLayout from "../layouts/LayoutMain";

export default function AboutPage() {
  return (
    <MainLayout>
      {/* 1. Hero */}
      <section className="relative h-[40vh] bg-emerald-700 text-white flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center px-4 max-w-lg mx-auto animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Wayple</h1>
          <p className="text-lg">세상을 바꾸는 지속가능한 여행의 시작</p>
        </div>
      </section>

      {/* 2. Why We Exist */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">왜 우리는 존재하는가?</h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          매년 10억 톤 이상의 탄소가 여행을 통해 배출됩니다.  
          Wayple은 여행과 환경을 조화시키는 글로벌 친환경 여행 플랫폼입니다.
        </p>
      </section>

      {/* 3. Our Solution */}
      <section className="py-16 bg-emerald-50 dark:bg-emerald-900">
        <h2 className="text-3xl font-bold text-center mb-10">우리가 제공하는 솔루션</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: "🤖", title: "AI 맞춤 여행 추천", desc: "사용자 선호 + 탄소절감 경로 자동 추천" },
            { icon: "💳", title: "탄소포인트 적립", desc: "여행 중 탄소절감 실적 → 포인트 지급" },
            { icon: "📊", title: "ESG 리포트 자동 발급", desc: "개인/기업 모두 친환경 데이터 관리" },
          ].map((item, index) => (
            <div
              key={`solution-${index}`}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-center hover:scale-105 transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Our Impact */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">우리의 성과</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-xl font-bold">
          <div>12,540 kg<br /><span className="text-base font-normal">누적 탄소 절감</span></div>
          <div>32,200명<br /><span className="text-base font-normal">참여 사용자</span></div>
          <div>250개<br /><span className="text-base font-normal">기업 파트너</span></div>
          <div>15개국<br /><span className="text-base font-normal">글로벌 진출</span></div>
        </div>
      </section>

      {/* 5. Success Stories */}
      <section className="py-16 bg-emerald-50 dark:bg-emerald-900">
        <h2 className="text-3xl font-bold text-center mb-8">성공 사례</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "“Wayple로 ESG 출장 관리가 혁신적으로 바뀌었어요” - 기업 고객",
            "“탄소포인트로 기부까지 할 수 있어 의미 있었어요” - 개인 고객",
            "“AI 추천으로 최고의 웰니스 여행을 했습니다” - 여행객",
          ].map((text, index) => (
            <div key={`story-${index}`} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* 6. Meet the Team */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {["CEO", "CTO", "Design Lead", "Data Scientist"].map((role, index) => (
            <div
              key={`team-${index}`}
              className="bg-emerald-100 dark:bg-emerald-800 p-4 rounded-xl shadow"
            >
              <div className="w-16 h-16 bg-emerald-400 mx-auto mb-4 rounded-full"></div>
              <h3 className="font-semibold">{role}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Partners */}
      <section className="py-16 text-center bg-emerald-50 dark:bg-emerald-900">
        <h2 className="text-3xl font-bold mb-6">Partners</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["GreenTravel", "EcoHotel", "CarbonNeutral", "ESGGroup"].map((name, index) => (
            <div
              key={`partner-${index}`}
              className="w-36 h-16 bg-white dark:bg-gray-800 rounded-md flex items-center justify-center text-lg shadow"
            >
              {name}
            </div>
          ))}
        </div>
      </section>

      {/* 8. Join Us */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Wayple Team에 합류하세요</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          지속가능한 여행을 함께 만들 글로벌 인재를 찾고 있습니다.
        </p>
        <a
          href="#"
          className="inline-block mt-6 bg-emerald-700 text-white px-8 py-3 text-lg font-semibold rounded-full hover:bg-emerald-800 transition"
        >
          Careers
        </a>
      </section>

      {/* 9. Call to Action */}
      <section className="py-16 bg-emerald-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Wayple과 함께 지속가능한 여행을 시작하세요.
        </h2>
        <a
          href="/"
          className="inline-block bg-white text-emerald-700 px-8 py-3 text-lg font-semibold rounded-full hover:bg-gray-100 transition animate-pulse"
        >
          서비스 둘러보기
        </a>
      </section>
    </MainLayout>
  );
}
