import React from 'react';

export default function useCallbackRef() {
  const [element, setElement] = React.useState();

  const callbackRef = React.useCallback(arg => {
    setElement(arg);
  }, []);

  return [element, callbackRef];
}
