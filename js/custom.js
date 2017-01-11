$(document).ready(function(){
	var amt = $('#aboutmetitle');
	var amtxt = $('#aboutmetext');
	
	if(amt.height() < amtxt.height()){
		amt.height(amtxt.height());
	}
	else{
		amtxt.height(amt.height());
	}
	
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
		
	//$('#aboutme').width($(window).width());
	//$('#aboutme').height(h);
		
	//$('#portfolio').width($(window).width());
	//$('#portfolio').height(h);
		
	//$('#skills').width($(window).width());
	//$('#skills').height(h);
	
	$('#aboutmebtn').click(function(){
		var i = $("#aboutmetitle").position().top;
		$('html body').animate({scrollTop: i}, 1500);
	});
	$('#portfoliobtn').click(function(){
		var i = $("#portfoliotitle").position().top;
		$('html body').animate({scrollTop: i}, 1500);
	});
	$('#skillsbtn').click(function(){
		var i = $("#skillstitle").position().top;
		$('html body').animate({scrollTop: i}, 1500);
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

$(document).scroll(function(){
	aboutMeCardPositions();
	portfolioCardPostions();
	skillsCardPostions();
})

function aboutMeCardPositions(){
	var amh = $('#aboutmetitle').height();
	var amt = $('#aboutmetitle').position().top;
	var pgt = $('html body').scrollTop() + amh;
	if(pgt < amt){
		var percent = pgt/amt;
		var wid0 = $('#aboutmetitle').outerWidth()*2;
		var wid1 = $('#aboutmetext').outerWidth()*2;

		var amount0 = ((wid0 * percent) - wid0) + 'px';
		var amount1 = ((wid1 * percent) - wid1) + 'px';

		$('#aboutmetitle').css('marginLeft', amount0);
		$('#aboutmetext').css('marginRight', amount1);
	}
	else{
		$('#aboutmetitle').css('marginLeft', 0);
		$('#aboutmetext').css('marginRight', 0);

	}
}

function portfolioCardPostions(){
	var ph = $('#portfoliotitle').height();

	var pgt = $('html body').scrollTop() + ph;
	var pt = $('#portfoliotitle').position().top;
	if(pgt < pt){
		var percent = pgt/pt;
		var wid = $('#portfoliotitle').outerHeight()*2;

		var amount = (-1*((wid * percent) - wid)) + 'px';

		$('#portfoliotitle').css('marginTop', amount);
	}
	else{
		$('#portfoliotitle').css('marginTop', 0);

	}
}

function skillsCardPostions(){
	var sh = $('#skillstitle').height();

	var pgt = $('html body').scrollTop() + sh;
	var st = $('#skillstitle').position().top;
	var stxt = $('#skillstext').position().top;

	if(pgt < st){
		var percentW = pgt/st;
		var percentH = pgt/stxt;

		var wid = $('#skillstitle').outerWidth()*4;
		var hei = $('#skillstext').outerHeight()*4;
		var amountW = (((wid * percentW) - wid)) + 'px';
		var amountH = (-1*((hei * percentH) - hei)) + 'px';

		$('#skillstitle').css('marginLeft', amountW);
		$('#skillstext').css('marginTop', amountH);
	}
	else{
		$('#skillstitle').css('marginLeft', 0);
		$('#skillstext').css('marginTop', 0);
	}
}


$(window).resize(function(){
	var amt = $('#aboutmetitle');
	var amtxt = $('#aboutmetext');
	var h = $(window).height();
	amt.height('auto');
	amtxt.height('auto');
	if(amt.height() < amtxt.height()){
		amt.height(amtxt.height());
	}
	else{
		amtxt.height(amt.height());
	}
	if(h < 480){
		h = 480;
	}
	$('.header-title').css('marginTop', h*.3)
	$('.blur').width($(window).width());
	$('.blur').height(h);
	
	$('.header-div').width($(window).width());
	$('.header-div').height(h);
	
	aboutMeCardPositions();
	portfolioCardPostions();
	skillsCardPostions();

	//$('#aboutme').width($(window).width());
	//$('#aboutme').height(h);
		
	//$('#portfolio').width($(window).width());
	//$('#portfolio').height(h);
		
	//$('#skills').width($(window).width());
	//$('#skills').height(h);
	
});