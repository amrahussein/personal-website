
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00798F',
        secondary: '#073942',
        accent: '#D7EEFD',
        important: '#8F0E48',
        cool: '#8F820E',
        serious: '#403A03',
      },
      fontFamily: {
        sans: ['Ubuntu', 'Roboto', 'Open Sans', 'sans-serif'],
      },
      zIndex: {
        '100': '100',
        '200':'200'
      }
    },
  },
  plugins: [],
}
