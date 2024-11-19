/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  prefix : "",
  theme: {
    extend: {
      colors:{
        'app_primary':'#FE4A55',
        'app_secondary':'#221638'
      }

    },
  },
  plugins: [],
  style: {
    postcssOptions: {
        plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
        ],
    },
},

}