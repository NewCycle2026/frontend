export default function EsgCertificationGauge() {
  const total = 1000;
  const certified = 684;
  const rate = ((certified / total) * 100).toFixed(1);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">✅ ESG 인증률</h2>
      <div className="flex items-center justify-center h-40">
        <div className="relative w-28 h-28 rounded-full border-8 border-green-400 flex items-center justify-center">
          <span className="text-xl font-bold text-green-600">{rate}%</span>
        </div>
      </div>
      <p className="text-center text-gray-500 dark:text-gray-300 text-sm mt-2">
        총 {total}건 중 {certified}건 인증 성공
      </p>
    </div>
  );
}
