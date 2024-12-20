/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	
	theme: {
		fontFamily: {
			ledger: ['Ledger', 'serif'],
		  },
		colors: {
			'orange': '#B07C4B',
			'white': '#ffffff',
			'blue': '#1A243F',
			'black': '#000000',
			'gray-50': '#f9fafb',
			'gray-200': '#e5e7eb',
			'gray-950': '#030712',
		  },
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		// ...
	  ],
}
