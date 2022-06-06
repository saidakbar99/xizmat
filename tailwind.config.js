module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'main-blue': '#0898E7',
        'light-blue': '#4DB5EE',
        'gray-paragraph1': '#38424D',
        'gray-paragraph2': '#747E88',
        'features-bg': '#F1FBFD',
      },
      boxShadow: {
        'custom': '0px 0px 10px 0px rgb(154 154 154 / 16%)',
      },
      animation: {
        fromLeft1: 'slideInFromLeft 1s ease-out 1',
        fromLeft2: 'slideInFromLeft 1.3s ease-out 1',
        fromLeft3: 'slideInFromLeft 1.7s ease-in-out 1',
        fromLeft4: 'slideInFromLeft 3s ease-in-out 1',
        ping2s: 'ping 2s ease-out infinite',
        wiggle: 'wiggle 1s ease-in-out infinite'
      },
      keyframes: {
        slideInFromLeft : {
          '0%': {
            transform: 'translateX(-20%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 100,
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
    },
  },
  plugins: [

  ],
}
