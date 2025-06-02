const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  webpackFinal: async (config) => {
    config.resolve.alias['@components'] = path.resolve(__dirname, '../src/components');
    config.resolve.alias['@context']    = path.resolve(__dirname, '../src/context');
    config.resolve.alias['@hooks']      = path.resolve(__dirname, '../src/hooks');
    config.resolve.alias['@utils']      = path.resolve(__dirname, '../src/utils');
    config.resolve.alias['@constants']  = path.resolve(__dirname, '../src/constants');
    config.resolve.alias['@theme']      = path.resolve(__dirname, '../src/theme');
    config.resolve.alias['@services']   = path.resolve(__dirname, '../src/services');
    return config;
  }
};
