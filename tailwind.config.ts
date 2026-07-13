import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1D4ED8", // royal blue — primary actions
          dark: "#0B2A5B", // navy — headings, footer, logo
          light: "#EAF1FE", // tinted backgrounds
        },
        accent: {
          DEFAULT: "#F97316", // orange — booking CTAs
          dark: "#EA580C",
        },
        ink: {
          DEFAULT: "#0F172A",
          soft: "#55627A",
          faint: "#8A94A8",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          alt: "#F6F8FB",
          line: "#E6EAF2",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 4px 16px rgba(15, 23, 42, 0.06)",
        lift: "0 4px 8px rgba(15, 23, 42, 0.05), 0 16px 40px rgba(29, 78, 216, 0.12)",
        cta: "0 8px 24px -6px rgba(249, 115, 22, 0.45)",
        nav: "0 1px 0 rgba(15, 23, 42, 0.06), 0 8px 24px rgba(15, 23, 42, 0.05)",
      },
      borderRadius: {
        "2.5xl": "20px",
      },
    },
  },
  plugins: [],
};

export default config;
