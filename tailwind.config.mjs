/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter"],
      },
      colors: {
        gray700: "#475467",
        gray900: "#101828",
        gray600: "#344054",
        Bluemagenta: "#F9F5FF",
        secondarypurple: "#6941C6",
        primarypurple: "#7F56D9",
      },
    },
  },
  plugins: [],
};
