/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
        secondary: "#112240",
        tertiary: "#233554",
        slate: "#8892b0",
        "light-slate": "#a8b2d1",
        "lightest-slate": "#ccd6f6",
        white: "#e6f1ff",
        accent: "#64ffda",
      },
      boxShadow: {
        'glow': '0 0 10px rgba(100, 255, 218, 0.1)',
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
