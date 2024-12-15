/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/img/hero-pattern.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      colors: {
        chumWine: "#F52F58",
        chumOrange: "#ED6B1A",
        chumLightGreen: "#8cd1d0",
        chumDeepGreen: "#134341",
      },
    },
  },
  plugins: [],
};
