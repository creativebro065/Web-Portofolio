/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brutalDark: '#1d1f3b', // Deep Navy of the logo (Background)
        brutalCard: '#ffffff', // White card for contrast
        brutalAmber: '#f9a620', // Yellow-orange glasses (Accent)
        brutalSlate: '#b3c3d5', // Bluish-gray shading (Border/Shadow)
      },
      boxShadow: { 
        'brutal': '4px 4px 0px 0px #1d1f3b', // old Shadow Navy 
        'brutal-hover': '2px 2px 0px 0px #1d1f3b', 
        'brutal-amber': '5px 5px 0px 0px #f9a620', // Amber accent shadow 
      } 
    }, 
  }, 
  plugins: [],
}
