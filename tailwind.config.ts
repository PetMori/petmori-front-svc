// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // app/ + components/ 포함
  ],
  theme: {
    extend: {
      /** 커스텀 브레이크포인트 */
      screens: {
        mob: "480px", // Custom mobile breakpoint
        tab: "768px", // Custom tablet breakpoint
      },
      /** 프로젝트 토큰 (CSS 변수 사용 시) */
      colors: {
        primary: "var(--color-primary)", // #a7ceee
      },

      /** 박스 섀도우 */
      boxShadow: {},
      /** 라운드 토큰 */
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      /** 배경 이미지 토큰 */
      backgroundImage: {},
      /** 커스텀 키프레임 & 애니메이션 (원본 blink) */
      keyframes: {},
      animation: {},
    },
  },
  plugins: [],
};

export default config;
