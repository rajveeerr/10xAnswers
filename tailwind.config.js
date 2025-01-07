/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'radial-gradient(128% 107% at 0% 0%, #292929 0%, rgb(0,0,0) 77.61%)',
      },
    },
  },
  plugins: [],
}