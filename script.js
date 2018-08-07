$(document).ready(function(){
	$(window).scroll(function(){
			if($(window).scrollTop() > 30) {
				$('.container-top').addClass('scrolled-top');
			}
			else{
				$('.container-top').removeClass('scrolled-top');
			}
		});
})