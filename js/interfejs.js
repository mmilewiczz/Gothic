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
	ctx2.fillStyle = "rgb(255, 0, 0)"; 	
	printAtWordWrap(ctx2, tresc, x, y, 10, 270 );
}

function opisy(){
	if(mousePos.x >335 && mousePos.y >75 && mousePos.x <455 && mousePos.y <105 && menu.nowa && !menu.opcje && !menu.glowne && !menu.wczytaj){
		ctx2.fillStyle = "rgb(240, 240, 240)"; 
		ctx2.fillRect(mousePos.x+20,mousePos.y-20,300,250);
		opis(mousePos.x+35,mousePos.y,obozy[0].opis);
		ctx2.fillText('Statystyki : ',mousePos.x+35,mousePos.y+120);
		ctx2.fillText('Życie : '+obozy[0].cechy[0].hp,mousePos.x+35,mousePos.y+130);
		ctx2.fillText('Mana : '+obozy[0].cechy[0].mp,mousePos.x+35,mousePos.y+140);
		ctx2.fillText('Siła : '+obozy[0].cechy[0].sila,mousePos.x+35,mousePos.y+150);
		ctx2.fillText('Zręczność : '+obozy[0].cechy[0].zrecznosc,mousePos.x+35,mousePos.y+160);
		ctx2.fillText('Szybkosc : '+obozy[0].cechy[0].szybkosc,mousePos.x+35,mousePos.y+170);
		ctx2.fillText('Celnosc : '+obozy[0].cechy[0].celnosc,mousePos.x+35,mousePos.y+180);
		ctx2.fillText('Inteligencja : '+obozy[0].cechy[0].inteligencja,mousePos.x+35,mousePos.y+190);
	}
	if(mousePos.x >325 && mousePos.y >125 && mousePos.x <465 && mousePos.y <155 && menu.nowa && !menu.opcje && !menu.glowne && !menu.wczytaj){
		ctx2.fillStyle = "rgb(240, 240, 240)"; 
		ctx2.fillRect(mousePos.x+20,mousePos.y-20,300,250);
		opis(mousePos.x+35,mousePos.y,obozy[1].opis);
		ctx2.fillText('Statystyki : ',mousePos.x+35,mousePos.y+150);
		ctx2.fillText('Życie : '+obozy[1].cechy[0].hp,mousePos.x+35,mousePos.y+160);
		ctx2.fillText('Mana : '+obozy[1].cechy[0].mp,mousePos.x+35,mousePos.y+170);
		ctx2.fillText('Siła : '+obozy[1].cechy[0].sila,mousePos.x+35,mousePos.y+180);
		ctx2.fillText('Zręczność : '+obozy[1].cechy[0].zrecznosc,mousePos.x+35,mousePos.y+190);
		ctx2.fillText('Szybkosc : '+obozy[0].cechy[0].szybkosc,mousePos.x+35,mousePos.y+200);
		ctx2.fillText('Celnosc : '+obozy[0].cechy[0].celnosc,mousePos.x+35,mousePos.y+210);
		ctx2.fillText('Inteligencja : '+obozy[0].cechy[0].inteligencja,mousePos.x+35,mousePos.y+220);
		
	}
	if(mousePos.x >285 && mousePos.y >175 && mousePos.x <505 && mousePos.y <205 && menu.nowa && !menu.opcje && !menu.glowne && !menu.wczytaj){
		ctx2.fillStyle = "rgb(240, 240, 240)"; 
		ctx2.fillRect(mousePos.x+20,mousePos.y-20,300,250);	
		opis(mousePos.x+35,mousePos.y,obozy[2].opis);
		ctx2.fillText('Statystyki : ',mousePos.x+35,mousePos.y+150);
		ctx2.fillText('Życie : '+obozy[2].cechy[0].hp,mousePos.x+35,mousePos.y+160);
		ctx2.fillText('Mana : '+obozy[2].cechy[0].mp,mousePos.x+35,mousePos.y+170);
		ctx2.fillText('Siła : '+obozy[2].cechy[0].sila,mousePos.x+35,mousePos.y+180);
		ctx2.fillText('Zręczność : '+obozy[2].cechy[0].zrecznosc,mousePos.x+35,mousePos.y+190);
		ctx2.fillText('Szybkosc : '+obozy[0].cechy[0].szybkosc,mousePos.x+35,mousePos.y+200);
		ctx2.fillText('Celnosc : '+obozy[0].cechy[0].celnosc,mousePos.x+35,mousePos.y+210);
		ctx2.fillText('Inteligencja : '+obozy[0].cechy[0].inteligencja,mousePos.x+35,mousePos.y+220);
	}
	
	
}

function wyswietlanieKonsoli(){
	
	for(i = 0; i < konsolaArr.length; i++){
		var k = konsolaArr[i];
		
		ctx.font = "10px Segoe UI"; 
		ctx.fillStyle = "black";
		
		if(k >= konsolaArr[7]){
			konsolaArr.pop();
		}
		if(k == konsolaArr[6]){
			ctx.fillText(konsolaArr[6],10,580);
		}
		if(k == konsolaArr[5]){
			ctx.fillText(konsolaArr[5],10,565);
		}
		if(k == konsolaArr[4]){
			ctx.fillText(konsolaArr[4],10,550);
		}
		if(k == konsolaArr[3]){
			ctx.fillText(konsolaArr[3],10,535);
		}
		if(k == konsolaArr[2]){
			ctx.fillText(konsolaArr[2],10,520);
		}
		if(k == konsolaArr[1]){
			ctx.fillText(konsolaArr[1],10,505);
		}
		if(k == konsolaArr[0]){
			ctx.fillText(konsolaArr[0],10,490);
		}
	}
}

function wyswietlanieEkwipunku(){
	
	for(j = 0; j < ekwipunekArr.length; j++){
		var e = ekwipunekArr[j];
		for(i = 0; i < przedmiotyArr.length; i++){
			var p = przedmiotyArr[i];
			
			
			ctx2.font = "10px Segoe UI"; 
			ctx2.fillStyle = "black";
			
			
			
			
			
			
 			if(e >= ekwipunekArr[11]){
				ekwipunekArr.pop();
			}
			if(e == ekwipunekArr[10]){
				ctx2.fillStyle = "black";
				ctx2.fillText(ekwipunekArr[10],10,220);
				ctx2.fillRect(265,210,10,10);
				if(mousePos.x >265 && mousePos.y >210 && mousePos.x <305 && mousePos.y <220 && menu.ekwipunek ){
ctx2.fillStyle = "grey";
					
					ctx2.fillRect(mousePos.x+15,mousePos.y+5,250,300);
					ctx2.fillStyle = "black";
					ctx2.fillText("Nazwa : "+ekwipunekArr[0],mousePos.x+15,mousePos.y+15);
					ctx2.fillText("Typ : "+p.typ,mousePos.x+15,mousePos.y+30);
					ctx2.fillText("Opis : "+p.opis,mousePos.x+15,mousePos.y+45);
					ctx2.fillText("Cena : "+p.cena+" bryłek rudy",mousePos.x+155,mousePos.y+295);
					ctx2.fillText("Statystyki :",mousePos.x+15,mousePos.y+115);
					ctx2.fillText("Obrażenia : "+p.cechy[0].obrazeniaMin+"d"+p.cechy[0].obrazeniaMax,mousePos.x+15,mousePos.y+135);
				}
			}
			if(e == ekwipunekArr[9]){
				ctx2.fillStyle = "black";
				ctx2.fillText(ekwipunekArr[9],10,200);
				ctx2.fillRect(265,190,10,10);
				if(mousePos.x >265 && mousePos.y >190 && mousePos.x <305 && mousePos.y <200 && menu.ekwipunek){
ctx2.fillStyle = "grey";
					
					ctx2.fillRect(mousePos.x+15,mousePos.y+5,250,300);
					ctx2.fillStyle = "black";
					ctx2.fillText("Nazwa : "+ekwipunekArr[0],mousePos.x+15,mousePos.y+15);
					ctx2.fillText("Typ : "+p.typ,mousePos.x+15,mousePos.y+30);
					ctx2.fillText("Opis : "+p.opis,mousePos.x+15,mousePos.y+45);
					ctx2.fillText("Cena : "+p.cena+" bryłek rudy",mousePos.x+155,mousePos.y+295);
					ctx2.fillText("Statystyki :",mousePos.x+15,mousePos.y+115);
					ctx2.fillText("Obrażenia : "+p.cechy[0].obrazeniaMin+"d"+p.cechy[0].obrazeniaMax,mousePos.x+15,mousePos.y+135);
				}
			}
			if(e == ekwipunekArr[8]){
				ctx2.fillStyle = "black";
				ctx2.fillText(ekwipunekArr[8],10,180);
				ctx2.fillRect(265,170,10,10);
				if(mousePos.x >265 && mousePos.y >170 && mousePos.x <305 && mousePos.y <180 && menu.ekwipunek){
ctx2.fillStyle = "grey";
					
					ctx2.fillRect(mousePos.x+15,mousePos.y+5,250,300);
					ctx2.fillStyle = "black";
					ctx2.fillText("Nazwa : "+ekwipunekArr[0],mousePos.x+15,mousePos.y+15);
					ctx2.fillText("Typ : "+p.typ,mousePos.x+15,mousePos.y+30);
					ctx2.fillText("Opis : "+p.opis,mousePos.x+15,mousePos.y+45);
					ctx2.fillText("Cena : "+p.cena+" bryłek rudy",mousePos.x+155,mousePos.y+295);
					ctx2.fillText("Statystyki :",mousePos.x+15,mousePos.y+115);
					ctx2.fillText("Obrażenia : "+p.cechy[0].obrazeniaMin+"d"+p.cechy[0].obrazeniaMax,mousePos.x+15,mousePos.y+135);
				}
			}
			if(e == ekwipunekArr[7]){
				ctx2.fillStyle = "black";
				ctx2.fillText(ekwipunekArr[7],10,160);
				ctx2.fillRect(265,150,10,10);
				if(mousePos.x >265 && mousePos.y >150 && mousePos.x <305 && mousePos.y <160 && menu.ekwipunek){
ctx2.fillStyle = "grey";
					
					ctx2.fillRect(mousePos.x+15,mousePos.y+5,250,300);
					ctx2.fillStyle = "black";
					ctx2.fillText("Nazwa : "+ekwipunekArr[0],mousePos.x+15,mousePos.y+15);
					ctx2.fillText("Typ : "+p.typ,mousePos.x+15,mousePos.y+30);
					ctx2.fillText("Opis : "+p.opis,mousePos.x+15,mousePos.y+45);
					ctx2.fillText("Cena : "+p.cena+" bryłek rudy",mousePos.x+155,mousePos.y+295);
					ctx2.fillText("Statystyki :",mousePos.x+15,mousePos.y+115);
					ctx2.fillText("Obrażenia : "+p.cechy[0].obrazeniaMin+"d"+p.cechy[0].obrazeniaMax,mousePos.x+15,mousePos.y+135);
				}
			}
			if(e == ekwipunekArr[6]){
				ctx2.fillStyle = "black";
				ctx2.fillText(ekwipunekArr[6],10,140);
				ctx2.fillRect(265,130,10,10);
				if(mousePos.x >265 && mousePos.y >130 && mousePos.x <305 && mousePos.y <140 && menu.ekwipunek){
ctx2.fillStyle = "grey";
					
					ctx2.fillRect(mousePos.x+15,mousePos.y+5,250,300);
					ctx2.fillStyle = "black";
					ctx2.fillText("Nazwa : "+ekwipunekArr[0],mousePos.x+15,mousePos.y+15);
					ctx2.fillText("Typ : "+p.typ,mousePos.x+15,mousePos.y+30);
					ctx2.fillText("Opis : "+p.opis,mousePos.x+15,mousePos.y+45);
					ctx2.fillText("Cena : "+p.cena+" bryłek rudy",mousePos.x+155,mousePos.y+295);
					ctx2.fillText("Statystyki :",mousePos.x+15,mousePos.y+115);
					ctx2.fillText("Obrażenia : "+p.cechy[0].obrazeniaMin+"d"+p.cechy[0].obrazeniaMax,mousePos.x+15,mousePos.y+135);
				}
			}
			if(e == ekwipunekArr[5]){
				ctx2.fillStyle = "black";
				ctx2.fillText(ekwipunekArr[5],10,120);
				ctx2.fillRect(265,110,10,10);
				if(mousePos.x >265 && mousePos.y >110 && mousePos.x <305 && mousePos.y <120 && menu.ekwipunek){
ctx2.fillStyle = "grey";
					
					ctx2.fillRect(mousePos.x+15,mousePos.y+5,250,300);
					ctx2.fillStyle = "black";
					ctx2.fillText("Nazwa : "+ekwipunekArr[0],mousePos.x+15,mousePos.y+15);
					ctx2.fillText("Typ : "+p.typ,mousePos.x+15,mousePos.y+30);
					ctx2.fillText("Opis : "+p.opis,mousePos.x+15,mousePos.y+45);
					ctx2.fillText("Cena : "+p.cena+" bryłek rudy",mousePos.x+155,mousePos.y+295);
					ctx2.fillText("Statystyki :",mousePos.x+15,mousePos.y+115);
					ctx2.fillText("Obrażenia : "+p.cechy[0].obrazeniaMin+"d"+p.cechy[0].obrazeniaMax,mousePos.x+15,mousePos.y+135);
				}
			}
			if(e == ekwipunekArr[4]){
				ctx2.fillStyle = "black";
				ctx2.fillText(ekwipunekArr[4],10,100);
				ctx2.fillRect(265,90,10,10);
				if(mousePos.x >265 && mousePos.y >90 && mousePos.x <305 && mousePos.y <100 && menu.ekwipunek){
ctx2.fillStyle = "grey";
					
					ctx2.fillRect(mousePos.x+15,mousePos.y+5,250,300);
					ctx2.fillStyle = "black";
					ctx2.fillText("Nazwa : "+ekwipunekArr[0],mousePos.x+15,mousePos.y+15);
					ctx2.fillText("Typ : "+p.typ,mousePos.x+15,mousePos.y+30);
					ctx2.fillText("Opis : "+p.opis,mousePos.x+15,mousePos.y+45);
					ctx2.fillText("Cena : "+p.cena+" bryłek rudy",mousePos.x+155,mousePos.y+295);
					ctx2.fillText("Statystyki :",mousePos.x+15,mousePos.y+115);
					ctx2.fillText("Obrażenia : "+p.cechy[0].obrazeniaMin+"d"+p.cechy[0].obrazeniaMax,mousePos.x+15,mousePos.y+135);
				}
			}
			if(e == ekwipunekArr[3]){
				ctx2.fillStyle = "black";
				ctx2.fillText(ekwipunekArr[3],10,80);
				ctx2.fillRect(265,70,10,10);
				if(mousePos.x >265 && mousePos.y >70 && mousePos.x <305 && mousePos.y <80 && menu.ekwipunek){
ctx2.fillStyle = "grey";
					
					ctx2.fillRect(mousePos.x+15,mousePos.y+5,250,300);
					ctx2.fillStyle = "black";
					ctx2.fillText("Nazwa : "+ekwipunekArr[0],mousePos.x+15,mousePos.y+15);
					ctx2.fillText("Typ : "+p.typ,mousePos.x+15,mousePos.y+30);
					ctx2.fillText("Opis : "+p.opis,mousePos.x+15,mousePos.y+45);
					ctx2.fillText("Cena : "+p.cena+" bryłek rudy",mousePos.x+155,mousePos.y+295);
					ctx2.fillText("Statystyki :",mousePos.x+15,mousePos.y+115);
					ctx2.fillText("Obrażenia : "+p.cechy[0].obrazeniaMin+"d"+p.cechy[0].obrazeniaMax,mousePos.x+15,mousePos.y+135);
				}
			}
			if(e == ekwipunekArr[2]){
				ctx2.fillStyle = "black";
				ctx2.fillText(ekwipunekArr[2],10,60);
				ctx2.fillRect(265,50,10,10);
				if(mousePos.x >265 && mousePos.y >50 && mousePos.x <305 && mousePos.y <60 && menu.ekwipunek){
ctx2.fillStyle = "grey";
					
					ctx2.fillRect(mousePos.x+15,mousePos.y+5,250,300);
					ctx2.fillStyle = "black";
					ctx2.fillText("Nazwa : "+ekwipunekArr[0],mousePos.x+15,mousePos.y+15);
					ctx2.fillText("Typ : "+p.typ,mousePos.x+15,mousePos.y+30);
					ctx2.fillText("Opis : "+p.opis,mousePos.x+15,mousePos.y+45);
					ctx2.fillText("Cena : "+p.cena+" bryłek rudy",mousePos.x+155,mousePos.y+295);
					ctx2.fillText("Statystyki :",mousePos.x+15,mousePos.y+115);
					ctx2.fillText("Obrażenia : "+p.cechy[0].obrazeniaMin+"d"+p.cechy[0].obrazeniaMax,mousePos.x+15,mousePos.y+135);
				}
			}
			if(e == ekwipunekArr[1]){
				ctx2.fillStyle = "black";
				ctx2.fillText(ekwipunekArr[1],10,40);
				ctx2.fillRect(265,30,10,10);
				if(mousePos.x >265 && mousePos.y >30 && mousePos.x <305 && mousePos.y <40 && menu.ekwipunek){
ctx2.fillStyle = "grey";
					
					ctx2.fillRect(mousePos.x+15,mousePos.y+5,250,300);
					ctx2.fillStyle = "black";
					ctx2.fillText("Nazwa : "+ekwipunekArr[0],mousePos.x+15,mousePos.y+15);
					ctx2.fillText("Typ : "+p.typ,mousePos.x+15,mousePos.y+30);
					ctx2.fillText("Opis : "+p.opis,mousePos.x+15,mousePos.y+45);
					ctx2.fillText("Cena : "+p.cena+" bryłek rudy",mousePos.x+155,mousePos.y+295);
					ctx2.fillText("Statystyki :",mousePos.x+15,mousePos.y+115);
					ctx2.fillText("Obrażenia : "+p.cechy[0].obrazeniaMin+"d"+p.cechy[0].obrazeniaMax,mousePos.x+15,mousePos.y+135);
				}
			}
			if(e == ekwipunekArr[0]){
				ctx2.fillStyle = "black";
				ctx2.fillText(ekwipunekArr[0],10,20);
				ctx2.fillRect(265,10,10,10);
				if(mousePos.x >265 && mousePos.y >10 && mousePos.x <275 && mousePos.y <20 && menu.ekwipunek){
					ctx2.fillStyle = "grey";
					
					ctx2.fillRect(mousePos.x+15,mousePos.y+5,250,300);
					ctx2.fillStyle = "black";
					ctx2.fillText("Nazwa : "+ekwipunekArr[0],mousePos.x+15,mousePos.y+15);
					ctx2.fillText("Typ : "+p.typ,mousePos.x+15,mousePos.y+30);
					ctx2.fillText("Opis : "+p.opis,mousePos.x+15,mousePos.y+45);
					ctx2.fillText("Cena : "+p.cena+" bryłek rudy",mousePos.x+155,mousePos.y+295);
					ctx2.fillText("Statystyki :",mousePos.x+15,mousePos.y+115);
					ctx2.fillText("Obrażenia : "+p.cechy[0].obrazeniaMin+"d"+p.cechy[0].obrazeniaMax,mousePos.x+15,mousePos.y+135);
				} 
				
				
			}
		}
	}
}


function ekwipunek(){
	for(i = 0; i < przedmiotyArr.length; i++){
		ekwipunekArr.unshift(przedmiotyArr[i].nazwa);
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
		
		ctx2.fillStyle = "red";
		var kwa1 = tempX2-600;
		var wielkosc = 50;
		var polowa = wielkosc/2;
		
 		if(tempX2-polowa > 600 && tempX2+polowa < 800 && tempY2-polowa >=0 && tempY2+polowa <= 200){
			ctx2.strokeRect(tempX2-polowa,tempY2-25,wielkosc,wielkosc);
		}else if(tempY2-polowa <= 0 && tempX2-polowa <= 600){
			ctx2.strokeRect(600,0,wielkosc,wielkosc);
		}else if(tempX2-polowa <= 600 && tempY2+polowa >= 200){
			ctx2.strokeRect(600,150,wielkosc,wielkosc);
		}else if(tempX2+polowa >= 800 && tempY2-polowa <= 0){
			ctx2.strokeRect(750,0,wielkosc,wielkosc);
		}else if(tempX2+polowa >= 800 && tempY2+polowa >= 200){
			ctx2.strokeRect(750,150,wielkosc,wielkosc);
		}else if(tempX2-polowa <= 600){
			ctx2.strokeRect(600,tempY2-polowa,wielkosc,wielkosc);
		}else if(tempX2+polowa >= 800){
			ctx2.strokeRect(750,tempY2-polowa,wielkosc,wielkosc);
		}else if(tempY2-polowa <= 0){
			ctx2.strokeRect(tempX2-polowa,0,wielkosc,wielkosc);
		}else if(tempY2+polowa >= 200){
			ctx2.strokeRect(tempX2-polowa,150,wielkosc,wielkosc);
		}
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
		ctx.fillText("Język:",340,100);
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
		ctx.strokeRect(600,300,50,50);ctx.fillText("Ekwipunek",600,325);
		ctx.strokeRect(650,300,50,50);ctx.fillText("Statystyki",650,325);
		ctx.strokeRect(700,300,50,50);ctx.fillText("czary",700,325);
		ctx.strokeRect(750,300,50,50);ctx.fillText("dziennik",750,325);
		ctx.strokeRect(600,350,50,50);ctx.fillText("osiagniecia",600,375);
		ctx.strokeRect(650,350,50,50);ctx.fillText("opcje",650,375);
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


