// src/pages/support/SupportMainPage.tsx
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/LayoutMain";

export default function SupportMainPage() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      {/* ✅ Page Header */}
      <section className="relative h-[20vh] bg-emerald-700 text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center px-4 max-w-lg mx-auto animate-fadeIn">
          <h1 className="text-3xl md:text-xl font-extrabold mb-4">고객지원 센터</h1>
          <p className="text-lg">지속 가능한 여행을 위한 웨이플의 지원 서비스입니다.</p>
        </div>
      </section>

      {/* ✅ 안내 메시지 */}
      <section className="py-8 bg-emerald-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-2xl font-semibold mb-4">무엇을 도와드릴까요?</h2>
          <p className="text-gray-700 dark:text-gray-300 text-md">
            웨이플은 친환경 여행과 ESG 실천을 지원하는 글로벌 플랫폼입니다.  
            문의하시면 빠르고 정성껏 안내해드리겠습니다.
          </p>
        </div>
      </section>

      {/* ✅ 지원 메뉴 */}
      <section className="py-12 animate-fadeIn max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-8">지원 메뉴</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "자주 묻는 질문(FAQ)", desc: "웨이플 서비스 이용 시 자주 궁금해하는 질문과 답변 모음입니다." },
            { title: "1:1 문의하기", desc: "개인적인 문의사항이나 서비스 이용 관련 상담을 요청하세요." },
            { title: "서비스 이용 정책", desc: "이용약관, 개인정보 보호정책, ESG 규정을 자세히 안내합니다." },
            { title: "고객센터 연락처", desc: "전화, 이메일, 카카오톡 채널로 다양한 방법으로 상담이 가능합니다." },
            { title: "웨이플 ESG 약속", desc: "웨이플이 실천하는 친환경 경영 및 탄소 절감 프로젝트를 소개합니다." },
            { title: "고객 권리 보호정책", desc: "고객 데이터 보호와 권익 보장을 위한 정책과 절차를 확인하세요." },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 cursor-pointer hover:ring-2 hover:ring-emerald-500 transition"
              onClick={() => alert(`${item.title} 페이지로 이동 예정입니다.`)}
            >
              <h4 className="text-xl font-semibold mb-4 text-emerald-700 dark:text-emerald-300">{item.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ 빠른 문의 CTA */}
      <section className="py-8 bg-emerald-100 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-xl font-bold mb-4">긴급 문의가 필요하신가요?</h4>
          <p className="text-md text-gray-700 dark:text-gray-300 mb-6">
            긴급 상황 시 빠른 연락이 필요하면 아래 버튼을 눌러주세요.
          </p>
          <button
            onClick={() => alert("긴급 고객센터 연결 예정")}
            className="bg-emerald-700 text-white px-6 py-3 rounded-md text-md font-semibold hover:bg-emerald-800 transition"
          >
            📞 고객센터 바로 연락하기
          </button>
        </div>
      </section>
    </MainLayout>
  );
}
