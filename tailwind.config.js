/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**.{html,js}"],
  theme: {
    extend: {
      colors: {
        'textW': '#F1FAEE',
        'mainBg': '#BFC0FF',
        'profileBg': '#14213D',
        'textcol-1': '#240046',
        'textcol-2': '#FB8500',
        'linkBg': 'rgba(0,18,25,0.65)',
        'linkBg-2': 'rgba(252,162,18,0.7)',
        'linkBorder': '#363A3C',
        'linkBorder-2': '#FB8500',

      },
      fontFamily: {
        'fredokaOne': ['Fredoka One', 'sans-serif'],
      },
      backgroundImage: {
        'main-bg': "url(./assets/images/mainBg.webp)",

      },
      screens: {
        'xss': '400px',
        // => @media (min-width: 340px) { ... }
      },
    },
  },
  plugins: [],
}
