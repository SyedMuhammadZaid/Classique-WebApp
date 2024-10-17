/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '1210px': '1210px', // Custom breakpoint for 1210px
      },
    },
  },
  plugins: [],
}