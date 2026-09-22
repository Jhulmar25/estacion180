$(document).ready(function(){

    var altura = $('.zona-diverchopp').offset().top;

    $(window).on('scroll', function(){
        if ($(window).scrollTop() >= altura){
            $('.buscar-trago').addClass('inbuscar');
        } else {
            $('.buscar-trago').removeClass('inbuscar');
        }
    });

    $('.buscar-trago').on('click', function(){
        $('.menu-tragos').addClass('in-menu-trago');
        $('.buscar-trago').addClass('right-buscar-trago');
        $('.tienda').addClass('right-tienda');
        $('footer').addClass('right-footer');
        $('header').addClass('header-r');
    });

    $('.cerrar-menu-trago').on('click', function(){
        $('.menu-tragos').removeClass('in-menu-trago');
        $('.buscar-trago').removeClass('right-buscar-trago');
        $('.tienda').removeClass('right-tienda');
        $('footer').removeClass('right-footer');
        $('header').removeClass('header-r');
    });

    function abrirProducto(clase){
        $('.menu-comprar').addClass('in-menu-comprar');
        $('.black-modal').fadeIn('slow');
        $('body').css('overflowY', 'hidden');
        $(clase).fadeIn('slow');
    }

    $('.pilsen').on('click', function(){ abrirProducto('.p-pilsen'); });
    $('.cristal').on('click', function(){ abrirProducto('.p-cristal'); });
    $('.cuzquena').on('click', function(){ abrirProducto('.p-cuzquena'); });
    $('.heineken').on('click', function(){ abrirProducto('.p-heineken'); });
    $('.lowenbrau').on('click', function(){ abrirProducto('.p-lowenbrau'); });
    $('.miller').on('click', function(){ abrirProducto('.p-miller'); });
    $('.budweiser').on('click', function(){ abrirProducto('.p-budweiser'); });
    $('.peroni').on('click', function(){ abrirProducto('.p-peroni'); });
    $('.corona').on('click', function(){ abrirProducto('.p-corona'); });
    $('.trapiche').on('click', function(){ abrirProducto('.p-trapiche'); });
    $('.mundo').on('click', function(){ abrirProducto('.p-finmundo'); });
    $('.hormiga').on('click', function(){ abrirProducto('.p-hormigas'); });
    $('.salentein').on('click', function(){ abrirProducto('.p-salentein'); });
    $('.redbull').on('click', function(){ abrirProducto('.p-redbull'); });
    $('.jackdaniel').on('click', function(){ abrirProducto('.p-jackdaniel'); });
    $('.twelve').on('click', function(){ abrirProducto('.p-twelve'); });
    $('.something').on('click', function(){ abrirProducto('.p-something'); });
    $('.baileys').on('click', function(){ abrirProducto('.p-baileys'); });
    $('.black').on('click', function(){ abrirProducto('.p-black'); });
    $('.doubleblack').on('click', function(){ abrirProducto('.p-doubleblack'); });
    $('.ballantines').on('click', function(){ abrirProducto('.p-ballantines'); });
    $('.oldparr').on('click', function(){ abrirProducto('.p-oldparr'); });
    $('.barcero').on('click', function(){ abrirProducto('.p-barcero'); });
    $('.diplomatico').on('click', function(){ abrirProducto('.p-diplomatico'); });

    function ocultarProductos(){
        $('.p-redbull, .p-pilsen, .p-cristal, .p-cuzquena, .p-heineken, .p-lowenbrau, .p-miller, .p-budweiser, .p-peroni, .p-corona, .p-trapiche, .p-finmundo, .p-hormigas, .p-salentein, .p-jackdaniel, .p-twelve, .p-something, .p-baileys, .p-black, .p-doubleblack, .p-ballantines, .p-oldparr, .p-barcero, .p-diplomatico').hide();
    }

    $('.cerrar-compra').on('click', function(){
        $('.menu-comprar').removeClass('in-menu-comprar');
        $('.black-modal').fadeOut('slow');
        $('body').css('overflowY', 'visible');
        ocultarProductos();
    });

    // COMPRAR: NO abre WhatsApp. Muestra directamente "GRACIAS POR ELEGIR".
    $('.click-comprar').on('click', function(e){
        e.preventDefault();
        e.stopPropagation();

        $('.menu-comprar').removeClass('in-menu-comprar');
        ocultarProductos();
        $('.black-modal').show();

        $('.modal-compra').stop(true, true).fadeIn('fast');
        $('.wrap-comprar-modal')
            .removeClass('animated fadeInUp')
            .addClass('animated fadeInUp');

        $('body').css('overflowY', 'hidden');
        return false;
    });

    $('.out-compra').on('click', function(e){
        e.preventDefault();

        $('.modal-compra').stop(true, true).fadeOut('fast', function(){
            $('.wrap-comprar-modal').removeClass('animated fadeInUp');
        });

        $('.black-modal').fadeOut('fast');
        $('body').css('overflowY', 'visible');
    });

});
