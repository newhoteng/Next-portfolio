import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      colors: {
        primary: '#fff9f3',
        secondary: '#0e1f39',
        paragraph: '#313234',
        accent: '#ff31ad'
      },
      // fontFamily: {
      //   display: 'Oswald, ui-serif', // Adds a new `font-display` class
      // }
    },
  },
  plugins: [
    // function ({ addUtilities }) {
    //   const newUtilities = {
    //     "no-scrollbar::-webkit-scrollbar": {
    //       display: "none",
    //     },
    //     "no-scrollbar": {
    //       "ms-overflow-style": "none",
    //       "scrollbar-width": "none",
    //     },
    //   };

    //   addUtilities(newUtilities)
    // }
  ],
}
export default config
