/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0052CC", // Jira blue
        secondary: "#172B4D", // Dark background
        accent: "#FF5630", // Jira red
      },
    },
  },
  plugins: [],
};
