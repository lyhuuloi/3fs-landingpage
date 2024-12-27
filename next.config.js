/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['profile.3fs.vn'],
    unoptimized: true,  // Thêm dòng này
  },
  env: {
    COMPANY_NAME: '3F Solutions Co., Ltd.',
    COMPANY_SHORT_NAME: '3FS',
    COMPANY_WEBSITE: '3fs.vn'
  },
	output: 'export',
	
}

module.exports = nextConfig
