import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'secondary-text':'#666666',
        'main-text': '#171717',
        'highlighted': '#C9A96E',
        'third-text': '#B1B1B1'
      },
    },
  },
  plugins: [],
} satisfies Config;
