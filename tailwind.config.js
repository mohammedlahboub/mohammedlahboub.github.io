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
        'linkBg': '#001219',
        'linkBg-2': '#FCA311',
        'linkBorder': '#363A3C',
        'linkBorder-2': '#FB8500',

      },
      fontFamily: {
        'fredokaOne': ['Fredoka One', 'sans-serif'],
      },
      backgroundImage: {
        'main-bg': "",

      }
    },
  },
  plugins: [],
}
