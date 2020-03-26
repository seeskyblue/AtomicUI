import React from 'react';
import PropTypes from 'prop-types';
import useForkRef from 'helper/useForkRef';

import { useFormControlContext } from '../FormControl';

import { InputLabelBox } from './meta';

const InputLabel = React.forwardRef(function InputLabel(props, ref) {
  const { variant = 'outlined', ...others } = props;

  const fcc = useFormControlContext();
  const { labelRef, filled, focused } = { ...fcc };
  const handleRef = useForkRef(labelRef, ref);

  return (
    <InputLabelBox
      {...others}
      ref={handleRef}
      variant={variant}
      shrinked={focused || filled}
    />
  );
});

InputLabel.propTypes = {
  variant: PropTypes.oneOf(['filled', 'outlined']),
};

export default InputLabel;
