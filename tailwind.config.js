/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,html}"],
  theme: {
    extend: {},
    screens: {
      xs: { max: "576px" },
      sm: { max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1250px" },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "cupcake"],
  },
};
