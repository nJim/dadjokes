const path = require('path');

module.exports = {
  stories: ['../components/**/*.stories.(js|tsx)'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  presets: [path.resolve(__dirname, './next-preset.js')],
};
