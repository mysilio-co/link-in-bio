module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gate': "url('/gate.jpg')",
      }),
      colors: {
        ocean: '#2d6da6',
        'my-green': '#0e90a3',
        'my-purple': '#944c7d',
      }
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      logo: ['Libre Baskerville', 'serif']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
