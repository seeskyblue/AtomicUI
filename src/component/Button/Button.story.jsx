import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const contained = () => (
  <Button onClick={action('clicked')} variant="contained">
    Contained Button
  </Button>
);

export const outlined = () => (
  <Button onClick={action('clicked')} variant="outlined">
    Outlined Button
  </Button>
);

export const text = () => (
  <Button onClick={action('clicked')} variant="text">
    Text Button
  </Button>
);

export const toggle = () => (
  <>
    <Button onClick={action('clicked')} variant="toggle">
      T
    </Button>
    <Button onClick={action('clicked')} variant="toggle">
      T
    </Button>
    <Button onClick={action('clicked')} variant="toggle">
      T
    </Button>
  </>
);
