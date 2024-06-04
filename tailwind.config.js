/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main': ['Poppins', 'Open-sans', 'Inter', 'sans-serif'],
        'text': ['sen', 'sans-serif'] 
      },
      colors: {
        'gray': '#D9D9D9',
        'light-blue': '#1813D7',
        'light-gray': '#c2c3c4',
        'dark-gray': '#818285',
        'content': '#b5b3b3',
        'warning': 'red'
      }
    },
  },
  plugins: [],
}

