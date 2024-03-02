/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        baseGray: "#60739f",
        baseBlack: "#0f1219",
        darkGray: "#222939",
        lightGray: "#e5e9f0",
      },
    },
  },
  plugins: [],
};
