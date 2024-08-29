/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        'layout': 'auto 1fr auto',
      },
      keyframes: {
        entry: {
          '0%': { transform: 'translate(-190px, -30px)', opacity: 0 },
          '80%': { transform: "translate(10px, 10px)", opacity: 100 },
          '100%': { transform: "translate(0, 0)", opacity: 100 }
        }
      },
      animation: {
        'entry': 'entry 1s ease-in-out',
      }
    },
    fontFamily: {
      'barlow': ['Barlow']
    },
  },
  plugins: [],
}

