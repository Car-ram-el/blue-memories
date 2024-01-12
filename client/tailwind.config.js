/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navyLighter:'#aad6ec',
        navyLight:'#81b1ce',
        navy:'#151269',
        navyDark:'#0f1056	',
        navyDarker:'#113065	',
      },
      fontFamily: {
        gloria: ['Gloria Hallelujah'],
      }
    },
  },
  plugins: [],
}

