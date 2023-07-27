/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#B2D0C6",
        "secondary": "#FEB15F",
        "terciary": "#1B5F5E",
        "accent": "#D84531"
      },
      fontFamily: {
        indie: ['Indie Flower', 'cursive'],
        special: ['Special Elite', 'cursive']
      }
    },
  },
  plugins: [],
}

