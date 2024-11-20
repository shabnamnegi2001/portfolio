/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  prefix : "",
  theme: {
    extend: {
      colors:{
        'p_color':'#FE4A55',
        's_color':'#221638'
      }

    },
  },
  plugins: [],
  style: {
    postcssOptions: {
        plugins: [
            require('tailwindcss'),
            // require('autoprefixer'),
        ],
    },
},

}