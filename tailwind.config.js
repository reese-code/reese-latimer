/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // or adjust to match your project structure
  ],
  theme: {
    screens: {
      'lg': '1025px',
    }
    extend: {},
  },
  plugins: [],
};