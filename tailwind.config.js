/** @type {import('tailwindcss').Config} */

export default {
  content: [
    // './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  darkMode: "class",

  plugins: [],
};
