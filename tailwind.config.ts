import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "var(--foreground)",
            img: {
              borderRadius: "10px",
            },
            strong: {
              color: "var(--foreground)",
              "font-weight": 200,
            },
            a: {
              color: "var(--foreground)",
              "&:hover": {
                color: "var(--foreground)",
              },
            },
            p: {
              "font-weight": 300,
              color: "var(--foreground)",
              lineHeight: "1.8",
              margin: "1.5em 0",
              letterSpacing: "0.01em",
              fontSize: "1.125rem",
            },
            h1: {
              "font-weight": 200,
              color: "var(--foreground)",
            },
            h2: {
              "font-weight": 200,
              color: "var(--foreground)",
              fontSize: "2.5rem",
            },
            h3: {
              "font-weight": 200,
              color: "var(--foreground)",
              fontSize: "2rem",
            },
            h4: {
              "font-weight": 200,
              color: "var(--foreground)",
            },
            h5: {
              "font-weight": 200,
              color: "var(--foreground)",
            },
            h6: {
              "font-weight": 200,
              color: "var(--foreground)",
            },
            blockquote: {
              color: "var(--foreground)",
            },
            code: {
              color: "var(--foreground)",
            },
            figcaption: {
              color: "var(--foreground)",
            },
            ul: {
              color: "var(--foreground)",
            },
            ol: {
              color: "var(--foreground)",
            },
            li: {
              color: "var(--foreground)",
            },
          },
        },
      },
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
  plugins: [typography],
} satisfies Config;
