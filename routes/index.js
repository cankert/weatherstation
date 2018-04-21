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
    function renderPage(weatherdata){
        res.render('index', { title: 'Express', data:weatherdata });
    }
});


function getDataFromDb(collection,callback){
    collection.find({},{limit:50,sort: {_id: -1}},function(e,docs){
        /*if(docs[0].red != null){
        var red = docs[0].red;
        var green = docs[0].green;
        var blue = docs[0].blue;
        var rgb = "rgb("+red+","+green+","+blue+")";
        //console.log(rgb);
    } else {
        var rgb = "rgb(0,0,0)"
    }*/
        callback(docs);
    });
}

module.exports = router;
