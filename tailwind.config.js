module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        lightGray: "rgba(0, 0, 0, 0.7)",
        lightBlue: "#0777A1",
        lightAsh: "#EAEAEA",
        countPink: "#FF7990",
        darkBlue: "#170F49",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: "",
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
