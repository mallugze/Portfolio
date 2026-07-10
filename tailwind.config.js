/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#000000",
        darkCard: "#121212",
        neonPurple: "#a855f7",
        neonBlue: "#3b82f6",
        neonPink: "#ec4899",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
      boxShadow: {
        neonPurple: "0 0 15px rgba(168, 85, 247, 0.4)",
        neonBlue: "0 0 15px rgba(59, 130, 246, 0.4)",
        neonPink: "0 0 15px rgba(236, 72, 153, 0.4)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 normal forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
}
