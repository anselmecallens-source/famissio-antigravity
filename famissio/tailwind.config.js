/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    corePlugins: {
        preflight: false,
    },
    safelist: [
        'border-black',
        'border-2',
        'border-gray-900',
        'hover:border-black',
        'border-orange-200',
        'shadow-md',
    ],
    important: true,
}
