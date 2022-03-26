module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
