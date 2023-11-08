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
      },
      {
        source: "/pt/blogs/pt/:path",
        destination: "/pt/:path",
        permanent: true,
      },

      {
        source: "/en/blogs/pt/:path",
        destination: "/pt/:path",
        permanent: true,
      },
      {
        source: "/en/blogs/en/:path",
        destination: "/en/:path",
        permanent: true,
      },
      {
        source: "/pt/blogs/en/:path",
        destination: "/en/:path",
        permanent: true,
      },
      {
        source: "/pt/blogs/pt/blogs/:path",
        destination: "/pt/blogs/:path",
        permanent: true,
      },

      {
        source: "/en/blogs/pt/blogs/:path",
        destination: "/pt/blogs/:path",
        permanent: true,
      },
      {
        source: "/en/blogs/en/blogs/:path",
        destination: "/en/blogs/:path",
        permanent: true,
      },
      {
        source: "/pt/blogs/en/blogs/:path",
        destination: "/en/blogs/:path",
        permanent: true,
      },
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
