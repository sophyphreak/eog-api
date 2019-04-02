const app = require('../app');

const getMetric = () => {
  app.locals.lastMetric = app.locals.lastMetric + Math.random() * 2 - 1;
  return app.locals.lastMetric;
}

module.exports = { getMetric };