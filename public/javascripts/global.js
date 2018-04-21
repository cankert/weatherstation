

$(document).on('click','#ping',function(e){
    postWeatherData();

    setInterval(function(){

    }, 10000);
});


function postWeatherData(){
    $.ajax({
        type: 'POST',
        url: ('/weather'),
        data: {
            "date":"15.02.2018",
            "temperature":"28,5",
            "pressure":"66,3",
            "red":"100",
            "blue":"20",
            "green":"256"
        },
        }).done(function(response){
            //var object = JSON.parse(response);
            //$('#result').html(response);
        });
}

var chartData;
$(function(){
  $.ajax({
    url: '/weather',
    type: 'GET',
    success : function(data) {
      chartData = data;
      //console.log(chartData);
    }
  });
});

var chartData;

$(function(){
  $.ajax({

    url: '/weather/temperature',
    type: 'GET',
    success : function(data) {
      chartData = data;
      //var template = Handlebars.compile($("#tabular-template").html());
      //$("#table-location").html(template(data));

      var chartProperties = {
        "caption": "Temperatur",
        "numbersuffix": "°C",
        "xAxisName": "Datum",
        "yAxisName": "Celcius",
        "lineThickness": "5",
        "palettecolors":"FF0000"
      };

      var categoriesArray = [{
          "category" : data["categories"]
      }];

      var lineChart = new FusionCharts({
        type: 'zoomline',
        renderAt: 'chart-location',
        width: '600',
        height: '500',
        dataFormat: 'json',
        dataSource: {
          chart: chartProperties,
          categories : categoriesArray,
          dataset : data["dataset"]
        }
      });
      lineChart.render();
    }
  });
});

$(function(){
  $.ajax({

    url: '/weather/pressure',
    type: 'GET',
    success : function(data) {
      chartData = data;
      //var template = Handlebars.compile($("#tabular-template").html());
      //$("#table-location").html(template(data));

      var chartProperties = {
        "caption": "Luftdruck",
        "numbersuffix": "hPa",
        "xAxisName": "Datum",
        "yAxisName": "Luftdruck",
        "lineThickness": "5",
        "palettecolors":"0372AB"
      };

      var categoriesArray = [{
          "category" : data["categories"]
      }];

      var lineChart = new FusionCharts({
        type: 'zoomline',
        renderAt: 'chart-location2',
        width: '600',
        height: '500',
        dataFormat: 'json',
        dataSource: {
          chart: chartProperties,
          categories : categoriesArray,
          dataset : data["dataset"]
        }
      });
      lineChart.render();
    }
  });
});
