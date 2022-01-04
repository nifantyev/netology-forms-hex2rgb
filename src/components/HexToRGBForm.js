import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isValidHexColor, hex2rgb } from '../utils';

const HexToRGBForm = ({ onValidColor, onError }) => {
  const [hex, setHex] = useState('');
  const [rgb, setRgb] = useState('');
  const handleHexChange = ({ target }) => {
    const { value } = target;
    setHex(value);
    if (value.length >= 7) {
      if (isValidHexColor(value)) {
        const [r, g, b] = hex2rgb(value);
        setRgb(`rgb(${r}, ${g}, ${b})`);
        onValidColor(value);
      } else {
        setRgb('Ошибка!');
        onError();
      }
    }
  };
  return (
    <form className="form">
      <input
        type="text"
        className="hex"
        value={hex}
        onChange={handleHexChange}
      />
      <input type="text" className="rgb" value={rgb} readOnly />
    </form>
  );
};

HexToRGBForm.propTypes = {
  onValidColor: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
};

export default HexToRGBForm;
