/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        thumbnail: "url('/thumbnail.png)",
      },
      colors: {
        "ld-blue": {
          100: "#F0F8FF",
          200: "#0077F4",
        },
      },
    },
  },
  plugins: [],
};
