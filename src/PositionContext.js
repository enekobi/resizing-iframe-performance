import React, { useState, useContext, useMemo } from 'react';

const positions = {
  UP: 'up',
  LEFT: 'left',
  DOWN: 'down',
  RIGHT: 'right'
};

const PositionContext = React.createContext();
const usePosition = () => {
  const context = useContext(PositionContext);
  if (!context) {
    throw new Error(`usePosition must be used within a PositionProvider`);
  }
  return context;
};

const PositionProvider = (props) => {
  const [position, setPosition] = useState(positions.DOWN);
  const value = useMemo(() => [position, setPosition], [position]);
  return <PositionContext.Provider value={value} {...props} />;
};

export { PositionProvider, usePosition, positions };
