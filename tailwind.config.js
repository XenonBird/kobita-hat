import fonts from "./fonts";

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ...fonts,
      },
      aspectRatio: {
        a4: "1 / 1.41",
      },
    },
  },
  plugins: [],
};
