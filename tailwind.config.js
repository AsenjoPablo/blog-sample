module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#7617B1',
          DEFAULT: '#AB4AE8',
          light: '#E0BBF6',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
