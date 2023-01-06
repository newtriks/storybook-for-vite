function readPackage(pkg, context) {
  const storybookViteDeps = {
    '@mdx-js/react': '^2.1.5',
    '@storybook/addon-essentials': '7.0.0-beta.5',
    '@storybook/addon-links': '7.0.0-beta.5',
    '@storybook/addons': '7.0.0-beta.5',
    '@storybook/addon-docs': '7.0.0-beta.5',
    '@storybook/addon-interactions': '7.0.0-beta.5',
    '@storybook/cli': '7.0.0-beta.5',
    '@storybook/jest': '^0.0.10',
    '@storybook/react': '7.0.0-beta.5',
    '@storybook/react-vite': '7.0.0-beta.5',
    '@storybook/test-runner': '^0.9.0',
    '@storybook/testing-library': '^0.0.13',
    globby: '^13.1.2',
    msw: '^0.49.2',
    'msw-storybook-addon': '^1.6.3',
    storybook: '7.0.0-beta.5',
  };

  if (pkg.name === 'storybook-for-vite') {
    pkg.dependencies = {
      ...pkg.dependencies,
      ...storybookViteDeps,
    };
  }

  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
};
