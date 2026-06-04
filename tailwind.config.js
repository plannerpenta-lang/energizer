/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow Condensed', 'system-ui', 'sans-serif'],
        headline: ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        energizer: {
          black: '#000000',
          red: '#EE3A43',
          yellow: '#FFF200',
          orange: '#F8A723',
        },
      },
    },
  },
  plugins: [],
}

