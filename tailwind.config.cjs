/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#772bdb",

          "secondary": "#89e6f4",

          "accent": "#a5f7bb",

          "neutral": "#311D35",

          "base-100": "#F0EFF1",

          "info": "#7C97EE",

          "success": "#5DDFA7",

          "warning": "#EAB33E",

          "error": "#F34F6A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
