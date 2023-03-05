module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['foru.website', 'cdn.discordapp.com'],
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