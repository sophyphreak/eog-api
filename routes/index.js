var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/drone', (req, res) => {
  res.json(getDroneData());
})

module.exports = router;
