import React from 'react';
import PropTypes from 'prop-types';

const ColorViewer = ({ color }) => {
  return <div className="color-viewer" style={{ backgroundColor: color }} />;
};

ColorViewer.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ColorViewer;
