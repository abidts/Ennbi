/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: {
          // ... your primary colors
        },
        accent: {
          // ... your accent colors
        },
        // 🔥 Add this radiant color scale
        radiant: {
          50: '#f0f5ff',
          100: '#dbe8ff',
          200: '#adc8ff',
          300: '#7eaaff',
          400: '#4f8cff',
          500: '#266dff',
          600: '#0054e6',
          700: '#0041b3',
          800: '#003080',
          900: '#00204d',
        },
      },
      animation: {
        'scroll-down': 'scroll-down 1.5s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'hero-pattern':
          "url('https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

