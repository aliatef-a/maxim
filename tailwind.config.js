/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#98FF98",
        secondary: "#363744",
        btnColors: "#CCFFCC",
        colorDescription: "#FFFFFF",
        bgCard: "#ECFFEC"
      }
    },
  },
  plugins: [],
}

