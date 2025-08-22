const isCustomDomain = process.env.GITHUB_PAGES_CUSTOM_DOMAIN === 'true';
const basePath = (process.env.NODE_ENV === 'production' && !isCustomDomain) ? '/personal-website' : '';
export default basePath;
