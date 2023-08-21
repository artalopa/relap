/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      poppins: ['"Poppins", sans-serif'],
    },
    extend: {
      boxShadow: {
        relap: "16px 16px 48px 0px rgba(0, 0, 0, 0.1)",
        relap2: "16px 16px 48px 0px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [require("daisyui")],
};
