/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //colors used in proj 
      colors: {
        primary: "#2B85FF",
        sec: "#EF863E",
      }
    },
  },
  plugins: [],
}

