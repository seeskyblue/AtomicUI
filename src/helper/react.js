import React from 'react';

/*****************************************************************************
 * Hooks
 *****************************************************************************/
export function useDidMount() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}

/*****************************************************************************
 * Props
 *****************************************************************************/
export function getPropsByPrefix(props, prefix) {
  return Object.keys(props).reduce(
    (acc, cur) =>
      cur.startsWith(prefix) ? { ...acc, [cur]: props[cur] } : acc,
    {}
  );
}

export function getEventHandleProps(props) {
  return getPropsByPrefix(props, 'on');
}
