import React from 'react';
import PropTypes from 'prop-types';

import { mergeContext, useFormControlContext } from '../FormControl';

import { LabelBox, RequiredMark } from './meta';

const FormLabel = React.forwardRef(function FormLabel(props, ref) {
  const { as: Component = LabelBox, children, ...others } = props;

  const fcc = useFormControlContext();
  const mergedProps = mergeContext(others, fcc, [
    'disabled',
    'error',
    'filled',
    'focused',
    'readOnly',
    'required',
  ]);

  return (
    <Component
      {...others}
      disabled={mergedProps.disabled}
      error={mergedProps.error}
      readOnly={mergedProps.readOnly}
      filled={mergedProps.filled}
      focused={mergedProps.focused}
      required={mergedProps.required}
      ref={ref}
    >
      {children}
      {mergedProps?.required && <RequiredMark>&thinsp;{'*'}</RequiredMark>}
    </Component>
  );
});

FormLabel.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  children: PropTypes.node,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  filled: PropTypes.bool,
  focused: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
};

export default FormLabel;
