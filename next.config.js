const nextConfig = {
  output: 'standalone',
  experimental: {
    appDir: true,
    // swcPlugins: [
    //   [
    //     'next-superjson-plugin',
    //     {
    //       excluded: [],
    //     },
    //   ],
    // ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
