/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        'container': '1170px',
      },
    },
    fontFamily: {
      'inter': ["Inter"],
    }
  },
  plugins: [],
}

