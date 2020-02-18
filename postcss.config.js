module.exports = {
  plugins: {
    // "postcss-import",
    "tailwindcss": {},
    'postcss-font-magician': {
         variants: {
             'Roboto Condensed': {
                 '300': [],
                 '400': [],
                 '700': []
             },
             'Domine': {
                 '300': [],
                 '400': [],
                 '700': []
             },
             'Open Sans': {
                 '300': [],
                 '400': [],
                 '700': []
             }
         },
         foundries: ['google']
    }
    // "autoprefixer"
  }
};
