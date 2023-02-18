/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,html,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                quicksand: ["Quicksand"],
            },
            backgroundImage: {
                'hero': "url('/bus4.jpg')",
              }
        },
    },
    plugins: [],
}
