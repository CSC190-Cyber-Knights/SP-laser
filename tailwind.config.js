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
        imposter_red: 'FF0035',
        cad_grey: '8B939C',
        eng_violet: '59546C',
        def_blue: '38405F',
        rich_black: '0E131F',
      },
      backgroundImage: {
        'random-line': "url('./src/assets/line.svg')",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    borderRadius: {
      '4xl': '2rem',
    },
  },
  plugins: [],
}
