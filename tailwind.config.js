/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream:    '#F5EFE6',
        sand:     '#D4B99A',
        accent:   '#B07855',
        espresso: '#5C3D2E',
        ink:      '#3B2A1E',
        muted:    '#8C6F5E',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans:  ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        pill: '9999px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(92,61,46,0.08)',
        'card-md': '0 4px 12px rgba(92,61,46,0.12)',
        'card-lg': '0 8px 24px rgba(92,61,46,0.16)',
      },
      transitionDuration: {
        '400': '400ms',
      },
      keyframes: {
        'loading-bar': {
          '0%':   { width: '0%' },
          '60%':  { width: '75%' },
          '90%':  { width: '90%' },
          '100%': { width: '90%' },
        },
      },
      animation: {
        /* barra avança até 90% e pausa — some junto com o fade do overlay */
        'loading-bar': 'loading-bar 3s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
    },
  },
  plugins: [],
}
