import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { getProp, getTheme } from 'helper/style';

const HelperText = styled.p`
  margin: 8px 0 0;

  font-size: 12px;
  line-height: 1;
  min-height: 12px;

  color: inherit;

  ${getProp.assert('disabled', [
    css`
      ${getTheme('color.textOnSurfaceDisabled')}
    `,
  ])}

  pointer-events: none;
`;

const FormHelperText = React.forwardRef(function FormHelperText(props, ref) {
  const {
    as: Component = HelperText,
    disabled,
    error,
    filled,
    focused,
    readOnly,
    required,
    ...others
  } = props;

  return (
    <Component
      {...others}
      disabled={disabled}
      error={error}
      filled={filled}
      focused={focused}
      readOnly={readOnly}
      required={required}
      ref={ref}
    />
  );
});

FormHelperText.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  filled: PropTypes.bool,
  focused: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
};

export default FormHelperText;
