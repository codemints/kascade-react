/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./*.{html,js,jsx}",
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    fontFamily: {
      theme: ["Fira Sans", "sans-serif"]
    },
    fontWeight: {
      heading: 700,
      body: 400,
    },
    extend: {
      colors: {
        "dark-800": "#081229",
        "dark-700": "#191d3a",
        "dark-600": "#3f465c",
        "dark-400": "#677196",
        "dark-200": "#c3c5d1",
        "dark-100": "#e8e9f1",
        "blue-500": "#404b84",
        "blue-400": "#6371b8",
        "pink-600": "#bf1650",
        "pink-400": "#ec5990",
        "pink-200": "#ff7aa8",
        "pink-100": "#ffbfd6",
      },
    },
  },
  plugins: [],
}