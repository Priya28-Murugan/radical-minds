/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #DFDAFB 0%, #F9CCC5 100%)",
        "header-gradient": "linear-gradient(90deg, #B0A4F5 0%, #EDA197 100%)",
      },
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
      },
      colors: {
        secondaryColor: "#6D6A5D", 
      },
    },
  },

  plugins: [],
};
