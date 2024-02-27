/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: "#3b3939",
        cornflowerblue: "#61aaff",
        black: "#000",
        silver: "#c4c4c4",
        gray: "#919191",
      },
      spacing: {},
      fontFamily: {
        lato: "Lato",
        "macondo-swash-caps": "'Macondo Swash Caps'",
      },
      borderRadius: {
        "81xl": "100px",
      },
    },
    fontSize: {
      sm: "14px",
      lg: "18px",
      "9xl": "28px",
      "3xl": "22px",
      "13xl": "32px",
      "7xl": "26px",
      "6xl": "22px",
      lgi: "19px",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq520: {
        raw: "screen and (max-width: 520px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  }, // add daisyUI plugin
  plugins: [require("daisyui")],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: false, // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
