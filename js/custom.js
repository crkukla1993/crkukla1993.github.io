$(document).ready(function(){
	$('.header-title')
	.animate({opacity: 'show'}, {queue: false, duration: 1500})
	.animate({marginTop: '19%'}, {duration: 750, complete: function(){
		$('.s1')
		.css({opacity: 0.0, visibility: "visible", marginTop: '-1%'}).animate({opacity: 1}, 
		{queue: false, duration: 500, complete: function(){
			$('.s2')
			.css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, 
			{queue: false, duration: 500, complete: function(){
				$('.s3')
				.css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, 
				{queue: false, duration: 500, complete: function(){
					$('.navbar-custom')
					.animate({opacity: 'show'}, {queue: false, duration: 1500})
					.animate({marginTop: '0%'}, {duration: 750});
				}});
			}});
		}});
	}});
	
	$('.blur').width($(window).width());
	$('.blur').height($(window).height());
	
	$('.header-div').width($(window).width());
	$('.header-div').height($(window).height());
		
	$('#aboutme').width($(window).width());
	$('#aboutme').height($(window).height());
		
	$('#portfolio').width($(window).width());
	$('#portfolio').height($(window).height());
		
	$('#skills').width($(window).width());
	$('#skills').height($(window).height());
	
	$('#aboutmebtn').click(function(){
		$('html body').animate({scrollTop: $("#aboutme").position().top}, 1000);
	});
	$('#portfoliobtn').click(function(){
		$('html body').animate({scrollTop: $("#portfolio").position().top}, 1000);
	});
	$('#skillsbtn').click(function(){
		$('html body').animate({scrollTop: $("#skills").position().top}, 1000);
	});
	
	var loopBounce = setInterval(function() {
		$('#downarrow').effect('bounce', {times: 3}, 500);
	}, 4000);
	
	$(document).scroll(function(){
		var i = $('html body').scrollTop();
		if(i === 0){
			$('#downarrow').animate({opacity: 'show'}, 500);
			loopBounce = setInterval(function() {
				$('#downarrow').effect('bounce', {times: 3}, 500);
			}, 4000);
		}
		else{
			clearInterval(loopBounce);
			$('#downarrow').animate({opacity: 'hide'}, 500);
		}
	});

}); 

$(window).resize(function(){
	$('.blur').width($(window).width());
	$('.blur').height($(window).height());
	
	$('.header-div').width($(window).width());
	$('.header-div').height($(window).height());
		
	$('#aboutme').width($(window).width());
	$('#aboutme').height($(window).height());
		
	$('#portfolio').width($(window).width());
	$('#portfolio').height($(window).height());
		
	$('#skills').width($(window).width());
	$('#skills').height($(window).height());
});