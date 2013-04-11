function printAtWordWrap(context ,text ,x ,y ,lineHeight ,fitWidth )
{
	fitWidth = fitWidth || 0;
	
	if (fitWidth <= 0)
	{
		
		
		context.fillText( text, x, y );
		return;
	}
	var words = text.split(' ');
	var currentLine = 0;
	var idx = 1;
	while (words.length > 0 && idx <= words.length)
	{
		var str = words.slice(0,idx).join(' ');
		var w = context.measureText(str).width;
		if ( w > fitWidth )
		{
			if (idx==1)
			{
				idx=2;
			}
			
			context.fillText( words.slice(0,idx-1).join(' '), x, y + (lineHeight*currentLine) );
			currentLine++;
			words = words.splice(idx-1);
			idx = 1;
		}
		else
			{idx++;}
	}
	if  (idx > 0){
		
		context.fillText( words.join(' '), x, y + (lineHeight*currentLine) );
	}
}


function opis(x,y,tresc){
	ctx2.font = "10px Segoe UI";
	ctx2.fillStyle = "rgb(255, 0, 0)"; 	
	printAtWordWrap(ctx2, tresc, x, y, 10, 270 );
}

function opisy(){
	if(mousePos.x >335 && mousePos.y >75 && mousePos.x <455 && mousePos.y <105 && menu.nowa == true && !menu.opcje && !menu.glowne && !menu.wczytaj){
		ctx2.fillStyle = "rgb(240, 240, 240)"; 
		ctx2.fillRect(mousePos.x+20,mousePos.y-20,300,250);
		opis(mousePos.x+35,mousePos.y,obozy[0].opis);
		ctx2.fillText('Statystyki : ',mousePos.x+35,mousePos.y+120);
		ctx2.fillText('Życie : '+obozy[0].cechy[0].hp,mousePos.x+35,mousePos.y+130);
		ctx2.fillText('Mana : '+obozy[0].cechy[0].mp,mousePos.x+35,mousePos.y+140);
		ctx2.fillText('Siła : '+obozy[0].cechy[0].sila,mousePos.x+35,mousePos.y+150);
		ctx2.fillText('Zręczność : '+obozy[0].cechy[0].zrecznosc,mousePos.x+35,mousePos.y+160);
	}
	if(mousePos.x >325 && mousePos.y >125 && mousePos.x <465 && mousePos.y <155 && menu.nowa == true && !menu.opcje && !menu.glowne && !menu.wczytaj){
		ctx2.fillStyle = "rgb(240, 240, 240)"; 
		ctx2.fillRect(mousePos.x+20,mousePos.y-20,300,250);
		opis(mousePos.x+35,mousePos.y,obozy[1].opis);
		ctx2.fillText('Statystyki : ',mousePos.x+35,mousePos.y+150);
		ctx2.fillText('Życie : '+obozy[1].cechy[0].hp,mousePos.x+35,mousePos.y+160);
		ctx2.fillText('Mana : '+obozy[1].cechy[0].mp,mousePos.x+35,mousePos.y+170);
		ctx2.fillText('Siła : '+obozy[1].cechy[0].sila,mousePos.x+35,mousePos.y+180);
		ctx2.fillText('Zręczność : '+obozy[1].cechy[0].zrecznosc,mousePos.x+35,mousePos.y+190);
		
	}
	if(mousePos.x >285 && mousePos.y >175 && mousePos.x <505 && mousePos.y <205 && menu.nowa == true && !menu.opcje && !menu.glowne && !menu.wczytaj){
		ctx2.fillStyle = "rgb(240, 240, 240)"; 
		ctx2.fillRect(mousePos.x+20,mousePos.y-20,300,250);	
		opis(mousePos.x+35,mousePos.y,obozy[2].opis);
		ctx2.fillText('Statystyki : ',mousePos.x+35,mousePos.y+150);
		ctx2.fillText('Życie : '+obozy[2].cechy[0].hp,mousePos.x+35,mousePos.y+160);
		ctx2.fillText('Mana : '+obozy[2].cechy[0].mp,mousePos.x+35,mousePos.y+170);
		ctx2.fillText('Siła : '+obozy[2].cechy[0].sila,mousePos.x+35,mousePos.y+180);
		ctx2.fillText('Zręczność : '+obozy[2].cechy[0].zrecznosc,mousePos.x+35,mousePos.y+190);
	}
	
}


function odswiezanie() {
	setInterval(function() {
			ctx2.clearRect(0, 0, 800, 600);
			opisy();
			muzyka();
	}, 25);
} 

function muzyka(){
	if(menu.opcje == true && !menu.wczytaj && !menu.nowa && !menu.glowne){
		ctx2.fillStyle = "black";
		var sto = tempX-430;
		if(sto <= 0){
			activeAudio.volume = 0;
			ctx2.fillRect(430,175,0,30);
		}else if(sto <= 100){
			ctx2.fillRect(430,175,sto,30);
			activeAudio.volume = sto/100;
		}else if(sto >= 100){
			ctx2.fillRect(430,175,100,30);
			activeAudio.volume = 1;
		}
		ctx2.fillStyle = "white";
		ctx2.fillText(sto+'%',470,190);
		
	}	
	
}


function musicControl() {
	
	if(musicOn){
		activeAudio.play();
		musicOn = false;
	}else if(!musicOn){
		activeAudio.pause();
		musicOn = true;
	}
}

$(document).ready(function() {
		$(window).bind("keydown", function(oEvent){ 
				if(oEvent.keyCode == 77){
					musicControl();
				}
		});
});

function wyswietlanieMenu(){
	
	ctx.clearRect(0, 0, 800, 600);

	if(menu.bg){
		ctx.drawImage(bg,0,0,800,600) ;
	}

	if(menu.glowne == true && !menu.opcje && !menu.wczytaj && !menu.nowa){
		ctx.fillStyle = "White";
		ctx.font = "25px Segoe UI";
		ctx.fillText("Nowa Gra",340,100);
		ctx.fillText("Wczytaj Grę",330,135);
		ctx.fillText("Gra Wieloosobowa",290,170);
		ctx.fillText("Opcje",360,205);
		ctx.strokeStyle = "grey";
		ctx.strokeRect(335,75,120,30);
		ctx.strokeRect(325,110,140,30);
		ctx.strokeRect(285,145,220,30);
		ctx.strokeRect(355,180,75,30);
	}
	if(menu.opcje == true && !menu.wczytaj && !menu.nowa && !menu.glowne){
		ctx.fillText("Język:",340,100);
		ctx.fillText("Muzyka:",340,200);
		ctx.fillText("Powrót",340,300);
		ctx.strokeRect(335,275,90,30);
		ctx.strokeRect(429,175,101,30);
	}
	if(menu.wczytaj == true && !menu.opcje && !menu.glowne && !menu.nowa){
		ctx.fillText("Powrót",340,300);
		ctx.strokeRect(335,275,90,30);
	}
	if(menu.nowa == true && !menu.opcje && !menu.glowne && !menu.wczytaj){
		ctx.fillText("Nowy Obóz",340,100);
		ctx.fillText("Stary Obóz",340,150);
		ctx.fillText("Sekta",340,200);
		ctx.fillText("Powrót",340,300);
		ctx.strokeRect(335,275,90,30);
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
	if(menu.wielo == true && !menu.opcje && !menu.glowne && !menu.wczytaj && !menu.nowa && !menu.interfejs){
		ctx.fillText("Coming soon ^^",300,200);
		ctx.fillText("Powrót",340,300);
		ctx.strokeRect(335,275,90,30);
	}

	
}


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


