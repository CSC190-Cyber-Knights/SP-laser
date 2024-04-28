/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },

    extend: {
      colors: {
        pastel1: '#ffb3ba',
        pastel2: '#ffdfba',
        pastel3: '#ffffba',
        pastel4: '#baffc9',
        pastel5: '#bae1ff',

        primary: '#313E50',
        secondary: '#3A435E',

        imposter_red: '#FF0035',
        cad_grey: '#8B939C',
        eng_violet: '#59546C',
        def_blue: '#C0C0C0',
        mat_grey: '#121212',
        rich_black: '#0E131F',
        noir_dark: '#e8e6e3',
        deep_charcoal: '#333333',
      },
      backgroundImage: {
        'random-line': "url('./src/assets/line.svg')",
        topography: "url('./public/static/assets/topography.svg')",
        'ca-flag': "url('./public/static/assets/ca-flag.svg')",
        texture: "url('./public/static/assets/texture.svg')",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
