module.exports = {
  important: true,
  theme: {
    fontFamily: {
      display: ["Rubik", "sans-serif"],
      body: ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        cyan: "#9cdbff",
      },
      margin: {
        "96": "24rem",
        "128": "32rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
