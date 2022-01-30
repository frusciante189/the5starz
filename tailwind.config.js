module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryRed: "#F74A46",
        secondaryRed: "#c02b0a",
        bgRed: "rgb(255, 249, 249)",
      },
      backgroundImage: {
        banner: "url('../public/Assets/banner.jpg')",
        bg4: "url('../public/Assets/bg4.png')",
        bg1: "url('../public/Assets/bg.png')",
        bg3: "url('../public/Assets/bg3.png')",
        bg5: "url('../public/Assets/bg5.png')",
        banner2: "url('../public/Assets/banner.png')",
      },
    },
  },
  plugins: [],
};
