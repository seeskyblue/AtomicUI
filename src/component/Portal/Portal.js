import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import setRef from 'helper/setRef';
import useForkRef from 'helper/useForkRef';
import useEnhancedEffect from 'helper/useEnhancedEffect';

export function portal(children, domNode) {
  return ReactDom.createPortal(children, domNode);
}

const Portal = React.forwardRef(function Portal(props, ref) {
  const { children, container, disablePortal = false, onRendered } = props;
  const [mountNode, setMountNode] = React.useState(null);
  const handleRef = useForkRef(children.ref, ref);

  useEnhancedEffect(() => {
    if (!disablePortal) {
      setMountNode(container || document.body);
    }
  }, [container, disablePortal]);

  useEnhancedEffect(() => {
    if (mountNode && !disablePortal) {
      setRef(ref, mountNode);
      return () => {
        setRef(ref, null);
      };
    }

    return undefined;
  }, [disablePortal, mountNode, ref]);

  useEnhancedEffect(() => {
    if (mountNode || disablePortal) onRendered?.();
  }, [disablePortal, mountNode, onRendered]);

  if (disablePortal) {
    React.Children.only(children);
    return React.cloneElement(children, {
      ref: handleRef,
    });
  }

  return mountNode ? portal(children, mountNode) : mountNode;
});

Portal.propTypes = {
  children: PropTypes.node,
  container: PropTypes.instanceOf(
    typeof Element === 'undefined' ? Object : Element
  ),
  disablePortal: PropTypes.bool,
  onRendered: PropTypes.func,
};

export default Portal;
