/**
 * @type {import('next').NextConfig}
 */
const isGithubPages = process.env.NODE_ENV === 'production';
const repoName = 'personal-website';

module.exports = {
  output: 'export',
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  // images: { path: isGithubPages ? `/${repoName}/_next/image` : '/_next/image' }
};
