// src/pages/CarbonPage.tsx
import SubLayout from "../layouts/LayoutSub";

export default function CarbonMarketplacePage() {
  return (
    <SubLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">웨이플 탄소 거래소</h1>

        <p className="mb-4">
          웨이플 탄소 거래소는 여러분께서 탄소 감축 활동을 통해 적립하신 탄소 포인트를 탄소 크레딧으로 전환하고,
          이를 자유롭게 거래할 수 있도록 지원하는 플랫폼입니다.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">탄소 거래란 무엇인가요?</h2>
        <p className="mb-4">
          탄소 거래는 기업과 개인이 탄소 배출량을 감축하거나 감축된 크레딧을 구매하여 탄소중립을 실천하는 제도입니다.
          웨이플 플랫폼은 개인과 기업 모두가 참여할 수 있는 자발적 탄소 거래소를 지향합니다.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">탄소 거래 절차</h2>
        <ol className="list-decimal list-inside mb-4">
          <li>탄소 감축 활동을 수행해 주세요 (예: 친환경 여행, 재활용, 에너지 절약 등).</li>
          <li>감축 활동을 인증받아 탄소 포인트를 적립하세요.</li>
          <li>적립된 포인트를 탄소 크레딧으로 전환하세요.</li>
          <li>탄소 거래소에서 크레딧을 다른 기업이나 개인에게 판매하세요.</li>
          <li>거래 완료 후 포인트 또는 현금으로 보상받으세요.</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-6 mb-4">참고하세요</h2>
        <p>
          웨이플은 국제 탄소표준(Verra, Gold Standard 등)을 참고하여
          신뢰성과 투명성을 기반으로 한 탄소 거래 시스템을 구축하고 있습니다.
          더 자세한 사항은 고객센터를 통해 문의해 주세요.
        </p>
      </div>
    </SubLayout>
  );
}
