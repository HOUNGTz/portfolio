/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  basePath: isGithubPages ? '/portfolio' : '',
  images: {
    domains: ['github.com', 'avatars.githubusercontent.com'],
    unoptimized: true,
  },
  output: 'export',
};

export default nextConfig;
