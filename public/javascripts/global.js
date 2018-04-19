

$(document).on('click','#ping',function(e){
    deleteProduct();

    setInterval(function(){

    }, 10000);
});


function deleteProduct(){
    $.ajax({
        type: 'POST',
        url: ('/weather'),
        data: {
            temperature:"10"
        },
        }).done(function(response){
            //var object = JSON.parse(response);
            console.log(response);
            $('#result').html(response);
        });
}
