/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        discord: '#5865F2',
      },
    },
  },
  darkMode: 'class',
  plugins: [require('tailwind-scrollbar')],
};
