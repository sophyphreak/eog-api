const moment = require('moment');
const { getLatLongAroundHouston } = require('./getLatLongAroundHouston');
const { getUom } = require('./getUom');
const { incrementMetric } = require('./incrementMetric');
const { getAccuracy } = require('./getAccuracy');

const populateDroneData = () => {
  const data = [];
  let metric = 275;
  let secondsLeft = 1800;
  let timestamp = moment().unix();
  let uom = getUom();
  let accuracy;
  while (secondsLeft > 0) {
    const { latitude, longitude } = getLatLongAroundHouston(timestamp);
    metric = incrementMetric(metric);
    accuracy = getAccuracy();
    data.push({
      timestamp: timestamp * 1000,
      metric,
      latitude,
      longitude,
      uom,
      accuracy
    });
    timestamp -= 4;
    secondsLeft -= 4;
  }
  return { data };
};

module.exports = { populateDroneData };
