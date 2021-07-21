const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: 'jit',
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      "light-brand": "#f9f7fb",
      brand: {
        100: "#e1d7e9",
        200: "#c3b0d3",
        300: "#a588bd",
        400: "#8761a7",
        500: "#693991",
        600: "#542e74",
        700: "#3f2257",
        800: "#2a173a",
        900: "#150b1d",
      },
      primary: {
        100: "#ccf0fb",
        200: "#99e1f7",
        300: "#66d1f2",
        400: "#33c2ee",
        500: "#00b3ea",
        600: "#008fbb",
        700: "#006b8c",
        800: "#00485e",
        900: "#00242f",
      },
      white: "#ffffff",
      light: {
        100: "#ffffff",
        200: "#ffffff",
        300: "#ffffff",
        400: "#ffffff",
        500: "#ffffff",
        600: "#cccccc",
        700: "#999999",
        800: "#666666",
        900: "#333333",
      },
    },
    fontFamily: {
      heading: ["Montserrat", ...defaultTheme.fontFamily.sans],
      sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      serif: defaultTheme.fontFamily.serif,
    },
    extend: {
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
