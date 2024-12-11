/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        html5: '#E34F26',
        tailwind: '#38B2AC',
        react: '#61DAFB',
        laravel: '#FF2D20',
        mysql: '#00758F',
        github: '#181717',
        postman: '#FF6C37',
      },
    },
  },
  plugins: [],
}