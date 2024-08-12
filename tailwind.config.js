/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      spacing: {
        'cloud': '75px',
        'cloud-fixed': '275px',
      },
      borderRadius: {
        'full': '100px',
      },
      backgroundColor: {
        'white': '#ffffff',
        'light-gray': 'rgb(233, 233, 233)',
      },
      screens: {
        'sm': '640px',
        'md': '1280px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
