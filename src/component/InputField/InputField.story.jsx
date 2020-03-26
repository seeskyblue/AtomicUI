import React from 'react';

import InputField from './InputField';

export default {
  title: 'InputField',
  component: InputField,
};

export const Outlined_Input = () => (
  <InputField
    id="outlined"
    name="outlined"
    variant="outlined"
    label="Outlined Input"
  />
);
