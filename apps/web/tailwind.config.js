const path = require("path");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    path.join(require.resolve("@thaddeusjiang/react-table"), "../**/*.{js,ts,jsx,tsx}"),
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          ...require("./src/styles/colors/themes")["[data-theme=light]"],
        },
      },
    ],
  },
};
