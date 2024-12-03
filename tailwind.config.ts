import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blackText: "#1A1A1A",
        primary: "#036E03",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['CreatoDisplay', 'sans-serif'], // Replace default sans-serif with CreatoDisplay
      },
    },
  },
  plugins: [],
} satisfies Config;
