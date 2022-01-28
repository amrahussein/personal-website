const defaultTheme = require('tailwindcss/defaultTheme')

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
        sans: ['Ubuntu', 'Roboto', 'Open Sans', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    // require('tailwind-scrollbar')
  ],
};


