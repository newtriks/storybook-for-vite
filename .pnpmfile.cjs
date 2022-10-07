function readPackage(pkg, context) {
  const storybookViteDeps = {
    '@babel/core': '^7.19.3',
    '@mdx-js/react': '^1',
    '@storybook/addon-actions': '^7.0.0-alpha.35',
    '@storybook/addon-backgrounds': '^7.0.0-alpha.35',
    '@storybook/addon-docs': '^7.0.0-alpha.35',
    '@storybook/addon-essentials': '^7.0.0-alpha.35',
    '@storybook/addon-highlight': '^7.0.0-alpha.35',
    '@storybook/addon-interactions': '^7.0.0-alpha.35',
    '@storybook/addon-links': '^7.0.0-alpha.35',
    '@storybook/addon-measure': '^7.0.0-alpha.35',
    '@storybook/addon-outline': '^7.0.0-alpha.35',
    '@storybook/cli': '^7.0.0-alpha.35',
    '@storybook/client-api': '^7.0.0-alpha.35',
    '@storybook/client-logger': '^7.0.0-alpha.35',
    '@storybook/jest': '^0.0.10',
    '@storybook/react': '^7.0.0-alpha.35',
    '@storybook/react-vite': '^7.0.0-alpha.35',
    '@storybook/testing-library': '^0.0.13',
    '@types/react': '^18.0.17',
    '@types/react-dom': '^18.0.6',
    'babel-loader': '^8.2.5',
    storybook: '^7.0.0-alpha.35',
    typescript: '^4.8.4',
    webpack: '^5.74.0',
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
