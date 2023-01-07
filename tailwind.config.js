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
        },
        rotateDark: {
        
          '0%': { boxShadow: '0 0 35px 5px rgba(34, 197, 94, .4)'},
          '25%': { boxShadow: '0 0 35px 5px rgba(34, 197, 94, .7)'},
          '50%': { boxShadow: '0 0 35px 5px rgba(34, 197, 94, .5)'},
          '75%': {  boxShadow: '0 0 35px 5px rgba(34, 197, 94, .7)'},
          '100%': {boxShadow: '0 0 35px 5px rgba(34, 197, 94, 0.4)'},
        },
        rotateLight: {
        
          '0%': { boxShadow: '0 0 35px 5px rgba(153,153,0, .4)'},
          '25%': { boxShadow: '0 0 35px 5px rgba(153,153,0, .7)'},
          '50%': { boxShadow: '0 0 35px 5px rgba(153,153,0, .5)'},
          '75%': {  boxShadow: '0 0 35px 5px rgba(153,153,0, .7)'},
          '100%': {boxShadow: '0 0 35px 5px rgba(153,153,0, 0.4)'},
        }

      },
      animation: {
        slide: 'slide 0.8s ease-in-out  ',
        slider: 'slider 0.8s ease-in-out ',
        projectDesc: 'projectDesc 0.8s ease-in-out ',
        projecPic: 'projecPic 0.8s ease-in-out ',
        rotateDark: "rotateDark 2.8s ease-in-out 0s infinite running ",
        rotateLight: "rotateLight 2.8s ease-in-out 0s infinite running"
      },
    },
    boxShadow: {
      'main': '0 0 35px 5px rgba(87, 212, 122, 1)',
    },
  
    
  },
  plugins: [],
}