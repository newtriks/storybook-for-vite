const { mergeConfig } = require('vite');

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../packages/**/*.stories.@(js|jsx)',
    '../web/**/*.stories.@(js|jsx)',
  ],
  addons: ['@storybook/addon-essentials'],
  core: {},
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  features: {
    storyStoreV7: false,
  },

  async viteFinal(config) {
    // return the customized config
    return mergeConfig(config, {});
  },
};
