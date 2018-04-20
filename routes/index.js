var express = require('express');
var router = express.Router();
var cheerio = require('cheerio');
var request = require('request');


/* GET home page. */
router.get('/', function(req, res, next) {
    var db = req.db;
    var collection = db.get('weatherdata');
    var weatherdata = getDataFromDb(collection);
    res.render('index', { title: 'Express', data:weatherdata });
});


function getDataFromDb(collection){
    var data = collection.find({},{},function(e,docs){});
    return data;
}

module.exports = router;
