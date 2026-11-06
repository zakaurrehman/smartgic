import type { Config } from 'tailwindcss';

/**
 * Smartgic design tokens.
 *
 * The palette is the logo's: two rounded bars in cyan and blue on navy. Navy
 * carries authority (heroes, statement sections, footer), blue is the action
 * colour, cyan is the accent. `teal` is a darker cyan for text on light
 * backgrounds — the logo cyan itself fails WCAG contrast as small text on white.
 * `gold` is reserved for Golden Visa material and never used as body text.
 *
 * The original token names (brand.*, ink.*) are kept so every existing
 * component keeps resolving while pages move to the new system.
 */
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
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
        '5.5': '1.375rem',
        '6.5': '1.625rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      colors: {
        brand: {
          blue: '#1763E8',
          'blue-dark': '#0E47B0',
          'blue-light': '#4C8DFF',
          cyan: '#11C2CC',
          'cyan-dark': '#0BA2AB',
          navy: '#0A1730',
          'navy-soft': '#0F2148',
        },
        navy: {
          950: '#050B1A',
          900: '#0A1730',
          850: '#0C1B39',
          800: '#0F2148',
          700: '#15295A',
          600: '#1E3A78',
        },
        teal: {
          DEFAULT: '#087078',
          dark: '#065A61',
        },
        gold: {
          DEFAULT: '#D4B06A',
          light: '#EBD5A4',
          dark: '#A9853E',
        },
        surface: {
          DEFAULT: '#F5F7FB',
          2: '#EDF1F8',
          3: '#E3E9F4',
        },
        ink: {
          900: '#0A1730',
          700: '#1C2A47',
          600: '#334061',
          500: '#475069',
          400: '#6B7488',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        /* Fluid display scale: each step grows with the viewport between a
           phone and a wide desktop, so headings never need per-breakpoint
           overrides. */
        'display-2xl': ['clamp(2.6rem, 1.55rem + 4.1vw, 5.1rem)', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
        'display-xl': ['clamp(2.1rem, 1.4rem + 2.55vw, 3.55rem)', { lineHeight: '1.06', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(1.9rem, 1.35rem + 2vw, 3.05rem)', { lineHeight: '1.08', letterSpacing: '-0.028em' }],
        'display-md': ['clamp(1.5rem, 1.25rem + 0.95vw, 2.05rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.2rem, 1.1rem + 0.4vw, 1.4rem)', { lineHeight: '1.3', letterSpacing: '-0.012em' }],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        soft: '0 2px 8px rgba(10,23,48,0.05), 0 12px 32px rgba(10,23,48,0.07)',
        card: '0 1px 2px rgba(10,23,48,0.04), 0 8px 24px rgba(10,23,48,0.06)',
        lift: '0 2px 6px rgba(10,23,48,0.05), 0 24px 56px -12px rgba(10,23,48,0.18)',
        float: '0 30px 80px -20px rgba(5,11,26,0.55)',
        glow: '0 18px 50px -12px rgba(23,99,232,0.45)',
        'glow-cyan': '0 18px 50px -12px rgba(17,194,204,0.45)',
        'inner-highlight': 'inset 0 1px 0 0 rgba(255,255,255,0.12)',
        ring: '0 0 0 1px rgba(10,23,48,0.06)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(100deg, #11C2CC 0%, #1763E8 60%, #0E47B0 100%)',
        'brand-gradient-soft':
          'linear-gradient(135deg, rgba(17,194,204,0.12) 0%, rgba(23,99,232,0.12) 100%)',
        'gold-gradient': 'linear-gradient(100deg, #EBD5A4 0%, #D4B06A 55%, #A9853E 100%)',
        'navy-radial':
          'radial-gradient(120% 80% at 50% 0%, #15295A 0%, #0A1730 45%, #050B1A 100%)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
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
        /* A light sweep across a button face. */
        sheen: {
          '0%': { transform: 'translateX(-120%) skewX(-20deg)' },
          '100%': { transform: 'translateX(220%) skewX(-20deg)' },
        },
        /* Indeterminate progress sweep for the route-loading bar. */
        progress: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(220%)' },
        },
        'slide-fill': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        /* Slow drift for aurora blobs behind dark sections. */
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(6%,-4%,0) scale(1.06)' },
          '66%': { transform: 'translate3d(-5%,5%,0) scale(0.96)' },
        },
        /* Travels a highlight along a card's border. */
        'border-spin': {
          '0%': { '--angle': '0deg' },
          '100%': { '--angle': '360deg' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        marquee: 'marquee 40s linear infinite',
        float: 'float 7s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
        sheen: 'sheen 1.1s cubic-bezier(0.22,1,0.36,1)',
        progress: 'progress 1.1s ease-in-out infinite',
        'slide-fill': 'slide-fill 3s linear forwards',
        drift: 'drift 22s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.22,1,0.36,1) infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
