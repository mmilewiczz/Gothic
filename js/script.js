var menu = {
	glowne: true,
	opcje: false,
	opcjeGra: false,
	wczytaj: false,
	nowa: false,
	wielo: false,
	interfejs: false,
	bg: true,
	statystyki:false,
	ekwipunek:false,
	osiagniecia:false,
	

}

var postac = {};

var canvas,
skala,
tempX = 500, 
tempX2 = 700,
tempY2 = 100,
tempX3 = 0,
on = false,
stopnioweRysowanie = 0,
stopnioweRysowanie1 = 0,
konsolaWpisywanie = [ ],
clicked,
canvas2,
ctx2,
obozIndex,
ctx,
musicOn = false,
mousePos = {x:null,y:null};
var bg = new Image(0,0);
bg.src = 'img/bg.jpg';
sprite = new Image(500,1000);
sprite.src = 'img/sprite.png';
mapa = new Image(1000,1000);
mapa.src = 'img/mapa.png';


audio0 = new Audio('mp3/gothic0.mp3');  

activeAudio = audio0;

audio0.addEventListener('ended', function() {
		activeAudio = audio0;
		activeAudio.currentTime = 0;
		activeAudio.play();
}, false);    

  

function LetsBegin(){ 
	canvas = document.getElementById('example');
	canvas1 = document.getElementById('example2');
	canvas2 = document.getElementById('example1');
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
	}
	if (canvas2.getContext) {
		ctx2 = canvas2.getContext('2d');
	}
	if (canvas1.getContext) {
		ctx1 = canvas1.getContext('2d');
	}
	
	wyswietlanieMenu();
	odswiezanie();
	odswiezanie1();
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
		if (mouseX >335 && mouseY >75 && mouseX <455 && mouseY <105 && menu.glowne){
			menu.glowne = false;
			menu.nowa = true;
			wyswietlanieMenu();
		}else if(mouseX >335 && mouseY >75 && mouseX <455 && mouseY <105 && menu.nowa && !menu.opcje && !menu.glowne && !menu.wczytaj ){
			 postac = obozy[0].cechy;
			 obliczanieMaxHp();
			 obliczanieMaxMp();
			 menu.nowa = false;
			 menu.interfejs = true;
			 menu.bg = false;
			 wyswietlanieMenu();

		}
		if(mouseX >335 && mouseY >125 && mouseX <455 && mouseY <155 && menu.nowa && !menu.opcje && !menu.glowne && !menu.wczytaj ){
			 postac = obozy[1].cechy;
			 obliczanieMaxHp();
			 obliczanieMaxMp();
			 menu.nowa = false;
			 menu.interfejs = true;
			 menu.bg = false;
			 wyswietlanieMenu();
		}
		if(mouseX >335 && mouseY >175 && mouseX <455 && mouseY <205 && menu.nowa && !menu.opcje && !menu.glowne && !menu.wczytaj ){
			 postac = obozy[2].cechy;
			 obliczanieMaxHp();
			 obliczanieMaxMp();
			 menu.nowa = false;
			 menu.interfejs = true;
			 menu.bg = false;
			 wyswietlanieMenu();
		}
		if (mouseX >325 && mouseY >110 && mouseX <465 && mouseY <140 && menu.glowne){
			menu.glowne = false;
			menu.wczytaj = true;
			wyswietlanieMenu();
		}
		if (mouseX >285 && mouseY >145 && mouseX <505 && mouseY <175 && menu.glowne){
			menu.glowne = false;
			menu.wielo = true;
			wyswietlanieMenu();
		}
		if (mouseX >355 && mouseY >180 && mouseX <430 && mouseY <210 && menu.glowne){
			menu.glowne = false;
			menu.opcje = true;
			wyswietlanieMenu();
		}
		if (mouseX >335 && mouseY >275 && mouseX <415 && mouseY <305 && !menu.glowne && menu.opcje){
			menu.glowne = true;
			menu.opcje = false;
			wyswietlanieMenu();
		}
		if (mouseX >335 && mouseY >275 && mouseX <415 && mouseY <305 && !menu.glowne && menu.wielo){
			menu.glowne = true;
			menu.wielo = false;
			wyswietlanieMenu();
		}
		if (mouseX >335 && mouseY >275 && mouseX <415 && mouseY <305 && !menu.glowne && menu.wczytaj){
			menu.glowne = true;
			menu.wczytaj = false;
			wyswietlanieMenu();
		}
		if (mouseX >335 && mouseY >275 && mouseX <415 && mouseY <305 && !menu.glowne && menu.nowa){
			menu.glowne = true;
			menu.nowa = false;
			wyswietlanieMenu();
		}
		if(mouseX >325 && mouseY >125 && mouseX <465 && mouseY <155 && menu.nowa && !menu.opcje && !menu.glowne && !menu.wczytaj){
			postac = obozy[1].cechy;
			menu.nowa = false;
			menu.interfejs = true;
			wyswietlanieMenu();
		}
		if(mouseX >285 && mouseY >175 && mouseX <505 && mouseY <205 && menu.nowa && !menu.opcje && !menu.glowne && !menu.wczytaj){
			postac = obozy[2].cechy;
			menu.nowa = false;
			menu.interfejs = true;
			wyswietlanieMenu();
		}
		if(mouseX >429 && mouseY >175 && mouseX <531 && mouseY <205 && !menu.glowne && menu.opcje && !menu.statystyki && !menu.ekwipunek){
			tempX = mousePos.x; 
			tempY = mousePos.y;
			clicked = true;
		}	
		if(mouseX >600 && mouseY >0 && mouseX <800 && mouseY <200 && !menu.glowne && menu.interfejs && !menu.statystyki && !menu.ekwipunek){
			tempX2 = mousePos.x;
			tempY2 = mousePos.y;
			clicked = true;
		}
		if(mouseX >600 && mouseY >300 && mouseX <650 && mouseY <350 && !menu.glowne && menu.interfejs && !menu.ekwipunek && !menu.statystyki && !menu.opcjeGra && !menu.osiagniecia && !menu.czary && !menu.dziennik && !menu.czary && !menu.dziennik){
			menu.clicked = true;
			menu.ekwipunek = true;
			wyswietlanieMenu();
		}else if(mouseX >600 && mouseY >300 && mouseX <650 && mouseY <350 && !menu.glowne && menu.interfejs && menu.ekwipunek && !menu.statystyki){
			menu.ekwipunek = false;
			menu.clicked = false;
			wyswietlanieMenu();
		}
		if(mouseX >650 && mouseY >300 && mouseX <700&& mouseY <350 && !menu.glowne && menu.interfejs && !menu.statystyki && !menu.ekwipunek && !menu.opcjeGra && !menu.osiagniecia && !menu.czary && !menu.dziennik){
			menu.statystyki = true;
			wyswietlanieMenu();
		}else if(mouseX >650 && mouseY >300 && mouseX <700 && mouseY <350 && !menu.glowne && menu.interfejs && menu.statystyki && !menu.ekwipunek){
			menu.statystyki = false;
			wyswietlanieMenu();
		}
		if(mouseX > 700 && mouseX < 750 && mouseY > 300 && mouseY < 350 && menu.interfejs && !menu.statystyki && !menu.ekwipunek && !menu.czary && !menu.opcjeGra && !menu.osiagniecia && !menu.czary && !menu.dziennik){
			menu.czary = true;
			menu.clicked = true;
			wyswietlanieMenu();
		}else if(mouseX > 700 && mouseX < 750 && mouseY > 300 && mouseY < 350 && menu.interfejs && !menu.statystyki && !menu.ekwipunek){
			menu.czary = false;
			menu.clicked = false;
			wyswietlanieMenu();
		}
		if(mouseX > 750 && mouseX < 800 && mouseY > 300 && mouseY < 350 && menu.interfejs && !menu.statystyki && !menu.ekwipunek && !menu.dziennik && !menu.opcjeGra && !menu.osiagniecia && !menu.czary && !menu.dziennik){
			menu.dziennik = true;
			menu.clicked = true;
			wyswietlanieMenu();
		}else if(mouseX > 750 && mouseX < 800 && mouseY > 300 && mouseY < 350 && menu.interfejs && !menu.statystyki && !menu.ekwipunek){
			menu.dziennik = false;
			menu.clicked = false;
			wyswietlanieMenu();
		}
		if(mouseX > 600 && mouseX < 650 && mouseY > 350 && mouseY < 400 && menu.interfejs && !menu.statystyki && !menu.ekwipunek  && !menu.opcjeGra && !menu.osiagniecia && !menu.czary && !menu.dziennik){
			menu.osiagniecia = true;
			menu.clicked = true;
			wyswietlanieMenu();
		}else if(mouseX > 600 && mouseX < 650 && mouseY > 350 && mouseY < 400 && menu.interfejs && !menu.statystyki && !menu.ekwipunek){
			menu.osiagniecia = false;
			menu.clicked = false;
			wyswietlanieMenu();
		}
		if(mouseX > 650 && mouseX < 700 && mouseY > 350 && mouseY < 400 && menu.interfejs && !menu.statystyki && !menu.ekwipunek && !menu.opcjeGra && !menu.osiagniecia && !menu.czary && !menu.dziennik){
			menu.opcjeGra = true;
			menu.clicked = true;
			wyswietlanieMenu();
		}else if(mouseX > 650 && mouseX < 700 && mouseY > 350 && mouseY < 400 && menu.interfejs && !menu.statystyki && !menu.ekwipunek){
			menu.opcjeGra = false;
			menu.clicked = false;
			wyswietlanieMenu();
		}
		
	}
		
	

	
	function mousemove(evt) {
		var top = 0;
		var left = 0;
		
		var mouseX = evt.pageX;
		var mouseY = evt.pageY; 
		mousePos.x = mouseX;
		mousePos.y = mouseY;
		if(mouseX >429 && mouseY >175 && mouseX <531 && mouseY <205 && !menu.glowne && menu.opcje && clicked && !menu.statystyki && !menu.ekwipunek){
			tempX = mousePos.x; 
		}
		if(mouseX >600 && mouseY >0 && mouseX <800 && mouseY <200 && !menu.glowne && menu.interfejs && clicked && !menu.statystyki && !menu.ekwipunek){
			tempX2 = mousePos.x;
			tempY2 = mousePos.y;
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

function pisanie(literka){
	
	w = konsolaWpisywanie.unshift(literka);
	ctx.fillText(konsolaWpisywanie[0],0,500);
	
}

/* var anim = new Image(126,32);
anim.src = 'anim.png'; */

var nr_klatki = 1;
var liczba_klatek_anim = 8;
var szerokosc_klatki = 401/ liczba_klatek_anim;
var wysokosc_klatki = 50;

function draw(){
	
	nr_klatki++;
	if (nr_klatki>liczba_klatek_anim) {
		nr_klatki = 1;
	}
	
	var xklatki = (nr_klatki-1)*szerokosc_klatki;
	ctx1.drawImage(sprite, xklatki, 0, szerokosc_klatki, wysokosc_klatki, 750, 250, szerokosc_klatki, wysokosc_klatki);  
	
}

function odswiezanie1() {
	setInterval(function() {
			ctx1.clearRect(0, 0, 800, 600);
			if(menu.interfejs){
				draw();
			}
	},100);
} 
   



