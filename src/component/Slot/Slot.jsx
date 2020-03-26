import React from 'react';

export default React.forwardRef(function Slot(props, ref) {
  return <div {...props} ref={ref} />;
});
