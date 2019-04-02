const moment = require('moment');
const { getLatLongAroundHouston } = require('./getLatLongAroundHouston');
const { getUom } = require('./getUom');
const { incrementMetric } = require('./incrementMetric');
const { getAccuracy } = require('./getAccuracy');

const populateDroneData = () => {
  const data = [];
  let metric = 275;
  let secondsLeft = 1800000;
  let timestamp = moment().valueOf();
  let uom = getUom();
  let accuracy;
  while (secondsLeft > 0) {
    const { latitude, longitude } = getLatLongAroundHouston(
      timestamp % 3600000
    );
    metric = incrementMetric(metric);
    accuracy = getAccuracy();
    data.push({
      timestamp,
      metric,
      latitude,
      longitude,
      uom,
      accuracy
    });
    timestamp -= 4000;
    secondsLeft -= 4000;
  }
  return { data };
};

module.exports = { populateDroneData };
