import React from 'react';
import PropTypes from 'prop-types';

import { useFormContext } from '../Form';

import FormControlProvider from './FormControlContext';
import { FormControlBox } from './meta';

const FormControl = React.forwardRef(function FormControl(props, ref) {
  const {
    as: Component = FormControlBox,
    name,
    children = null,
    disabled = false,
    error = false,
    readOnly = false,
    required = false,
    variant = 'outlined',
    ...others
  } = props;

  const labelRef = React.useRef(null);
  const [filled, { handleFill, handleEmpty }] = useFilled();
  const [focused, { handleFocus, handleBlur }] = useFocused();
  const [value, { handleChange }] = useValue(props);

  const contextValue = React.useMemo(
    () => ({
      /* refs */
      ref,
      labelRef,
      /* style states */
      filled,
      focused,
      disabled,
      readOnly,
      required,
      variant,
      /* form states */
      name,
      value,
      error,
      /* callbacks */
      onFill: handleFill,
      onEmpty: handleEmpty,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onChange: handleChange,
    }),
    [
      disabled,
      error,
      filled,
      focused,
      handleBlur,
      handleChange,
      handleEmpty,
      handleFill,
      handleFocus,
      name,
      readOnly,
      ref,
      required,
      value,
      variant,
    ]
  );

  return (
    <FormControlProvider value={contextValue}>
      <Component {...others}>{children}</Component>
    </FormControlProvider>
  );
});

FormControl.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  children: PropTypes.node,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  filled: PropTypes.bool,
  focused: PropTypes.bool,
  name: PropTypes.string.isRequired,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  validate: PropTypes.func,
  variant: PropTypes.oneOf(['filled', 'outlined']),
};

export default FormControl;

/*****************************************************************************
 * Hooks
 *****************************************************************************/
function useFilled() {
  const [filled, setFilled] = React.useState(false);

  const handleFill = React.useCallback(() => {
    setFilled(true);
  }, []);
  const handleEmpty = React.useCallback(() => {
    setFilled(false);
  }, []);

  return [filled, { handleFill, handleEmpty }];
}

function useFocused() {
  const [focused, setFocused] = React.useState(false);

  const handleFocus = React.useCallback(() => {
    setFocused(true);
  }, []);
  const handleBlur = React.useCallback(() => {
    setFocused(false);
  }, []);

  return [focused, { handleFocus, handleBlur }];
}

function useValue({ validate }) {
  const [value, setValue] = React.useState('');
  const formContext = useFormContext();

  const handleChange = React.useCallback(
    changedValue => {
      setValue(changedValue);
      formContext?.onChange(name, changedValue);
      formContext?.onCheckValidity(name, validate?.(changedValue));
    },
    [formContext, validate]
  );

  return [value, { handleChange }];
}
