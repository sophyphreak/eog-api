const moment = require('moment');

function* getDroneData() {
  const data = populateDroneData();
  while (true) {
    while (true) {
      const lastLocation = data[data.length - 1];
      if (isWithinHalfHour(lastLocation.timestamp, moment().unix())) {
        break;
      } else {
        data.pop();
      }
    }

    yield { data };
  }
}

const populateDroneData = () => {
  // fill in
}

const isWithinHalfHour = (timestampOne, timestampTwo) => {
  return timestampTwo - timestampOne < 1800;
}

module.exports = { getDroneData };