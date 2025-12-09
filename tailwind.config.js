/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'senegal-green': '#00853F',
        'senegal-yellow': '#FDEF42',
        'senegal-red': '#E31B23',
        'brand-orange': '#F97316',
      }
    },
  },
  plugins: [],
}
