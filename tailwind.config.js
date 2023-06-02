/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'poppins' : ['Nunito', 'sans-serif'],
        'raleway' : ['Raleway', 'sans-serif']
      },

      color: {
        'flips' : '#ebe8e5',
        'bgs' : '#072d5b',
      
        
      
      },

    },
  },
  plugins: [],
}


