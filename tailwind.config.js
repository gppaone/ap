/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'media',
    content: ["./src/**/*.{html,js,svelte}"],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}

