/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: '#F0F0F0',
        customGrayDark: '#9A9A9A',

    
      },
      backgroundImage: {
        'hero-bg': "url('/imges/Rectangle 2.png')",},

  
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        integral: ['Integral CF', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

