/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: {
          950: "#05070f",
          900: "#080c1a",
          850: "#0b1022",
          800: "#0f162d",
          700: "#16203d",
          600: "#22305a",
        },
        gold: {
          100: "#f8edcf",
          200: "#f3e2b3",
          300: "#e8cc85",
          400: "#d9b25f",
          500: "#c39a45",
          600: "#9c7a33",
        },
        emerald: {
          300: "#7fd6b0",
          400: "#4fbf93",
          500: "#2f9e76",
        },
        violet: {
          300: "#c4b2f5",
          400: "#a38be8",
          500: "#7f66cf",
        },
        parchment: "#e9e4d6",
        mist: "#a7b0c8",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(217,178,95,0.25), 0 10px 40px -12px rgba(217,178,95,0.25)",
        panel: "0 20px 60px -30px rgba(0,0,0,0.8)",
      },
      maxWidth: {
        content: "78rem",
      },
    },
  },
  plugins: [],
};
