/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        mealflow: {
          navy: "#1E293B",
          orange: "#F97316",
          orangeLight: "#FFF7ED",

          light: "#F8FAFC",
          white: "#FFFFFF",

          dark: "#0F172A",
          darkCard: "#1E293B",

          text: "#0F172A",
          muted: "#64748B",
          mutedDark: "#94A3B8",

          border: "#E2E8F0",
          borderDark: "#334155",
        },
      },

      boxShadow: {
        mealflow: "0 10px 30px rgba(15, 23, 42, 0.08)",
        "mealflow-hover": "0 15px 35px rgba(15, 23, 42, 0.12)",
      },

      borderRadius: {
        mealflow: "16px",
      },
    },
  },

  plugins: [],
};