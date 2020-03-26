import React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import '@storybook/addon-console';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import theme from './theme';
import { ThemeProvider } from '../src/theme';

addParameters({
  options: { theme },
  backgrounds: [{ name: 'default', value: '#ececec', default: true }],
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    // defaultViewport: 'iphone6',
  },
});

addDecorator(withKnobs);
addDecorator(storyFn => (
  <ThemeProvider>
    <div css="padding: 20px; height: 100%; box-sizing: border-box; overflow-y: auto;">
      <div css="padding: 20px; min-height: 100%; box-sizing: border-box; background: white;">
        {storyFn()}
      </div>
    </div>
  </ThemeProvider>
));

function loadStories() {
  const allExports = [];
  const req = require.context('../src', true, /\.(stories|story)\.jsx?$/);
  req.keys().forEach(filename => {
    allExports.push(req(filename));
  });
  return allExports;
}

configure(loadStories, module);
