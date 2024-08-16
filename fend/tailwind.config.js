/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-login': "url('../img/img-login/bg-login.jpg')",
        'bg-main': "url('../img/main/main1.jpg')",
      },
      flexBasis: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      screens: {
        '2sm': '576px',
      },
      animation: {
        'pulse-mini': 'spin 3s linear infinite',
        'transition-right': '',
      },
      keyframes: {
        left: {
          '0%, 100%': { transform: 'translate-x-6px' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}

