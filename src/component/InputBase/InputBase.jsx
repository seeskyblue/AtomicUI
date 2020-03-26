import React from 'react';
import PropTypes from 'prop-types';
import * as assert from 'helper/assert';
import useForkRef from 'helper/useForkRef';
import useEnhancedEffect from 'helper/useEnhancedEffect';
import useEventCallback from 'helper/useEventCallback';

import { InputBox, InputNode } from './meta';
import { isFilled } from './helper';

const InputBase = React.forwardRef(function InputBase(props, ref) {
  const {
    children,
    defaultValue,
    value,
    onFocus,
    onBlur,
    onFill,
    onEmpty,
    onChange,
    onClick,
    ...others
  } = props;

  const inputRef = React.useRef();
  const handleRef = useForkRef(inputRef, ref);

  const [focused, { handleFocus, handleBlur }] = useFocused({
    onFocus,
    onBlur,
  });
  const [filled, { handleChange }] = useFilled(
    { onFill, onEmpty, onChange },
    inputRef
  );
  const handleClick = useClicked({ onClick }, inputRef);

  return (
    <InputBox onClick={handleClick} focused={focused}>
      <InputNode
        {...others}
        ref={handleRef}
        defaultValue={defaultValue}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {assert.isFunction(children) ? children({ filled, focused }) : children}
    </InputBox>
  );
});

InputBase.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onEmpty: PropTypes.func,
  onFill: PropTypes.func,
  onFocus: PropTypes.func,
};

export default InputBase;

/*****************************************************************************
 * Hooks
 *****************************************************************************/
function useFocused({ onFocus, onBlur }) {
  const [focused, setFocused] = React.useState(false);

  const handleFocus = useEventCallback(event => {
    setFocused(true);
    onFocus?.(event);
  });

  const handleBlur = useEventCallback(event => {
    setFocused(false);
    onBlur?.(event);
  });

  return [focused, { handleFocus, handleBlur }];
}

function useCheckFilled({ onFill, onEmpty }) {
  const [filled, setFilled] = React.useState(false);
  const checkFilled = React.useCallback(obj => {
    setFilled(isFilled(obj));
  }, []);

  React.useEffect(() => {
    if (filled) {
      onFill?.();
    } else {
      onEmpty?.();
    }
  }, [filled, onEmpty, onFill]);

  return [filled, checkFilled];
}

function useFilled({ value, onFill, onEmpty, onChange }, inputRef) {
  const { current: isControlled } = React.useRef(!assert.isNone(value));

  const [filled, checkFilled] = useCheckFilled({ onFill, onEmpty });

  useEnhancedEffect(() => {
    checkFilled(isControlled ? { value } : inputRef.current);
  }, [value, checkFilled, isControlled]);

  const handleChange = useEventCallback((event, ...args) => {
    const element = event.target || inputRef.current;

    if (!isControlled) {
      checkFilled({ value: element.value });
    }

    onChange?.(element.value, event, ...args);
  });

  return [filled, { handleChange }];
}

function useClicked({ onClick }, inputRef) {
  return useEventCallback(event => {
    if (event.currentTarget === event.target) {
      inputRef.current?.focus();
    }

    onClick?.(event);
  });
}
