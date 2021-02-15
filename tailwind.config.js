module.exports = {
  purge: ['./src/**/*.svelte', './public/*.html'],
  plugins: [
    require('tailwindcss-font-inter'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ]
};