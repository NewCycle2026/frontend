const topContents = [
  { title: "제주도 친환경 관광지", views: 2103 },
  { title: "서울 탄소제로 숙소", views: 1744 },
  { title: "전주 슬로우투어 코스", views: 1399 },
  { title: "친환경 열차 여행 추천", views: 1120 },
  { title: "업사이클링 테마 코스", views: 988 },
];

export default function TopViewedContents() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">🔥 인기 ESG 콘텐츠 TOP5</h2>
      <ul className="space-y-2">
        {topContents.map((item, i) => (
          <li key={i} className="text-gray-700 dark:text-gray-300">
            {i + 1}. {item.title} - <span className="font-semibold">{item.views.toLocaleString()}회</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
