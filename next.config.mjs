/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/portfolio',
  images: {
    domains: ['github.com', 'avatars.githubusercontent.com'],
    unoptimized: true,
  },
  output: 'export',
};

export default nextConfig;
