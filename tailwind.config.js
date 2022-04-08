const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        'gray-bg': '#F2F2F2',
        brown: '#CC634F',
        'light-brown': '#F9F9F9',
        green: '#86DA83',
        purple: '#8F83DA',
        'blue-border': '#6085D8',
        'gray-primary': '#5B5B5B',
        'gray-secondary': '#B3B3B3',
        'border-gray': '#F5F5F5',
        'border-gray-secondary': '#DEDEDE',
      },
      fontFamily: {
        sans: ['SF Pro', ...defaultTheme.fontFamily.sans],
      },
      dropShadow: {
        'box-shadow': '0px 18px 24px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
