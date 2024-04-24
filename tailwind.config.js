/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },

    extend: {
      colors: {
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
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
