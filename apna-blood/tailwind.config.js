/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E11D48', // Red-600
          light: '#FECDD3', // Red-200
          dark: '#BE123C', // Red-700
        },
        secondary: {
          DEFAULT: '#1E40AF', // Blue-800
          light: '#BFDBFE', // Blue-200
          dark: '#1E3A8A', // Blue-900
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 