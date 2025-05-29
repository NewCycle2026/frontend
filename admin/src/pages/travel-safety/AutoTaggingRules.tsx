/**
 * ⚙️ 위험국 자동 태깅 정책
 * - 외부 위험도 지표 기반 자동 분류 조건 설정
 * - 위험도 ≥ X 이상 → "위험" 국가 자동 태그 등
 */

export default function AutoTaggingRules() {
  return (
    <div>
      <h2>자동 태깅 정책</h2>
      <p>국가별 위험도 지표에 따라 자동 태그 지정 규칙 설정</p>
    </div>
  );
}
