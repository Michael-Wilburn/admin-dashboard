/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  daisyui: {
    themes: ['light', 'dark', 'cupcake', 'lofi'],
  },
  plugins: [require('daisyui')],
};
