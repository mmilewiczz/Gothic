var menu = {
	glowne: true,
	opcje: false,
	opcjeGra: false,
	muzyka:false,
	wczytaj: false,
	nowa: false,
	wielo: false,
	interfejs: false,
	bg: true,
	statystyki:false,
	ekwipunek:false,
	osiagniecia:false,
	konsola:false,
	clicked:false,
	przewijanie: false,
	muzykaGra: false,
	sklep:false,
	kosz:false,
	
}
var poziomyArr = [ ];
var postac = {};

var canvas,
pkosz = 0,
sto = 70,
skala,
predkoscPrzewijaniaMapy = 1,
tempX = 500, 
tempX2 = 700,
tempY2 = 100,
tempX3 = 0,
tempX4 = 305,
on = false,
stopnioweRysowanie = 0,
stopnioweRysowanie1 = 0,
konsolaWpisywanie = [""],
clicked,
canvas2,
ctx2,
obozIndex,
ctx,
musicOn = false,
mousePos = {x:null,y:null};
/* var bg = new Image(0,0);
bg.src = 'img/bg.jpg'; */
sprite = new Image(500,1000);
sprite.src = 'img/sprite.png';
mapa = new Image(1000,1000);
mapa.src = 'img/mapa.png';
bgs = new Image(2000,2000);
bgs.src = 'img/bg.png';



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
		clicked = true;
		var pALength = przedmiotyArr.length;
		if(mouseX >429 && mouseY >175 && mouseX <531 && mouseY <205 && !menu.glowne && menu.opcje && !menu.statystyki && !menu.ekwipunek){
			tempX = mousePos.x; 
			clicked = true;
		}
		
		if(mouseX >= 235 && mouseY >=85 && mouseX <=335 && mouseY <=105 &&  !menu.glowne && menu.muzykaGra ){
			tempX4 = mousePos.x; 
			clicked = true;
		}
		
		if(mouseX >600 && mouseY >0 && mouseX <800 && mouseY <200 && !menu.glowne && menu.interfejs &&!menu.ekwipunek && !menu.statystyki && !menu.opcjeGra && !menu.osiagniecia && !menu.dziennik && !menu.czary){
			tempX2 = mousePos.x;
			tempY2 = mousePos.y;
			clicked = true;
		}
		if(menu.ekwipunek){
			for(i = 0; i < pALength; i++){
				var p = przedmiotyArr[i];
				if(p){
					if(mouseX >= 215 && mouseX <= 240 && mouseY >= 45 + i * 25 && mouseY <= 65 + i * 25){
						ctx2.drawImage(sprite,400, 740, 50, 50, 215, 45 + i * 25, 25, 25);
					}
				}
			}
		}
		if(mouseX >= 330 && mouseY >=250 && mouseX <=360 && mouseY <=280){
			menu.kosz = false;
			przedmiotyArr.splice(pKosz,1)
		}
		if(mouseX >= 240 && mouseY >=250 && mouseX <=270 && mouseY <=280){
			menu.kosz = false;	
		}
	}

	function mousemove(evt) {
		var top = 0;
		var left = 0;
		
		var mouseX = evt.pageX;
		var mouseY = evt.pageY; 
		mousePos.x = mouseX;
		mousePos.y = mouseY;
		if( checkMousePos(429, 175, 531, 205) && !menu.glowne && menu.opcje && clicked &&!menu.ekwipunek && !menu.statystyki && !menu.opcjeGra && !menu.osiagniecia && !menu.dziennik && !menu.czary){
			tempX = mousePos.x; 
		}
		if(mouseX >600 && mouseY >0 && mouseX <800 && mouseY <200 && !menu.glowne && menu.interfejs && clicked &&!menu.ekwipunek && !menu.statystyki && !menu.opcjeGra && !menu.osiagniecia && !menu.dziennik && !menu.czary){
			tempX2 = mousePos.x;
			tempY2 = mousePos.y;
		}
		if(mouseX >=235 && mouseY >=85 && mouseX<=335 && mouseY <=105 &&  !menu.glowne && menu.muzykaGra && clicked){
			tempX4 = mousePos.x; 
		}
		
	}
	
	function myUp(evt){
		var top = 0;
		var left = 0;
		
		var mouseX = evt.pageX;
		var mouseY = evt.pageY; 
		mousePos.x = mouseX;
		mousePos.y = mouseY;
		clicked = false;
		var pLength = przedmiotyZalozone.length,
		pALength = przedmiotyArr.length,
		added = false;
		if(menu.ekwipunek ){
			
			for(i = 0; i < pALength; i++){
				var p = przedmiotyArr[i];	
				if(mouseX >= 215 && mouseX <= 240 && mouseY >= 45 + i * 25 && mouseY <= 65 + i * 25){
					var eq = przedmiotyArr.splice(i,1);
					for(j = 0; j < pLength && !added;j++){
						var pz = przedmiotyZalozone[j];
						if(pz && eq[0].typ == pz.typ){
							var eq1 = przedmiotyZalozone.splice(j,1);
							eq[0].zalozony = true;
							eq1[0].zalozony = false;
							przedmiotyZalozone.push(eq[0]);
							przedmiotyArr.push(eq1[0]);
							added = true;
						}
					}
					if(!added) {	
						eq[0].zalozony = true;
						przedmiotyZalozone.push(eq[0]);
					}
				}
				if(mouseX >= 240 && mouseX <= 265 && mouseY >= 45 + i * 25 && mouseY <= 65 + i * 25 && !menu.kosz){
					menu.kosz = true;
					pKosz = i;
				}
			}
			for(i = 0; i <= pLength; i++){
				var pz = przedmiotyZalozone[i];
				
				if(pz){
					if(mousePos.x > 500 && mousePos.x < 525 && mousePos.y > 45 + i * 25 && mousePos.y < 65 + i * 25){
						var eq = przedmiotyZalozone.splice(i,1);
						eq[0].zalozony = false;
						przedmiotyArr.push(eq[0]);
					}
				}
			}
		}
		if (checkMousePos(335, 275, 455, 305) && menu.glowne){
			menu.glowne = false;
			menu.nowa = true;
			wyswietlanieMenu();
		}else if (mouseX >335 && mouseY >275 && mouseX <415 && mouseY <305 && !menu.glowne && menu.nowa){
			menu.glowne = true;
			menu.nowa = false;
			wyswietlanieMenu();
		}
		if(mouseX >335 && mouseY >75 && mouseX <455 && mouseY <105 && menu.nowa && !menu.opcje && !menu.glowne && !menu.wczytaj ){
			postac = obozy[0].cechy;
			poziomy();
			obliczanieMaxHp();
			obliczanieMaxMp();
			menu.nowa = false;
			menu.interfejs = true;
			menu.bg = false;
			wyswietlanieMenu();
			konsola("M - On/Off Muzyka");
			konsola("Enjoy it !");
			konsola("Witaj w Gothic ! : )");
			
		}
		if(mouseX >335 && mouseY >125 && mouseX <455 && mouseY <155 && menu.nowa && !menu.opcje && !menu.glowne && !menu.wczytaj ){
			postac = obozy[1].cechy;
			poziomy();
			obliczanieMaxHp();
			obliczanieMaxMp();
			menu.nowa = false;
			menu.interfejs = true;
			menu.bg = false;
			wyswietlanieMenu();
			konsola("M - On/Off Muzyka");
			konsola("Enjoy it !");
			konsola("Witaj w Gothic ! : )");
		}
		if(mouseX >335 && mouseY >175 && mouseX <455 && mouseY <205 && menu.nowa && !menu.opcje && !menu.glowne && !menu.wczytaj ){
			postac = obozy[2].cechy;
			poziomy();
			obliczanieMaxHp();
			obliczanieMaxMp();
			menu.nowa = false;
			menu.interfejs = true;
			menu.bg = false;
			wyswietlanieMenu();
			konsola("M - On/Off Muzyka");
			konsola("Enjoy it !");
			konsola("Witaj w Gothic ! : )");
		}
		if (mouseX >325 && mouseY >310 && mouseX <465 && mouseY <340 && menu.glowne){
			menu.glowne = false;
			menu.wczytaj = true;
			wyswietlanieMenu();
		}
		if (mouseX >285 && mouseY >345 && mouseX <505 && mouseY <375 && menu.glowne){
			menu.glowne = false;
			menu.wielo = true;
			wyswietlanieMenu();
		}
		if (mouseX >355 && mouseY >380 && mouseX <430 && mouseY <410 && menu.glowne){
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
		if(mouseX >30 && mouseY >140 && mouseX <200 && mouseY <150 && !menu.glowne && menu.opcjeGra && !menu.muzykaGra){
			menu.przewijanie = false;
			menu.muzykaGra = true;
			wyswietlanieMenu();
		}
		if(mouseX >30 && mouseY >85 && mouseX <200 && mouseY <125 && !menu.glowne && menu.opcjeGra && !menu.przewijanie){
			menu.muzykaGra = false;
			menu.przewijanie = true;
			wyswietlanieMenu();
		}
		if(mouseX >600 && mouseY >300 && mouseX <650 && mouseY <350 && !menu.glowne && menu.interfejs && !menu.ekwipunek && !menu.statystyki && !menu.opcjeGra && !menu.osiagniecia && !menu.czary && !menu.dziennik && !menu.czary && !menu.dziennik){
			menu.clicked = true;
			menu.ekwipunek = true;
			wyswietlanieMenu();
		}else if(mouseX >600 && mouseY >300 && mouseX <650 && mouseY <350 && !menu.glowne && menu.interfejs && menu.ekwipunek && !menu.statystyki){
			wyswietlanieMenu();
			menu.ekwipunek = false;
			menu.clicked = false;
		}
		if(mouseX >650 && mouseY >300 && mouseX <700&& mouseY <350 && !menu.glowne && menu.interfejs && !menu.statystyki && !menu.ekwipunek && !menu.opcjeGra && !menu.osiagniecia && !menu.czary && !menu.dziennik){
			menu.statystyki = true;
			menu.clicked = true;
			wyswietlanieMenu();
		}else if(mouseX >650 && mouseY >300 && mouseX <700 && mouseY <350 && !menu.glowne && menu.interfejs && menu.statystyki && !menu.ekwipunek){
			wyswietlanieMenu();
			menu.statystyki = false;
			menu.clicked = false;
		}
		if(mouseX > 700 && mouseX < 750 && mouseY > 300 && mouseY < 350 && menu.interfejs && !menu.statystyki && !menu.ekwipunek && !menu.czary && !menu.opcjeGra && !menu.osiagniecia && !menu.czary && !menu.dziennik){
			menu.czary = true;
			menu.clicked = true;
			wyswietlanieMenu();
		}else if(mouseX > 700 && mouseX < 750 && mouseY > 300 && mouseY < 350 && menu.interfejs && !menu.statystyki && !menu.ekwipunek){
			wyswietlanieMenu();
			menu.czary = false;
			menu.clicked = false;
		}
		if(mouseX > 750 && mouseX < 800 && mouseY > 300 && mouseY < 350 && menu.interfejs && !menu.statystyki && !menu.ekwipunek && !menu.dziennik && !menu.opcjeGra && !menu.osiagniecia && !menu.czary && !menu.dziennik){
			menu.dziennik = true;
			menu.clicked = true;
			wyswietlanieMenu();
		}else if(mouseX > 750 && mouseX < 800 && mouseY > 300 && mouseY < 350 && menu.interfejs && !menu.statystyki && !menu.ekwipunek){
			wyswietlanieMenu();
			menu.dziennik = false;
			menu.clicked = false;
		}
		if(mouseX > 600 && mouseX < 650 && mouseY > 350 && mouseY < 400 && menu.interfejs && !menu.statystyki && !menu.ekwipunek  && !menu.opcjeGra && !menu.osiagniecia && !menu.czary && !menu.dziennik){
			menu.osiagniecia = true;
			menu.clicked = true;
			wyswietlanieMenu();
		}else if(mouseX > 600 && mouseX < 650 && mouseY > 350 && mouseY < 400 && menu.interfejs && !menu.statystyki && !menu.ekwipunek){
			wyswietlanieMenu();
			menu.osiagniecia = false;
			menu.clicked = false;
		}
		if(mouseX > 650 && mouseX < 700 && mouseY > 350 && mouseY < 400 && menu.interfejs && !menu.statystyki && !menu.ekwipunek && !menu.opcjeGra && !menu.osiagniecia && !menu.czary && !menu.dziennik){
			menu.opcjeGra = true;
			menu.clicked = true;
			wyswietlanieMenu();
		}else if(mouseX > 650 && mouseX < 700 && mouseY > 350 && mouseY < 400 && menu.interfejs && !menu.statystyki && !menu.ekwipunek){
			wyswietlanieMenu();
			menu.opcjeGra = false;
			menu.clicked = false;
		}
		if(mouseX > 230 && mouseX < 255 && mouseY > 80 && mouseY < 105 && menu.interfejs && !menu.ekwipunek && menu.opcjeGra && menu.przewijanie && predkoscPrzewijaniaMapy != 0){
			predkoscPrzewijaniaMapy = 0;
		}
		if(mouseX > 270 && mouseX < 295 && mouseY > 80 && mouseY < 105 && menu.interfejs && !menu.ekwipunek && menu.opcjeGra && menu.przewijanie && predkoscPrzewijaniaMapy != 1){
			predkoscPrzewijaniaMapy = 1;
		}
		if(mouseX > 310 && mouseX < 335 && mouseY > 80 && mouseY < 105 && menu.interfejs && !menu.ekwipunek && menu.opcjeGra && menu.przewijanie && predkoscPrzewijaniaMapy != 3){
			predkoscPrzewijaniaMapy = 3;
		}
		if(mouseX > 350 && mouseX < 375 && mouseY > 80 && mouseY < 105 && menu.interfejs && !menu.ekwipunek && menu.opcjeGra && menu.przewijanie && predkoscPrzewijaniaMapy != 6){
			predkoscPrzewijaniaMapy = 6;
		}
		
		
		
	}
	canvas2.onmousemove = mousemove;
	canvas2.onmousedown = myDown; 
	canvas2.onmouseup = myUp; 
}


function zapisStanuGry(){
	
	localStorage.setItem('arraySave', JSON.stringify({
			zMenu: menu,
			zPostsac: postac,
	}));
	
}

function wczytanieStanuGry(){
	load = JSON.parse(localStorage.getItem('arraySave'))
	menu = load.zMenu;
	postac = load.zPostac;	
}

function pisanie(literka){
	console.log(literka);
	//konsolaWpisywanie[0].join()+literka;
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

function poziomy(){
	for(var i=1;i<51;i++){
		poziomyArr.push(Math.round(Math.pow(i+1.12,3)));	
		//console.log(Math.round(Math.pow(i+1.12,3)));
	}
}

function nastepnyPoziom(){
	if(poziomyArr[postac[0].poziom] <= postac[0].doswiadczenie){
		postac[0].doswiadczenie = 0;
		postac[0].poziom++;	
		maxHp = maxHp + postac[0].poziomHp;
		maxMp = maxMp + postac[0].poziomMp;
		postac[0].hp = postac[0].hp + 8 +postac[0].poziom;
		postac[0].mp = postac[0].mp + 3 +postac[0].poziom;
		sprawdzanieZycia();
	}
}

function sprawdzanieZycia(){
	if(maxHp < postac[0].hp){
		postac[0].hp = maxHp;
	}
	if(maxMp < postac[0].mp){
		postac[0].mp = maxMp;	
	}
}





