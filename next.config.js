const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const withSass = require('@zeit/next-sass');

const { ANALYZE } = process.env;

module.exports = {
  webpack(config) {
    if (ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          analyzerPort: 6666,
          openAnalyzer: true,
        }),
      );
    }

    return config;
  },
};

module.exports = withSass(module.exports);
