/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  env: {
    COMPANY_NAME: '3F Solutions Co., Ltd.',
    COMPANY_SHORT_NAME: '3FS',
    COMPANY_WEBSITE: '3fs.vn'
  }
}

module.exports = nextConfig
