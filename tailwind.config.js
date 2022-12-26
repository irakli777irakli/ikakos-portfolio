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
   
      keyframes: {
        slide: {
          '0%': { transform: 'translate(-3000px)' },
          '50%': { transform: 'translate(-1500px)' },
          '70%': {transform: 'translate(-500px)'},
          '100%': {transform: 'translate(0)'},
        },
        slider: {
          '0%': { transform: 'translate(3000px)' },
          '50%': { transform: 'translate(1500px)' },
          '70%': {transform: 'translate(500px)'},
          '100%': {transform: 'translate(0)'},
        },
        projectDesc: {
          '0%': { transform: 'translate(2000px)' },
          '25%': { transform: 'translate(1500px)' },
          '50%': { transform: 'translate(1000px)' },
          '75%': {transform: 'translate(500px)'},
          '100%': {transform: 'translate(0)'},
        },
        projecPic: {
          '0%': { transform: 'translate(-2000px)' },
          '25%': { transform: 'translate(-1500px)' },
          '50%': { transform: 'translate(-1000px)' },
          '75%': {transform: 'translate(-500px)'},
          '100%': {transform: 'translate(0)'},
        }
      },
      animation: {
        slide: 'slide 0.8s ease-in-out  ',
        slider: 'slider 0.8s ease-in-out ',
        projectDesc: 'projectDesc 0.8s ease-in-out ',
        projecPic: 'projecPic 0.8s ease-in-out ',
      },
    },
    
  },
  plugins: [],
}