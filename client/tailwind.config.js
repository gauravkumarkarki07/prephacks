/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
        backgrond:'#1E201E',
        primary:'#00A8CC',
        secondary:'#FF9F1C',
        text:'#EAEAEA',
        accent:'#2ECC71',
        neutral:'#F5F5F5'
      },
      fontFamily:{
        Montserrat:['Montserrat','sans-serif'],
        Poppins:['Poppins','sans-serif'],
        Roboto:['Roboto','sans-serif']
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
}