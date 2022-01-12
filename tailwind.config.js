module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryRed: "#F74A46",
      },
      backgroundImage: {
        banner: "url('../public/Assets/banner.jpg')",
        bg4: "url('../public/Assets/bg4.png')",
        bg1: "url('../public/Assets/bg.png')",
        bg3: "url('../public/Assets/bg3.png')",
        banner2: "url('../public/Assets/banner.png')",
      },
    },
  },
  plugins: [],
};
