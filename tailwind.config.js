/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#0B0E1A',
        'bg-deep': '#05060D',
        'panel': '#10142A',
        'teal': '#3E909E',
        'magenta': '#FF2E92',
        'amber': '#FFB627',
        'violet': '#6C4FF6',
        'ink': '#EDEAE0',
        'ink-dim': '#9B9DB0',
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
        'mono': ['"Space Mono"', 'monospace'],
        'serif': ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
