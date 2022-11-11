/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/public/Asuransi.png')",
      },
      fontFamily: {
        jose: ["Josefin Sans"],
        alfa: ["Alfa Slab One"],
        open: ["Open Sans"]
      },
    },
  },
  plugins: [],
};
