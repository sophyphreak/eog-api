const getLatLongAroundHouston = timestamp => {
  const theta = -timestamp / 500;
  const radius = 5; // about 500km
  const x = radius * Math.cos(theta);
  const y = radius * Math.sin(theta);
  const latitude = y + 29.761993;
  const longitude = x - 95.366302;
  return { latitude, longitude };
};

module.exports = { getLatLongAroundHouston };
