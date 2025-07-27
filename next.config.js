const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "http://localhost",
      "https://api.champier.co.mz",
      "api.champier.co.mz",
    ],
  },
};
module.exports = withNextIntl(nextConfig);
