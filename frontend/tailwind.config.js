/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'rotate-stats': 'rotate-stats 9s ease-in-out infinite',
      },
       keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'rotate-stats': {
          '0%': { transform: 'translateY(0)' },
          '33%': { transform: 'translateY(-33.33%)' },
          '66%': { transform: 'translateY(-66.66%)' },
          '100%': { transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [  ('tailwindcss-animate'),
],

}

