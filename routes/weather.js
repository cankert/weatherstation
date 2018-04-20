var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    var weather = req.body;
    var data = {
        "date":weather.date,
        "temperature": weather.temperature,
        "pressure": weather.pressure
    }
    console.log('Received Data from API: ');
    console.log(weather);
    var db = req.db;
    var collection = db.get('weatherdata');
    collection.insert(data, function(err, result){
        res.send(
            (err === null) ? {msg: 'Data received' } : {msg: err }

        );
        console.log('Posted Data to API');
    });
  });

module.exports = router;
