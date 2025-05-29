/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    // 테스트 및 입력폼에서 사용하는 주요 클래스들
    'bg-red-500',
    'text-white',
    'text-black',
    'h-12',
    'h-20',
    'rounded-3xl',
    'rounded-md',
    'w-full',
    'px-4',
    'focus:ring-2',
    'focus:ring-blue-500',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0f1117',            // 전체 배경
          sidebar: '#1a1d26',       // 사이드바 배경
          card: '#1f232f',          // 카드 컴포넌트 배경
          hover: '#2a2e3d',         // hover 효과용
          border: '#2f3343',        // 경계선 색상
          accent: '#3b82f6',        // 주요 강조 색 (파란 계열)
          text: '#e0e0e0',          // 일반 텍스트
          muted: '#9ca3af',         // 서브 텍스트
        },
      },
    },
  },
  plugins: [],
};