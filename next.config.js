/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/pt/pt/:path",
        destination: "/pt/:path",
        permanent: true,
      },
      {
        source: "/en/pt/:path",
        destination: "/pt/:path",
        permanent: true,
      },
      {
        source: "/en/en/:path",
        destination: "/en/:path",
        permanent: true,
      },
      {
        source: "/pt/en/:path",
        destination: "/en/:path",
        permanent: true,
      }
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['http://localhost', 'https://api.champier.co.mz'],
  },
}
const withNextIntl = require('next-intl/plugin')(
  './i18n.ts'
)
module.exports = withNextIntl(nextConfig)
