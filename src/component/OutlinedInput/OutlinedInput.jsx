import React from 'react';
import PropTypes from 'prop-types';
import useEnhancedEffect from 'helper/useEnhancedEffect';

import InputBase from '../InputBase';

import { NotchBox, NotchedOutline } from './meta';

const OutlinedInput = React.forwardRef(function OutlinedInput(props, ref) {
  const { labelRef, ...others } = props;

  const [labelWidth, setLabelWidth] = React.useState(0);
  useEnhancedEffect(() => {
    setLabelWidth(labelRef?.current?.offsetWidth || 0);
  }, []);

  return (
    <InputBase {...others} ref={ref}>
      {({ filled, focused }) => (
        <NotchedOutline focused={focused}>
          <NotchBox
            focused={focused}
            notched={filled || focused}
            labelWidth={labelWidth}
          />
        </NotchedOutline>
      )}
    </InputBase>
  );
});

OutlinedInput.propTypes = {
  labelRef: PropTypes.shape({
    current: PropTypes.any,
  }),
};

export default OutlinedInput;
