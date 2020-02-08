// There are issues when using typescript + storybook inside NextJs.
// https://gist.github.com/justincy/b8805ae2b333ac98d5a3bd9f431e8f70
// Storybook issue: https://github.com/storybookjs/presets/issues/95

const path = require('path');

module.exports = {
  webpackFinal: async (baseConfig, options) => {
    const { module = {} } = baseConfig;

    const newConfig = {
      ...baseConfig,
      module: {
        ...module,
        rules: [...(module.rules || [])]
      }
    };

    newConfig.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: [
        path.resolve(__dirname, '../components'),
        path.resolve(__dirname, '../stories')
      ],
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel']
          }
        }
      ]
    });
    newConfig.resolve.extensions.push('.ts', '.tsx');
    return newConfig;
  }
};
