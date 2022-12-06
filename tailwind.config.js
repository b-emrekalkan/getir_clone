/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/**/*.{html,js}',
  ],  theme: {
    extend: {
      backgroundColor: {
        'brand-color': '#5d3ebc'
      }
    },
  },
  plugins: [],
}
