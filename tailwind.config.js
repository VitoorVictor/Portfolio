/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bodyColor: '#00152E',
        blueColor: '#214478',
        purpleColor: '#3730a3',
      },
      fontFamily: {
        suse: ['SUSE', 'sans-serif'], // Definindo 'ultra' como uma fonte personalizada
      },
      zIndex: {
        60: '60',
      },
      transitionDelay: {
        900: '900ms',
      }
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}
