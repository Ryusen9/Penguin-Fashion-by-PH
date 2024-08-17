/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily:{
      'roboto':['Roboto', 'sans-serif'],
      'bebas': ['Bebas Neue', 'sans-serif']
    },

    extend: {},
  },
  plugins: [require('tailwindcss-animated')],
}