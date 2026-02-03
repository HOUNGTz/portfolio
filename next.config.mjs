/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS === 'true';
const repoName = '/portfolio';

const nextConfig = {
  basePath: isGithubPages ? repoName : '',
  assetPrefix: isGithubPages ? repoName : '',
  images: {
    domains: ['github.com', 'avatars.githubusercontent.com'],
    unoptimized: true,
  },
  output: 'export',
};

export default nextConfig;
