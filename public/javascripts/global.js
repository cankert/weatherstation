

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
            "pressure":"66,3"
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
      console.log(chartData);
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
        "lineThickness": "2"
      };

      var categoriesArray = [{
          "category" : data["categories"]
      }];

      var lineChart = new FusionCharts({
        type: 'msline',
        renderAt: 'chart-location',
        width: '800',
        height: '600',
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
        "numbersuffix": "mbar",
        "xAxisName": "Datum",
        "yAxisName": "Luftdruck",
        "palettecolors":"FF5904,0372AB,FF0000"
      };

      var categoriesArray = [{
          "category" : data["categories"]
      }];

      var lineChart = new FusionCharts({
        type: 'mscolumn2d',
        renderAt: 'chart-location2',
        width: '800',
        height: '600',
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
