var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    var weather = req.body;
    var data = {
        "date":weather.date,
        "temperature": weather.temperature,
        "pressure": weather.pressure,
        "red":weather.red,
        "green":weather.green,
        "blue":weather.blue,
        "light":weather.light
    }
    console.log('Received Data from API: ');
    //console.log(weather);
    var db = req.db;
    var collection = db.get('weatherdata');
    collection.insert(data, function(err, result){
        res.send(
            (err === null) ? {msg: 'Data received' } : {msg: err }

        );
        console.log('Posted Data to API');
    });
  });


router.get('/', function(req, res, next) {
  var db = req.db;
  var collection = db.get('weatherdata');
  var dateArray = [];
  var temperatureArray = [];
  var pressureArray = [];
  collection.find({},{},function(e,docs){
      docs.forEach(function(item){
          var temperature = item.temperature;
          var date = item.date;
          var pressure = item.pressure;
         // console.log(pressure);
          dateArray.push({"label": date});
          temperatureArray.push({"value" : temperature});
          pressureArray.push({"value" : pressure});
      });

      var dataset = [
        {
          "seriesname" : "Temperatur",
          "data" : temperatureArray
        },
        {
          "seriesname" : "Luftdruck",
          "data": pressureArray
        }
      ];

      var response = {
        "dataset" : dataset,
        "categories" : dateArray
      };
      res.json(response);

    })
  });

  router.get('/temperature', function(req, res, next) {
    var db = req.db;
    var collection = db.get('weatherdata');
    var dateArray = [];
    var temperatureArray = [];
    var pressureArray = [];
    collection.find({},{},function(e,docs){
        docs.forEach(function(item){
            var temperature = item.temperature;
            var date = item.date;
            var pressure = item.pressure;
            //console.log(pressure);
            dateArray.push({"label": date});
            temperatureArray.push({"value" : temperature});
            pressureArray.push({"value" : pressure});
        });

        var dataset = [
          {
            "seriesname" : "Temperatur",
            "data" : temperatureArray
          }
        ];

        var response = {
          "dataset" : dataset,
          "categories" : dateArray
        };
        res.json(response);


    })
});

router.get('/all', function(req, res, next) {
    var db = req.db;
    var collection = db.get('weatherdata');
    collection.find({},{limit:50,sort: {_id: -1}},function(e,docs){
        res.send(docs)
    });
});

router.get('/pressure', function(req, res, next) {
  var db = req.db;
  var collection = db.get('weatherdata');
  var dateArray = [];
  var temperatureArray = [];
  var pressureArray = [];
  collection.find({},{},function(e,docs){
      docs.forEach(function(item){
          var temperature = item.temperature;
          var date = item.date;
          var pressure = item.pressure;
          //console.log(pressure);
          dateArray.push({"label": date});
          temperatureArray.push({"value" : temperature});
          pressureArray.push({"value" : pressure});
      });

      var dataset = [
        {
          "seriesname" : "Luftdruck",
          "data" : pressureArray
        }
      ];

      var response = {
        "dataset" : dataset,
        "categories" : dateArray
      };
      res.json(response);


  })
});




module.exports = router;
