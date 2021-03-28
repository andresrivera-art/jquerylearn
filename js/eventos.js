

$(document).ready(function(){

//Mouse Over y mouse out


var caja = $("#caja");

/*
caja.mouseover(function(){
$(this).css('background','red');
});

caja.mouseout(function(){
$(this).css('background', '	#ADD8E6');
});
*/


//hover

caja.hover(cambiarojo,cambiaceleste);



function cambiarojo(){

    $(this).css('background','red');
    
    }


    function cambiaceleste(){

        $(this).css('background','#ADD8E6');
        
        }


//click , doble click

caja.click(function(){

$(this).css('background', 'blue')
        .css('color', 'white');


});

caja.dblclick(function(){

    $(this).css('background', 'black')
            .css('color', 'yellow');
    
    
    });


//focus y blur

var datos = $('#datos');

var nombre = $('#nombre');

nombre.focus(function(){

$(this).css('border', '5px solid yellow');


});


nombre.blur(function(){

    $(this).css('border', '1px solid black');

     //sacar la informacion

    datos.text($(this).val()).show();

    
    
    });


    //mouse down y mouse up


    datos.mousedown(function(){

        $(this).css('border-color','gray');


    });


    datos.mouseup(function(){

        $(this).css('border-color','black');


    });


    //mouse move

    $(document).mousemove(function(){

$('body').css('cursor', 'none');
        $('#follow').css('left', event.clientX)
                    .css('top', event.clientY);


    });






});