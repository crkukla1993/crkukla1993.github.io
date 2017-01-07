$(document).ready(function(){
	$('.header-title')
	.animate({opacity: 'show'}, {queue: false, duration: 1500})
	.animate({top: '30%'}, {duration: 750, complete: function(){
		$('.navbar-custom')
		.animate({opacity: 'show'}, {queue: false, duration: 1500})
		.animate({top: '29%'}, {duration: 750});
	}
	});
}); 