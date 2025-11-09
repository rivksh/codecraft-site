/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary))',
        accent: 'rgb(var(--accent))',
        background: {
          light: 'rgb(var(--background-light))',
          dark: 'rgb(var(--background-dark))',
        },
      },
      fontFamily: {
        sans: ['Assistant', 'system-ui', 'sans-serif'],
        heading: ['Rubik', 'Assistant', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}