module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensure your paths are correct for React
    './public/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
module.exports = {
  theme: {
    extend: {
      keyframes: {
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
          '100%': { borderColor: 'orange' },
        }
      },
      animation: {
        typewriter: 'typewriter 4s steps(40) 1s 1 normal both',
        blink: 'blink 1s infinite step-end',
      }
    }
  }
};



