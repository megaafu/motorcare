/** @type {import('next').NextConfig} */

const nextConfig = {
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
