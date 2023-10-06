module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '30px',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    
    extend: {
      colors: {
        'primary': '#B88E2F',
        'secondary': '#F9F1E7',
        'product-bg': '#F4F5F7',
        'grey': {
            100: '#B0B0B0',
            200: '#898989',
            300: '#3A3A3A',
        },
        'black': '#000000',
        'red': '#E97171',
        'purple': '#816DFA',
        'green': {
            50: '#F3FAF7',
            100: '#DEF7EC',
            300: '#84E1BC',
            400: '#31C48D',
            500: '#0E9F6E',
            600: '#057A55',
            700: '#046C4E',
            800: '#03543F',
            900: '#014737',
        },
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
    },
      backgroundImage: {
        hero: "url('./img/bghero.jpg')",
      },
    },
  },
  plugins: [],
};
