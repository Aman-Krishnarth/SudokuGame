/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-in-out"
      },
      keyframes: {
        fadeIn:{
          "0%":{
            opacity: "0",
            translate: "-50px"
          },
          "100%":{
            opacity: "1",
            translate: "0px"
          }
        }
      }
    },
  },
  plugins: [],
}