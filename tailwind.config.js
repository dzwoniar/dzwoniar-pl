/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#000000',
        surface: '#0f0f0f',
        'surface-light': '#1a1a1a',
        'warm-white': '#ffffff',
        muted: '#a3a3a3',
        'muted-dim': '#525252',
        accent: '#10b981',
        'accent-hover': '#34d399',
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(0, 0, 0, 0.4)',
        glow: '0 0 40px rgba(16, 185, 129, 0.15)',
      },
    },
  },
  plugins: [],
}
