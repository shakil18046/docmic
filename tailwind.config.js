/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#2D89FF",

          "paragraph": "#575757",

          "white": "#FFFFFF",

          "secondary": "#642DFF",

          "Text-b": "#1E1E1E",

          "bg-color": "#F7F7F7",

          "Bg-blur-color-One": "#90D4ED",

          "Bg-blur-color-Two": "#EB90ED",

          
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}