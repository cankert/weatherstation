$(document).ready(function(){

});




$(document).on('click','#ping',function(e){
    alert("YES");
    console.log("WHAT");
});


function deleteProduct (id, callback){
    $.ajax({
        type: 'DELETE',
        url: ('/product'),
        data: {
            'id':id
        },
        }).done(function(response){
            //var object = JSON.parse(response);
            console.log('Deleted Product');
            callback();
        });
}
