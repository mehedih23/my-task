module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#520f35",
          secondary: "#4aa78e",
          accent: "#fffc00",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
}