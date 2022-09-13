/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: "#232f3e",
          DEFAULT: "#131921",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
