const { mergeConfig } = require('vite');
const packageJSON = require('../package.json');
const path = require('path');
function isRoot(cwd) {
  return cwd.substring(cwd.lastIndexOf('/') + 1) === packageJSON.name;
}

async function stories() {
  const cwd = process.cwd();
  // Crude...but enables running package stories independently.
  // Possible alternative better approach?
  if (isRoot(cwd)) {
    const { globby } = await import('globby'); // globby is ESM only
    // https://github.com/storybookjs/storybook/issues/19446#issuecomment-1276067149
    return await globby(
      [
        // Include root level documentation (mdx)
        '../stories/**/*.stories.mdx',
        // Include component stories (jsx)
        `../(packages|web)/**/*.stories.jsx`,
        // Exclude component stories within node_modules
        `!../(packages|web)/*/node_modules`,
      ],
      {
        cwd: path.join(cwd, '.storybook'),
      }
    );
  } else {
    // Only specific package/web stories (jsx)
    return [`${cwd}/src/**/*.stories.jsx`];
  }
}

module.exports = {
  stories,
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    return {
      ...config,
      resolve: {},
    };
  },
};
