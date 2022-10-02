/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      colors: {
        'black-gray-700': '#202226',
        'black-gray-600': '#282B2F',
        'grayish-blue-400': '#5E6165',
        'grey-window-200': '#AFB0B2',
        'bluish-black': '#161719',
        'granite-500': '#36393F',
        turquoise: '#29c5d1',
        'pink-crayola': '#F56565',
        'green-sea': '#48BB78',
      },
    },
  },
  plugins: [],
};
