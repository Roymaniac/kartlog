module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "320px",
      md: "760px",
      lg: "976px",
    },
    extend: {
      colors: {
        lightGray: "rgba(0, 0, 0, 0.7)",
        lightBlue: "#0777A1",
        lightAsh: "#EAEAEA",
        countPink: "#FF7990",
        darkBlue: "#170F49",
        darkBlack: '#212121'

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
