/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.vercel.com','uidesign.gbtcdn.com',''],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
