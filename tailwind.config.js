/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            "main": "var(--main)",
            "secondary": "var(--secondary)",
            "third": "var(--third)",
            "bg": "var(--bg)",
            "divider": "var(--divider)",
            "input-bg": "var(--input-bg)"
        },
        extend: {
            keyframes: {
                Collapse: {
                    '0%, 100%': {left: "4rem"},
                }
            }
        },
    },
    plugins: [],
}