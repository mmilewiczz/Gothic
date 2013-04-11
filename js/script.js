var menu = {
	glowne: true,
	opcje: false,
	wczytaj: false,
	nowa: false,
	wielo: false,
	interfejs: false,
	bg: true,

}

var postac = {};

var canvas,
tempX = 500, 
clicked,
canvas2,
ctx2,
ctx,
musicOn = true,
mousePos = {x:null,y:null};
var bg = new Image(0,0);
bg.src = 'img/bg.jpg';


audio0 = new Audio('mp3/gothic0.mp3');  

activeAudio = audio0;

audio0.addEventListener('ended', function() {
		activeAudio = audio0;
		activeAudio.currentTime = 0;
		activeAudio.play();
}, false);    

  

function LetsBegin(){ 
	canvas = document.getElementById('example');
	canvas2 = document.getElementById('example1');
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
	}
	if (canvas2.getContext) {
		ctx2 = canvas2.getContext('2d');
	}
	
	wyswietlanieMenu();
	odswiezanie();
	musicControl();
	function myDown(evt){
		var obj = canvas2;
		var top = 0;
		var left = 0;
		while (obj.tagName != 'BODY') {
			top += obj.offsetTop;
			left += obj.offsetLeft;
			obj = obj.offsetParent;
		}
		
		var mouseX = evt.clientX - left + window.pageXOffset; 
		var mouseY = evt.clientY - top + window.pageYOffset; 
		
		if (mouseX >335 && mouseY >75 && mouseX <455 && mouseY <105 && menu.glowne == true){
			menu.glowne = false;
			menu.nowa = true;
			wyswietlanieMenu();
		}else if(mouseX >335 && mouseY >75 && mouseX <455 && mouseY <105 && menu.nowa == true && !menu.opcje && !menu.glowne && !menu.wczytaj ){
			 postac = obozy[0].cechy;
			 menu.nowa = false;
			 menu.interfejs = true;
			 menu.bg = false;
			 wyswietlanieMenu();
		}
		if (mouseX >325 && mouseY >110 && mouseX <465 && mouseY <140 && menu.glowne == true){
			menu.glowne = false;
			menu.wczytaj = true;
			wyswietlanieMenu();
		}
		if (mouseX >285 && mouseY >145 && mouseX <505 && mouseY <175 && menu.glowne == true){
			menu.glowne = false;
			menu.wielo = true;
			wyswietlanieMenu();
		}
		if (mouseX >355 && mouseY >180 && mouseX <430 && mouseY <210 && menu.glowne== true){
			menu.glowne = false;
			menu.opcje = true;
			wyswietlanieMenu();
		}
		if (mouseX >335 && mouseY >275 && mouseX <415 && mouseY <305 && !menu.glowne && menu.opcje == true){
			menu.glowne = true;
			menu.opcje = false;
			wyswietlanieMenu();
		}
		if (mouseX >335 && mouseY >275 && mouseX <415 && mouseY <305 && !menu.glowne && menu.wielo == true){
			menu.glowne = true;
			menu.wielo = false;
			wyswietlanieMenu();
		}
		if (mouseX >335 && mouseY >275 && mouseX <415 && mouseY <305 && !menu.glowne && menu.wczytaj == true){
			menu.glowne = true;
			menu.wczytaj = false;
			wyswietlanieMenu();
		}
		if (mouseX >335 && mouseY >275 && mouseX <415 && mouseY <305 && !menu.glowne && menu.nowa == true){
			menu.glowne = true;
			menu.nowa = false;
			wyswietlanieMenu();
		}
		if(mouseX >325 && mouseY >125 && mouseX <465 && mouseY <155 && menu.nowa == true && !menu.opcje && !menu.glowne && !menu.wczytaj){
			postac = obozy[1].cechy;
			menu.nowa = false;
			menu.interfejs = true;
			wyswietlanieMenu();
		}
		if(mouseX >285 && mouseY >175 && mouseX <505 && mouseY <205 && menu.nowa == true && !menu.opcje && !menu.glowne && !menu.wczytaj){
			postac = obozy[2].cechy;
			menu.nowa = false;
			menu.interfejs = true;
			wyswietlanieMenu();
		}
		if(mouseX >429 && mouseY >175 && mouseX <531 && mouseY <205 && !menu.glowne && menu.opcje == true){
			tempX = mousePos.x; 
			tempY = mousePos.y;
			clicked = true;
		}		
	}
	
	function mousemove(evt) {
		var top = 0;
		var left = 0;
		
		var mouseX = evt.pageX;
		var mouseY = evt.pageY; 
		mousePos.x = mouseX;
		mousePos.y = mouseY;
		if(mouseX >429 && mouseY >175 && mouseX <531 && mouseY <205 && !menu.glowne && menu.opcje == true &&clicked == true){
			tempX = mousePos.x; 
		}
		
		
	}
	
	function myUp(){
		clicked = false;
	}
	canvas2.onmousemove = mousemove;
	canvas2.onmousedown = myDown; 
	canvas2.onmouseup = myUp; 
}

function zapisStanuGry(){
	
	localStorage.setItem('arraySave', JSON.stringify({
			zMenu: menu,
			zPostac: postac,
	}));
	
}

function wczytanieStanuGry(){
	load = JSON.parse(localStorage.getItem('arraySave'))
	menu = load.zMenu;
	postac = load.zPostac;	
}
   



