import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dojo-black': '#0A0A0A',
        'dojo-dark': '#111111',
        'dojo-charcoal': '#1A1A1A',
        crimson: {
          DEFAULT: '#C41E3A',
          50: '#FDE8EC',
          100: '#FBCFD6',
          200: '#F79FB0',
          300: '#F26F89',
          400: '#EE3F63',
          500: '#C41E3A',
          600: '#9E1830',
          700: '#781225',
          800: '#520C19',
          900: '#2C060E',
        },
        gold: {
          DEFAULT: '#B8960C',
          50: '#FDF5D6',
          100: '#FAEBAD',
          200: '#F5D75C',
          300: '#D9B60A',
          400: '#B8960C',
          500: '#8C7209',
          600: '#755F08',
          700: '#5E4C06',
          800: '#473905',
          900: '#302603',
        },
        parchment: {
          DEFAULT: '#F5F0E8',
          50: '#FDFCFA',
          100: '#F5F0E8',
          200: '#E8DECB',
          300: '#DACCAD',
          400: '#CCBA8F',
          500: '#BEA871',
        },
      },
      fontFamily: {
        display: ['var(--font-cinzel)', 'serif'],
        body: ['var(--font-crimson)', 'serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
        kanji: ['var(--font-noto-jp)', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-in': 'fade-in 1s ease-out',
        'slide-up': 'slide-up 0.8s ease-out',
        'scroll-indicator': 'scroll-indicator 2s ease-in-out infinite',
        'belt-rotate': 'belt-rotate 10s linear infinite',
        'counter': 'counter 2s ease-out',
        'red-underline': 'red-underline 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(196, 30, 58, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(196, 30, 58, 0.8)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scroll-indicator': {
          '0%, 100%': { opacity: '1', transform: 'translateY(0)' },
          '50%': { opacity: '0.3', transform: 'translateY(10px)' },
        },
        'belt-rotate': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        'red-underline': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      backgroundImage: {
        'grain': 'url("/images/grain.png")',
        'washi': 'url("/images/washi-texture.png")',
        'dojo-gradient': 'linear-gradient(to bottom, #0A0A0A, #111111, #0A0A0A)',
        'crimson-gradient': 'linear-gradient(135deg, #C41E3A 0%, #8B0000 100%)',
        'gold-gradient': 'linear-gradient(135deg, #B8960C 0%, #8C7209 100%)',
      },
      boxShadow: {
        'crimson-glow': '0 0 20px rgba(196, 30, 58, 0.3)',
        'gold-glow': '0 0 20px rgba(184, 150, 12, 0.3)',
        'card-hover': '0 8px 40px rgba(196, 30, 58, 0.15)',
      },
    },
  },
  plugins: [],
};

export default config;
