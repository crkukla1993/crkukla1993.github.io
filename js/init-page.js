var profilePic = document.getElementById('profilepic');
var downloadingImage = new Image();
var aboutMe = document.getElementById('aboutmetitle');
var aboutMeText = document.getElementById('aboutmetext');
var portfolio = document.getElementById('portfoliotitle');
var skills = document.getElementById('skillstitle');
var skillsText = document.getElementById('skillstext');
var abw;
var abh;
var abtw;
var abth;
var pw;
var ph;
var sw;
var sh;
var stw;
var sth;
downloadingImage.onload = function(){
	$('body').animate({scrollTop: 0}, 10);
	var inWid = window.innerWidth;
	var pHei = window.innerHeight * 0.85;
	document.getElementById('portfolio-table').style.height = pHei + 'px';
    profilePic.src = this.src;
	displayContent();
	setHeightsEven();
	abw = aboutMe.offsetWidth;
	abh = aboutMe.offsetHeight;
	abtw = aboutMeText.offsetWidth;
	abth = aboutMeText.offsetHeight;
	pw = portfolio.offsetWidth;
	ph = portfolio.offsetHeight;
	sw = skills.offsetWidth;
	sh = skills.offsetHeight;
	stw = skillsText.offsetWidth;
	sth = skillsText.offsetHeight;
	setElementPositions();
	if(inWid < 768){
		animateGraphs();
	}
	rowsInPortfolio();
	initLoad = true;
};
downloadingImage.src = 'https://crkukla1993.github.io/imgs/me.jpg';

function displayContent(){
	var content = document.getElementById('content-div');
	content.style.display = 'inline';
}

function setHeightsEven(){
	aboutMe.style.height = 'auto';
	aboutMeText.style.height = 'auto';
	portfolio.style.height = 'auto';
	skills.style.height = 'auto';
	skillsText.style.height = 'auto';
	var abw = aboutMe.offsetWidth;
	var tabh = aboutMe.offsetHeight;
	var tabth = aboutMeText.offsetHeight;
	var tsh = skills.offsetHeight;
	var tsth = skillsText.offsetHeight;
	if(tabh < tabth){
		aboutMe.style.height = tabth + 'px';
	}
	else{
		aboutMeText.style.height = tabh + 'px';
	}
	
	if(tsh < tsth){
		skills.style.height = tsth + 'px';
	}
	else{
		skillsText.style.height = tsh + 'px';
	}
}

function setElementPositions(){
	var a = document.getElementById('aboutme');
	var p = document.getElementById('portfolio');
	var s = document.getElementById('skills');
	var ah = document.getElementById('aboutmetitle').offsetHeight;
	var ph = document.getElementById('portfoliotitle').offsetHeight;
	var sh = document.getElementById('skillstitle').offsetHeight;
	var sh2 = document.getElementById('skillstext').offsetHeight;
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
		s.style.top = 0;
		a.style.height = ah + 'px';
		p.style.height = ph + 'px';
		s.style.height = sh + 'px';
	}
}

function setHeaderMargins(windowWid){
	var s1 = $('.s1');
	if(windowWid < 435){
		s1.css('display', 'block');
	}
	else if(windowWid < 480){
		s1.css('margin', '0 0.05em');
	}
	else if(windowWid < 525){
		s1.css('margin', '0 0.25em');
		
	}
	else{
		s1.css('margin', '0 1em');
		s1.css('display', 'inline');
	}
}

function animateHeader(h, windowWid){
	var headerTitle = $('#header-title');
	var htmp;
	
	if(windowWid < 768){
		htmp = h*0.2;
	}
	else{
		htmp = h*0.3;
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
}

function animateGraphs(){
	var skt = document.getElementById('skills-table');
	var skball = $('.skill-ball');
	var exTTitle = document.getElementById('ex-table').getElementsByTagName('span')[0];
	var softTTitle = document.getElementById('soft-table').getElementsByTagName('span')[0];
	var plArr = skt.getElementsByClassName('pl-div');
	var tArr = skt.getElementsByTagName('span');
	var largest = 0;
	for(var i = 0; i < plArr.length; i++){
		if(parseFloat(plArr[i].children[0].innerHTML) > largest){
			largest = parseFloat(plArr[i].children[0].innerHTML);
		}
	}
	tArr[0].style.opacity = '1';
	setTimeout(function(){
		for(var i = 1; i < tArr.length; i++){
			tArr[i].style.opacity = '1';

		}
		setTimeout(function(){
			for(var i = 0; i < plArr.length; i++){
				var n = ((parseFloat(plArr[i].children[0].innerHTML)/largest)*100) + '%';
				plArr[i].style.opacity = '1';
				plArr[i].style.width = n;
				plArr[i].children[0].style.opacity = '1';
			}
			
			setTimeout(function(){
				exTTitle.style.opacity = 1;
				setTimeout(function(){
					setTimeout(function(){
						softTTitle.style.opacity = 1;
					}, 800);
					skball.each(function(index){
						var ball = this;
						setTimeout(function(){
							if(index % 2 === 0){
								$(ball).addClass('rotateInL');
							}
							else{
								$(ball).addClass('rotateInR');
							}
						}, 200*index);
					});
				}, 200);
			}, 750);
		}, 500);
	}, 500);
}

function rowsInPortfolio(){
	var tablehtml = portfolioTable.innerHTML;
	var count = (tablehtml.match(/<tr>/g) || []).length;
	var index;
	var wid = window.innerWidth;
	var hei = window.innerHeight;
	if(wid < 768){
		if(count < 2){
			index = tablehtml.indexOf('<td id="ebid-cell"');
			tablehtml = [tablehtml.slice(0, index), '</tr><tr>', tablehtml.slice(index)].join('');
			portfolioTable.innerHTML = tablehtml;
		}
		isMobile = true;
	}
	else{
		if(count === 2){
			index = tablehtml.indexOf('</tr><tr>');
			tablehtml = [tablehtml.slice(0, index), '', tablehtml.slice(index+9)].join('');
			portfolioTable.innerHTML = tablehtml;
		}
	}
	closePortfolio();
}

$(document).ready(function(){
	var background = $('#blur');
	var headerDiv = $('#header-div');
	var h = $(window).height();
	var windowWid = window.innerWidth;
	if(h < 480){
		h = 480;
	}
	background.height(h);
	headerDiv.height(h);
	
	setHeaderMargins(windowWid);
	animateHeader(h, windowWid);
	return false;
});