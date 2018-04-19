var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    var weather = req.body.temperature;
    console.log(weather);
  res.send('Weather Date stored with Celcius '+ weather);
});

module.exports = router;
