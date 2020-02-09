import React from 'react';
import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

// Manually add CSS to storybook.
import '../components/00-base/global.css';

// Add the a11y addon to all components.
addDecorator(withA11y);
