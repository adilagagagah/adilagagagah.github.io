/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#075985', //cyan-500
        dark: '#0f172a', //slate-900
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

