$(document).ready(function(){


    reloadLinks();

    $('#addbtn').click(function(){


        var newlink = $('#addlink').val();

//prepend lo anade al principio de la lista

        $('#menu').append('<li><a href="'+$("#addlink").val()+'"></a></li>'); 



        reloadLinks();

    });




});



function reloadLinks(){


    $('a').each(function(index,element){

        var enlace =  $(this).attr('href');

        $(this).attr('target', '_blank');
        $(this).text(enlace);

        


    });


}