var aboutMe = document.getElementById('aboutmetitle');
var aboutMeText = document.getElementById('aboutmetext');
var portfolio = document.getElementById('portfoliotitle');
var portfolioTable = document.getElementById('portfolio-table');
var skills = document.getElementById('skillstitle');
var skillsText = document.getElementById('skillstext');
var headerDiv = $('#header-div');
var onpCell = $('#onp-cell');
var onpUserCell = $('#onpuser-cell');
var ebidCell = $('#ebid-cell');
var carpoolCell = $('#carpool-cell');
var onpT = $('#onp-title');
var onpUserT = $('#onpuser-title');
var ebidT = $('#ebid-title');
var carpoolT = $('#carpool-title');
var positionAboutMe = false;
var positionPortfolio = false;
var positionSkills = false;
var workSelected = false;
var isClickable = true;

function aboutMeCardPositions(){
	var papa = headerDiv.height();
	var amt = abh/1.25;
	var pgt = window.pageYOffset;
	if(pgt < amt){
		var percent = pgt/amt;
		var amount0 = ((abw * percent) - abw) + 'px';
		var amount1 = ((abtw * percent) - abtw) + 'px';
		aboutMe.style.left = amount0;
		aboutMeText.style.right = amount1;
	}
	else{
		positionAboutMe = true;
		aboutMe.style.left = 0;
		aboutMeText.style.right = 0;
		animateAboutMe();
	}
	
	return positionPortfolio;
}

function animateAboutMe(){
	var paragraphs = aboutMeText.getElementsByTagName('p');
	var count = 0;
	for(var i = 0; i < paragraphs.length; i++){
		setTimeout(function(){
			var p = paragraphs[count];
			p.className = 'fadeL';
			count++;
			if(count === 3){
				setTimeout(function(){
					document.getElementById('profilepic').className = 'rounded rotateInR';
				}, 500);
			}
		}, i*500);
	}
}

function portfolioCardPostions(){
	var onp = $('#onp');
	var onpUser = $('#onpuser');
	var ebid = $('#ebid');
	var carpool = $('#carpool');
	var pt = abh + ph/1.25;
	var pgt = window.pageYOffset;
	if(pgt < pt){
		var percent = pgt/pt;
		var amount = (((pw * percent) - pw)*2) + 'px';
		portfolio.style.right = amount;
		if(document.getElementsByClassName('onpClicked').length < 1){
			onp.addClass('onpClicked');
			onpUser.addClass('onpuserClicked');
			ebid.addClass('ebidClicked');
			carpool.addClass('carpoolClicked');
		}
		isClickable = false;
	}
	else{
		if(document.getElementsByClassName('onpClicked').length > 0 && !workSelected){
			onp.removeClass('onpClicked');
			onpUser.removeClass('onpuserClicked');
			ebid.removeClass('ebidClicked');
			carpool.removeClass('carpoolClicked');
			
			if(window.innerWidth > 768){
				onp.addClass('animate-onp');
				onpUser.addClass('animate-onpuser');
				ebid.addClass('animate-ebid');
				carpool.addClass('animate-carpool');
			}
			else{
				onp.removeClass('animate-onp');
				onpUser.removeClass('animate-onpuser');
				ebid.removeClass('animate-ebid');
				carpool.removeClass('animate-carpool');
			}
		}
		portfolio.style.right = 0;
		positionPortfolio = true;
		isClickable = true;
	}
	
	return positionSkills;
}

function skillsCardPostions(){
	var a = abh + ph;
	var st = a + sh/2;
	var stxt = a + sth/2;
	var pgt = window.pageYOffset;
	
	if(pgt < stxt){
		var percentH = pgt/stxt;
		var amountH = (((sth * percentH) - sth)*-1) + 'px';
		skillsText.style.top = amountH;
		skills.style.top = amountH;
	}
	else{
		positionSkills = true;
		skillsText.style.top = 0;
		skills.style.top = 0;
		setTimeout(function(){animateGraphs();}, 250);
	}
	
	return false;
}


function workClicked(e){
	if(!workSelected){
		var onpC = $('#onp-cell');
		var onpUserC = $('#onpuser-cell');
		var ebidC = $('#ebid-cell');
		var carpoolC = $('#carpool-cell');
		var wid = window.innerWidth;
		
		if(e.id === 'onp-cell' && isClickable){
			workSelected = true;
			isClickable = false;
			portfolioClickedToggle(true);
			setTimeout(function(){
				if(wid > 768){
					onpC.width('100%');
					onpUserC.width('0%');
					ebidC.width('0%');
					carpoolC.width('0%');
				}
				else{
					var h = onpC.height();
					onpC.width('100%').height(h).height(h * 2);
					onpUserC.width('0%').height('0%');
					ebidC.width('0%').height('0%');
					carpoolC.width('0%').height('0%');
				}
				onpUserT.width('0%').height('0px').animate({opacity: 0}, 500);
				ebidT.width('0%').height('0px').animate({opacity: 0}, 500);
				carpoolT.width('0%').height('0px').animate({opacity: 0}, 500);
				setTimeout(function(){
					setTimeout(function(){
						isClickable = true;
					}, 650);
					onpUserC.hide();
					ebidC.hide();
					carpoolC.hide();
					onpUserT.hide();
					ebidT.hide();
					carpoolT.hide();
				}, 1000);
			}, 1250);
		}
		else if(e.id === 'onpuser-cell' && isClickable){
			workSelected = true;
			isClickable = false;
			portfolioClickedToggle(true);
			setTimeout(function(){
				if(wid > 768){
					onpC.width('0%');
					onpUserC.width('100%');
					ebidC.width('0%');
					carpoolC.width('0%');
				}
				else{
					var h = onpUserC.height();
					onpC.width('0%').height('0%');
					onpUserC.width('100%').height(h).height(h * 2);
					ebidC.width('0%').height('0%');
					carpoolC.width('0%').height('0%');
				}
				onpT.width('0%').height('0px').animate({opacity: 0}, 500);
				ebidT.width('0%').height('0px').animate({opacity: 0}, 500);
				carpoolT.width('0%').height('0px').animate({opacity: 0}, 500);
				setTimeout(function(){
					setTimeout(function(){
						isClickable = true;
					}, 650);
					onpC.hide();
					ebidC.hide();
					carpoolC.hide();
					onpT.hide();
					ebidT.hide();
					carpoolT.hide();
				}, 1000);
			}, 1250);
		}
		else if(e.id === 'ebid-cell' && isClickable){
			workSelected = true;
			isClickable = false;
			portfolioClickedToggle(true);
			setTimeout(function(){
				if(wid > 768){
					onpC.width('0%');
					onpUserC.width('0%');
					ebidC.width('100%');
					carpoolC.width('0%');
				}
				else{
					var h = ebidC.height();
					onpC.width('0%').height('0%');
					onpUserC.width('0%').height('0%');
					ebidC.width('100%').height(h).height(h * 2);
					carpoolC.width('0%').height('0%');
				}
				onpUserT.width('0%').height('0px').animate({opacity: 0}, 500);
				onpT.width('0%').height('0px').animate({opacity: 0}, 500);
				carpoolT.width('0%').height('0px').animate({opacity: 0}, 500);
				setTimeout(function(){
					setTimeout(function(){
						isClickable = true;
					}, 650);
					onpC.hide();
					onpUserC.hide();
					carpoolC.hide();
					onpT.hide();
					onpUserT.hide();
					carpoolT.hide();
				}, 1000);
			}, 1250);
		}
		else if (e.id === 'carpool-cell' && isClickable){
			workSelected = true;
			isClickable = false;
			portfolioClickedToggle(true);
			setTimeout(function(){
				if(wid > 768){
					onpC.width('0%');
					onpUserC.width('0%');
					ebidC.width('0%');
					carpoolC.width('100%');
				}
				else{
					var h = carpoolC.height();
					onpC.width('0%').height('0%');
					onpUserC.width('0%').height('0%');
					ebidC.width('0%').height('0%');
					carpoolC.width('100%').height(h).height(h * 2);
				}
				onpUserT.width('0%').height('0px').animate({opacity: 0}, 500);
				ebidT.width('0%').height('0px').animate({opacity: 0}, 500);
				onpT.width('0%').height('0px').animate({opacity: 0}, 500);
				setTimeout(function(){
					setTimeout(function(){
						isClickable = true;
					}, 650);
					onpC.hide();
					onpUserC.hide();
					ebidC.hide();
					onpT.hide();
					onpUserT.hide();
					ebidT.hide();
				}, 1000);
			}, 1250);
		}
		if(workSelected){
			setTimeout(function(){
				document.getElementById('closeportfolio').style.display = 'block';
			}, 2500);
		}
	}
}


function closePortfolio(){
	if(isClickable){
		var onpC = $('#onp-cell');
		var onpUserC = $('#onpuser-cell');
		var ebidC = $('#ebid-cell');
		var carpoolC = $('#carpool-cell');
		var onpT = $('#onp-title');
		var onpUserT = $('#onpuser-title');
		var ebidT = $('#ebid-title');
		var carpoolT = $('#carpool-title');
		var widPerc = '25%';
		var heightPX = '100%';
		
		document.getElementById('closeportfolio').style.display = 'none';
		
		workSelected = false;
		isClickable = false;
		
		if(window.innerWidth < 768){
			widPerc = '50%';
			heightPX = '50%';
		}
		
		onpC.show().height(onpC.height()).height(heightPX);
		onpUserC.show().height(onpUserC.height()).height(heightPX);
		ebidC.show().height(ebidC.height()).height(heightPX);
		carpoolC.show().height(carpoolC.height()).height(heightPX);
		onpT.show().width('25%');
		onpUserT.show().width('25%');
		ebidT.show().width('25%');
		carpoolT.show().width('25%');
		
		setTimeout(function(){
			onpC.width(widPerc);
			onpUserC.width(widPerc);
			ebidC.width(widPerc);
			carpoolC.width(widPerc);
		}, 250);
		setTimeout(function(){
			onpT.animate({opacity: 1}, 500);
			onpUserT.animate({opacity: 1}, 500);
			ebidT.animate({opacity: 1}, 500);
			carpoolT.animate({opacity: 1}, 500);
			portfolioClickedToggle(false);
			setTimeout(function(){
				isClickable = true;
			}, 500);
		}, 1250);
	}
}

function portfolioClickedToggle(show){
	var onp = $('#onp');
	var onpUser = $('#onpuser');
	var ebid = $('#ebid');
	var carpool = $('#carpool');
	if(show){
		onp.removeClass('animate-onp');
		onpUser.removeClass('animate-onpuser');
		ebid.removeClass('animate-ebid');
		carpool.removeClass('animate-carpool');
		onp.addClass('onpClicked');
		onpUser.addClass('onpuserClicked');
		ebid.addClass('ebidClicked');
		carpool.addClass('carpoolClicked');
	}
	else{
		onp.removeClass('onpClicked');
		onpUser.removeClass('onpuserClicked');
		ebid.removeClass('ebidClicked');
		carpool.removeClass('carpoolClicked');
		if(window.innerWidth > 768){
			onp.addClass('animate-onp');
			onpUser.addClass('animate-onpuser');
			ebid.addClass('animate-ebid');
			carpool.addClass('animate-carpool');
		}
	}
}

$(window).scroll(function(){
	if(window.innerWidth > 768){
		if(!positionAboutMe){
			aboutMeCardPositions();
		}
		if(positionAboutMe && !positionPortfolio){
			portfolioCardPostions();
		}
		if(positionAboutMe && positionPortfolio && !positionSkills){
			skillsCardPostions();
		}
	}
	else{
		positionAboutMe = true;
		positionPortfolio = true;
		positionSkills = true;
		
	}
});

window.onresize = function(){
	var windowWid = window.innerWidth;
	setTimeout(function(){
		setHeaderMargins(windowWid);
	}, 100);
	setTimeout(function(){
		setHeightsEven();
	}, 100);
	setTimeout(function(){
		setElementPositions();
	}, 100);
	setTimeout(function(){
		rowsInPortfolio();
	}, 100);
	return false;
}

$('#portfolio-table').on('click', 'td', function(e){
	workClicked(this);
});

$('#closeportfolio').click(function(){
	closePortfolio();
});

$('#aboutmebtn').click(function(){
	$('body').animate({scrollTop: document.getElementById('blur').offsetHeight-50}, 1500);
	return false;
});
$('#portfoliobtn').click(function(){
	$('body').animate({scrollTop: (document.getElementById('blur').offsetHeight + document.getElementById('aboutme').offsetHeight-50)}, 2250);
	return false;
});
$('#skillsbtn').click(function(){
	$('body').animate({scrollTop: (document.getElementById('blur').offsetHeight + document.getElementById('aboutme').offsetHeight + portfolio.offsetHeight-50)}, 3000);
	return false;
});