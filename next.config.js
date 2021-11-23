// @ts-check

const path = require("path");

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  swcMinify: true,
};

module.exports = nextConfig
