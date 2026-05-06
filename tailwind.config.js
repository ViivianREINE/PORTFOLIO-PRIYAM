/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'serif'],
        display: ['Playfair Display', 'serif'],
        sans: ['DM Sans', 'Manrope', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        cream: '#FAF6F0',
        ivory: '#F5EFE6',
        beige: '#EDE0D0',
        blush: '#F2D8D8',
        petal: '#F9E4E4',
        butter: '#FDF3C8',
        sand: '#D4B896',
        mocha: '#8B6F5E',
        espresso: '#5C3D2E',
        brown: {
          50: '#FAF6F0',
          100: '#F0E6D8',
          200: '#DFC9B0',
          300: '#C9A882',
          400: '#B08558',
          500: '#8B6F5E',
          600: '#6E5347',
          700: '#5C3D2E',
          800: '#3D2B20',
          900: '#2A1F18',
        },
        rose: {
          50: '#FFF5F5',
          100: '#FFE8E8',
          200: '#F9D0D0',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out infinite 2s',
        'shimmer': 'shimmer 3s linear infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-rose': '0 0 40px rgba(242, 180, 180, 0.3)',
        'glow-butter': '0 0 40px rgba(253, 230, 138, 0.3)',
        'glow-mocha': '0 0 40px rgba(139, 111, 94, 0.2)',
        'luxury': '0 25px 80px -12px rgba(92, 61, 46, 0.15), 0 10px 30px -10px rgba(92, 61, 46, 0.1)',
        'card': '0 4px 30px rgba(139, 111, 94, 0.08), 0 1px 8px rgba(92, 61, 46, 0.06)',
        'card-hover': '0 20px 60px rgba(139, 111, 94, 0.15), 0 5px 20px rgba(92, 61, 46, 0.08)',
      },
    },
  },
  plugins: [],
}
