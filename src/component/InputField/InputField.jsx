import React from 'react';
import PropTypes from 'prop-types';

import FormControl, { withFormControl } from '../FormControl';
import InputLabel from '../InputLabel';
import OutlinedInput from '../OutlinedInput';

const defaultInputComponent = withFormControl(OutlinedInput);
const contextNames = [
  'id',
  'name',
  'value',
  'ref',
  'filled',
  'focused',
  'disabled',
  'readOnly',
  'required',
  'onFill',
  'onEmpty',
  'onFocus',
  'onBlur',
  'onChange',
];

function getInputType(variant) {
  return (
    {
      outlined: withFormControl(OutlinedInput, contextNames.concat('labelRef')),
    }[variant] || defaultInputComponent
  );
}

const InputField = React.forwardRef(function InputField(props, ref) {
  const { id, name, label, variant = 'outlined', type, ...others } = props;
  const Input = getInputType(variant);

  return (
    <FormControl {...others} ref={ref} name={name}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input id={id} type={type} />
    </FormControl>
  );
});

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.node,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['filled', 'outlined']),
};

export default InputField;
