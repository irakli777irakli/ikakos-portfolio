// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', ...fontFamily.sans],
        kalam: ['var(--font-kalam)', ...fontFamily.sans],
        ubuntu: ['var(--font-ubuntu)', ...fontFamily.sans],

      },
    },
    
  },
  plugins: [],
}