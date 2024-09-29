/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 

      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-100deg)' },
          '50%': { transform: 'rotate(100deg)' },
        }
      },
      animation: {
        "spin-slow": 'spin 0.1s linear infinite',
        "wiggle": 'wiggle 1s linear infinite',

    },
  },
  plugins: [],
}}