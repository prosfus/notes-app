/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  
  theme: {
    extend: {
      colors: {
        'side-gray': '#1E1E1E',
        'back-blue': '#2E3F4B',
        'li-blue': '#1E95E9'
      },
    }
    
  },
  plugins: [],
};