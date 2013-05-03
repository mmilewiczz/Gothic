var konsolaArr = [ ];
var ekwipunekArr = [ ];
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
	printAtWordWrap(ctx2, tresc, x, y, 10, 270 );
}

function opisy(){
	if(menu.nowa){ 
		if (mousePos.x >335 && mousePos.y >75 && mousePos.x <455 && mousePos.y <105 && menu.nowa && !menu.opcje && !menu.glowne && !menu.wczytaj) {
			obozIndex = 0;
		}else if(mousePos.x >325 && mousePos.y >125 && mousePos.x <465 && mousePos.y <155 && menu.nowa && !menu.opcje && !menu.glowne && !menu.wczytaj){
			obozIndex = 1;
		}else if(mousePos.x >285 && mousePos.y >175 && mousePos.x <505 && mousePos.y <205 && menu.nowa && !menu.opcje && !menu.glowne && !menu.wczytaj){ 
			obozIndex = 2;
		}else{
			obozIndex = 3;
		}
		if(obozIndex == 0 || obozIndex == 1 || obozIndex == 2){
			on = true;
			if(stopnioweRysowanie >= 1){
			}else{
				stopnioweRysowanie = stopnioweRysowanie + 0.1;
			} 
			ctx2.fillStyle = "rgba(200,200,200,"+stopnioweRysowanie+")";
			ctx2.fillRect(mousePos.x+20,mousePos.y-20,300,250);
			ctx2.fillStyle = "rgba(0,0,0,"+stopnioweRysowanie+")";
			opis(mousePos.x+35,mousePos.y,obozy[obozIndex].opis);
			ctx2.fillText('Statystyki : ',mousePos.x+35,mousePos.y+150);
			ctx2.fillText('Życie : '+obozy[obozIndex].cechy[0].hp,mousePos.x+35,mousePos.y+160);
			ctx2.fillText('Mana : '+obozy[obozIndex].cechy[0].mp,mousePos.x+35,mousePos.y+170);
			ctx2.fillText('Siła : '+obozy[obozIndex].cechy[0].sila,mousePos.x+35,mousePos.y+180);
			ctx2.fillText('Zręczność : '+obozy[obozIndex].cechy[0].zrecznosc,mousePos.x+35,mousePos.y+190);
			ctx2.fillText('Szybkosc : '+obozy[obozIndex].cechy[0].szybkosc,mousePos.x+35,mousePos.y+200);
			ctx2.fillText('Celnosc : '+obozy[obozIndex].cechy[0].celnosc,mousePos.x+35,mousePos.y+210);
			ctx2.fillText('Inteligencja : '+obozy[obozIndex].cechy[0].inteligencja,mousePos.x+35,mousePos.y+220);
		}else{
			stopnioweRysowanie = 0;
		}
	}
	
	
}


function wyswietlanieEkwipunku(){
	
	
	for(i = 0; i < przedmiotyArr.length; i++){
		var p = przedmiotyArr[i];
		
		ctx.font = "10px Segoe UI"; 
		ctx.fillStyle = "black";
		
		for(var i = 0; i < 11 ; i++){
			if(przedmiotyArr[i]){
				ctx2.fillStyle = "black";
				ctx2.fillText(p.nazwa,10,50 + i * 20);
				ctx2.fillRect(265,40 + i * 20,10,10);
				
				
			}
			if(mousePos.x >265 && mousePos.y >40 + i * 20 && mousePos.x <305 && mousePos.y <50 + i * 20 && menu.ekwipunek ){
				if(stopnioweRysowanie1 >= 1){
				}else{
					stopnioweRysowanie1 = stopnioweRysowanie1 + 0.1;
				} 
				ctx2.fillStyle = "rgba(200,200,200,"+stopnioweRysowanie1+")";
				ctx2.fillRect(mousePos.x+15,mousePos.y+5,250,300);
				ctx2.fillStyle = "rgba(255,255,255,"+stopnioweRysowanie1+")";
				ctx2.fillText("Nazwa : "+p.nazwa,mousePos.x+15,mousePos.y+15);
				ctx2.fillText("Typ : "+p.typ,mousePos.x+15,mousePos.y+30);
				ctx2.fillText("Opis : "+p.opis,mousePos.x+15,mousePos.y+45);
				ctx2.fillText("Cena : "+p.cena+" bryłek rudy",mousePos.x+155,mousePos.y+295);
				ctx2.fillText("Statystyki :",mousePos.x+15,mousePos.y+115);
				ctx2.fillText("Obrażenia : "+p.cechy[0].obrazeniaMin+"d"+p.cechy[0].obrazeniaMax,mousePos.x+15,mousePos.y+135);
			}
		}
		
	}
		
	}



function ekwipunek(){
	for(i = 0; i < przedmiotyArr.length; i++){
		ekwipunekArr.unshift(przedmiotyArr[i].nazwa);
	}
}

function wyswietlanieKonsoli(){
	ctx.font = "15px Segoe UI"; 
	ctx.fillStyle = "black";
	var len = konsolaArr.length;
	if( len > 7 ){
		len--;
		konsolaArr.pop();
	}
	for(var i = 0; i < len ; i++){
		var k = konsolaArr[i];
		ctx.fillText(konsolaArr[i],10,490 + i * 16);
		console.log(k,i);
	}
}


function konsola(text){
	konsolaArr.unshift(text);
	ctx.clearRect(0,479,599,118);
	wyswietlanieKonsoli();
}

function odswiezanie() {
	setInterval(function() {
			ctx2.clearRect(0, 0, 800, 600);
			
			opisy();
			muzyka();
			minimapa();
			interfejsDane();
			ekwipunek();

			if(menu.ekwipunek){
				wyswietlanieEkwipunku();
			}
			if(menu.interfejs){
				ikony();
			}
	}, 25);
} 

function muzyka(){
	if(menu.opcje && !menu.wczytaj && !menu.nowa && !menu.glowne){
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

function minimapa(){
	
	if(!menu.glowne && menu.interfejs){	
		
		sx = tempX2- 600;
		sy = tempY2;
		
		var wysokosc = 57.5;
		var szerokosc = 42.5;
		var polowaW = wysokosc/2;
		var polowaS = szerokosc/2
		
		if(!menu.ekwipunek && !menu.statystyki && !menu.opcjeGra && !menu.osiagniecia && !menu.dziennik && !menu.czary){
			ctx2.fillStyle = "red";
			predkoscPzewijaniaMapy = 5;
/* 			for (var i = 0; i < 23; i++){
				a = (i+1)*25;
				if(a < 450){
					ctx2.strokeRect(25,a, 550,0);
				}
				if(a < 600){
					ctx2.strokeRect(a,25, 0,400);	
				}
			} */
			if(mousePos.y < 25 && mousePos.x < 600){
				tempY2= tempY2 - predkoscPzewijaniaMapy;
			}
			if(mousePos.x < 25 && mousePos.y < 450){
				tempX2= tempX2 - predkoscPzewijaniaMapy;
			}
			if(mousePos.y > 425 && mousePos.y <450 && mousePos.x < 600){
				tempY2= tempY2 + predkoscPzewijaniaMapy;
			}
			if(mousePos.x > 575 && mousePos.x < 600 && mousePos.y < 450){
				tempX2= tempX2 + predkoscPzewijaniaMapy;
			}
			
			ctx2.drawImage(mapa,sx*5-28.75,sy*5-21.25 ,(57.5)*6,(42.5)*6,25,25,550,400);
			
		}
		
		

		
		
		
 		if(tempX2-polowaW > 600 && tempX2+polowaW < 800 && tempY2-polowaS >=0 && tempY2+polowaS <= 200){
			ctx2.strokeRect(tempX2-polowaW,tempY2-polowaS,wysokosc,szerokosc);
		}else if(tempY2-polowaS <= 0 && tempX2-polowaW <= 600){
			ctx2.strokeRect(600,0,wysokosc,szerokosc);
		}else if(tempX2-polowaW <= 600 && tempY2+polowaS >= 200){
			ctx2.strokeRect(600,200-szerokosc,wysokosc,szerokosc);
		}else if(tempX2+polowaW >= 800 && tempY2-polowaS <= 0){
			ctx2.strokeRect(800-wysokosc,0,wysokosc,szerokosc);
		}else if(tempX2+polowaW >=800 && tempY2+polowaS >= 200){
			ctx2.strokeRect(800-wysokosc,200-szerokosc,wysokosc,szerokosc);
		}else if(tempX2-polowaW <= 600){
			ctx2.strokeRect(600,tempY2-polowaS,wysokosc,szerokosc);
		}else if(tempX2+polowaW >= 800){
			ctx2.strokeRect(800-wysokosc,tempY2-polowaS,wysokosc,szerokosc);
		}else if(tempY2-polowaS <= 0){
			ctx2.strokeRect(tempX2-polowaW,0,wysokosc,szerokosc);
		}else if(tempY2+polowaS >= 200){
			ctx2.strokeRect(tempX2-polowaW,200-szerokosc,wysokosc,szerokosc);
		}
	}
}

function ikony(){
	
	if(menu.ekwipunek){
		ctx2.drawImage(sprite,100, 50, 50, 50, 600, 300, 50, 50);
	}else if(mousePos.x > 600 && mousePos.x < 650 && mousePos.y > 300 && mousePos.y < 350){
		ctx2.drawImage(sprite, 50, 50, 50, 50, 600, 300, 50, 50);
	}else{
		ctx2.drawImage(sprite, 0, 50, 50, 50, 600, 300, 50, 50);
	}
	if(menu.statystyki){
		ctx2.drawImage(sprite,100, 150, 50, 50, 650, 300, 50, 50);
	}else if(mousePos.x > 650 && mousePos.x < 700 && mousePos.y > 300 && mousePos.y < 350){
		ctx2.drawImage(sprite, 50, 150, 50, 50, 650, 300, 50, 50);
	}else{
		ctx2.drawImage(sprite, 0, 150, 50, 50, 650, 300, 50, 50);
	}
	if(menu.czary){
		ctx2.drawImage(sprite,100, 100, 50, 50, 700, 300, 50, 50);
	}else if(mousePos.x > 700 && mousePos.x < 750 && mousePos.y > 300 && mousePos.y < 350){
		ctx2.drawImage(sprite, 50, 100, 50, 50, 700, 300, 50, 50);
	}else{
		ctx2.drawImage(sprite, 0, 100, 50, 50, 700, 300, 50, 50);
	}
	if(menu.dziennik){
		ctx2.drawImage(sprite,100, 200, 50, 50, 750, 300, 50, 50);
	}else if(mousePos.x > 750 && mousePos.x < 800 && mousePos.y > 300 && mousePos.y < 350){
		ctx2.drawImage(sprite, 50, 200, 50, 50, 750, 300, 50, 50);
	}else{
		ctx2.drawImage(sprite, 0, 200, 50, 50, 750, 300, 50, 50);
	}
	if(menu.osiagniecia){
		ctx2.drawImage(sprite,100, 250, 50, 50, 600, 350, 50, 50);
	}else if(mousePos.x > 600 && mousePos.x < 650 && mousePos.y > 350 && mousePos.y < 400){
		ctx2.drawImage(sprite, 50, 250, 50, 50, 600, 350, 50, 50);
	}else{
		ctx2.drawImage(sprite, 0, 250, 50, 50, 600, 350, 50, 50);
	}
	if(menu.opcjeGra){
		ctx2.drawImage(sprite,100, 300, 50, 50, 650, 350, 50, 50);
	}else if(mousePos.x > 650 && mousePos.x < 700 && mousePos.y > 350 && mousePos.y < 400){
		ctx2.drawImage(sprite, 50, 300, 50, 50, 650, 350, 50, 50);
	}else{
		ctx2.drawImage(sprite, 0, 300, 50, 50, 650, 350, 50, 50);
	}
}

function przewijanieMapy(){
	if(!menu.ekwipunek && !menu.statystyki && !menu.opcjeGra && !menu.osiagniecia && !menu.dziennik && !menu.czary){
		ctx.fillStyle = "rgba(50,50,50,0.1)"; //przezroczystosc
		ctx.fillRect(0,0,600,25);
		ctx.fillRect(0,0,25,450);
		ctx.fillRect(0,425,600,25);
		ctx.fillRect(575,0,25,450);
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
	
	if(menu.glowne){
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
	if(menu.opcje){
		ctx.fillText("Prędkość przewijania mapy: ",250,100);
		ctx.fillText("Muzyka:",340,200);
		ctx.fillText("Powrót",340,300);
		ctx.strokeRect(335,275,90,30);
		ctx.strokeRect(429,175,101,30);
	}
	if(menu.wczytaj){
		ctx.fillText("Powrót",340,300);
		ctx.strokeRect(335,275,90,30);
	}
	if(menu.nowa){
		ctx.fillText("Nowy Obóz",340,100);
		ctx.fillText("Stary Obóz",340,150);
		ctx.fillText("Sekta",340,200);
		ctx.fillText("Powrót",340,300);
		ctx.strokeRect(335,275,90,30);
	}
	if(menu.interfejs){
		ctx.fillStyle = "black";
		ctx.font = "10px Segoe UI";
		ctx.strokeRect(0,450,600,25);
		ctx.strokeRect(0,0,800,600);	
		ctx.strokeRect(0,0,600,450);
		ctx.strokeRect(600,0,200,200);
		ctx.strokeRect(600,200,200,50);
		ctx.strokeRect(600,250,150,50);
		ctx.strokeRect(600,300,200,100);
		ctx.strokeRect(750,250,50,50);
		ctx.strokeRect(0,450,600,150);
		ctx.strokeRect(650,300,50,50);ctx.fillText("Statystyki",650,325);
		ctx.strokeRect(700,300,50,50);ctx.fillText("czary",700,325);
		ctx.strokeRect(750,300,50,50);ctx.fillText("dziennik",750,325);
		ctx.strokeRect(600,350,50,50);ctx.fillText("osiagniecia",600,375);
		ctx.strokeRect(650,350,50,50);ctx.fillText("opcje",650,375);
		if(!menu.ekwipunek && !menu.statystyki){
			przewijanieMapy();
		}
		ctx.drawImage(mapa,0,0,1150,850,600,0,200,200);
	}
	if(menu.wielo){
		ctx.fillText("Coming soon ^^",300,200);
		ctx.fillText("Powrót",340,300);
		ctx.strokeRect(335,275,90,30);
	}
	if(menu.ekwipunek){
		ctx.strokeRect(0,0,300,450);
		ctx.strokeRect(300,0,300,450);
	}
	if(menu.statystyki){
		
		ctx.fillStyle = "black";
		ctx.font = "15px Segoe UI";
		ctx.fillText("Postać",100,50);
		ctx.fillText("Obóz : "+postac[0].oboz,100,70);
		ctx.fillText("Poziom : "+postac[0].poziom,100,90);
		ctx.fillText("Doświadczenie : "+postac[0].doswiadczenie,100,110);
		ctx.fillText("Następny Poziom : nextLvl",100,130);
		ctx.fillText("Magia : Krąg "+postac[0].krag,100,150);
		ctx.fillText("Atrybuty",100,250);
		ctx.fillText("Siła : "+postac[0].sila,100,270);
		ctx.fillText("Zręczność : "+postac[0].zrecznosc,100,290);
		ctx.fillText("Inteligecja : "+postac[0].inteligencja,100,310);
		ctx.fillText("Szybkość : "+postac[0].szybkosc,100,330);
		ctx.fillText("Celność : "+postac[0].celnosc,100,350);
		ctx.fillText("Punkty Życia : "+postac[0].hp+"/"+maxHp,100,370);
		ctx.fillText("Punkty Many : "+postac[0].mp+"/"+maxMp,100,390);
		ctx.fillText("Ochrona",400,250);
		ctx.fillText("Broń : "+postac[0].oBron,400,270);
		ctx.fillText("Pociski : "+postac[0].oPociski,400,290);
		ctx.fillText("Smoczy Ogień : "+postac[0].oOgien,400,310);
		ctx.fillText("Magia : "+postac[0].oMagia,400,330);
		ctx.fillText("Umiejętności",400,50);
		ctx.fillText("Broń jednoręczna : "+postac[0].uMiecz1,400,70);
		ctx.fillText("Broń dwuręczna : "+postac[0].uMiecz2,400,90);
		ctx.fillText("Łuk : "+postac[0].uLuk,400,110);
		ctx.fillText("Kusza : "+postac[0].uKusza,400,130);
	}
	if(menu.czary){
		ctx.strokeRect(0,0,300,450);
		ctx.strokeRect(300,0,300,450);
	}
	if(menu.dziennik){
		ctx.strokeRect(0,0,300,450);
		ctx.strokeRect(300,0,300,450);
	}
	if(menu.osiagniecia){
		ctx.strokeRect(0,0,300,450);
		ctx.strokeRect(300,0,300,450);
	}
	if(menu.opcjeGra){
		ctx.strokeRect(0,0,300,450);
		ctx.strokeRect(300,0,300,450);
	}
	
	
}

function interfejsDane(){
	if(menu.interfejs && !menu.opcje && !menu.glowne && !menu.wczytaj && !menu.nowa){
		if(100/(maxHp/postac[0].hp) <= 30){
			ctx2.fillStyle = "rgb(255, 0, 0)";
			ctx2.fillRect(605,205,90/(maxHp/postac[0].hp),10)
		}else if(100/(maxHp/postac[0].hp) <= 80){
			ctx2.fillStyle = "rgb(255, 255, 0)";
			ctx2.fillRect(605,205,100/(maxHp/postac[0].hp),10)
		}else{
			ctx2.fillStyle = "rgb(0, 255, 0)";
			ctx2.fillRect(605,205,100/(maxHp/postac[0].hp),10)
		}	
		ctx2.fillStyle = "rgb(0, 100, 255)";
		ctx2.fillRect(700,205,90/(maxMp/postac[0].mp),10)
		ctx2.fillStyle = "black";
		ctx2.fillText(maxHp+" / "+postac[0].hp,640,214);
		ctx2.fillText(maxMp+" / "+postac[0].mp,735,214);
		ctx2.fillText("Ruda : "+postac[0].zloto,605,235);
		ctx2.fillText("Doświadczenie : "+postac[0].doswiadczenie+" / expNextLvl",605,225);
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


