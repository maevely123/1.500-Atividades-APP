/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#1F4FD8',
          lightBlue: '#EAF0FF',
          yellow: '#FFD966',
          yellowHover: '#F4C740',
          green: '#22C55E', // Updated to Vibrant Green-500
          red: '#FF4D4F',
        }
      }
    },
  },
  plugins: [],
}