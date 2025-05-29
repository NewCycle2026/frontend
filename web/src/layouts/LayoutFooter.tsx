// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* 서비스 소개 */}
        <div>
          <h4 className="font-semibold mb-4">웨이플 소개</h4>
          <ul className="space-y-2">
            <li><Link to="/about">웨이플이란</Link></li>
            <li><Link to="/mission">미션과 비전</Link></li>
            <li><Link to="/recommend">추천 여행지</Link></li>
            <li><Link to="/carbon">탄소적립</Link></li>
            <li><Link to="/tripreport">ESG 여행 보고서</Link></li>
          </ul>
        </div>

        {/* 리소스 */}
        <div>
          <h4 className="font-semibold mb-4">웨이플 리소스</h4>
          <ul className="space-y-2">
            <li><Link to="/start">시작하기</Link></li>
            <li><Link to="/partners">파트너 서비스</Link></li>
            <li><Link to="/community">커뮤니티</Link></li>
            <li><Link to="/faq">자주 묻는 질문</Link></li>
          </ul>
        </div>

        {/* 개발자 지원 */}
        <div>
          <h4 className="font-semibold mb-4">개발자 지원</h4>
          <ul className="space-y-2">
            <li><Link to="/api">API 문서</Link></li>
            <li><Link to="/developers">개발자 센터</Link></li>
            <li><Link to="/esg">ESG 리포트 API</Link></li>
          </ul>
        </div>

        {/* 도움말 */}
        <div>
          <h4 className="font-semibold mb-4">도움말</h4>
          <ul className="space-y-2">
            <li><Link to="/support">고객센터</Link></li>
            <li><Link to="/contact">문의하기</Link></li>
            <li><Link to="/terms">이용약관</Link></li>
            <li><Link to="/privacy">개인정보 처리방침</Link></li>
          </ul>
        </div>
      </div>

      {/* 하단 바 */}
      <div className="border-t border-emerald-700 mt-4 py-4 text-center">
        <p>© 2025 New Cycle. All rights reserved.</p>
        <p className="mt-2">언어: 한국어 | English | 日本語</p>
        <div className="flex justify-center space-x-4 mt-4">
          {/* 실제로는 react-icons 또는 svg로 바꿔야 안전 */}
          <button type="button" aria-label="Facebook" className="hover:text-yellow-300">FB</button>
          <button type="button" aria-label="Twitter" className="hover:text-yellow-300">TW</button>
          <button type="button" aria-label="Instagram" className="hover:text-yellow-300">IG</button>
          <button type="button" aria-label="LinkedIn" className="hover:text-yellow-300">IN</button>
        </div>
      </div>
    </footer>
  );
}
