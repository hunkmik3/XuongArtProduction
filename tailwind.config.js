/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        primary: {
          DEFAULT: '#D0232E',
          light: '#E53E3E',
          dark: '#B91C1C',
        },
        secondary: {
          DEFAULT: '#00673A',
          light: '#059669',
          dark: '#047857',
        },
        accent: {
          DEFAULT: '#FFD200',
          light: '#FDE047',
          dark: '#EAB308',
        },
        // Neutral Colors
        brand: {
          white: '#FFFFFF',
          black: '#000000',
          dark: '#1A1A1A',
          light: '#666666',
        }
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        accent: ['var(--font-accent)', 'system-ui', 'sans-serif']
      },
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-xl': ['2.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'heading-lg': ['2rem', { lineHeight: '1.4' }],
        'heading-md': ['1.5rem', { lineHeight: '1.5' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
      }
    }
  },
  plugins: []
};


