export default function MatchingSuccessRate() {
  const total = 396;
  const matched = 310;
  const rate = ((matched / total) * 100).toFixed(1);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow text-center">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">✅ 매칭 성공률</h2>
      <div className="flex justify-center">
        <div className="relative w-28 h-28 rounded-full border-8 border-green-400 flex items-center justify-center">
          <span className="text-xl font-bold text-green-600">{rate}%</span>
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
        총 {total}건 중 {matched}건 매칭 성공
      </p>
    </div>
  );
}
