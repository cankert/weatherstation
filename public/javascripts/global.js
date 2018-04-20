

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
            "temperature":"10"
        },
        }).done(function(response){
            //var object = JSON.parse(response);
            //$('#result').html(response);
        });
}
