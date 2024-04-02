import plugin from "tailwindcss/plugin";

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
      animation: {
        blink: "blink 1s steps(2, start) infinite",
        hello: "hello 2s ease-out infinite",
        appear: "appear 0.5s linear forwards",
        asideAppear: "asideAppear 0.4s ease forwards",
        flipX: "flipX 0.7s cubic-bezier(.5,.55,.5,.5) forwards",
      },
      keyframes: {
        blink: {
          to: { visibility: "hidden" },
        },
        wave: {
          "0%": {
            transform: "translate3d(-90px, 0, 0)",
          },
          "100%": {
            transform: "translate3d(85px, 0, 0)",
          },
        },
        hello: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "80%": {
            transform: "rotate(25deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
        appear: {
          from: {
            opacity: 0,
            transform: "translateY(30px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        asideAppear: {
          from: {
            transform: "translateX(100%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
        flipX: {
          "0%": {
            opacity: 1,
            transform: "rotateX(-110deg)",
            perspective: "500px",
          },
          "60%": {
            opacity: 1,
            transform: "rotateX(30deg)",
            perspective: "500px",
          },
          "80%": {
            opacity: 1,
            transform: "rotateX(-15deg)",
            perspective: "500px",
          },
          "100%": {
            opacity: 1,
            transform: "rotateX(0)",
            perspective: "500px",
          },
        },
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
};
