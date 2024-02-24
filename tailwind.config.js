/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: "#3b3939",
        dimgray: "#615e5e",
        cornflowerblue: {
          100: "#61aaff",
          200: "#2e78cc",
        },
        black: "#000",
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
      "5xl": "24px",
      lgi: "19px",
      "17xl": "36px",
      "10xl": "29px",
      "3xl": "22px",
      "51xl": "70px",
      "37xl": "56px",
      "23xl": "42px",
      inherit: "inherit",
    },
    screens: {
      mq1525: {
        raw: "screen and (max-width: 1525px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq850: {
        raw: "screen and (max-width: 850px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
