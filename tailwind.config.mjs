/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        font: "#FFFFFF",
        font2: "#B6C3D0",
        bgcolor: "#000306",
        borderColor: "#9A9A9A",
        orange: "#FF6D00",
      },
    },
  },
  plugins: [],
};
