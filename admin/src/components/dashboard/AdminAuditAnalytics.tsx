import AdminLogTable from "@/components/dashboard/AdminLogTable";

export default function AdminAuditAnalytics() {
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen space-y-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">👮 관리자 감사 로그</h1>

      <AdminLogTable />
    </div>
  );
}
