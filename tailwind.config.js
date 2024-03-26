/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /bg-.*/,
    },
    {
      pattern: /border-t-.*/,
      variants: ["after"],
    },
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 10px 5px #48abe0",
      },
    },
  },
  plugins: [],
};
