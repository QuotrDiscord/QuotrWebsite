/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "julius-sans": ["Julius Sans One"],
        comfortaa: ["Comfortaa"],
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
