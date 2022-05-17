module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'ibmplex': 'IBM Plex Sans'
      }
    },
    colors: {
      accent: '#3545E9',
      warning: '#FEFD54',
      success: '#63C995',
      error: '#E23D69',
      primary: '#222328',
      secondary: '#969AB0',
      bright: '#FFFFFF',
      muted: '#7C9CBF',
      shade: '#DBE2EA'
    }
  },
  plugins: [],
}
