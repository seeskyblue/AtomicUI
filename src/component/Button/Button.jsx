import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { getProp, getTheme } from 'helper/style';

const ButtonBox = styled.button.attrs(props => ({
  type: props.type || 'button',
}))`
  vertical-align: middle;
  white-space: nowrap;

  border: none;
  border-radius: 4px;

  color: ${getTheme('color.primary')};

  cursor: pointer;

  ${getProp.map(
    'variant',
    {
      contained: css`
        height: 36px;
        min-width: 64px;
        padding: 0 16px;

        color: ${getTheme('color.textOnPrimaryEmphasisHigh')};
        background: ${getTheme('color.primary')};
        box-shadow: ${getTheme('shadow.2')};
      `,
      outlined: css`
        box-sizing: border-box;
        height: 36px;
        min-width: 64px;
        padding: 0 16px;

        font-size: 14px;

        background: none;
        border: 1px solid currentColor;
        border-radius: 4px;
      `,
      text: css`
        height: 36px;
        min-width: 64px;
        padding: 0 8px;

        font-size: 14px;

        background: none;
      `,
      toggle: css`
        height: 48px;
        width: 48px;
        padding: 0 12px;
      `,
    },
    'contained'
  )}
`;

const Button = React.forwardRef(function Button(props, ref) {
  const { children = null, ...others } = props;
  return (
    <ButtonBox ref={ref} {...others}>
      {children}
    </ButtonBox>
  );
});

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
