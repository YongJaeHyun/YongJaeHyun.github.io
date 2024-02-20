/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      screens: {
        desktop: "1800px",
        laptop: "1500px",
      },
      boxShadow: {
        aboutCard: "rgba(0, 0, 0, 0.2) 40px 60px 40px -5px",
      },
    },
  },
  plugins: [],
};
