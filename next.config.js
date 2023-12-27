/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["cloudflare-ipfs.com", "creations.mattel.com"],
		// formats: ["image/avif", "image/webp"],
	},
};

module.exports = nextConfig;
