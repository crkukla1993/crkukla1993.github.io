var isClickable = true;
var preG1 = new Image();
preG1.src = './imgs/g1.jpg';
var preG2 = new Image();
preG2.src = './imgs/g2.jpg';
var preG3 = new Image();
preG3.src = './imgs/g3.jpg';
var preG4 = new Image();
preG4.src = './imgs/g4.jpg';
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
	var table = document.getElementById('portfoliotable');
	var tablehtml = table.innerHTML;
	var onp = document.getElementById('onp-cell');
	var onpu = document.getElementById('onpuser-cell');
	var ebid = document.getElementById('ebid-cell');
	var car = document.getElementById('carpool-cell');
	var count = (tablehtml.match(/<tr>/g) || []).length;
	if(window.innerWidth < 800){
		$('#onp-cell').width('50%');
		$('#onpuser-cell').width('50%');
		$('#ebid-cell').width('50%');
		$('#carpool-cell').width('50%');

		var da = document.getElementById('downarrow');
		if(count < 2){
			var index = tablehtml.indexOf('<td id="ebid-cell"');
			tablehtml = [tablehtml.slice(0, index), '</tr><tr>', tablehtml.slice(index)].join('');
			$(table).height('500px');
			table.innerHTML = tablehtml;
		}
		da.style.width = '50px';
		da.style.marginLeft = '-20px';
		isMobile = true;
	}
	else{
		$('#onp-cell').width('25%');
		$('#onpuser-cell').width('25%');
		$('#ebid-cell').width('25%');
		$('#carpool-cell').width('25%');
		var table = document.getElementById('portfoliotable');
		var tablehtml = table.innerHTML;
		var count = (tablehtml.match(/<tr>/g) || []).length;
		var da = document.getElementById('downarrow');
		if(count === 2){
			var index = tablehtml.indexOf('</tr><tr>');
			tablehtml = [tablehtml.slice(0, index), '', tablehtml.slice(index+9)].join('');
			table.innerHTML = tablehtml;
		}
		$(table).height('600px');
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
		var widPerc = '25%';
		var heightPX = '600px';
		if(window.innerWidth < 800){
			widPerc = '50%';
			heightPX = '250px';
		}
		var h1 = $('#onp-cell').height();
		var h2 = $('#onpuser-cell').height();
		var h3 = $('#ebid-cell').height();
		var h4 = $('#carpool-cell').height();
		isClickable = false;
		$('#onp-cell').show();
		$('#onpp').show();
		$('#onpuser-cell').show();
		$('#carpool-cell').show();
		$('#ebid-cell').show();
		$('#onpuserp').show();
		$('#carpoolp').show();
		$('#ebidp').show();
		$('#onp-cell').height(h1);
		$('#onpuser-cell').height(h2);
		$('#ebid-cell').height(h3);
		$('#carpool-cell').height(h4);
		$('#onp-cell').height(heightPX);
		$('#onpuser-cell').height(heightPX);
		$('#ebid-cell').height(heightPX);
		$('#carpool-cell').height(heightPX);
		$('#onp').width('100%');
		$('#onpuser').width('100%');
		$('#ebid').width('100%');
		$('#carpool').width('100%');
		$('#onpp').width('100%');
		$('#onpuserp').width('100%');
		$('#ebidp').width('100%');
		$('#carpoolp').width('100%');
		setTimeout(function(){
			$('#onp-cell').width(widPerc);
		}, 250);
		setTimeout(function(){
			$('#onpuser-cell').width(widPerc);
		}, 250)
		setTimeout(function(){
			$('#ebid-cell').width(widPerc);
		}, 250)
		setTimeout(function(){
			$('#carpool-cell').width(widPerc);
		}, 250)
		setTimeout(function(){
			$('#onpp').animate({opacity: 1}, 500);
			$('#onpuserp').animate({opacity: 1}, 500);
			$('#ebidp').animate({opacity: 1}, 500);
			$('#carpoolp').animate({opacity: 1}, 500);
			document.getElementById('closeportfolio').style.display = 'none';
			document.getElementById('onp').style.backgroundImage = 'url("./imgs/onp.jpg")'
			document.getElementById('onpuser').style.backgroundImage = 'url("./imgs/onpuser.jpg")'
			document.getElementById('ebid').style.backgroundImage = 'url("./imgs/ebid.jpg")'
			document.getElementById('carpool').style.backgroundImage = 'url("./imgs/carpool.jpg")'
			setTimeout(function(){
				isClickable = true;
			}, 500);
		}, 1250);
	}
}

function workClicked(e){
	setTimeout(function(){
		document.getElementById('closeportfolio').style.display = 'block';
	}, 2500);
	if(e.id === 'onp-cell' && isClickable){
		isClickable = false;
		document.getElementById('onp').style.backgroundImage = 'url("./imgs/g1.jpg")'
		document.getElementById('onpuser').style.backgroundImage = 'url("./imgs/g2.jpg")'
		document.getElementById('ebid').style.backgroundImage = 'url("./imgs/g3.jpg")'
		document.getElementById('carpool').style.backgroundImage = 'url("./imgs/g4.jpg")'
		setTimeout(function(){
			$('#onp-cell').width('100%');
			var h = $('#onp-cell').height();
			$('#onp-cell').height(h);
			if(window.innerWidth < 800){
				$('#onp-cell').height('500px');
			}
			else{
				$('#onp-cell').height('600px');
			}
			$('#onpuser-cell').height('0');
			$('#ebid-cell').height('0');
			$('#carpool-cell').height('0');
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
			setTimeout(function(){
				setTimeout(function(){
					isClickable = true;
				}, 750);
				$('#onpuser-cell').hide();
				$('#carpool-cell').hide();
				$('#ebid-cell').hide();
				$('#onpuserp').hide();
				$('#carpoolp').hide();
				$('#ebidp').hide();
			}, 1000);
		}, 1250);
	}
	else if(e.id === 'onpuser-cell' && isClickable){
		isClickable = false;
		document.getElementById('onp').style.backgroundImage = 'url("./imgs/g1.jpg")'
		document.getElementById('onpuser').style.backgroundImage = 'url("./imgs/g2.jpg")'
		document.getElementById('ebid').style.backgroundImage = 'url("./imgs/g3.jpg")'
		document.getElementById('carpool').style.backgroundImage = 'url("./imgs/g4.jpg")'
		setTimeout(function(){
			$('#onpuser-cell').width('100%');
			var h = $('#onpuser-cell').height();
			$('#onpuser-cell').height(h);
			if(window.innerWidth < 800){
				$('#onpuser-cell').height('500px');
			}
			else{
				$('#onpuser-cell').height('600px');
			}
			$('#onp-cell').height('0');
			$('#ebid-cell').height('0');
			$('#carpool-cell').height('0');
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
			setTimeout(function(){
				setTimeout(function(){
					isClickable = true;
				}, 750);
				$('#carpool-cell').hide();
				$('#onp-cell').hide();
				$('#ebid-cell').hide();
				$('#carpoolp').hide();
				$('#onpp').hide();
				$('#ebidp').hide();
			}, 1000);
		}, 1250);
	}
	else if(e.id === 'ebid-cell' && isClickable){
		isClickable = false;
		document.getElementById('onp').style.backgroundImage = 'url("./imgs/g1.jpg")'
		document.getElementById('onpuser').style.backgroundImage = 'url("./imgs/g2.jpg")'
		document.getElementById('ebid').style.backgroundImage = 'url("./imgs/g3.jpg")'
		document.getElementById('carpool').style.backgroundImage = 'url("./imgs/g4.jpg")'
		setTimeout(function(){
			$('#ebid-cell').width('100%');
			var h = $('#ebid-cell').height();
			$('#ebid-cell').height(h);
			if(window.innerWidth < 800){
				$('#ebid-cell').height('500px');
			}
			else{
				$('#ebid-cell').height('600px');
			}
			$('#onpuser-cell').height('0');
			$('#onp-cell').height('0');
			$('#carpool-cell').height('0');
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
			setTimeout(function(){
				setTimeout(function(){
					isClickable = true;
				}, 750);
				$('#onpuser-cell').hide();
				$('#onp-cell').hide();
				$('#carpool-cell').hide();
				$('#onpuserp').hide();
				$('#onpp').hide();
				$('#carpoolp').hide();
			}, 1000);
		}, 1250);
	}
	else if (isClickable){
		isClickable = false;
		document.getElementById('onp').style.backgroundImage = 'url("./imgs/g1.jpg")'
		document.getElementById('onpuser').style.backgroundImage = 'url("./imgs/g2.jpg")'
		document.getElementById('ebid').style.backgroundImage = 'url("./imgs/g3.jpg")'
		document.getElementById('carpool').style.backgroundImage = 'url("./imgs/g4.jpg")'
		setTimeout(function(){
			$('#carpool-cell').width('100%');
			var h = $('#carpool-cell').height();
			$('#carpool-cell').height(h);
			if(window.innerWidth < 800){
				$('#carpool-cell').height('500px');
			}
			else{
				$('#carpool-cell').height('600px');
			}
			$('#onpuser-cell').height('0');
			$('#onp-cell').height('0');
			$('#ebid-cell').height('0');
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
			setTimeout(function(){
				setTimeout(function(){
					isClickable = true;
				}, 750);
				$('#onpuser-cell').hide();
				$('#onp-cell').hide();
				$('#ebid-cell').hide();
				$('#onpuserp').hide();
				$('#onpp').hide();
				$('#ebidp').hide();
			}, 1000);
		}, 1250);
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
	isMobileWidth();
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