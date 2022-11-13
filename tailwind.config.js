/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'red': {
          '500': '#ff0000'
        },
      },
      zIndex: {
        '100': '100',
      }
    },
  },
  plugins: [],
}
