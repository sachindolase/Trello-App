/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
  extend: {
  colors: {
  ghostwhite: "#f8faff",
              "light-gohan": "#fff",
  dodgerblue: {
              "100": "#3f84f8",
              "200": "#3e84f8",
              },
              "light-trunks": "#999ca0",
              "light-beerus-beerus": "#f2f2f2",
              "light-piccolo-piccolo": "#0e6fff",
              "light-bulma": "#000",
              "light-bulma1": "#231f20",
  gainsboro: {
              "100": "#e0e0e0",
              "200": "#d9d9d9",
             },
  gray:       "rgba(0, 0, 0, 0.5)",
              "secondary-text": "#858585",
              "light-grey": "#b0b0b0",
  lightcoral: "#ee8484",
  khaki:      "#f6dc7d",
  darkseagreen:"#98d89e",
               "light-green": "#9bdd7c",
               "light-red": "#e9a0a0",
               "field-color-darker": "#eaeaea",
  honeydew:    "#e9f9eb",
               "supportive-roshi-100": "#3cc952",
  lightsteelblue: "#a9b0e5",
  lightpink:      "#eca4a4",
  burlywood:      "#debf85",
  mediumaquamarine: "#7fcd93",
               },
      spacing: {},
  fontFamily: {
              "paragraph-text-md-s": "Figtree",
              "avertastd-semibold": "AvertaStd-Semibold",
  lato:       "Lato",
  montserrat: "Montserrat",
              "open-sans": "'Open Sans'",
              },
  borderRadius: {
             "11xl": "30px",
   xl:       "20px",
             "15xl": "34px",
               },
          },
 fontSize: {
            sm: "14px",
            base: "16px",
            "3xs": "10px",
            xl: "20px",
            "5xl": "24px",
            lg: "18px",
            xs: "12px",
            "2xl": "21px",
            "2xs": "11px",
            "17xl": "36px",
           inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};




