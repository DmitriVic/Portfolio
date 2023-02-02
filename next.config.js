/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
	webpack(config) {
	  config.module.rules.push({
		 test: /\.svg$/,
		 use: ["@svgr/webpack"]
	  });
 
	  return config;
	},
	images: {
		domains: ['habrastorage.org'],
		loader: 'custom',
    	loaderFile: './my/image/loader.js',
		// unoptimized: true,
	 },
	 
 };