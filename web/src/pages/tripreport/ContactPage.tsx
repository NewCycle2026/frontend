import MainLayout from "../../layouts/LayoutMain";

export default function ContactPage() {
  return (
    <MainLayout>
      <section className="relative h-[20vh] bg-emerald-700 text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center px-4 max-w-lg mx-auto animate-fadeIn">
          <h1 className="text-3xl md:text-xl font-extrabold mb-4">기업용 ESG 출장 보고서 서비스</h1>
          <p className="text-lg">기업의 지속가능한 출장 문화를 위한 자동화된 ESG 리포트</p>
        </div>
      </section>

      <section className="bg-emerald-700 text-white py-10 text-center">
        <h1 className="text-3xl font-bold">문의하기</h1>
        <p className="mt-4 text-lg">Wayple과 협업 또는 서비스 문의를 남겨주세요.</p>
      </section>

      <section className="py-16 max-w-xl mx-auto">
        <form className="space-y-6">
          <div>
            <label className="block mb-1">이름</label>
            <input type="text" className="w-full border px-4 py-2 rounded" />
          </div>
          <div>
            <label className="block mb-1">이메일</label>
            <input type="email" className="w-full border px-4 py-2 rounded" />
          </div>
          <div>
            <label className="block mb-1">문의 내용</label>
            <textarea rows={5} className="w-full border px-4 py-2 rounded"></textarea>
          </div>
          <button type="submit" className="w-full bg-emerald-700 text-white py-3 rounded hover:bg-emerald-800 transition">
            문의 보내기
          </button>
        </form>
      </section>
    </MainLayout>
  );
}
