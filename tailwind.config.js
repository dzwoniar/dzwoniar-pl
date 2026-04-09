/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#100B09',
        surface: '#1C1412',
        'surface-light': '#2A1F1B',
        'warm-white': '#FAF6F1',
        muted: '#B5A99B',
        'muted-dim': '#6B5B50',
        accent: '#C0392B',
        'accent-hover': '#A93226',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(0, 0, 0, 0.25)',
        glow: '0 0 40px rgba(192, 57, 43, 0.15)',
      },
    },
  },
  plugins: [],
}
