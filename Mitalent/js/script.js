
/*---------------------------------------------------intro-slider-------------------------------------------------*/

let isp = 0;
const people 		 	= ['Georgina<br/>Alson', 'Derek<br/>Anderson','Anna<br/>Reeck', 'Klara<br/>Jayson'],
			dir    		 	= ['young model 2020','british comedian','american actor','musicant'];
const pname  		  = document.getElementById('intro-slider-name');	
const direction		= document.getElementById('intro-slider-dir');
const line 				= document.getElementById('intro-slider__line');
const isi 				= document.getElementById('heightControl');			//Inner Slider Information
const isis				= document.getElementById('slider-out-small');  //Inner Slider Information Small
const in1					=	document.getElementById('in1');								
			in2    		  =	document.getElementById('in2');
			in3					=	document.getElementById('in3');
			in4					=	document.getElementById('in4');

function next() {
	text(isp);
	
	line.style.left = -isp * 100 + '%';
	isis.innerHTML = '';
	isis.innerHTML = '0' + (isp + 1) ;
	isi.style.height = isp * 33.3 + '%';

	if(isp == 0){
		in4.style.opacity = .5;
		in1.style.opacity = 1;
	}else if(isp == 1){
		in1.style.opacity = .5;
		in2.style.opacity = 1;
	}else if(isp == 2){
		in2.style.opacity = .5;
		in3.style.opacity = 1;
	} else{
		in3.style.opacity = .5;
		in4.style.opacity = 1;
	}

	if (isp +1> 3){
		isp = 0;
	} else{
		isp++;
	}

	setTimeout( function(){
		next();
	},7000);
}

function text(a){
	direction.style.color = 'rgba(0,0,0,0)';
	pname.style.color = 'rgba(0,0,0,0)';
	setTimeout( function(){
		pname.innerHTML = people[a];
		pname.style.color = 'rgba(0,0,0,1)';
		direction.innerHTML = dir[a];
		direction.style.color = 'rgba(0,0,0,1)';
	},750);
}
next();

/*--------------------------------------------------------FILTER-----------------------------------------------------------*/

const	gridLine = document.getElementById('grid-line'),
			ac       = document.getElementById('ac'),
			mu			 = document.getElementById('mu'),
			co       = document.getElementById('co'),
			mo       = document.getElementById('mo');
			fac      = document.getElementById('filter-actor');
			fmu      = document.getElementById('filter-musicant');
			fco      = document.getElementById('filter-comedian');
			fmo      = document.getElementById('filter-model');
ac.style.background = '#000';
fac.style.color = '#000';
function g1(){
	gridLine.style.left = 0;
	ac.style.background = '#000';
	mo.style.background = '';
	co.style.background = '';
	mu.style.background = '';
	fac.style.color = '#000';
	fmo.style.color = '';
	fco.style.color = '';
	fmu.style.color = '';
}
function g2(){
	gridLine.style.left = -100 + '%';
	ac.style.background = '';
	mo.style.background = '';
	co.style.background = '';
	mu.style.background = '#000';
	fac.style.color = '';
	fmo.style.color = '';
	fco.style.color = '';
	fmu.style.color = '#000';
}
function g3(){
	gridLine.style.left = -200 + '%';
	ac.style.background = '';
	mo.style.background = '';
	co.style.background = '#000';
	mu.style.background = '';
	fac.style.color = '';
	fmo.style.color = '';
	fco.style.color = '#000';
	fmu.style.color = '';
}
function g4(){
	gridLine.style.left = -300 + '%';
	ac.style.background = '';
	mo.style.background = '#000';
	co.style.background = '';
	mu.style.background = '';
	fac.style.color = '';
	fmo.style.color = '#000';
	fco.style.color = '';
	fmu.style.color = '';
}

/*---------------------------------------------------NEW-5-SLIDER-----------------------------------------------------------*/

const 	n5line 		= document.getElementById('new5__slider-line'),
				n5ss1     = document.getElementById('n5ss1'),
				n5ss2     = document.getElementById('n5ss2');
let 		n5step    = 0;
n5();
function n5(){
	n5line.style.left = -n5step * 100 + '%';
	if (n5step == 0) {
		n5ss1.style.height = 3 + 'px';
		n5ss1.style.width = 3 + 'px';
		n5ss2.style.height = 1 + 'px';
		n5ss2.style.width = 1 + 'px';
		n5ss1.style.opacity = 1;
		n5ss2.style.opacity = .5;
		n5step++;
	}  else{
		n5ss2.style.height = 3 + 'px';
		n5ss2.style.width = 3 + 'px';
		n5ss1.style.height = 1 + 'px';
		n5ss1.style.width = 1 + 'px';
		n5ss2.style.opacity = 1;
		n5ss1.style.opacity = .5;
		n5step = 0;
	}
	setTimeout(function(){
		n5();
	},8000);
}

/*---------------------------------------------------------------Menu-burger-------------------------------------------------------*/

(function () {
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
    });
}());