/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}","./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { kickfixx: "#0EA5FF" },
      boxShadow: { card: "0 10px 25px -10px rgba(0,0,0,0.2)" },
      borderRadius: { "2xl": "1rem" }
    },
  },
  plugins: [],
};
