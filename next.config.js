/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add the pages configuration here
  pages: {
    // The key is the location of the pages directory in your project
    src: '/src/pages',
  },
};

module.exports = nextConfig;
