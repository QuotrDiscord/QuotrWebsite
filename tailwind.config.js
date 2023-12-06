/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "julius-sans": ["Julius Sans One"],
        comfortaa: ["Comfortaa"],
      },
      colors: {
        discord: "#7289da",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
