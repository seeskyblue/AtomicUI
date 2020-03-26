import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as Provider } from 'styled-components';

import ResetStyle from './ResetStyle';
import * as defaultTheme from './theme';

export default function ThemeProvider(props) {
  const { children, theme = defaultTheme } = props;
  return (
    <Provider theme={theme}>
      <>
        <ResetStyle />
        {children}
      </>
    </Provider>
  );
}
ThemeProvider.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object,
};
