import styled, { css } from 'styled-components';
import { getProp, getTheme, px } from 'helper/style';

const BORDER_RADIUS = 4;
export const SHRINKED_SCALE = 0.75;
export const LABEL_PADDING_ASIDE = 4;
export const NOTCHED_WIDTH_ASIDE = 12;

const borderStyle = css`
  border: solid currentColor;
  border-width: ${getProp.assert('focused', ['2px', '1px'])};
`;

const transitionStyle = css`
  ${getTheme('animation.duration')} ${getTheme('animation.curveDefault')}
`;

export const NotchedOutline = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;

  height: 100%;
  width: 100%;

  ${getProp.assert('focused', [
    css`
      color: ${getTheme('color.primary')};
    `,
    css`
      color: ${getTheme('color.divider')};
    `,
  ])}

  pointer-events: none;

  &::before {
    content: '';

    flex: none;
    box-sizing: border-box;
    height: 100%;
    width: ${px(NOTCHED_WIDTH_ASIDE)};

    color: inherit;
    ${borderStyle}
    border-right: none;
    border-radius: ${px(BORDER_RADIUS)} 0 0 ${px(BORDER_RADIUS)};

    transition: border-width ${transitionStyle}, border-color ${transitionStyle};
  }

  &::after {
    content: '';

    flex: auto;
    box-sizing: border-box;
    height: 100%;
    min-width: ${px(NOTCHED_WIDTH_ASIDE)};

    ${borderStyle}
    border-left: none;
    border-radius: 0 ${px(BORDER_RADIUS)} ${px(BORDER_RADIUS)} 0;

    transition: border-width ${transitionStyle}, border-color ${transitionStyle};
  }
`;

export const NotchBox = styled.div`
  position: relative;

  box-sizing: border-box;
  height: 100%;
  width: 0;
  max-width: calc(100% - ${px(NOTCHED_WIDTH_ASIDE)} * 2);

  ${borderStyle};
  border-top: none;
  border-left: none;
  border-right: none;

  transition: width ${transitionStyle}, border-width ${transitionStyle},
    border-color ${transitionStyle};

  ${getProp.assert('focused', [
    css`
      border-width: 2px;
    `,
  ])}

  ${getProp.assert('notched', [
    css`
      width: ${getProp('labelWidth', width =>
        width > 0 ? px(width * SHRINKED_SCALE + LABEL_PADDING_ASIDE * 2) : 0
      )};
    `,
  ])}
`;
