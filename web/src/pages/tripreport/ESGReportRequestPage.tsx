import MainLayout from "../../layouts/LayoutMain";

export default function ESGReportRequestPage() {
  return (
    <MainLayout>
      <section className="relative h-[20vh] bg-emerald-700 text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center px-4 max-w-lg mx-auto animate-fadeIn">
          <h1 className="text-3xl md:text-xl font-extrabold mb-4">기업용 ESG Report 신청</h1>
          <p className="text-lg">아래 정보를 입력하시면 담당자가 연락 드립니다.</p>
        </div>
      </section>

      <section className="py-16 max-w-xl mx-auto">
        <form className="space-y-6">
          <div>
            <label className="block mb-1">회사명</label>
            <input type="text" className="w-full border px-4 py-2 rounded" />
          </div>
          <div>
            <label className="block mb-1">담당자 이름</label>
            <input type="text" className="w-full border px-4 py-2 rounded" />
          </div>
          <div>
            <label className="block mb-1">담당자 이메일</label>
            <input type="email" className="w-full border px-4 py-2 rounded" />
          </div>
          <div>
            <label className="block mb-1">문의 내용</label>
            <textarea rows={5} className="w-full border px-4 py-2 rounded"></textarea>
          </div>
          <button type="submit" className="w-full bg-emerald-700 text-white py-3 rounded hover:bg-emerald-800 transition">
            신청하기
          </button>
        </form>
      </section>
    </MainLayout>
  );
}
