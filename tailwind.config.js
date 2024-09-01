/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#323268',
        'back': '#232247',
      },
      fontFamily: {
        'Montserrat': ['Montserrat','ui-sans-serif', 'system-ui'],
        'Helvetica': ['Helvetica']
      }
    },
  },
  plugins: [],
}