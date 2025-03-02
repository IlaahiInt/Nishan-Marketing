import type { Config } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F4A026', // Vibrant Orange
        secondary: '#0D1B2A', // Deep Navy Blue
        'primary-light': '#f6b251',
        'primary-dark': '#e08d0e',
        'secondary-light': '#1a2c42',
        'secondary-dark': '#060f17',
        'gray-light': '#F8F9FA',
        'footer': {
          'bg': '#0D1B2A',      // Same as secondary for consistency
          'text': '#A0AEC0',    // Light gray for footer text
          'heading': '#F8F9FA', // Almost white for footer headings
          'link': '#CBD5E0',    // Lighter gray for footer links
        },
        'text': {
          'primary': '#0D1B2A',    // Main text
          'secondary': '#4A5568',   // Secondary text
          'muted': '#718096',      // Muted text
          'light': '#F8F9FA',      // Light text for dark backgrounds
          'link': '#F4A026',       // Link text
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
} satisfies Config