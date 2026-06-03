import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', lg: '2rem' },
      screens: { '2xl': '1280px' },
    },
    extend: {
      spacing: {
        '4.5': '1.125rem',
        '13': '3.25rem',
        '18': '4.5rem',
      },
      colors: {
        brand: {
          blue: '#1763E8',
          'blue-dark': '#0E47B0',
          cyan: '#11C2CC',
          'cyan-dark': '#0BA2AB',
          navy: '#0A1730',
          'navy-soft': '#0F2148',
        },
        ink: {
          900: '#0A1730',
          700: '#1C2A47',
          500: '#475069',
          400: '#6B7488',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 8px rgba(10,23,48,0.06), 0 12px 32px rgba(10,23,48,0.08)',
        card: '0 1px 2px rgba(10,23,48,0.04), 0 8px 24px rgba(10,23,48,0.07)',
        glow: '0 18px 50px -12px rgba(23,99,232,0.45)',
        'glow-cyan': '0 18px 50px -12px rgba(17,194,204,0.45)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(100deg, #11C2CC 0%, #1763E8 60%, #0E47B0 100%)',
        'brand-gradient-soft': 'linear-gradient(135deg, rgba(17,194,204,0.12) 0%, rgba(23,99,232,0.12) 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        marquee: 'marquee 32s linear infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
