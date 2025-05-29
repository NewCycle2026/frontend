import MainLayout from "../../layouts/LayoutMain";

export default function DeveloperDocsPage() {
  return (
    <MainLayout>
      <section className="relative h-[20vh] bg-emerald-700 text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center px-4 max-w-lg mx-auto animate-fadeIn">
          <h1 className="text-3xl md:text-xl font-extrabold mb-4">Wayple Developer API Docs</h1>
          <p className="text-lg">API 연동으로 Wayple 데이터를 서비스에 통합하세요.</p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">인증</h2>
          <p>Bearer Token 기반 인증 사용</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">API Endpoints</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><code>GET /api/v1/users</code> - 사용자 리스트 조회</li>
            <li><code>POST /api/v1/trips</code> - 여행 등록</li>
            <li><code>GET /api/v1/esg-reports/:id</code> - ESG 리포트 조회</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Sample Request</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm">
{`GET /api/v1/users
Authorization: Bearer YOUR_TOKEN`}
          </pre>
        </div>
      </section>
    </MainLayout>
  );
}
