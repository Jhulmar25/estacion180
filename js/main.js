$(window).load(function(){

	$('.carga , .amarillo').animate({
		opacity : 0 },
		5, function() {
		$('.preloader').addClass('cerrar-modal');
		$('.modal').fadeOut(1300);
		$('.pareja').addClass('apareja');
		$('.me-img').addClass('icon-animate');
		$('.sombrita').addClass('icon-animate');
		$('.text-m').addClass('text-animate');
		$('.fras').addClass('animated fadeInDown');
		$('.haz-tu-pedido').addClass('animated fadeInLeft');
	});
})


$(document).ready(function(){


$(window).scroll(function(){

	if($(this).scrollTop() > 250){

		$('.box-carro').css('padding-top', '70px');

	}else{

		$('.box-carro').css('padding-top', '110px');
	}
})


var contador = 1 ;

$('.menu-bar').on('click' , function(){

	if(contador==1){
	  $('.modal-menu').addClass('modal-menu-fade');
	  $('body').css('overflowY', 'hidden');
	  $('.mod-icon').addClass('icon-animate');
	  $('.sombra').addClass('icon-animate');
	  $('.men-text').addClass('text-animate');
	  $('.modal-menu').removeClass('modal-menu-fadeout');
      $('.mod-icon').removeClass('icon-animateout');
	  $('.sombra').removeClass('icon-animateout');
	  $('.men-text').removeClass('text-animateout');
	  $('.linuno').addClass('lin-uno-click');
	  $('.lintres').addClass('lin-tres-click');
	  $('.lindos').fadeOut('fast');

	  contador=0;
	}else{
		$('.modal-menu').addClass('modal-menu-fadeout');
        $('.mod-icon').addClass('icon-animateout');
	    $('.sombra').addClass('icon-animateout');
	    $('.men-text').addClass('text-animateout');
		$('.modal-menu').removeClass('modal-menu-fade');
		$('.mod-icon').removeClass('icon-animate');
	    $('.sombra').removeClass('icon-animate');
	    $('.men-text').removeClass('text-animate');
		$('body').css('overflowY', 'visible');
		$('.linuno').removeClass('lin-uno-click');
		$('.lintres').removeClass('lin-tres-click');
		$('.lindos').fadeIn('slow');

		contador=1;
	}
})


$(".menu-home").click(function (){
	$('.modal-menu').addClass('modal-menu-fadeout');
    $('.mod-icon').addClass('icon-animateout');
	$('.sombra').addClass('icon-animateout');
	$('.men-text').addClass('text-animateout');
	$('.modal-menu').removeClass('modal-menu-fade');
	$('.mod-icon').removeClass('icon-animate');
	$('.sombra').removeClass('icon-animate');
	$('.men-text').removeClass('text-animate');
	$('body').css('overflowY', 'visible');
	$('.linuno').removeClass('lin-uno-click');
	$('.lintres').removeClass('lin-tres-click');
	$('.lindos').fadeIn('slow');

	$('html, body').animate({
		scrollTop: $(".home").offset().top
	}, 1300,'easeInCirc');

	contador=1;
});


$(".menu-pedir").click(function (){
	$('.modal-menu').addClass('modal-menu-fadeout');
    $('.mod-icon').addClass('icon-animateout');
	$('.sombra').addClass('icon-animateout');
	$('.men-text').addClass('text-animateout');
	$('.modal-menu').removeClass('modal-menu-fade');
	$('.mod-icon').removeClass('icon-animate');
	$('.sombra').removeClass('icon-animate');
	$('.men-text').removeClass('text-animate');
	$('body').css('overflowY', 'visible');
	$('.linuno').removeClass('lin-uno-click');
	$('.lintres').removeClass('lin-tres-click');
	$('.lindos').fadeIn('slow');

	$('html, body').animate({
		scrollTop: $(".como-pedir").offset().top
	}, 800,'easeInCirc');

	contador=1;
});


$(".menu-zona").click(function (){
	$('.modal-menu').addClass('modal-menu-fadeout');
    $('.mod-icon').addClass('icon-animateout');
	$('.sombra').addClass('icon-animateout');
	$('.men-text').addClass('text-animateout');
	$('.modal-menu').removeClass('modal-menu-fade');
	$('.mod-icon').removeClass('icon-animate');
	$('.sombra').removeClass('icon-animate');
	$('.men-text').removeClass('text-animate');
	$('body').css('overflowY', 'visible');
	$('.linuno').removeClass('lin-uno-click');
	$('.lintres').removeClass('lin-tres-click');
	$('.lindos').fadeIn('slow');

	$('html, body').animate({
		scrollTop: $(".zonas").offset().top
	}, 800,'easeInCirc');

	contador=1;
});


$(".menu-contactos").click(function (){
	$('.modal-menu').addClass('modal-menu-fadeout');
    $('.mod-icon').addClass('icon-animateout');
	$('.sombra').addClass('icon-animateout');
	$('.men-text').addClass('text-animateout');
	$('.modal-menu').removeClass('modal-menu-fade');
	$('.mod-icon').removeClass('icon-animate');
	$('.sombra').removeClass('icon-animate');
	$('.men-text').removeClass('text-animate');
	$('body').css('overflowY', 'visible');
	$('.linuno').removeClass('lin-uno-click');
	$('.lintres').removeClass('lin-tres-click');
	$('.lindos').fadeIn('slow');

	$('html, body').animate({
		scrollTop: $(".contactos").offset().top
	}, 800,'easeInCirc');

	contador=1;
});


$(".me-pedir").click(function (){
	$('html, body').animate({
		scrollTop: $(".como-pedir").offset().top
	}, 800,'easeInCirc');

	contador=1;
});


$(".me-zona").click(function (){
	$('html, body').animate({
		scrollTop: $(".zonas").offset().top
	}, 1200,'easeInCirc');
});


$(".me-contactos").click(function (){
	$('html, body').animate({
		scrollTop: $(".contactos").offset().top
	}, 2000,'easeInCirc');
});


//$('.redes4').on('click' , function(){

	//$('.box-carro').addClass('box-carro-click');
	//$('.section').animate({right :350}, 300);});

//$('.cerrar-prod').on('click' , function(){

	//$('.box-carro').removeClass('box-carro-click');
	//$('.section').animate({right :0}, 300);})


// mapas

$('.barranco').hover(function(){
	$('.uno').addClass('numeros-anim');
},function(){
    $('.uno').removeClass('numeros-anim');
});


$('.jesus').hover(function(){
	$('.dos').addClass('numeros-anim');
},function(){
    $('.dos').removeClass('numeros-anim');
});


$('.molina').hover(function(){
	$('.tres').addClass('numeros-anim');
},function(){
    $('.tres').removeClass('numeros-anim');
});


$('.lince').hover(function(){
	$('.cuatro').addClass('numeros-anim');
},function(){
    $('.cuatro').removeClass('numeros-anim');
});


$('.magdalena').hover(function(){
	$('.cinco').addClass('numeros-anim');
},function(){
    $('.cinco').removeClass('numeros-anim');
});


$('.miraflores').hover(function(){
	$('.seis').addClass('numeros-anim');
},function(){
    $('.seis').removeClass('numeros-anim');
});


$('.pueblo').hover(function(){
	$('.siete').addClass('numeros-anim');
},function(){
    $('.siete').removeClass('numeros-anim');
});


$('.borja').hover(function(){
	$('.ocho').addClass('numeros-anim');
},function(){
    $('.ocho').removeClass('numeros-anim');
});


$('.isidro').hover(function(){
	$('.nueve').addClass('numeros-anim');
},function(){
    $('.nueve').removeClass('numeros-anim');
});


$('.luis').hover(function(){
	$('.diez').addClass('numeros-anim');
},function(){
    $('.diez').removeClass('numeros-anim');
});


$('.miguel').hover(function(){
	$('.once').addClass('numeros-anim');
},function(){
    $('.once').removeClass('numeros-anim');
});


$('.surco').hover(function(){
	$('.doce').addClass('numeros-anim');
},function(){
    $('.doce').removeClass('numeros-anim');
});


$('.surquillo').hover(function(){
	$('.trece').addClass('numeros-anim');
},function(){
    $('.trece').removeClass('numeros-anim');
});


if( $(window).width() <= 460){

	$('.buscar-trago').on('click' , function(){
		$('.telf2').addClass('telf-r');
	});

	$('.cerrar-menu-trago').on('click' , function(){
        $('.telf2').removeClass('telf-r');
	});

    $('.ped-tit').text('¿COMO HACER UN PEDIDO?');
    $('.welcome').text('BIENVENIDOS A NUESTRO BAR');

};


})
