/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      bebas: ['"Bebas Neue"', "sans-serif"],
      playfair: ['"Playfair Display"', "serif"],
      cormorant: ['"Cormorant Garamont"', "serif"],
      nunito: ['"Nunito Sans"', "serif"],
    },
    extend: {
      colors: {
        gold: "#FFE569",
        greenLight: "#C4E3CB",
        beige: "#FFF8D6",
        customBlue: "#91C8E4",
        customGray: "#394867",
        oceanBlue: "#0178BD",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("flowbite/plugin")],
};
