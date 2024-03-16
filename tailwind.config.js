/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "customBlue": "#00c0e2",
      "customGreen": "#50DBB4",
      "customGray": "#dcdde1",
      "customOrange": "#fe4902"
    }
  },
  plugins: [],
}

