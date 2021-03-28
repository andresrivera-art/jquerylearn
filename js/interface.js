$(document).ready(function(){


//mover elementos por la pagina
$('.elemento').draggable();


//redimensionar

$('.elemento').resizable();


//seleccionables

//$('.seleccionable').selectable();

//listar y ordenar
$('.seleccionable').sortable({

    //evento
    update: function(event,ui){

        console.log("Ha cambiado la lista");

    }
});


//drop

$('#movible').draggable();
$('#area').droppable({
    
    drop: function(){

console.log("Has soltado algo dentro del area");


    }
});

//efectos
$("#mostrar").click(function(){

    //ejemplo: toggle, fadeToggle, efect("explode"); , toggle("blind"), toggle("slide"), toggle("drop"), toggle("fold"), toggle("puff")

    $(".caja-efectos").toggle("shake", 3000 );


});

$("#openpopup").click(function(){

        //dialog popup
        $("#popup").dialog();

});

//tooltip
$(document).tooltip();

//Calendar
$("#Calendario").datepicker();


//Tabs
$("#pestanas").tabs();



});