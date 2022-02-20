const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/about': { page: '/projects' },
      '/about': { page: '/blog' },
    }
  },
  //assetPrefix: '',
  assetPrefix: !debug ? 'personal-website/' : '',
  webpack: (config) => {
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    return config
  },
}
