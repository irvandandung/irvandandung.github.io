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
        primary: '#FFFFFF',
        'primary-light': '#F0F0F0',
        'primary-dark': '#E0E0E0',
        'accent-purple': '#C778DD',
        'dark-bg': 'hsl(218 12% 18%)',
        'dark-secondary': '#242D3D',
        'dark-tertiary': '#FFFFFF',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-fira-code)', 'monospace'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
