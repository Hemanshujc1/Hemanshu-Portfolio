/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        ambient: '0 0 100px 20px rgba(147, 51, 234, 0.4)', // purple ambient
      },
      backgroundImage: {
        ambient: 'radial-gradient(circle at center, #991bfa, #1e1b4b)', // ambient bg
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        bounceIn: 'bounceIn 1s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        bounceIn: {
          '0%': { opacity: 0, transform: 'scale(0.8)' },
          '60%': { opacity: 1, transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
