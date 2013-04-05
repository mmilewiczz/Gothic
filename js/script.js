var menu = {
	glowne: true,
	opcje: false,
	wczytaj: false,
	nowa: false,
	wielo: false,
}

var canvas,
canvas2,
ctx2,
ctx,
mousePos = {x:null,y:null};




function wyswietlanieMenu(){

	ctx.clearRect(0, 0, 800, 600);
	
	var bg = new Image();      
	bg.src = 'img/bg.jpg';
	ctx.drawImage(bg,0,0);	
	
	
	
	if(menu.glowne == true && !menu.opcje && !menu.wczytaj && !menu.nowa){
		ctx.fillStyle = "white";
		ctx.font = "25px Segoe UI";
		ctx.fillText("Nowa Gra",340,100);
		ctx.fillText("Wczytaj Grę",330,135);
		ctx.fillText("Gra Wieloosobowa",290,170);
		ctx.fillText("Opcje",360,205);
		ctx.strokeStyle = "white";
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
		ctx.fillText("Nowa Gra",340,100);
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
		if (window.name!="xx") 
	{ 
		window.name="xx"; 
		location.reload(); 
		
	}
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

	}, 25);
} 



