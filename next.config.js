/**
 * @type {import('next').NextConfig}
 */
const isGithubPages = process.env.NODE_ENV === 'production';
const isCustomDomain = process.env.GITHUB_PAGES_CUSTOM_DOMAIN === 'true';
const repoName = 'personal-website';

module.exports = {
  output: 'export',
  basePath: (isGithubPages && !isCustomDomain) ? `/${repoName}` : '',
  assetPrefix: (isGithubPages && !isCustomDomain) ? `/${repoName}/` : '',
  // images: { path: isGithubPages ? `/${repoName}/_next/image` : '/_next/image' }
};
