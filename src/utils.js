const isValidHexColor = (hex) => /^#[0-9A-F]{6}$/i.test(hex);

const hex2rgb = (hex) => {
  const r = parseInt(hex.substr(1, 2), 16),
    g = parseInt(hex.substr(3, 2), 16),
    b = parseInt(hex.substr(5, 2), 16);
  return [r, g, b];
};

export { isValidHexColor, hex2rgb };
