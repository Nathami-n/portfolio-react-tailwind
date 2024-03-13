/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgbody: "#070707",
        bgcard: "#141414",
      },
      screens: {
        lg: "993px",
      },
      backgroundImage: {
        "youtube-card": "url('/youtune.avif')",
        "guitar-card": "url('/guitar.jpg')",
        "car-card": "url('/cargo.jpg')",
      },
    },
  },
  plugins: [],
};
