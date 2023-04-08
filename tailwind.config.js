const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/*.{js,jsx}',
    './src/modules/**/*.{js,jsx}',
    './src/pages/**/*.{js,jsx}',
    './src/shared/components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      screens: {
        'max-xs': { max: '280px' },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },

        '.font-smoothing': {
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
        },

        '.transparent-tap-highlight': {
          '-webkit-tap-highlight-color': 'transparent',
        },
      });
    }),
  ],
};
