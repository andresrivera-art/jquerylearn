$(document).ready(function(){




    $('#caja').hide();

$('#mostrar').click(function(){

$(this).hide();

$('#ocultar').show();

$('#caja').show('fast');

});

$('#ocultar').click(function(){

$(this).hide();

$('#mostrar').show();


//$('#caja').hide('fast');

$('#caja').slideUp('slow', function(){

console.log('Caja ocultada');


});

});
    //fade in desaparece el div

    //fate to 

    //otra forma de hacer todo lo anterior es

    $('#togglebtn').click(function(){


$('#caja').toggle('fast');
//tambien esta el fadeToggle pero con el efecto de desaparecer
//slidetoggle se despligea hacia arriba


    });


$('#anima').click(function(){
    $('#caja').animate({
        marginLeft: '500px',
        fontSize: '40px',
        height: '110px'

}, 'slow')


.animate({borderRadius: '900px',
marginTop: '80px'
}, 'slow')


.animate({
    borderRadius: '0px',
    marginLeft: '0px'},
    
    'slow')

    .animate({
        borderRadius: '100px',
        marginTop: '0px'},
        
        'slow')

        .animate({
            marginLeft: '500px',
            fontSize: '40px',
            height: '110px'
    
    }, 'slow');


});



});


