const { mergeConfig } = require('vite');
const process = require('process');
const packageJSON = require('../package.json');

function isRoot(cwd) {
  return  cwd.substring(cwd.lastIndexOf('/') + 1) === packageJSON.name;
}

async function stories() {
  const cwd = process.cwd();
  // Crude...but enables running package stories independently.
  // Possible alternative better approach?
  if (isRoot(cwd)) {
    return ['../stories/**/*.stories.mdx'];
  } else {
    return [`${cwd}/src/**/*.stories.@(js|jsx)`];
  }
}

module.exports = {
  stories,
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  core: {},
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  features: {
    interactionsDebugger: true,
    storyStoreV7: false,
  },

  async viteFinal(config) {
    // return the customized config
    return mergeConfig(config, {});
  },
};
