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
        'bluish-black': '#161719',
        'granite-500': '#36393F',
        'turquoise': '#29c5d1',
      },
      container: {
        
      }
    },
  },
  plugins: [],
};
