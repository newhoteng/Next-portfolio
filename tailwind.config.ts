import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '	hsl(30, 100%, 98%)',
        // primary: '#fffefb',
        secondary: '	hsl(216, 61%, 14%)',
        paragraph: '	hsl(220, 3%, 20%)',
        accent: '	hsl(324, 100%, 60%)',
        lightblue: '#c3d4ee'
        // accent: '#9615db',
        // accent: '#f48200',
      },
      boxShadow: {
        'around': '0 2px 8px rgba(0, 0, 0, 0.15)',
        'dark': '0px 2px 16px rgba(82, 214, 244, 0.8)',
      },
      keyframes: {
        slideleft: {
          '0%': { 'opacity': '0', 'right': '-2rem' },
          '100%': { 'opacity': '1', 'right': '0'},
        },
        slideup: {
          '0%': { 'margin-top': '120vh' },
          '100%': { 'margin-top': '0' },
        }
      },
      animation: {
        slideleft: 'slideleft 0.8s ease-in-out forwards',
        slideup: 'slideup 1s ease-in-out forwards'
      }
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
export default config
