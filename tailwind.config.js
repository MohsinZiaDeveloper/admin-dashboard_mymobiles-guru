const defaultColors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        gray: {
          400: "#969798",
          500: "#666666",
          700: "#353535",
          800: "#262626",
          900: "#171818",
        },
      },
    },
    fontFamily: {
      Yuji: ["Yuji Syuku"],
    },
    colors: {
      ...defaultColors,
      customGray: "#EDEDF0",
      backgroundGreenColor: "#07844C",
      buttonBgColorGradian1: "#07844C",
      buttonBgcolorGradian2: "#080A3C",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
