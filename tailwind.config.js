/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-light": "#373E44",
        "background-dark": "#191B1F",
        "widget-background": "#363C43",
        "header-background": "#171717",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "rgb(31 29 29) #363C43",
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#363C43",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "linear-gradient(135deg, #888989, #4A4E54)",
            borderRadius: "20px",
            // border: "1px solid white",
          },
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
