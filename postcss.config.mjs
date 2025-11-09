import tailwindPostcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: {
    // use the official PostCSS plugin package for Tailwind
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}