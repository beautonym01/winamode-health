import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0F766E",
          dark: "#0B5E58",
          light: "#E8F4F1"
        },
        ink: "#222222",
        sand: "#F8F7F4",
        gold: "#D4AF37"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        display: ["var(--font-poppins)", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 12px 40px rgba(24, 55, 50, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
