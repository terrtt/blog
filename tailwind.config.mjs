/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        cream: {
          50: '#FBF8F3',
          100: '#F5F1EA',
          200: '#EDE6DA',
          300: '#DCD1BE',
        },
        ink: {
          900: '#1A1613',
          800: '#2A2320',
          700: '#3F3733',
          600: '#605852',
          500: '#8A7F76',
          400: '#B5A99E',
        },
        terracotta: {
          500: '#C2410C',
          600: '#9A3412',
          700: '#7C2D12',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.ink.800'),
            maxWidth: 'none',
          },
        },
      }),
    },
  },
  plugins: [],
};
