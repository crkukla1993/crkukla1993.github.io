var isClickable = true;
var preG1 = new Image();
preG1.src = './imgs/g1.jpg';
var preG2 = new Image();
preG2.src = './imgs/g2.jpg';
var preG3 = new Image();
preG3.src = './imgs/g3.jpg';
var preG4 = new Image();
preG4.src = './imgs/g4.jpg';
var workSelected = false;
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
		amth = parseFloat(window.getComputedStyle(amt, null).getPropertyValue('height').replace('px', ''));
		amtxth = parseFloat(window.getComputedStyle(amtxt, null).getPropertyValue('height').replace('px', ''));
		sth = parseFloat(window.getComputedStyle(st, null).getPropertyValue('height').replace('px', ''));
		stxth = parseFloat(window.getComputedStyle(stxt, null).getPropertyValue('height').replace('px', ''));
	} catch(e) {
		amth = parseFloat(amt.currentStyle.height.replace('px', ''));
		amtxth = parseFloat(amtxt.currentStyle.height.replace('px', ''));
		sth = parseFloat(st.currentStyle.height.replace('px', ''));
		stxth = parseFloat(stxt.currentStyle.height.replace('px', ''));
	} 
	
	if(!isMobileWidth()){		
		if(amth < amtxth){
			amt.style.height = amtxth + 'px';
		}
		else{
			amtxt.style.height = amth + 'px';
		}
		
		if(sth < stxth){
			st.style.height = stxth + 'px';
		}
		else{
			stxt.style.height = sth + 'px';
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
	if(window.innerWidth < 768){
		if(!workSelected){
			$('#onp-cell').addClass('portfolio-cell-mobile');
			$('#onpuser-cell').addClass('portfolio-cell-mobile');
			$('#ebid-cell').addClass('portfolio-cell-mobile');
			$('#carpool-cell').addClass('portfolio-cell-mobile');
		}
		var da = document.getElementById('downarrow');
		if(count < 2){
			var index = tablehtml.indexOf('<td id="ebid-cell"');
			tablehtml = [tablehtml.slice(0, index), '</tr><tr>', tablehtml.slice(index)].join('');
			table.innerHTML = tablehtml;
		}
		$('#downarrow').addClass('downarrow-mobile');
		isMobile = true;
	}
	else{
		$('#onp-cell').removeClass('portfolio-cell-mobile');
		$('#onpuser-cell').removeClass('portfolio-cell-mobile');
		$('#ebid-cell').removeClass('portfolio-cell-mobile');;
		$('#carpool-cell').removeClass('portfolio-cell-mobile');
		var table = document.getElementById('portfoliotable');
		var tablehtml = table.innerHTML;
		var count = (tablehtml.match(/<tr>/g) || []).length;
		var da = document.getElementById('downarrow');
		if(count === 2){
			var index = tablehtml.indexOf('</tr><tr>');
			tablehtml = [tablehtml.slice(0, index), '', tablehtml.slice(index+9)].join('');
			table.innerHTML = tablehtml;
		}
		$('#downarrow').removeClass('downarrow-mobile');
	}
	return isMobile;
}

function displayContent(){
	var content = document.getElementById('content-div');
	content.style.display = 'block';

}

function closePortfolio(e){
	if(isClickable){
		workSelected = false;
		var widPerc = '25%';
		var heightPX = '600px';
		if(window.innerWidth < 768){
			widPerc = '50%';
			heightPX = '250px';
		}
		var h1 = $('#onp-cell').height();
		var h2 = $('#onpuser-cell').height();
		var h3 = $('#ebid-cell').height();
		var h4 = $('#carpool-cell').height();
		isClickable = false;
		$('#onp-cell').show();
		$('#onp-title').show();
		$('#onpuser-cell').show();
		$('#carpool-cell').show();
		$('#ebid-cell').show();
		$('#onpuser-title').show();
		$('#carpool-title').show();
		$('#ebid-title').show();
		$('#onp-cell').height(h1);
		$('#onpuser-cell').height(h2);
		$('#ebid-cell').height(h3);
		$('#carpool-cell').height(h4);
		$('#onp-cell').height(heightPX);
		$('#onpuser-cell').height(heightPX);
		$('#ebid-cell').height(heightPX);
		$('#carpool-cell').height(heightPX);
		$('#onp-title').width('25%');
		$('#onpuser-title').width('25%');
		$('#ebid-title').width('25%');
		$('#carpool-title').width('25%');
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
			$('#onp-title').animate({opacity: 1}, 500);
			$('#onpuser-title').animate({opacity: 1}, 500);
			$('#ebid-title').animate({opacity: 1}, 500);
			$('#carpool-title').animate({opacity: 1}, 500);
			document.getElementById('closeportfolio').style.display = 'none';
			$('#onp').removeClass('onpClicked');
			$('#onpuser').removeClass('onpuserClicked');
			$('#ebid').removeClass('ebidClicked');
			$('#carpool').removeClass('carpoolClicked');
			setTimeout(function(){
				isClickable = true;
			}, 500);
		}, 1250);
	}
}

function workClicked(e){
	workSelected = true;
	setTimeout(function(){
		document.getElementById('closeportfolio').style.display = 'block';
	}, 2500);
	if(e.id === 'onp-cell' && isClickable){
		isClickable = false;
		$('#onp').addClass('onpClicked');
		$('#onpuser').addClass('onpuserClicked');
		$('#ebid').addClass('ebidClicked');
		$('#carpool').addClass('carpoolClicked');
		setTimeout(function(){
			$('#onp-cell').width('100%');
			var h = $('#onp-cell').height();
			$('#onp-cell').height(h);
			if(window.innerWidth < 768){
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
			$('#onpuser-title').width('0');
			$('#ebid-title').width('0');
			$('#carpool-title').width('0');
			$('#onpuser-title').animate({opacity: 0}, 500);
			$('#ebid-title').animate({opacity: 0}, 500);
			$('#carpool-title').animate({opacity: 0}, 500);
			setTimeout(function(){
				setTimeout(function(){
					isClickable = true;
				}, 650);
				$('#onpuser-cell').hide();
				$('#carpool-cell').hide();
				$('#ebid-cell').hide();
				$('#onpuser-title').hide();
				$('#carpool-title').hide();
				$('#ebid-title').hide();
			}, 1000);
		}, 1250);
	}
	else if(e.id === 'onpuser-cell' && isClickable){
		isClickable = false;
		$('#onp').addClass('onpClicked');
		$('#onpuser').addClass('onpuserClicked');
		$('#ebid').addClass('ebidClicked');
		$('#carpool').addClass('carpoolClicked');
		setTimeout(function(){
			$('#onpuser-cell').width('100%');
			var h = $('#onpuser-cell').height();
			$('#onpuser-cell').height(h);
			if(window.innerWidth < 768){
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
			$('#onp-title').width('0');
			$('#ebid-title').width('0');
			$('#carpool-title').width('0');
			$('#onp-title').animate({opacity: 0}, 500);
			$('#ebid-title').animate({opacity: 0}, 500);
			$('#carpool-title').animate({opacity: 0}, 500);
			setTimeout(function(){
				setTimeout(function(){
					isClickable = true;
				}, 650);
				$('#carpool-cell').hide();
				$('#onp-cell').hide();
				$('#ebid-cell').hide();
				$('#carpool-title').hide();
				$('#onp-title').hide();
				$('#ebid-title').hide();
			}, 1000);
		}, 1250);
	}
	else if(e.id === 'ebid-cell' && isClickable){
		isClickable = false;
		$('#onp').addClass('onpClicked');
		$('#onpuser').addClass('onpuserClicked');
		$('#ebid').addClass('ebidClicked');
		$('#carpool').addClass('carpoolClicked');
		setTimeout(function(){
			$('#ebid-cell').width('100%');
			var h = $('#ebid-cell').height();
			$('#ebid-cell').height(h);
			if(window.innerWidth < 768){
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
			$('#onpuser-title').width('0');
			$('#onp-title').width('0');
			$('#carpool-title').width('0');
			$('#onpuser-title').animate({opacity: 0}, 500);
			$('#onp-title').animate({opacity: 0}, 500);
			$('#carpool-title').animate({opacity: 0}, 500);
			setTimeout(function(){
				setTimeout(function(){
					isClickable = true;
				}, 650);
				$('#onpuser-cell').hide();
				$('#onp-cell').hide();
				$('#carpool-cell').hide();
				$('#onpuser-title').hide();
				$('#onp-title').hide();
				$('#carpool-title').hide();
			}, 1000);
		}, 1250);
	}
	else if (isClickable){
		isClickable = false;
		$('#onp').addClass('onpClicked');
		$('#onpuser').addClass('onpuserClicked');
		$('#ebid').addClass('ebidClicked');
		$('#carpool').addClass('carpoolClicked');
		setTimeout(function(){
			$('#carpool-cell').width('100%');
			var h = $('#carpool-cell').height();
			$('#carpool-cell').height(h);
			if(window.innerWidth < 768){
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
			$('#onpuser-title').width('0');
			$('#onp-title').width('0');
			$('#ebid-title').width('0');
			$('#onpuser-title').animate({opacity: 0}, 500);
			$('#onp-title').animate({opacity: 0}, 500);
			$('#ebid-title').animate({opacity: 0}, 500);
			setTimeout(function(){
				setTimeout(function(){
					isClickable = true;
				}, 650);
				$('#onpuser-cell').hide();
				$('#onp-cell').hide();
				$('#ebid-cell').hide();
				$('#onpuser-title').hide();
				$('#onp-title').hide();
				$('#ebid-title').hide();
			}, 1000);
		}, 1250);
	}
}

$(document).ready(function(){
	var header = document.getElementsByClassName('blur');
	var img = document.getElementById('profilepic');
	var h = $(window).height();
	var w = $(window).width();
	document.getElementById('wh').innerHTML = 'width: ' + window.innerWidth + ' height: ' + window.innerHeight;
	header.onload = displayContent();
	img.onload = setHeightsEven();

	var htmp;
	if(window.innerWidth < 768){
		htmp = h*0.2;
	}
	else{
		htmp = h*0.3;
	}
	
	
	$('.header-title')
	.animate({opacity: 'show'}, {queue: false, duration: 1500})
	.animate({marginTop: htmp}, {duration: 750, complete: function(){
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
	$('skills-table').width($('skillstext').width());
	var plArr = document.getElementById('skills-table').getElementsByClassName('pl-div');
	var largest = 0;
	for(var i = 0; i < plArr.length; i++){
		if(parseFloat(plArr[i].innerHTML) > largest){
			largest = parseFloat(plArr[i].innerHTML);
		}
	}
	for(var i = 0; i < plArr.length; i++){
		if(parseFloat(plArr[i].innerHTML) === 1){
			plArr[i].innerHTML += " Year";
		}
		else{
			plArr[i].innerHTML += " Years";
		}
		plArr[i].style.width = ((parseFloat(plArr[i].innerHTML)/largest)*100) + '%';
	}
	
	
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
		}, 4000);
	}
	aboutMeCardPositions();
	portfolioCardPostions();
	skillsCardPostions();

});

$(window).resize(function(){
	document.getElementById('wh').innerHTML = 'width: ' + window.innerWidth + ' height: ' + window.innerHeight;

	var amt = $('#aboutmetitle');
	var amtxt = $('#aboutmetext');
	var pt = $('#portfoliotitle');
	var st = $('#skillstitle');
	var stxt = $('#skillstext');
	
	var bt = $('html body').scrollTop();
	var stt = Math.abs(st.offset().top - bt);
	var ptt = Math.abs(pt.offset().top - bt);
	var amtt = Math.abs(amt.offset().top - bt);
	var stl = st.position().left;
	var ptl = pt.position().left;
	var amtl = pt.position().left;
	
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
	
	var htmp;
	if(window.innerWidth < 768){
		htmp = h*0.2;
	}
	else{
		htmp = h*0.3;
	}
	
	$('.header-title').css('marginTop', htmp)
	$('.blur').width(w);
	$('.blur').height(h);
	
	$('.header-div').width(w);
	$('.header-div').height(h);
	
	if(window.innerWidth >= 768){	
		if(stt < ptt){
			$('html body').scrollTop(st.offset().top);
		}
		else if(ptt < amtt && ptt < stt){
			$('html body').scrollTop(pt.offset().top);
		}
		else if(amtt < bt){
			$('html body').scrollTop(amt.offset().top);
		}
		else{
			$('html body').scrollTop(0);
		}
	}
	
	aboutMeCardPositions();
	portfolioCardPostions();
	skillsCardPostions();
	isMobileWidth();
		
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

$('#portfoliotable').on('mouseenter', 'td', function(e){
	if(e.currentTarget.id === 'onp-cell'){
		document.getElementById('onp-desc').style.display = 'inline-block';
	}
	else if(e.currentTarget.id === 'onpuser-cell'){
		document.getElementById('onpuser-desc').style.display = 'inline-block';
	}
	else if(e.currentTarget.id === 'ebid-cell'){
		document.getElementById('ebid-desc').style.display = 'inline-block';
	}
	else if(e.currentTarget.id === 'carpool-cell'){
		document.getElementById('carpool-desc').style.display = 'inline-block';
	}
});

$('#portfoliotable').on('mouseleave', 'td', function(e){
	if(e.currentTarget.id === 'onp-cell'){
		document.getElementById('onp-desc').style.display = 'none';
	}
	else if(e.currentTarget.id === 'onpuser-cell'){
		document.getElementById('onpuser-desc').style.display = 'none';
	}
	else if(e.currentTarget.id === 'ebid-cell'){
		document.getElementById('ebid-desc').style.display = 'none';
	}
	else if(e.currentTarget.id === 'carpool-cell'){
		document.getElementById('carpool-desc').style.display = 'none';
	}
});


$('#aboutmebtn').click(function(){
	var i = $("#aboutmetitle").position().top;
	$('html body').on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
       $('html body').stop();
	});
	$('html body').animate({scrollTop: i}, 1500);
	return false;
});
$('#portfoliobtn').click(function(){
	var i = $("#portfoliotitle").position().top;
	$('html body').on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
       $('html body').stop();
	});
	$('html body').animate({scrollTop: i}, 2250);
	return false;
});
$('#skillsbtn').click(function(){
	var i = $("#skillstitle").position().top;
	$('html body').on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
       $('html body').stop();
	});
	$('html body').animate({scrollTop: i}, 3000);
	return false;
});