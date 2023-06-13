/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0284C7",
        wheyBg: "#1DA7E1",
        creatineBg: "#0093FF",
        heading: "#84DCC67D",
        green: "#57CC99",
        yellow: "#FFE45E",
        tiffany: "#84DCC6",
        red: "#E54C37",
        tiffanyBlur: "#84DCC6",
        aboutGrey: "#999191",
      },
      keyframes: {
        sidebar: {
          "0%": { right: "-100%" },
          "100%": { right: "0" },
        },
        sidebarClose: {
          "0%": { right: "0" },
          "100%": { right: "-100%" },
        },
        headerAnimation: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        linksScroll: {
          "0%": { transform: "translateY(-100%) translateX(-50%)" },
          "100%": { transform: "translateY(0) translateX(-50%)" },
        },
      },
    },
    fontFamily: {
      primary: ["Work Sans", "sans-serif"],
      special: ["Rowdies"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1800px",
    },
  },
  plugins: [],
};
