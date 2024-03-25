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
    colors: {
      red: 'FF0035',
      grey: '8B939C',
      violet: '59546C',
      blue: '38405F',
      black: '0E131F',
    },
    extend: {
      colors: {
        imposter_red: 'FF0035',
        grey: '8B939C',
        violet: '59546C',
        blue: '38405F',
        black: '0E131F',
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
