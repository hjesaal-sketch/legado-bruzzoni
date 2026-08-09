/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/es',
        permanent: true,
      },
    ];
  },
  output: 'standalone',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;