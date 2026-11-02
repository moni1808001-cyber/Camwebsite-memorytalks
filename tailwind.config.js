/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF8F5',
          100: '#F5EFE6',
          200: '#EBDDCF',
          300: '#DFC8B3',
          400: '#D0B296',
          500: '#C29C7C',
        },
        gold: {
          50: '#FDFBF5',
          100: '#FAF2DE',
          200: '#F3E4B8',
          300: '#E7CE86',
          400: '#DCBC5B',
          500: '#C8A238',
          600: '#B08827',
          700: '#8C671E',
          800: '#6C4D1C',
          900: '#563D1A',
        },
        charcoal: {
          900: '#1A1817',
          800: '#2A2522',
          700: '#3D3733',
          600: '#58504B',
          500: '#7A716A',
          400: '#A19890',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Montserrat"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'gold-subtle': '0 4px 25px -4px rgba(200, 162, 56, 0.15)',
        'gold-glow': '0 8px 30px -4px rgba(200, 162, 56, 0.3)',
        'cream-card': '0 10px 35px -5px rgba(42, 37, 34, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}

