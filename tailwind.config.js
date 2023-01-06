/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        floatUp: {
          "0%, 100%": { transform: "translatey(0px)" },
          "50%": { transform: "translatey(-15px)" },
        },
        shake: {
          "20%, 60%": { transform: "rotate(5deg)", scale: "1.2" },
          "40%, 80%": { transform: "rotate(-5deg)", scale: "1.4" },
        },
      },
      animation: {
        floatUp: "floatUp 5s ease-in-out infinite",
        /*   floatDown: "floatDown 6s ease-in-out infinite", */
        shake: "shake 0.5s ease-in-out infinite",
      },
      width: {
        "2X": "200%",
      },
    },
  },
  plugins: [],
};
