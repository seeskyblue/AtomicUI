import styled, { css } from 'styled-components';
import { getProp, getTheme, px } from 'helper/style';

import FormLabel from '../FormLabel';
import * as inputMeta from '../InputBase/meta';
import * as outlinedMeta from '../OutlinedInput/meta';

const { SHRINKED_SCALE } = outlinedMeta;
const OUTLINED_UNSHRINKED_LEFT =
  inputMeta.INPUT_PADDING_ASIDE + outlinedMeta.LABEL_PADDING_ASIDE;
const OUTLINED_SHRINKED_LEFT =
  outlinedMeta.NOTCHED_WIDTH_ASIDE + outlinedMeta.LABEL_PADDING_ASIDE;

const transitionStyle = css`
  ${getTheme('animation.duration')} ${getTheme('animation.curveDefault')}
`;

export const InputLabelBox = styled(FormLabel)`
  position: absolute;

  transform-origin: top left;
  transition: top ${transitionStyle}, left ${transitionStyle},
    width ${transitionStyle}, transform ${transitionStyle};

  ${getProp.map(
    'variant',
    {
      outlined: css`
        ${getProp.assert('shrinked', [
          css`
            top: 0;
            left: ${px(OUTLINED_SHRINKED_LEFT)};
            transform: scale(${SHRINKED_SCALE}) translateY(-50%);
          `,
          css`
            top: 50%;
            left: ${px(OUTLINED_UNSHRINKED_LEFT)};
            transform: scale(1) translateY(-50%);
          `,
        ])}
      `,
    },
    'outlined'
  )}
`;
