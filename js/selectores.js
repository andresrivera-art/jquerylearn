
//signo de dolar se refiere a jquery

//entre parentesis el selector


$(document).ready(function(){

    console.log("Estamos listos");

//selector de id

$("#rojo").css("background", "red").css("color", "white");

$("#amarillo").css("background", "yellow").css("color", "black");

$("#verde").css("background", "green");


//selectores de clases

var clase = $('.zebra');

clase.css('padding', '5px');


$('.sin_borde').click(function(){

    $(this).addClass('zebra')

});





//selectores por etiquetas


var parrafos = $('p').css("cursor", "pointer");


parrafos.click(function(){

    var here = $(this);

    
    if(!here.hasClass('grande')){

        here.addClass('grande');

    }else{

        here.removeClass('grande');

    }
  
  

});



//selectores de atributos


$('[title="Google"]').css('background','green');

$('[title="Facebook"]').css('background','blue');



//otros

//anadir un margen superior a los elementos

//$('p,a').addClass('margen-superior');


//var busqueda = $("#caja").find('.resaltado');
//o
var busqueda = $("#caja .resaltado");



console.log(busqueda);




});


