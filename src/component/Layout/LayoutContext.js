import React from 'react';

const LayoutContext = React.createContext(null);

const { Provider: LayoutProvider } = LayoutContext;
export default LayoutProvider;

export function useLayoutContext() {
  return React.useContext(LayoutContext);
}
