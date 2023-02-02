/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlack: "#242424",
        mainWhite: "#EAEAEA",
      },
      fontFamily: {
        satisfy: "'Satisfy', cursive",
        poppins: "'Poppins', sans-serif",
      },
    },
  },
  plugins: [],
};
