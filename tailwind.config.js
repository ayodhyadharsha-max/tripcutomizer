/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f6ff',
          100: '#e0edff',
          200: '#b9dbfe',
          300: '#7cbcfd',
          400: '#3699fa',
          500: '#0066ff', // Primary Royal Blue
          600: '#004ee6',
          700: '#003bbb',
          800: '#0a2540', // Deep Navy
          900: '#051424',
          950: '#020a12',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          400: '#fbbf24',
          500: '#f59e0b', // Warm Gold / Amber Accent
          600: '#d97706',
        },
        emerald: {
          500: '#10b981',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(10, 37, 64, 0.08)',
        'mega': '0 20px 40px -15px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
};
