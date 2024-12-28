/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        custom: ['Stalker', 'sans-serif'],
      },
      colors:{
        primary: "#FF00D9",
        main: "#b7410e",
        dust: {
          yellow: '#D9A404',
        },
      }
    },
  },
  plugins: [],

}
