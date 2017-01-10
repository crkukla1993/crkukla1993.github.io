$(document).ready(function(){
	var h = $(window).height();
	$('.header-title')
	.animate({opacity: 'show'}, {queue: false, duration: 1500})
	.animate({marginTop: h*.3}, {duration: 750, complete: function(){
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
	if(h < 480){
		h = 480;
	}
	$('.blur').width($(window).width());
	$('.blur').height(h);
	
	$('.header-div').width($(window).width());
	$('.header-div').height(h);
		
	$('#aboutme').width($(window).width());
	$('#aboutme').height(h);
		
	$('#portfolio').width($(window).width());
	$('#portfolio').height(h);
		
	$('#skills').width($(window).width());
	$('#skills').height(h);
	
	$('#aboutmebtn').mouseenter(function(){
		var n = 0;
	});
	
	$('#aboutmebtn').click(function(){
		$('html body').animate({scrollTop: $("#aboutme").position().top}, 1500);
	});
	$('#portfoliobtn').click(function(){
		$('html body').animate({scrollTop: $("#portfolio").position().top}, 1500);
	});
	$('#skillsbtn').click(function(){
		$('html body').animate({scrollTop: $("#skills").position().top}, 1500);
	});
	
	var bounced = false;
	
	t = setTimeout(function(){
		var n = $('#downarrow').css('opacity');
		if($('#downarrow').css("opacity") !== '0' && !bounced){
			$('#downarrow').effect('bounce', {times: 3}, 500);
			bounced = true;
		}
	}, 8000);
	
	$(window).scroll(function(){
		if($('html body').scrollTop() === 0){
			$('#downarrow').animate({opacity: 1}, {queue: false, duration: 300});
		
			t = setTimeout(function(){
				if($('#downarrow').css("opacity") !== '0' && !bounced){
					$('#downarrow').effect('bounce', {times: 3}, 500);
					bounced = true
				}
			}, 8000);
		}
		else{
			clearTimeout(t);
			bounced = false;
			$('#downarrow').animate({opacity: 0}, {queue: false, duration: 300});
		}
	});
});

$(window).resize(function(){
	var h = $(window).height();
	if(h < 480){
		h = 480;
	}
	$('.header-title').css('marginTop', h*.3)
	$('.blur').width($(window).width());
	$('.blur').height(h);
	
	$('.header-div').width($(window).width());
	$('.header-div').height(h);
		
	$('#aboutme').width($(window).width());
	$('#aboutme').height(h);
		
	$('#portfolio').width($(window).width());
	$('#portfolio').height(h);
		
	$('#skills').width($(window).width());
	$('#skills').height(h);
	
});