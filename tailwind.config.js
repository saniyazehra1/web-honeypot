/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0B0F19",
        panelBg: "rgba(13, 17, 28, 0.75)",
        panelBorder: "rgba(0, 240, 255, 0.15)",
        accentBlue: "#00F0FF",
        alertRed: "#FF2A2A",
        textMuted: "#94A3B8"
      },
      backdropBlur: {
        md: "12px",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
