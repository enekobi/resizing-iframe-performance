import React, { useState, useContext, useMemo } from 'react';

const ResizeContext = React.createContext();

const useResize = () => {
  const context = useContext(ResizeContext);
  if (!context) {
    throw new Error(`useResize must be used within a ResizeProvider`);
  }
  return context;
};

const ResizeProvider = (props) => {
  const [resized, setResized] = useState(false);
  const value = useMemo(() => [resized, setResized], [resized]);
  return <ResizeContext.Provider value={value} {...props} />;
};

export { ResizeProvider, useResize };
