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
        background: "var(--background)",
        foreground: "var(--foreground)",
        textColor: "var(--text-color)",
        primary: "var(--primary)",
        accent: "var(--accent)",
      },
      fontFamily: {
        geist: "var(--geist)",
        bebasNeue: "var(--font-bebas-neue)",
      },
    },
  },
  plugins: [],
} satisfies Config;
