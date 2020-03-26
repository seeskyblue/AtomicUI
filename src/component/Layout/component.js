import React from 'react';
import PropTypes from 'prop-types';
import Portal from 'component/Portal';

import { useLayoutContext } from './LayoutContext';

/*****************************************************************************
 * Named Exports
 *****************************************************************************/
export const Aside = makeLayoutPortal('Aside');
export const Content = makeLayoutPortal('Content');
export const Header = makeLayoutPortal('Header');
export const Footer = makeLayoutPortal('Footer');

/*****************************************************************************
 * Helpers
 *****************************************************************************/
function makeLayoutPortal(name) {
  if (!name) {
    throw new Error('Should pass `name` as sting to `makeLayoutPortal()`');
  }

  const lowercase = name.toLowerCase();
  const [first, ...rest] = lowercase;
  const capitalcase = first.toUpperCase() + rest.join('');

  const elementKey = `${lowercase}`;

  function LayoutPortal(props) {
    const context = useLayoutContext();
    const { [elementKey]: container } = { ...context };

    const { children } = props;
    if (!container) return children;

    return <Portal container={container}>{children}</Portal>;
  }

  LayoutPortal.displayName = capitalcase;
  LayoutPortal.propTypes = { children: PropTypes.node };
  LayoutPortal.defaultProps = { children: null };

  return LayoutPortal;
}
