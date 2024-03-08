/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgbody:"#070707",
        bgcard:"#111",
      }
    },
  },
  plugins: [],
}