/** @type {import('next').NextConfig} */
const nextConfig = {};

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
	dest: "public",
	register: true,
	skipWaiting: true,
	runtimeCaching,
});

module.exports = withPWA({
	//...before
	pwa: {
		dest: "public",
		register: true,
		skipWaiting: true,
	},
	//...after
});
