/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			screens: {
				sm: "480px",
				// => @media (min-width: 480px) { ... }
			},
			colors: {
				blackBg: "#121212",

				primaryOrange: "#D87D4A",
				primaryBlack: "#101010",
				primaryGrey: "#F1F1F1",
				primaryWhite: "#FAFAFA",
				primaryError: "#CD2C2C",

				secondaryOrange: "#FBAF85",
				secondaryWhite: "#fff",
				secondaryBlack: "#000",
			},
		},
		container: {
			padding: {
				DEFAULT: "1rem",
				xl: "0",
			},
		},
	},
	plugins: [],
};
