/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'share-tech-mono': ['"Share Tech Mono"']
      },
      keyframes: {
      slide: {
        '0%': { transform: 'translateY(5%)'
        },
        '100%' : { transform: 'translateY(0%)'
        }
      },
    },
      animation: {
        'slide-in': 'slide .20s linear 1',
      },
    },
  },
  plugins: [],
}