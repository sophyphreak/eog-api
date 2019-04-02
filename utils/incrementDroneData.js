const moment = require('moment');
const { incrementMetric } = require('./incrementMetric');
const { getLatLongAroundHouston } = require('./getLatLongAroundHouston');
const { getUom } = require('./getUom');
const { getAccuracy } = require('./getAccuracy');

const incrementDroneData = droneData => {
  const { data } = droneData;
  const timestamp = moment().unix();
  const metric = incrementMetric(data[0].metric);
  const { latitude, longitude } = getLatLongAroundHouston(timestamp);
  const uom = getUom();
  const accuracy = getAccuracy();
  data.unshift({
    timestamp: timestamp * 1000,
    metric,
    latitude,
    longitude,
    uom,
    accuracy
  });
  data.pop();
  return { data };
};

module.exports = { incrementDroneData };
