/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": "'Google Sans Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif",
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('@tailwindcss/line-clamp'),
    require('autoprefixer'),
  ],
}
