var isClickable = true;

function aboutMeCardPositions(){
	if(!isMobileWidth()){
		var amh = $('#aboutmetitle').height();
		var amt = $('#aboutmetitle').position().top - amh/2;
		var pgt = $('html body').scrollTop();
		if(pgt < amt){
			var percent = pgt/amt;
			var wid0 = $('#aboutmetitle').outerWidth();
			var wid1 = $('#aboutmetext').outerWidth();

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
	else{
		$('#aboutmetitle').css('marginLeft', 0);
		$('#aboutmetext').css('marginRight', 0);
	}
	return false;
}

function portfolioCardPostions(){
	if(!isMobileWidth()){
		var ph = $('#portfoliotitle').height();
		var pt = $('#portfoliotitle').position().top - ph/2;   
		var pgt = $('html body').scrollTop();
		if(pgt < pt){
			var percent = pgt/pt;
			var wid = $('#portfoliotitle').outerWidth();

			var amount = (((wid * percent) - wid)*2) + 'px';

			$('#portfoliotitle').css('marginRight', amount);
			var a = (1 + percent)/2;
			$('#portfoliotitle table').css('opacity', a);

		}
		else{
			$('#portfoliotitle').css('marginRight', 0);
			$('#portfoliotitle table').css('opacity', 1);

		}
	}
	else{
		$('#portfoliotitle table').css('opacity', 1);
	}
	return false;
}

function skillsCardPostions(){
	if(!isMobileWidth()){
		var sh = $('#skillstitle').height();
		var st = $('#skillstitle').position().top - sh/2;
		var stxt = $('#skillstext').position().top - sh/2;
		var pgt = $('html body').scrollTop();
		if(pgt < st){
			var percentW = pgt/st;
			var percentH = pgt/stxt;

			var wid = $('#skillstitle').outerWidth();
			var hei = $('#skillstext').outerHeight();
			var amountW = ((((wid * percentW) - wid))*3) + 'px';
			var amountH = ((-1*((hei * percentH) - hei))*3) + 'px';

			$('#skillstitle').css('marginLeft', amountW);
			$('#skillstext').css('marginTop', amountH);
		}
		else{
			$('#skillstitle').css('marginLeft', 0);
			$('#skillstext').css('marginTop', 0);
		}
	}
	else{
		$('#skillstitle').css('marginLeft', 0);
		$('#skillstext').css('marginTop', 0);
	}
	return false;
}

function setHeightsEven(){
	var amt = document.getElementById('aboutmetitle');
	var amtxt = document.getElementById('aboutmetext');
	var amth;
	var amtxth;
	var st = document.getElementById('skillstitle');
	var stxt = document.getElementById('skillstext');
	var sth;
	var stxth;
	try {
		amth = window.getComputedStyle(amt, null).getPropertyValue('height');
		amtxth = window.getComputedStyle(amtxt, null).getPropertyValue('height');
		sth = window.getComputedStyle(st, null).getPropertyValue('height');
		stxth = window.getComputedStyle(stxt, null).getPropertyValue('height');
	} catch(e) {
		amth = amt.currentStyle.height;
		amtxth = amtxt.currentStyle.height;
		sth = st.currentStyle.height;
		stxth = stxt.currentStyle.height;
	} 
	
	if(!isMobileWidth()){		
		if(amth < amtxth){
			amt.style.height = amtxth;
		}
		else{
			amtxt.style.height = amth;
		}
		
		if(sth < stxth){
			st.style.height = stxth;
		}
		else{
			stxt.style.height = sth;
		}
	}
}

function isMobileWidth(){
	var isMobile = false;
	if(window.innerWidth < 800){
		var da = document.getElementById('downarrow');
		da.style.width = '50px';
		da.style.marginLeft = '-20px';
		isMobile = true;
	}
	else{
		var da = document.getElementById('downarrow');
		da.style.width = '75px';
		da.style.marginLeft = '-35px';
	}
	return isMobile;
}

function displayContent(){
	var content = document.getElementById('content-div');
	content.style.display = 'block';

}

function closePortfolio(e){
	if(isClickable){
		isClickable = false;
		document.getElementById('closeportfolio').style.display = 'none';
		document.getElementById('onp').style.backgroundImage = 'url("./imgs/onp.jpg")'
		document.getElementById('onpuser').style.backgroundImage = 'url("./imgs/onpuser.jpg")'
		document.getElementById('ebid').style.backgroundImage = 'url("./imgs/ebid.jpg")'
		document.getElementById('carpool').style.backgroundImage = 'url("./imgs/carpool.jpg")'
		$('#onp').width('100%');
		$('#onpuser').width('100%');
		$('#ebid').width('100%');
		$('#carpool').width('100%');
		$('#onpp').width('100%');
		$('#onpuserp').width('100%');
		$('#ebidp').width('100%');
		$('#carpoolp').width('100%');
		setTimeout(function(){
		$('#onp-cell').width('25%');
		}, 250);
		setTimeout(function(){
			$('#onpuser-cell').width('25%');
		}, 250)
		setTimeout(function(){
			$('#ebid-cell').width('25%');
		}, 250)
		setTimeout(function(){
			$('#carpool-cell').width('25%');
		}, 250)
		setTimeout(function(){
			$('#onpp').animate({opacity: 1}, 500);
			$('#onpuserp').animate({opacity: 1}, 500);
			$('#ebidp').animate({opacity: 1}, 500);
			$('#carpoolp').animate({opacity: 1}, 500);
			isClickable = true;
		}, 1250);
	}
}

function workClicked(e){
	document.getElementById('closeportfolio').style.display = 'block';
	if(e.id === 'onp-cell' && isClickable){
		isClickable = false;
		$('#onp-cell').width('100%');
		$('#onpuser-cell').width('0');
		$('#ebid-cell').width('0');
		$('#carpool-cell').width('0');
		$('#onpuserp').width('0');
		$('#ebidp').width('0');
		$('#carpoolp').width('0');
		$('#onpuserp').animate({opacity: 0}, 500);
		$('#ebidp').animate({opacity: 0}, 500);
		$('#carpoolp').animate({opacity: 0}, 500);
		$('#onpuser').width('0');
		$('#ebid').width('0');
		$('#carpool').width('0');
		document.getElementById('onp').style.backgroundImage = 'url("./imgs/g1.jpg")'
		document.getElementById('onpuser').style.backgroundImage = 'url("./imgs/g2.jpg")'
		document.getElementById('ebid').style.backgroundImage = 'url("./imgs/g3.jpg")'
		document.getElementById('carpool').style.backgroundImage = 'url("./imgs/g4.jpg")'
		setTimeout(function(){
			isClickable = true;
		}, 1000);
	}
	else if(e.id === 'onpuser-cell' && isClickable){
		isClickable = false;
		$('#onpuser-cell').width('100%');
		$('#onp-cell').width('0');
		$('#ebid-cell').width('0');
		$('#carpool-cell').width('0');
		$('#onpp').width('0');
		$('#ebidp').width('0');
		$('#carpoolp').width('0');
		$('#onpp').animate({opacity: 0}, 500);
		$('#ebidp').animate({opacity: 0}, 500);
		$('#carpoolp').animate({opacity: 0}, 500);
		$('#onp').width('0');
		$('#ebid').width('0');
		$('#carpool').width('0');
		document.getElementById('onp').style.backgroundImage = 'url("./imgs/g1.jpg")'
		document.getElementById('onpuser').style.backgroundImage = 'url("./imgs/g2.jpg")'
		document.getElementById('ebid').style.backgroundImage = 'url("./imgs/g3.jpg")'
		document.getElementById('carpool').style.backgroundImage = 'url("./imgs/g4.jpg")'
		setTimeout(function(){
			isClickable = true;
		}, 1000);
	}
	else if(e.id === 'ebid-cell' && isClickable){
		isClickable = false;
		$('#ebid-cell').width('100%');
		$('#onpuser-cell').width('0');
		$('#onp-cell').width('0');
		$('#carpool-cell').width('0');
		$('#onpuserp').width('0');
		$('#onpp').width('0');
		$('#carpoolp').width('0');
		$('#onpuserp').animate({opacity: 0}, 500);
		$('#onpp').animate({opacity: 0}, 500);
		$('#carpoolp').animate({opacity: 0}, 500);
		$('#onpuser').width('0');
		$('#onp').width('0');
		$('#carpool').width('0');
		document.getElementById('onp').style.backgroundImage = 'url("./imgs/g1.jpg")'
		document.getElementById('onpuser').style.backgroundImage = 'url("./imgs/g2.jpg")'
		document.getElementById('ebid').style.backgroundImage = 'url("./imgs/g3.jpg")'
		document.getElementById('carpool').style.backgroundImage = 'url("./imgs/g4.jpg")'
		setTimeout(function(){
			isClickable = true;
		}, 1000);
	}
	else if (isClickable){
		isClickable = false;
		$('#carpool-cell').width('100%');
		$('#onpuser-cell').width('0');
		$('#onp-cell').width('0');
		$('#ebid-cell').width('0');
		$('#onpuserp').width('0');
		$('#onpp').width('0');
		$('#ebidp').width('0');
		$('#onpuserp').animate({opacity: 0}, 500);
		$('#onpp').animate({opacity: 0}, 500);
		$('#ebidp').animate({opacity: 0}, 500);
		$('#onpuser').width('0');
		$('#onp').width('0');
		$('#ebid').width('0');
		document.getElementById('onp').style.backgroundImage = 'url("./imgs/g1.jpg")'
		document.getElementById('onpuser').style.backgroundImage = 'url("./imgs/g2.jpg")'
		document.getElementById('ebid').style.backgroundImage = 'url("./imgs/g3.jpg")'
		document.getElementById('carpool').style.backgroundImage = 'url("./imgs/g4.jpg")'
		setTimeout(function(){
			isClickable = true;
		}, 1000);
	}
}

$(document).ready(function(){
	var header = document.getElementsByClassName('blur');
	var img = document.getElementById('profilepic');
	var h = $(window).height();
	var w = $(window).width();
	
	header.onload = displayContent();
	img.onload = setHeightsEven();

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
	$('.blur').width(w);
	$('.blur').height(h);
	
	$('.header-div').width(w);
	$('.header-div').height(h);
	var t;
	if(!isMobileWidth()){
		var bounced = false;
		t = setTimeout(function(){
			var n = $('#downarrow').css('opacity');
			if($('#downarrow').css("opacity") !== '0' && !bounced){
				$('#downarrow').effect('bounce', {times: 3}, 500);
				bounced = true;
			}
		}, 8000);
	}
	aboutMeCardPositions();
	portfolioCardPostions();
	skillsCardPostions();
});

$(window).resize(function(){
	var amt = $('#aboutmetitle');
	var amtxt = $('#aboutmetext');
	var pt = $('#portfoliotext');
	var st = $('#skillstitle');
	var stxt = $('#skillstext');
	var h = $(window).height();
	var w = $(window).width();
	amt.height('auto');
	amtxt.height('auto');
	pt.height('auto');
	st.height('auto');
	stxt.height('auto');
	
	setHeightsEven();
	
	if(h < 480){
		h = 480;
	}
	$('.header-title').css('marginTop', h*.3)
	$('.blur').width(w);
	$('.blur').height(h);
	
	$('.header-div').width(w);
	$('.header-div').height(h);
	aboutMeCardPositions();
	portfolioCardPostions();
	skillsCardPostions();
	return false;
});
	
$(window).scroll(function(){
	aboutMeCardPositions();
	portfolioCardPostions();
	skillsCardPostions();
	if(!isMobileWidth()){

		var t;
		if($('html body').scrollTop() === 0){
			$('#downarrow').animate({opacity: 1}, {queue: false, duration: 300});
		
			t = setTimeout(function(){
				var a = $('#downarrow').css("opacity");
				if(a !== '0' && !bounced){
					$('#downarrow').effect('bounce', {times: 3}, 500);
					bounced = true
				}
			}, 8000);
		}
		else{
			if(t != null){
				clearTimeout(t);
			}
			bounced = false;
			$('#downarrow').animate({opacity: 0}, {queue: false, duration: 300});
		}
	}
});



$('#aboutmebtn').click(function(){
	var i = $("#aboutmetitle").position().top;
	$('html body').animate({scrollTop: i}, 1500);
	return false;
});
$('#portfoliobtn').click(function(){
	var i = $("#portfoliotitle").position().top;
	$('html body').animate({scrollTop: i}, 2250);
	return false;
});
$('#skillsbtn').click(function(){
	var i = $("#skillstitle").position().top;
	$('html body').animate({scrollTop: i}, 3000);
	return false;
});