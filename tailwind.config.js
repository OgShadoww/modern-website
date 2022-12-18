/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  mode: 'jit',
  purge: [
     './public/**/*.html',
     './src/**/*.{js,jsx,ts,tsx,vue}',
   ],
  theme: {
    extend: {},
  },
  plugins: [],
}
