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
        "accent": "#D84531",
        "rainbox-green": "#96CB93",
        "rainbox-natilla": "#EADA93",
        "rainbox-yellow": "#F3C846",
        "rainbox-orange": "#EEA71B",
        "rainbox-red": "#ED4E38",
      },
      fontFamily: {
        indie: ['Indie Flower', 'cursive'],
        special: ['Special Elite', 'cursive']
      }
    },
  },
  plugins: [],
}

