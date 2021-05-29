const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          850: "#21252d"
        },
      },
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      minWidth: {
        "song-slide": "9.5rem",
      },
      minHeight: {
        "song-slide": "9.5rem"
      },
    },
  },
  variants: {
    extend: {
      height: ["hover"],
      width: ["hover"]
    },
  },
  plugins: [],
};
