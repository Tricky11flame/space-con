/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "mystic-plum": "#392467",
        "royal-lavender": "#5D3587",
        "soft-lilac": "#A367B1",
        "petal-pink": "#FFD1E3",
        spaceCon: {
          opbg : '#010415',
          primary : '#392467',
          secondary : '#5D3587',
          tertiary : '#A367B1',
          q : '#FFD1E3'
        } 
      },
      animation: {
        'bounce': 'bounce 4s infinite;',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        "space-background": "url('/images/space-background.jpg')",
        "spaceGif" : "url('/space.gif')",
      },
      boxShadow : {
        '3xl' : '-4px 4px #392467',
      }
    },
    keyframes: {
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
        },
        '50%': {
          transform: 'translateY(0)',
          animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
        },
      },
    },
    fontFamily : {
      spaceCon : ['Trispace'],
      akira: ["akira_expanded", "sans-serif"],
      deathstar: ["death_star", "sans-serif"],
      ethnocentric: ["ethnocentric", "sans-serif"],
      lemonmilk: ["lemon_milk", "sans-serif"],
      montserrat: ["montserrat", "sans-serif"],
    }
  },
  plugins: [],
}
