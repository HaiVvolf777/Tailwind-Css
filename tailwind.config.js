/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'back-img': "Url(/palce.jpg)",
      }),
    },
  },
  plugins: [],
}