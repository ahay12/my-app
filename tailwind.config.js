/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
      },
      margin: {
        900: "910px",
      },
      screens: {
        "2xl": "1280px",
      },
    },
  },
  plugins: [],
};
