

$(document).on('click','#ping',function(e){
    deleteProduct();
});


function deleteProduct(){
    $.ajax({
        type: 'GET',
        url: ('/users'),
        data: {},
        }).done(function(response){
            //var object = JSON.parse(response);
            console.log(response);
            $('#result').html(response);
        });
}
