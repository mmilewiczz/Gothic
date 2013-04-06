var menu = {
	glowne: true,
	opcje: false,
	wczytaj: false,
	nowa: false,
	wielo: false,
	interfejs: false,

}

var postac = {};

var canvas,
canvas2,
ctx2,
ctx,
mousePos = {x:null,y:null};

function czas(){
	var czas = new Date;
	if (czas.getHours()<10) ctx.fillText("0",200,200);
	ctx.fillText(czas.getHours()+":",220,200);
	if (czas.getMinutes()<10) ctx.fillText("0",230,200);
	ctx.fillText(czas.getMinutes()+":",250,200);
	if (czas.getSeconds()<10) ctx.fillText("0",260,200);
	ctx.fillText(czas.getSeconds(),280,200);
	
	
	if (czas.getDate()<10) ctx.fillText("0",200,250);
	ctx.fillText(czas.getDate()+".",213,250);
	if ((czas.getMonth()+1)<10) ctx.fillText("0",231,250);
	ctx.fillText((czas.getMonth()+1)+"."+czas.getFullYear(),246,250);	
	
}




function wyswietlanieMenu(){
	
	ctx.clearRect(0, 0, 800, 600);
	
	if(menu.glowne == true && !menu.opcje && !menu.wczytaj && !menu.nowa){
		ctx.fillStyle = "black";
		ctx.font = "25px Segoe UI";
		ctx.fillText("Nowa Gra",340,100);
		ctx.fillText("Wczytaj Grę",330,135);
		ctx.fillText("Gra Wieloosobowa",290,170);
		ctx.fillText("Opcje",360,205);
		ctx.strokeStyle = "black";
		ctx.strokeRect(335,75,120,30);
		ctx.strokeRect(325,110,140,30);
		ctx.strokeRect(285,145,220,30);
		ctx.strokeRect(355,180,75,30);
	}
	if(menu.opcje == true && !menu.wczytaj && !menu.nowa && !menu.glowne){
		ctx.fillText("Język:",340,100);
		ctx.fillText("Muzyka:",340,200);
	}
	if(menu.wczytaj == true && !menu.opcje && !menu.glowne && !menu.nowa){
		ctx.fillText("Wczytaj grę",340,100);
	}
	if(menu.nowa == true && !menu.opcje && !menu.glowne && !menu.wczytaj){
		ctx.fillText("Nowy Obóz",340,100);
		ctx.fillText("Stary Obóz",340,150);
		ctx.fillText("Sekta",340,200);
	}
	if(menu.interfejs == true && !menu.opcje && !menu.glowne && !menu.wczytaj && !menu.nowa){
		ctx.strokeRect(0,0,800,600);	
		ctx.strokeRect(0,0,600,450);
		ctx.strokeRect(600,0,200,200);
		ctx.strokeRect(600,200,200,50);
		ctx.strokeRect(600,250,150,50);
		ctx.strokeRect(600,300,200,100);
		ctx.strokeRect(750,250,50,50);
		ctx.strokeRect(0,450,600,150);
		ctx.strokeRect(0,450,600,25);
	}
	
}

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
		if (mouseX >355 && mouseY >180 && mouseX <430 && mouseY <210 && menu.glowne == true){
			menu.glowne = false;
			menu.opcje = true;
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
		
	}
	
	function mousemove(evt) {
		var top = 0;
		var left = 0;
		
		var mouseX = evt.pageX;
		var mouseY = evt.pageY; 
		mousePos.x = mouseX;
		mousePos.y = mouseY;
		
		
	}
	
	function myUp(){
		
	}
	canvas2.onmousemove = mousemove;
	canvas2.onmousedown = myDown; 
	canvas2.onmouseup = myUp; 
}

function odswiezanie() {
	setInterval(function() {
			ctx2.clearRect(0, 0, 800, 600);
			opisy();
	}, 25);
} 

function opisy(){
	if(mousePos.x >335 && mousePos.y >75 && mousePos.x <455 && mousePos.y <105 && menu.nowa == true && !menu.opcje && !menu.glowne && !menu.wczytaj){
		ctx2.strokeRect(mousePos.x+20,mousePos.y-20,300,200);
		ctx2.font = "25px Segoe UI";
		ctx2.fillText(obozy[0].opis,mousePos.x+40,mousePos.y);
	}
	if(mousePos.x >325 && mousePos.y >125 && mousePos.x <465 && mousePos.y <155 && menu.nowa == true && !menu.opcje && !menu.glowne && !menu.wczytaj){
		ctx2.strokeRect(mousePos.x+20,mousePos.y-20,300,200);
		ctx2.font = "25px Segoe UI";
		ctx2.fillText(obozy[1].opis,mousePos.x+40,mousePos.y);
	}
	if(mousePos.x >285 && mousePos.y >175 && mousePos.x <505 && mousePos.y <205 && menu.nowa == true && !menu.opcje && !menu.glowne && !menu.wczytaj){
		ctx2.strokeRect(mousePos.x+20,mousePos.y-20,300,200);	
		ctx2.font = "25px Segoe UI";
		ctx2.fillText(obozy[2].opis,mousePos.x+40,mousePos.y);
	}
	
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



