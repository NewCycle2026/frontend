import { useState } from "react";

// 더미 로그 데이터
const logs = [
  { id: 1, admin: "admin1@wayple.io", action: "크레딧 발급 승인", type: "승인", time: "2025-05-27 10:12" },
  { id: 2, admin: "esg@wayple.io", action: "위험국가 설정 변경", type: "위험", time: "2025-05-27 09:45" },
  { id: 3, admin: "admin1@wayple.io", action: "게시글 블라인드 처리", type: "관리", time: "2025-05-26 18:03" },
  { id: 4, admin: "sysop@wayple.io", action: "정책 문구 수정", type: "변경", time: "2025-05-26 15:32" },
];

export default function AdminLogTable() {
  const [filter, setFilter] = useState("전체");

  // 필터 적용된 로그 리스트 반환
  const filteredLogs = filter === "전체" ? logs : logs.filter((log) => log.type === filter);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">🧾 관리자 활동 로그</h2>

      {/* 필터 바 */}
      <div className="mb-4 flex gap-2 text-sm">
        {["전체", "승인", "변경", "관리", "위험"].map((type) => (
          <button
            key={type}
            className={`px-3 py-1 rounded-full border ${
              filter === type
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* 로그 테이블 */}
      <div className="overflow-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
            <tr>
              <th className="p-2">관리자</th>
              <th className="p-2">행동</th>
              <th className="p-2">유형</th>
              <th className="p-2">시간</th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.map((log) => (
              <tr
                key={log.id}
                className={`${
                  log.type === "위험" ? "bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400" : ""
                } hover:bg-gray-50 dark:hover:bg-gray-700`}
              >
                <td className="p-2">{log.admin}</td>
                <td className="p-2">{log.action}</td>
                <td className="p-2">{log.type}</td>
                <td className="p-2">{log.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
