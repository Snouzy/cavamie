const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./**/*.{liquid, json}', './assets/*.liquid', './layout/*.liquid', './sections/*.liquid', './snippets/*.liquid', './templates/*.liquid', './templates/**/*.liquid'],
  theme: {
    colors: {
      'default': '#505050',
      'white': '#ffffff',
      'mustard': "#F0DA6A",
      'logo': '#ff2949',
      'spirit': "#9A4921",
      'vine': '#A01F1F',
      'beer': "#E8B43E",
      'bubbles': '#F0DA6A',
      'main-yellow': '#FFD142',
    },
    screens: {
      'phone': '475px',
      'tablet': '640px',
      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
      'xs': '475px',
      'xxs': '400px',
      ...defaultTheme.screens,
    }
    // extend: {},
  },
};
