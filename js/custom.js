var preG1 = new Image();
preG1.src = 'https://crkukla1993.github.io/imgs/g1.jpg';
var preG2 = new Image();
preG2.src = 'https://crkukla1993.github.io/imgs/g2.jpg';
var preG3 = new Image();
preG3.src = 'https://crkukla1993.github.io/imgs/g3.jpg';
var preG4 = new Image();
preG4.src = 'https://crkukla1993.github.io/imgs/g4.jpg';

var isClickable = true;
var workSelected = false;
var positionPortfolio = false;
var positionSkills = false;

var body = document.body;
var aboutMe = document.getElementById('aboutmetitle');
var aboutMeText = document.getElementById('aboutmetext');
var portfolio = document.getElementById('portfoliotitle');
var portfolioTable = document.getElementById('portfolio-table');
var portfolioTableJQ = $('#portfolio-table');
var skills = document.getElementById('skillstitle');
var skillsText = document.getElementById('skillstext');

var onpCell = $('#onp-cell');
var onpUserCell = $('#onpuser-cell');
var ebidCell = $('#ebid-cell');
var carpoolCell = $('#carpool-cell');
var downArrow = $('#downarrow');

var background = $('#blur');
var headerDiv = $('#header-div');

var headerTitle = $('#header-title');
var docWidth = $(window).width(), docHeight = $(window).height();

var plArr;
var largest;
var bounced;

var profilePic = document.getElementById('profilepic');
var downloadingImage = new Image();
downloadingImage.onload = function(){
    profilePic.src = this.src;
	displayContent();
	setHeightsEven();
	if(!isMobileWidth()){
		if(aboutMeCardPositions()){
			if(portfolioCardPostions()){
				skillsCardPostions();
			}
		}
	}
	else{
		animateGraphs();
	}
	setElementPositions();
	body.scrollTop = 0;
};
downloadingImage.src = 'https://crkukla1993.github.io/imgs/me.jpg';

function aboutMeCardPositions(){
	var papa = headerDiv.height();
	var amt = aboutMe.scrollHeight;
	var pgt = body.scrollTop;
	if(pgt < amt){
		var percent = pgt/amt;
		var wid0 = aboutMe.offsetWidth;
		var wid1 = aboutMeText.offsetWidth;
		var amount0 = ((wid0 * percent) - wid0) + 'px';
		var amount1 = ((wid1 * percent) - wid1) + 'px';
		aboutMe.style.left = amount0;
		aboutMeText.style.right = amount1;
		positionPortfolio = false;
	}
	else{
		aboutMe.style.left = 0;
		aboutMeText.style.right = 0;
		positionPortfolio = true;
	}
	
	return positionPortfolio;
}

function portfolioCardPostions(){
	var onp = $('#onp');
	var onpUser = $('#onpuser');
	var ebid = $('#ebid');
	var carpool = $('#carpool');
	var pt = aboutMe.scrollHeight + portfolio.offsetHeight;
	var pgt = body.scrollTop;
	if(pgt < pt){
		var percent = pgt/pt;
		var wid = portfolio.offsetWidth;
		var amount = (((wid * percent) - wid)*2) + 'px';
		portfolio.style.right = amount;
		if(document.getElementsByClassName('onpClicked').length < 1){
			onp.addClass('onpClicked');
			onpUser.addClass('onpuserClicked');
			ebid.addClass('ebidClicked');
			carpool.addClass('carpoolClicked');
		}
		positionSkills = false;
		isClickable = false;
	}
	else{
		if(document.getElementsByClassName('onpClicked').length > 0 && !workSelected){
			onp.removeClass('onpClicked');
			onpUser.removeClass('onpuserClicked');
			ebid.removeClass('ebidClicked');
			carpool.removeClass('carpoolClicked');
		}
		portfolio.style.right = 0;
		isClickable = true;
		positionSkills = true;
	}
	
	return positionSkills;
}

function skillsCardPostions(){
	var st = aboutMe.scrollHeight + portfolio.offsetHeight + skillstitle.offsetHeight;
	var stxt = aboutMe.scrollHeight + portfolio.offsetHeight + skillstext.offsetHeight;
	var pgt = body.scrollTop;
	
	if(pgt < stxt){
		var percentH = pgt/stxt;
		var hei = skillsText.offsetHeight;
		var amountH = ((-1*((hei * percentH) - hei))*2) + 'px';
		skillsText.style.top = amountH;
		if(amountH !== '0px'){
			setTimeout(function(){shrinkGraphs();}, 250);
		}
	}
	else{
		skillsText.style.top = 0;
		setTimeout(function(){animateGraphs();}, 250);
	}
	
	if(pgt < st){
		var percentW = pgt/st;
		var wid = skills.offsetWidth;
		var amountW = ((((wid * percentW) - wid))*3) + 'px';
		skills.style.left = amountW;
	}
	else{
		skills.style.left = 0;
	}
	
	return false;
}

function animateGraphs(){
	for(var i = 0; i < plArr.length; i++){
		plArr[i].style.visibility = 'visible';
	}
	for(i = 0; i < plArr.length; i++){
		var n = ((parseFloat(plArr[i].children[0].innerHTML)/largest)*100) + '%';
		plArr[i].style.width = n;
		plArr[i].children[0].style.visibility = 'visible';
	}
}

function shrinkGraphs(){
	for(var i = 0; i < plArr.length; i++){
		plArr[i].style.width = 0;
	}
	$(plArr).bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
		function(){
			if(this.style.width === '0px'){
				this.children[0].style.visibility = 'hidden';
				this.style.visibility = 'hidden';
			}
		});
	
}

function setHeightsEven(){
	var amth;
	var amtxth;
	var sth;
	var stxth;
	amth = aboutMe.scrollHeight;
	amtxth = aboutMeText.scrollHeight;
	sth = skills.scrollHeight;
	stxth = skillsText.scrollHeight;
	
	if(!isMobileWidth()){		
		if(amth < amtxth){
			aboutMe.style.height = amtxth + 'px';
		}
		else{
			aboutMeText.style.height = amth + 'px';
		}
		
		if(sth < stxth){
			skills.style.height = stxth + 'px';
		}
		else{
			skillsText.style.height = sth + 'px';
		}
	}
}

function isMobileWidth(){
	var isMobile = false;
	var tablehtml = portfolioTable.innerHTML;
	var count = (tablehtml.match(/<tr>/g) || []).length;
	var index;
	if(window.innerWidth < 768){
		/*if(!workSelected){
			onpCell.addClass('portfolio-cell-mobile');
			onpUserCell.addClass('portfolio-cell-mobile');
			ebidCell.addClass('portfolio-cell-mobile');
			carpoolCell.addClass('portfolio-cell-mobile');
		}*/
		
		if(count < 2){
			index = tablehtml.indexOf('<td id="ebid-cell"');
			tablehtml = [tablehtml.slice(0, index), '</tr><tr>', tablehtml.slice(index)].join('');
			portfolioTable.innerHTML = tablehtml;
		}
		downArrow.addClass('downarrow-mobile');
		isMobile = true;
	}
	else{
		/*onpCell.removeClass('portfolio-cell-mobile');
		onpUserCell.removeClass('portfolio-cell-mobile');
		ebidCell.removeClass('portfolio-cell-mobile');
		carpoolCell.removeClass('portfolio-cell-mobile');*/
		if(count === 2){
			index = tablehtml.indexOf('</tr><tr>');
			tablehtml = [tablehtml.slice(0, index), '', tablehtml.slice(index+9)].join('');
			portfolioTable.innerHTML = tablehtml;
		}
		downArrow.removeClass('downarrow-mobile');
	}
	return isMobile;
}

function displayContent(){
	var content = document.getElementById('content-div');
	content.style.display = 'inline';
}

function closePortfolio(){
	if(isClickable){
		var onp = $('#onp');
		var onpUser = $('#onpuser');
		var ebid = $('#ebid');
		var carpool = $('#carpool');
		var onpC = $('#onp-cell');
		var onpUserC = $('#onpuser-cell');
		var ebidC = $('#ebid-cell');
		var carpoolC = $('#carpool-cell');
		var onpT = $('#onp-title');
		var onpUserT = $('#onpuser-title');
		var ebidT = $('#ebid-title');
		var carpoolT = $('#carpool-title');
		var widPerc = '25%';
		var heightPX = '521px';
		
		document.getElementById('closeportfolio').style.display = 'none';
		
		workSelected = false;
		isClickable = false;
		
		if(window.innerWidth < 768){
			widPerc = '50%';
			heightPX = '245px';
		}
		
		onpC.show().height(onpCell.height()).height(heightPX);
		onpUserC.show().height(onpUserCell.height()).height(heightPX);
		ebidC.show().height(ebidCell.height()).height(heightPX);
		carpoolC.show().height(carpoolCell.height()).height(heightPX);
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
			onp.removeClass('onpClicked');
			onpUser.removeClass('onpuserClicked');
			ebid.removeClass('ebidClicked');
			carpool.removeClass('carpoolClicked');
			setTimeout(function(){
				isClickable = true;
			}, 500);
		}, 1250);
	}
}

function workClicked(e){
	var onp = $('#onp');
	var onpUser = $('#onpuser');
	var ebid = $('#ebid');
	var carpool = $('#carpool');
	var onpC = $('#onp-cell');
	var onpUserC = $('#onpuser-cell');
	var ebidC = $('#ebid-cell');
	var carpoolC = $('#carpool-cell');
	var onpT = $('#onp-title');
	var onpUserT = $('#onpuser-title');
	var ebidT = $('#ebid-title');
	var carpoolT = $('#carpool-title');
	
	if(e.id === 'onp-cell' && isClickable){
		workSelected = true;
		isClickable = false;
		onp.addClass('onpClicked');
		onpUser.addClass('onpuserClicked');
		ebid.addClass('ebidClicked');
		carpool.addClass('carpoolClicked');
		setTimeout(function(){
			onpC.width('100%');
			onpC.height('245px');
			onpC.height('521px');
			onpUserC.height('0').width('0');
			ebidC.height('0').width('0');
			carpoolC.height('0').width('0');
			onpUserT.width('0').animate({opacity: 0}, 500);
			ebidT.width('0').animate({opacity: 0}, 500);
			carpoolT.width('0').animate({opacity: 0}, 500);
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
		onp.addClass('onpClicked');
		onpUser.addClass('onpuserClicked');
		ebid.addClass('ebidClicked');
		carpool.addClass('carpoolClicked');
		setTimeout(function(){
			onpUserC.width('100%');
			onpUserC.height('245px');
			onpUserC.height('521px');
			onpC.height('0').width('0');
			ebidC.height('0').width('0');
			carpoolC.height('0').width('0');
			onpT.width('0').animate({opacity: 0}, 500);
			ebidT.width('0').animate({opacity: 0}, 500);
			carpoolT.width('0').animate({opacity: 0}, 500);
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
		onp.addClass('onpClicked');
		onpUser.addClass('onpuserClicked');
		ebid.addClass('ebidClicked');
		carpool.addClass('carpoolClicked');
		setTimeout(function(){
			ebidC.width('100%');
			ebidC.height('245px');
			ebidC.height('521px');
			onpC.height('0').width('0');
			onpUserC.height('0').width('0');
			carpoolC.height('0').width('0');
			onpT.width('0').animate({opacity: 0}, 500);
			onpUserT.width('0').animate({opacity: 0}, 500);
			carpoolT.width('0').animate({opacity: 0}, 500);
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
	else if (isClickable){
		workSelected = true;
		isClickable = false;
		onp.addClass('onpClicked');
		onpUser.addClass('onpuserClicked');
		ebid.addClass('ebidClicked');
		carpool.addClass('carpoolClicked');
		setTimeout(function(){
			carpoolC.width('100%');
			carpoolC.height('245px');
			carpoolC.height('521px');
			onpC.height('0').width('0');
			onpUserC.height('0').width('0');
			ebidC.height('0').width('0');
			onpT.width('0').animate({opacity: 0}, 500);
			onpUserT.width('0').animate({opacity: 0}, 500);
			ebidT.width('0').animate({opacity: 0}, 500);
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

function setElementPositions(){
	var a = document.getElementById('aboutme');
	var p = document.getElementById('portfolio');
	var s = document.getElementById('skills');
	var ah = document.getElementById('aboutmetitle').scrollHeight;
	var ah2 = document.getElementById('aboutmetext').scrollHeight;
	var ph = document.getElementById('portfoliotitle').scrollHeight;
	var sh = document.getElementById('skillstitle').scrollHeight;
	var sh2 = document.getElementById('skillstext').scrollHeight;
	if(window.innerWidth < 768){
		aboutMe.removeAttribute("style");
		aboutMeText.removeAttribute("style");
		portfolio.removeAttribute("style");
		skillsText.removeAttribute("style");
		skillstitle.removeAttribute("style");
		s.removeAttribute("style");
		a.removeAttribute("style");
		s.removeAttribute("style");
	}
	else{
		aboutMeText.style.top = 0;
		portfolio.style.top = 0;
		skillsText.style.top = 0;
		s.style.top = 0;
		a.style.height = ah + 'px';
		p.style.height = ph + 'px';
		s.style.height = sh + 'px';
	}
}


$(document).ready(function(){
	var header = document.getElementById('blur');
	var h = $(window).height();
	var w = $(window).width();
	document.getElementById('wh').innerHTML = 'width: ' + window.innerWidth + ' height: ' + window.innerHeight + '\nScrollTop: ' +  body.scrollTop + ' SkillTop: ';
	var b = $(body);
	document.addEventListener('wheel', function(){
		b.stop();
	}, {passive: true});
	
	if(h < 480){
		h = 480;
	}
	
	var htmp;
	var windowWid = window.innerWidth;
	if(windowWid < 768){
		htmp = h*0.2;
	}
	else{
		htmp = h*0.3;
	}
	
	if(windowWid < 435){
		$('.s1').css('display', 'block');
	}
	else if(windowWid < 480){
		$('.s1').css('margin', '0 0.05em');
	}
	else if(windowWid < 525){
		$('.s1').css('margin', '0 0.25em');
		
	}
	else{
		$('.s1').css('margin', '0 1em');
		$('.s1').css('display', 'inline');
	}
	
	headerTitle.animate({opacity: 'show'}, {queue: false, duration: 1500})
	.animate({marginTop: htmp}, {duration: 750, complete: function(){
		$('#p1.s1')
		.css({opacity: 0.0, visibility: "visible", marginTop: '-1%'}).animate({opacity: 1}, 
		{queue: false, duration: 500, complete: function(){
			$('#p2.s1')
			.css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, 
			{queue: false, duration: 500, complete: function(){
				$('#p3.s1')
				.css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, 
				{queue: false, duration: 500, complete: function(){
					$('#navbar-custom')
					.animate({opacity: 'show'}, {queue: false, duration: 1500})
					.animate({marginTop: '0%'}, {duration: 750});
				}});
			}});
		}});
	}});
	
	plArr = document.getElementById('skills-table').getElementsByClassName('pl-div');
	largest = 0;
	for(var i = 0; i < plArr.length; i++){
		if(parseFloat(plArr[i].children[0].innerHTML) > largest){
			largest = parseFloat(plArr[i].children[0].innerHTML);
		}
	}
	for(i = 0; i < plArr.length; i++){
		var p = plArr[i].children[0].innerHTML;
		plArr[i].children[0].innerHTML = p.replace(' Years', '').replace(' Year', ''); 
		if(parseFloat(plArr[i].children[0].innerHTML) === 1){
			plArr[i].children[0].innerHTML += ' Year';
		}
		else{
			plArr[i].children[0].innerHTML += ' Years';
		}
	}
	
	background.width(w);
	background.height(h);
	headerDiv.width(w);
	headerDiv.height(h);
	
	var t;
	if(!isMobileWidth()){
		var bounced = false;
		t = setTimeout(function(){
			if(downArrow.css("opacity") !== '0' && !bounced){
				downArrow.effect('bounce', {times: 3}, 500);
				bounced = true;
			}
		}, 4000);
	}
	/*if(!isMobileWidth()){
		if(aboutMeCardPositions()){
			if(portfolioCardPostions()){
				skillsCardPostions();
			}
		}
	}
	else{
		animateGraphs();
	}
	setElementPositions();*/
	return false;
});

$(window).resize(function(){
	if($(window).width() != docWidth || $(window).height() != docHeight){
		document.getElementById('wh').innerHTML = 'width: ' + window.innerWidth + ' height: ' + window.innerHeight;	
		var bt = body.scrollTop;
		var stt = Math.abs(skills.offsetTop - bt);
		var ptt = Math.abs(portfolio.offsetTop - bt);
		var amtt = Math.abs(aboutMe.offsetTop - bt);
		var h = $(window).height();
		var w = $(window).width();
		
		aboutMe.style.height = 'auto';
		aboutMeText.style.height = 'auto';
		portfolio.style.height = 'auto';
		skills.style.height = 'auto';
		skillsText.style.height = 'auto';
		setHeightsEven();
		
		if(h < 480){
			h = 480;
		}
		
		var htmp;
		var windowWid = window.innerWidth;
		if(windowWid < 768){
			htmp = h*0.2;
		}
		else{
			htmp = h*0.3;
		}
		
		if(windowWid < 435){
			$('.s1').css('display', 'block');
		}
		else if(windowWid < 480){
			$('.s1').css('margin', '0 0.05em');
		}
		else if(windowWid < 525){
			$('.s1').css('margin', '0 0.25em');
			
		}
		else{
			$('.s1').css('margin', '0 1em');
			$('.s1').css('display', 'inline');
		}
		
		headerTitle.css('marginTop', htmp);
		background.width(w);
		background.height(h);
		headerDiv.width(w);
		headerDiv.height(h);
		
		/*if(window.innerWidth >= 768){	
			if(stt < ptt){
				body.scrollTop = skills.offsetTop;
			}
			else if(ptt < amtt && ptt < stt){
				body.scrollTop = portfolio.offsetTop;
			}
			else if(amtt < bt){
				body.scrollTop = aboutMe.offsetTop;
			}
			else{
				body.scrollTop = 0;
			}
		}*/
		closePortfolio();
		
		if(!isMobileWidth()){
			if(aboutMeCardPositions()){
				if(portfolioCardPostions()){
					skillsCardPostions();
				}
			}
		}
		else{
			animateGraphs();
		}
		setElementPositions();
	}
	return false;
});
	
$(window).scroll(function(){
	if(body.scrollTop !== 0){
	document.getElementById('wh').innerHTML = 'width: ' + window.innerWidth + ' height: ' + window.innerHeight;
		if(!isMobileWidth()){
			if(aboutMeCardPositions()){
				if(portfolioCardPostions()){
					skillsCardPostions();
				}
			}
			
			var t;
			if(body.scrollTop === 0){
				downArrow.animate({opacity: 1}, {queue: false, duration: 300});
			
				t = setTimeout(function(){
					var a = downArrow.css("opacity");
					if(a !== '0' && !bounced){
						downArrow.effect('bounce', {times: 3}, 500);
						bounced = true;
					}
				}, 5000);
			}
			else{
				if(t !== null){
					clearTimeout(t);
				}
				bounced = false;
				downArrow.animate({opacity: 0}, {queue: false, duration: 300});
			}
		}
	}
});

portfolioTableJQ.on('mouseenter', 'td', function(e){
	if(e.currentTarget.id === 'onp-cell'){
		document.getElementById('onp-desc').style.display = 'inline';
	}
	else if(e.currentTarget.id === 'onpuser-cell'){
		document.getElementById('onpuser-desc').style.display = 'inline';
	}
	else if(e.currentTarget.id === 'ebid-cell'){
		document.getElementById('ebid-desc').style.display = 'inline';
	}
	else if(e.currentTarget.id === 'carpool-cell'){
		document.getElementById('carpool-desc').style.display = 'inline';
	}
});

portfolioTableJQ.on('mouseleave', 'td', function(e){
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

portfolioTableJQ.on('click', 'td', function(e){
	workClicked(this);
});

$('#closeportfolio').click(function(){
	closePortfolio();
});

$('#aboutmebtn').click(function(){
	$(body).animate({scrollTop: document.getElementById('blur').offsetHeight}, 1500);
	return false;
});
$('#portfoliobtn').click(function(){
	$(body).animate({scrollTop: (document.getElementById('blur').offsetHeight + document.getElementById('aboutme').offsetHeight)}, 2250);
	return false;
});
$('#skillsbtn').click(function(){
	$(body).animate({scrollTop: (document.getElementById('blur').offsetHeight + document.getElementById('aboutme').offsetHeight + portfolio.offsetHeight)}, 3000);
	return false;
});