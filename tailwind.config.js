/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'navBlue': '#0038ff',
        'strongNavBlue': '#1B76FF',
        'backgroundSky': '#7ACFFF',
        'lightBlue': '#00A3FF',
        'strongRed': '#FF0000',
        'redBrown': '#DC0000',
        'gold' : '#B0A900'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

