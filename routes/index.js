var express = require('express');
var router = express.Router();
var cheerio = require('cheerio');
var request = require('request');


/* GET home page. */
router.get('/', function(req, res, next) {
    var db = req.db;
    var collection = db.get('weatherdata');
    var weatherdata = getDataFromDb(collection, renderPage);
    //console.log(weatherdata);
    function renderPage(weatherdata, rgb){
        res.render('index', { title: 'Express', data:weatherdata, lastColor:rgb });
    }
});


function getDataFromDb(collection,callback){
    collection.find({},{limit:50,sort: {_id: -1}},function(e,docs){
        var red = docs[0].red;
        var green = docs[0].green;
        var blue = docs[0].blue;
        var rgb = "rgb("+red+","+green+","+blue+")";
        //console.log(rgb);

        callback(docs, rgb);
    });
}

module.exports = router;
