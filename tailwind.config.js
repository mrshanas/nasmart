/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        white: "#fff",
        black: "#000",
        purple: "#5222D0",
        darkBlue: "#041F31",
        lightGreen: "#00F5A0",
        lightBlack: "#222525",
        lightCoral: "#ef6f6c",
        snow: "#ada8b6",
        maroon: "#800e13",
        richBlack: "#08090a",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "Poppins"],
    },
  },
  plugins: [],
};
