module.exports = {
  reactStrictMode: true,
  env: {
    PUBLIC_URL: 'https://amromoorie.github.io/personal-website',
    assetPrefix: './',
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self';font-src fonts.gstatic.com;style-src 'self' fonts.googleapis.com",
              // "default-src 'self'; font-src 'self' https://fonts.gstatic.com/; style-src 'self' https://fonts.googleapis.com/ 'unsafe-inline';",
          },
        ],
      },
    ];
  },
};
