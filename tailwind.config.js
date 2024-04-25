
// import DaisyUIPlugin from "daisyui/plugin";
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", 
    "node_modules/daisyui/dist/**/*.js", 
    "node_modules/react-daisyui/dist/**/*.js"
],

    theme: {
        extend: {
            fontFamily: {
                "roboto-slab": ["Roboto Slab"],
            },
            colors: {
                primary: "#14BDEE",
                secondary: "#384158",
                third: "#f3f3f3",
                "third-2": "#76777a",
                yellow: "#ffc80a",
            },
        },
    },
    plugins: [require('daisyui')],
};
