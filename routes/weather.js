var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    var weather = req.body;
    var db = req.db;
    var collection = db.get('weatherdata');
    collection.insert(weather, function(err, result){
        res.send(
            (err === null) ? {msg: '' } : {msg: err }

        );
        console.log('Posted Data to API');
    });
  });

module.exports = router;
