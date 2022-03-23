module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      colors: {
        heading: "#22283C",
        primary: "#fc8b40",
        gray: "#9DA1B4",
      },
      boxShadow: {
        base: "0 6px 24px rgba(252, 139, 64, .2)",
        gray: "0 6px 24px rgba(183, 183, 183, .4)",
      },
      gridTemplateColumns: {
        "popular-games": "repeat(auto-fit, minmax(200px, 1fr))",
        "released-games": "repeat(auto-fit, minmax(254px, 1fr))",
      },
      container: {
        center: true,
        padding: "10px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/forms")],
};
