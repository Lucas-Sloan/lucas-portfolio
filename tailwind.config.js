/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#16213e',
        'midnight-blue': '#0f3460',
        'neon-red': '#e94560',
        'electric-cyan': '#00adb5',
        'soft-white': '#e3f6f5',
      },
      boxShadow: {
        'neon-glow': '0 0 10px #00adb5, 0 0 20px #e94560, 0 0 30px #00adb5',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
}