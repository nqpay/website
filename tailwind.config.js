/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'din-black': ['DIN-black', 'sans-serif'],
        'din-light': ['DIN-light', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
