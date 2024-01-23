/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    container: {
      center: true,
      padding: '20px',
    },
    extend: {
      colors: {
        primary: '#075985', //cyan-500
        dark: '#0f172a', //slate-900
      },
      screens: {
        'xl' : '1024px',
        '2xl': '1024px',
      },
    },
  },
  plugins: [],
}

