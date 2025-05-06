/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#1e40af',
        cloud: '#f8fafc',
        midnight: '#1e293b',
        gold: '#f59e0b',
        green: '#059669',
      },
    },
  },
  plugins: [],
} 