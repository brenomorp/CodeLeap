/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        title: "1.375rem",
      },
      lineHeight: {
        title: "1.6rem",
      },
      colors: {
        blue: "#7695EC",
        red: "#FF5151",
        green: "#47B960",
      },
    },
  },
  plugins: [],
};
