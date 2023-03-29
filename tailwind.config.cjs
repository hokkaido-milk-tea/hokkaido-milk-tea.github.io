/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		// use tailwind css typography styling
		require('@tailwindcss/typography'),
		require('daisyui'),
	],
	daisyui: {
		themes: ['autumn', 'dracula'],
	},
}
