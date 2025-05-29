/** @type {import('tailwindcss').Config} */

module.exports = {
  // ✅ 반드시 추가 : darkMode를 class로 설정
  darkMode: 'class',

  // ✅ content 경로는 형 구조에 최적화
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/style/wayple.css",
    "./public/index.html",
  ],

  theme: {
    extend: {},
  },

  plugins: [],
}


//module.exports = {
//  content: ["./src/**/*.{js,ts,jsx,tsx}"],
//  theme: {
//    extend: {},
//  },
//  plugins: [],
//}
