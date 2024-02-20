/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      screens: {
        desktop: "1800px",
        laptop: "1500px",
      },
    },
  },
  plugins: [],
};
