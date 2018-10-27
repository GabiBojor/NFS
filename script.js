$(document).ready(function(){
	$('.products-menu a').each(function() {
		$(this).click(function(e) {
			e.preventDefault();
			$('.products-menu a').removeClass('active_btn');
			var link = $(this).attr('rel');
			$(this).addClass('active_btn');
			$('.content-products').hide();
			$('div#' + link).show();
		});
	});
	if($('.gallery').length > 0){
	 $('.gallery a').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      gallery: { enabled:true }
  })
	}
	$(window).scroll(function(){
		if($(window).scrollTop() > 30) {
			$('.container-top').addClass('scrolled-top');
		}
		else{
			$('.container-top').removeClass('scrolled-top');
		}
	});
})