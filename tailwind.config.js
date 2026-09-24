/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#09090B',
          900: '#121217',
          850: '#18181F',
          800: '#202028',
          700: '#2E2E3A',
        },
        crimson: {
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
        },
        'signature-red': '#DC2626',
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        heading: ['"Syne"', '"Space Grotesk"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'glow-red': '0 0 25px -5px rgba(220, 38, 38, 0.35)',
        'glow-red-lg': '0 0 50px -10px rgba(220, 38, 38, 0.45)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'beam-h': 'beamHorizontal 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'beam-v': 'beamVertical 2.8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        beamHorizontal: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '20%': { opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { transform: 'translateX(200%)', opacity: '0' },
        },
        beamVertical: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '30%': { opacity: '1' },
          '70%': { opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
      }
    },
  },
  plugins: [],
}
