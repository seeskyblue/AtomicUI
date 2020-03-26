import { createGlobalStyle, css } from 'styled-components';
import { getTheme } from 'helper/style';

/******************************************************************************
 * Using css helper below to support css syntax highlight of atom plugin
 * @babel-lanaguage
 * https://atom.io/packages/language-babel
 ******************************************************************************/
const style = css`
  html {
    height: 100%;
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;

    &[lang='zh'] {
      font-family: 'PingFang SC', 'Hiragino Sans GB', 'Microsoft Yahei';
    }

    color: ${getTheme('color.textOnSurfaceEmphasisHigh')};
  }

  body {
    height: 100%;
    background: ${getTheme('color.surfaceDark')};
  }

  #root {
    height: 100%;
  }

  .marge-icon {
    pointer-events: none;
  }
`;

const ResetStyle = createGlobalStyle`${style}`;
export default ResetStyle;
