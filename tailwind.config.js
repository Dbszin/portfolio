/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary-start': '#007cf0', // Azul vibrante
        'primary-end': '#00dfd8'   // Azul esverdeado
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #007cf0, #00dfd8)', // Gradiente personalizado
      }
    }
  },
  plugins: [],
};