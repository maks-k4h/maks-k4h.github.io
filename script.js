drawField();
function drawField() {
	field = document.getElementById('field');
	for (var i = 225; i >= 0; i--) {
		field.innerHTML += "<div id='pixel" + (225-i) + "'></div>"
	}
}


//------------------------------------------ МАЛЮВАННЯ ПОЛЯ ----------------------------------------------------------------

function draw(direction){

	//--------------------------------------Вліво----------------------------------------------------------------
	if (direction == 'l'){
		let res = false;
		//----------------------------------Перевіряємо, чи елемент на краю-------------------------------------------------
		for (var i = 1; i <=225; i=i+15) {
			if (playerPos+1 == i){
				res = true; 
			}
		}

		if (res == true){
			playerPos+=14;
		}
		else{
			playerPos--;
		}
	}


	//-----------------------------------Вправо---------------------------------------------------------------------------------------
	else if (direction == 'r'){
		let res = false;
		//----------------------------------Перевіряємо, чи елемент на краю-------------------------------------------------
		for (var i = 14; i <=225; i=i+15) {
			if (playerPos == i){
				res = true; 
			}
		}

		if (res == true){
			playerPos-=14;
		}
		else{
			playerPos++;
		}
	}


	//---------------------------------------Вверх----------------------------------------------------------------------------
	else if (direction == 'u'){
		let res = false;
		//----------------------------------Перевіряємо, чи елемент на краю-------------------------------------------------
		
		if ((playerPos - 15) <0){
			res = true; 
		}
		
		

		if (res == true){
			playerPos+=210;
		}
		else{
			playerPos-=15;
		}
	}
	//-----------------------------------------Вниз----------------------------------------------------------------
	 else if (direction == 'd'){
		let res = false;
		//----------------------------------Перевіряємо, чи елемент на краю-------------------------------------------------
		for (var i = 210; i <=225; i++) {
			if (playerPos == i){
				res = true; 
			}
		}

		if (res == true){
			playerPos-=210;
		}
		else{
			playerPos+=15;
		}
	}

	if (playerPos != hero){
		for (var i = player.length - 1; i >= 0; i--) {
			if (playerPos == player[i]){
				i = -1;
				gameOver(playerPos);
			}
		}
		document.getElementById('pixel' + player[0]).style.backgroundColor = '#B0B0B0';
		player.splice(0,1);

		
	}
	else{
		randomHero();
		out.innerHTML = '00' + (player.length+1);
	}
	
	player.push(playerPos);
	playerhead = document.getElementById('pixel' + playerPos);
	playerhead.style.backgroundColor = '#5AEC82';
}

// ----------------------------------------- СТАРТОВІ ПАРАМЕТРИ-------------------------------------------------------------
let playerPos = 112;
let player = [112];
let playerhead = document.getElementById('pixel' + playerPos);
playerhead.style.backgroundColor = '#5AEC82';
d = 'l';
let game = true;
out = document.getElementById('score');


randomHero();
function randomHero(){
	hero = Math.floor(Math.random()*225);
	for (var i = player.length - 1; i >= 0; i--) {
		if (hero == player[i]){
                        i = player.length - 1;
                        if(hero < 224){
                          hero++;
                         
                        } else{
                          hero = 0;
                        }
			
		}
	}
	console.log(hero);
	document.getElementById('pixel' + hero).style.backgroundColor = 'white';
}




//------------------------------------------------------------------------------------------------------------------------------
gameFrame();
function gameFrame(){
	timer = setTimeout(function (){
		draw(d);
		if (game == true){
			gameFrame();
		}
	}, 300);
}
function left(){
	d = "l";
}
function right(){
	d = "r";
}
function up(){
	d = "u";
}
function down(){
	d = "d";
}

function gameOver(){
	game = false;
	alert('Game over! Your csore - ' + (player.length));
}


