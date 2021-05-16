// using this file for building tailwind.css for storybook
// project is using tailwind.config.js itself

module.exports = {
    plugins: [
      require("postcss-import"),
      require("tailwindcss"),
      require("postcss-nested"),
      require("postcss-custom-properties"),
      require("autoprefixer"),
    ]
  };