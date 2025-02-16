/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                syne: ["Syne", "sans-serif"],
                eczar: ["Eczar", "serif"],
            },
            colors: {
                beige: {
                    50: "#faf6f0",
                    100: "#f4ece0",
                },
                brown: {
                    900: "#3c2a1e",
                    700: "#5a4a42",
                    300: "#d3c1b8",
                },
            },
        },
    },
    plugins: [require("tailwind-scrollbar")],
};
