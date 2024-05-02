/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./app.vue",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

