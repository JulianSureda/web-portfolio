/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
	"node_modules/magicui-design/**/*",
  ],
  theme: {
  	extend: {
  		animation: {
  			'shiny-text': 'shiny-text 8s infinite',
  			gradient: 'gradient 8s linear infinite'
  		},
  		keyframes: {
  			'shiny-text': {
  				'0%, 90%, 100%': {
  					'background-position': 'calc(-100% - var(--shiny-width)) 0'
  				},
  				'30%, 60%': {
  					'background-position': 'calc(100% + var(--shiny-width)) 0'
  				}
  			},
  			gradient: {
  				to: {
  					backgroundPosition: 'var(--bg-size) 0'
  				}
  			}
  		},
  		colors: {
  			highlight: '#47b9ff',
  			background: '#02060b'
  		},
  		fontFamily: {
  			poppins: ['Poppins', 'sans-serif']
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}