module.exports = {
  content: [
    "./src/containers/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/index.js",
  ],
  theme: {
    extend: {
      keyframes: {
        rollOut: {
          "0%": { transform: "translateX(0px) rotate(0deg)" },
          "100%": { transform: "translateX(50px) rotate(100deg)" },
        },
        rollIn: {
          "0%": { transform: "translateX(50px) rotate(100deg)" },
          "60%": { transform: "translateX(-5px) rotate(-10deg)" },
          "100%": { transform: "translateX(0px) rotate(0px)" },
        },
      },
      animation: {
        rollOut: "rollOut 200ms linear forwards",
        rollIn: "rollIn 250ms linear forwards",
      },
    },
  },
};
