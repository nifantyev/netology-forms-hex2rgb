import React, { useState } from 'react';
import ColorViewer from './ColorViewer';
import HexToRGBForm from './HexToRGBForm';

const HexToRGB = () => {
  const defaultColor = '#ffffff';
  const errorColor = '#e74c3c';
  const [color, setColor] = useState(defaultColor);

  const handleValidColor = (hex) => {
    setColor(hex);
  };

  const handleError = () => {
    setColor(errorColor);
  };

  return (
    <>
      <HexToRGBForm onValidColor={handleValidColor} onError={handleError} />
      <ColorViewer color={color} />
    </>
  );
};

export default HexToRGB;
