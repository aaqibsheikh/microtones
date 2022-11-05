/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      height: {
      },
      width: {
      },
      colors: {
        'scent': '#18FEFE',
        'scent2': '#18FEF0',
        'light-white': 'rgba(255, 255, 255, 0.5)',
        'tint-white': 'rgba(255, 255, 255, 0.8)'
      },
      boxShadow: {
        'swello-shadow': '0px 28px 42px rgba(250, 85, 255, 0.2)',
      },
      fontFamily: {
        'mont': ['Montserrat'],
      },
      fontSize: {
        'xxs': '8px'
      },
      margin: {
      },
      minWidth: {
    }
    },
  },
  plugins: [],
}
