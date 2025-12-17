/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brandTeal: "#0A5C66",
        brandTealLight: "#0E6F7A",
        brandBlueAccent: "#4A90FE",
        brandBackground: "#F8F8F8",
      },
    },
  },
  plugins: [],
};
