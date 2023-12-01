import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '	hsl(30, 100%, 98%)',
        secondary: '	hsl(216, 61%, 14%)',
        paragraph: '	hsl(220, 3%, 20%)',
        accent: '	hsl(324, 100%, 60%)'
      },
      boxShadow: {
        'around': '0 2px 8px rgba(0, 0, 0, 0.15)',
      },
      keyframes: {
        slideleft: {
          '0%': { 'opacity': '0', 'right': '-2rem' },
          '100%': { 'opacity': '1', 'right': '0'},
        },
        slideup: {
          '0%': { 'top': '120%' },
          '100%': { 'top': '0%' },
        }
      },
      animation: {
        slideleft: 'slideleft 0.8s ease-in-out forwards',
        slideup: 'slideup 1.5s ease-in-out forwards'
      }
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
export default config
