const withMDX = require('@next/mdx')();

module.exports = withMDX({
  webpack: (config, options) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    }

    return config
  },
  // pageExtensions: ['mdx'],
});
