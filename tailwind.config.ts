import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D5A27',
        'primary-dark': '#1E3D1A',
        accent: '#D4A853',
        'accent-light': '#E8C97A',
      },
      fontFamily: {
        sans: ['var(--font-heebo)', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
