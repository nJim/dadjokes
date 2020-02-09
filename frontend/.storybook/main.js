const path = require('path');

module.exports = {
  stories: ['../components/**/*.stories.(js|tsx)'],
  presets: [path.resolve(__dirname, './next-preset.js')],
  addons: [
    '@storybook/addon-actions', 
    '@storybook/addon-links', 
    '@storybook/addon-a11y/register',
    '@storybook/addon-knobs/register'
  ],
};
