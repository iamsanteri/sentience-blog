/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sourceserifpro': ['"Source Serif Pro"', 'sans-serif']
    },
    extend: {
      colors: {
        sentient: '#282c35',
        recommendations: '#2f333c',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
