/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

     

      colors: {
        customGray: '#F0F0F0',
        customGrayDark: '#9A9A9A',
          lightgray: '#F0EEED',
          logoGray: '#B9B9B9',
       
      },
  
  
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        integral: ['Integral CF', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

