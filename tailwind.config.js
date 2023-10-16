/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'navBlue': '#0038ff',
        'strongRed': '#FF0000',
        'backgroundSky':'#7ACFFF',
      }
    },
  },
  plugins: [],
}

