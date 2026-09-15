/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#090d16",
        secondary: "#111827",
        tertiary: "#1e293b",
        slate: "#94a3b8",
        "light-slate": "#cbd5e1",
        "lightest-slate": "#f8fafc",
        white: "#ffffff",
        accent: "#6366f1",
      },
      boxShadow: {
        'glow': '0 0 20px rgba(99, 102, 241, 0.35)',
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
