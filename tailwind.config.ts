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
        primary: '#fff9f3',
        secondary: '#0e1f39',
        paragraph: '#313234',
        accent: '#ff31ad'
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
