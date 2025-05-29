// src/components/dashboard/AlertBanner.tsx
// src/components/dashboard/AlertBanner.tsx
import { useEffect, useState } from "react";

type Alert = {
  id: number;
  message: string;
  level: "critical" | "warning" | "info";
};

// ✅ 알림 리스트
const alerts: Alert[] = [
  {
    id: 1,
    message: "🚨 A국가가 위험국가로 갱신되었습니다.",
    level: "critical",
  },
  {
    id: 2,
    message: "📋 3건의 리포트가 아직 제출되지 않았습니다.",
    level: "warning",
  },
  {
    id: 3,
    message: "📄 ESG 약관이 5일 후 만료 예정입니다.",
    level: "info",
  },
];

// ✅ 색상 매핑
const bgColors: Record<string, string> = {
  critical: "bg-red-600",
  warning: "bg-yellow-500",
  info: "bg-blue-500",
};

export default function AlertBanner() {
  const [visibleAlertIds, setVisibleAlertIds] = useState<number[]>([]);

  useEffect(() => {
    const showAlerts = () => {
      alerts.forEach((alert, i) => {
        setTimeout(() => {
          // 표시 시작
          setVisibleAlertIds((prev) => [...prev, alert.id]);

          // 5초 후 자동 제거
          setTimeout(() => {
            setVisibleAlertIds((prev) => prev.filter((id) => id !== alert.id));
          }, 5000);
        }, i * 6000); // 1분 간격으로 하나씩 표시 (1시간 안배됨) 60000
      });
    };

    // 최초 진입 시 한번 실행
    showAlerts();

    // 이후 1시간마다 반복
    const interval = setInterval(showAlerts, 3600000);
    return () => clearInterval(interval);
  }, []);

  // 알림 출력 UI
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
      {alerts
        .filter((alert) => visibleAlertIds.includes(alert.id))
        .map((alert) => (
          <div
            key={alert.id}
            className={`text-white px-4 py-2 rounded shadow flex justify-between items-center ${bgColors[alert.level]}`}
          >
            <span className="text-sm">{alert.message}</span>
            <button
              className="ml-4 font-bold text-white text-lg leading-none hover:opacity-80"
              onClick={() =>
                setVisibleAlertIds((prev) => prev.filter((id) => id !== alert.id))
              }
            >
              ×
            </button>
          </div>
        ))}
    </div>
  );
}
