/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],

    theme: {
        extend: {
            fontFamily: {
                "roboto-slab": ["Roboto Slab"],
            },
            colors: {
                primary: "#14BDEE",
                secondary: "#384158",
                third: "#f3f3f3"
            },
        },
    },
    plugins: [],
};
