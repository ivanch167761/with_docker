/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
      domains: ['deeptest.ams3.digitaloceanspaces.com']
  },
  swcMinify: true,
  output: 'standalone',
}

module.exports = nextConfig
