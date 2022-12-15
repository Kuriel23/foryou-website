module.exports = {
  reactStrictMode: true,
  swcMinify: true,
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
}