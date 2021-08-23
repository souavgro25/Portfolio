module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 3s ease-in-out ",
        fadeleft: "fadeleft 3s ease-in-out",
        faderight: "faderight 3s ease-in-out",
      },
      keyframes: {
        wiggle: {
          "0%": { opacity: 0, transform: "rotate(-3deg)" },

          "50%": { opacity: 0.5, transform: "rotate(3deg)" },
          "100%": { opacity: 1, transform: "rotate(0deg)" },
        },
        fadeleft: {
          "0%": { opacity: 0, transform: "translatex(-10px)" },

          "50%": { opacity: 0.2, transform: "translatex(10px)" },
          "100%": { opacity: 1, transform: "translate(0)" },
        },
        faderight: {
          "0%": { opacity: 0, transform: "translatex(10px)" },

          "50%": { opacity: 0.2, transform: "translatex(-10px)" },
          "100%": { opacity: 1, transform: "translate(0)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
