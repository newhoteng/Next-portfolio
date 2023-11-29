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
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ]
      }
    },
  },
  plugins: [
    
  ],
}
export default config
