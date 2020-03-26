import React from 'react';

import setRef from './setRef';

/**
 * @description This will create a new function if the ref props change and are defined.
 * This means react will call the old forkRef with `null` and the new forkRef
 * with the ref. Cleanup naturally emerges from this behavior
 */
export default function useForkRef(refA, refB) {
  return React.useMemo(() => {
    if (refA == null && refB == null) return null;

    return value => {
      setRef(refA, value);
      setRef(refB, value);
    };
  }, [refA, refB]);
}
