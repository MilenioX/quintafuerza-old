$(document).ready(function(){
	
	$('.inicio').click(function(event){
		event.stopPropagation();
		event.preventDefault();
		$('html, body').animate({ scrollTop : 0} , 2000);
		return false;
	});
	$('.link-comunidad').click(function(event){
		event.stopPropagation();
		event.preventDefault();
		$('html, body').animate({ scrollTop : ( ($('article.quintafuerza').offset().top) - $('header').height() )} , 2000);
		return false;
	});
	$('.link-eter').click(function(event){
		event.stopPropagation();
		event.preventDefault();
		$('html, body').animate({ scrollTop : ( ($('article.eter').offset().top) - $('header').height() )} , 2000);
		return false;
	});
	$('.link-fuego').click(function(event){
		event.stopPropagation();
		event.preventDefault();
		$('html, body').animate({ scrollTop : ( ($('article.fuego').offset().top) - $('header').height() )} , 2000);
		return false;
	});
	$('.link-agua').click(function(event){
		event.stopPropagation();
		event.preventDefault();
		$('html, body').animate({ scrollTop : ( ($('article.agua').offset().top) - $('header').height() )} , 2000);
		return false;
	});
	$('.link-aire').click(function(event){
		event.stopPropagation();
		event.preventDefault();
		$('html, body').animate({ scrollTop : ( ($('article.aire').offset().top) - $('header').height() )} , 2000);
		return false;
	});
	$('.link-tierra').click(function(event){
		event.stopPropagation();
		event.preventDefault();
		$('html, body').animate({ scrollTop : ( ($('article.tierra').offset().top) - $('header').height() )} , 2000);
		return false;
	});
	
	$( window ).scroll(function() {
		menuHeight = $('header').height();
		scrollPosition = ($(window).scrollTop() + menuHeight);
		var inicioTierra = parseInt($('article.tierra').offset().top);
		var inicioAire = parseInt($('article.aire').offset().top);
		var inicioAgua = parseInt($('article.agua').offset().top);
		var inicioFuego = parseInt($('article.fuego').offset().top);
		var inicioEter = parseInt($('article.eter').offset().top);
		var inicioComunidad = parseInt($('article.quintafuerza').offset().top);
		
		if ( scrollPosition < inicioTierra || scrollPosition>(inicioComunidad - 2) ){
			console.log('cambiando color a tierra');
			$('header, header nav ul').css('backgroundColor',$('article.quintafuerza').css('color'));
			$('header nav li a, header div div a p, header div div a h1').css('color',$('article.quintafuerza').css('backgroundColor'));
		}else if ( scrollPosition >= inicioTierra && scrollPosition <= (inicioTierra + parseInt($('article.tierra').height()) - 2) ){
			$('header, header nav ul').css('backgroundColor',$('article.tierra').css('color'));
			$('header nav li a, header div div a p, header div div a h1').css('color',$('article.tierra').css('backgroundColor'));
		}else if ( scrollPosition >= inicioAire && scrollPosition <= (inicioAire + parseInt($('article.aire').height()) - 2) ){
			$('header, header nav ul').css('backgroundColor',$('article.aire').css('color'));
			$('header nav li a, header div div a p, header div div a h1').css('color',$('article.aire').css('backgroundColor'));
		}else if ( scrollPosition >= inicioAgua && scrollPosition <= (inicioAgua + parseInt($('article.agua').height()) - 2) ){
			$('header, header nav ul').css('backgroundColor',$('article.agua').css('color'));
			$('header nav li a, header div div a p, header div div a h1').css('color',$('article.agua').css('backgroundColor'));
		}else if ( scrollPosition >= inicioFuego && scrollPosition <= (inicioFuego + parseInt($('article.fuego').height()) - 2) ){
			$('header, header nav ul').css('backgroundColor',$('article.fuego').css('color'));
			$('header nav li a, header div div a p, header div div a h1').css('color',$('article.fuego').css('backgroundColor'));
		}else if ( scrollPosition >= inicioEter && scrollPosition <= (inicioEter + parseInt($('article.eter').height()) - 2) ){
			$('header, header nav ul').css('backgroundColor',$('article.eter').css('color'));
			$('header nav li a, header div div a p, header div div a h1').css('color',$('article.eter').css('backgroundColor'));
		}
	});

	$('header .contenedor #nav-action').click(function(e){
		if ($('header nav').hasClass('open')){
			$('header nav.open').css('display','none');
			$('header nav.open, header .contenedor #nav-action').removeClass('open');
		}else{
			$('header nav').css('display','block');
			$('header nav, header .contenedor #nav-action').addClass('open');
		}
	});
		
})