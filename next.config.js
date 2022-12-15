const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins([withBundleAnalyzer], {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  images: {
    domains: ['panda.animesonlinegames.ml', 'cdn.discordapp.com'],
  },
  async redirects() {
    return [
      {
        source: '/profile',
        destination: '/',
        permanent: false,
      },
    ];
  },
});
