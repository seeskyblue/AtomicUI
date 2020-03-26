import styled, { css } from 'styled-components';
import { getProp, getTheme } from 'helper/style';

export const LabelBox = styled.label`
  display: inline-block;
  font-size: 16px;

  z-index: 1;
  pointer-events: none;

  ${getProp.assert('focused', [
    css`
      color: ${getTheme('color.primary')};
    `,
  ])}

  ${getProp.assert('error', [
    css`
      color: ${getTheme('color.error')};
    `,
  ])}

  ${getProp.assert('disabled', [
    css`
      color: ${getTheme('color.textOnSurfaceDisabled')};
    `,
  ])}

  ${getProp.assert('readOnly', [
    css`
      color: ${getTheme('color.textOnSurfaceInactive')};
    `,
  ])};
`;

export const RequiredMark = styled.abbr`
  color: ${getTheme('color.error')};
  text-decoration: none;
`;
