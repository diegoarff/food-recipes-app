/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx, js}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        interLight: ['interLight'],
        interRegular: ['interRegular'],
        interMedium: ['interMedium'],
        interSemiBold: ['interSemiBold'],
        interBold: ['interBold'],
        interBlack: ['interBlack'],
      },
    },
  },
  plugins: [],
};
