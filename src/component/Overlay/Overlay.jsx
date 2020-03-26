import React from 'react';
import PropTypes from 'prop-types';

import { OverlayBox } from './meta';

const Overlay = React.forwardRef(function Overlay(props, ref) {
  const { children, ...others } = props;
  return (
    <OverlayBox {...others} ref={ref}>
      {children}
    </OverlayBox>
  );
});

Overlay.propTypes = { children: PropTypes.node };

export default Overlay;
