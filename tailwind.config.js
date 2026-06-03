/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: '#020408',
          dark: '#050c14',
          navy: '#060d1f',
          blue: '#0a1628',
          cyan: '#00d4ff',
          teal: '#00ffcc',
          green: '#00ff88',
          red: '#ff2244',
          orange: '#ff6b00',
          yellow: '#ffcc00',
          gray: {
            900: '#0a0f1a',
            800: '#111827',
            700: '#1f2937',
            600: '#374151',
            500: '#6b7280',
            400: '#9ca3af',
            300: '#d1d5db',
          }
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'spin-reverse': 'spin-reverse 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'data-stream': 'data-stream 2s linear infinite',
        'orbit': 'orbit 8s linear infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'matrix': 'matrix 20s linear infinite',
        'slide-up': 'slide-up 0.6s ease-out forwards',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,212,255,0.3)' },
          '50%': { boxShadow: '0 0 60px rgba(0,212,255,0.8)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'data-stream': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-20px)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        matrix: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'cyber': '0 0 30px rgba(0,212,255,0.3)',
        'cyber-lg': '0 0 60px rgba(0,212,255,0.5)',
        'green-glow': '0 0 30px rgba(0,255,136,0.3)',
        'red-glow': '0 0 30px rgba(255,34,68,0.3)',
      }
    },
  },
  plugins: [],
};
