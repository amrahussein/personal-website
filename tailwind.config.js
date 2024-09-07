const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00798F',
        primaryDark:'#00252B',
        secondary: '#073942',
        accent: '#D7EEFD',
        important: '#8F0E48',
        cool: '#8F820E',
        serious: '#403A03',
      },
      fontFamily: {
        sans: ['Ubuntu', 'Roboto', 'Open Sans', 'sans-serif', ...defaultTheme.fontFamily.sans],
        mono: ['Ubuntu Mono', 'monospace']
      },
      zIndex: {
        '100': '100',
        '200':'200'
      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
