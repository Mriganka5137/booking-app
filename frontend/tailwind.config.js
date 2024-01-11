/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "10rem",
      },
    },
  },
  plugins: [],
};
