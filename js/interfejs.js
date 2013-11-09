var konsolaArr = [ ];
var ekwipunekArr = [ ];
var dziennikArr = [ ];
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
	ctx2.font = "10px Comic Sans MS";	
	printAtWordWrap(ctx2, tresc, x, y, 10, 265 );
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
		if(obozIndex === 0 || obozIndex == 1 || obozIndex == 2){
			on = true;
			if(stopnioweRysowanie >= 255){
			}else{
				stopnioweRysowanie = stopnioweRysowanie + 15;
			} 
			ctx2.drawImage(bgs, 600, 900, 320, 239, mousePos.x+20,mousePos.y-20, 330, 260);
			var myImgData = ctx2.getImageData(mousePos.x+20,mousePos.y-20,330, 260);
			var data = myImgData.data;
			for (i=0; i<myImgData.data.length; i+=4) {
				myImgData.data[i+3] = stopnioweRysowanie;
			} 
			
			ctx2.putImageData(myImgData, mousePos.x+20,mousePos.y-20);
			ctx2.fillStyle = "rgba(255,255,255,"+stopnioweRysowanie/200+")";
			opis(mousePos.x+50,mousePos.y+15,obozy[obozIndex].opis);
			ctx2.fillText('Statystyki : ',mousePos.x+50,mousePos.y+170);
			ctx2.fillText('Życie : '+obozy[obozIndex].cechy[0].hp,mousePos.x+50,mousePos.y+185);
			ctx2.fillText('Mana : '+obozy[obozIndex].cechy[0].mp,mousePos.x+50,mousePos.y+195);
			ctx2.fillText('Siła : '+obozy[obozIndex].cechy[0].sila,mousePos.x+50,mousePos.y+205);
			ctx2.fillText('Zręczność : '+obozy[obozIndex].cechy[0].zrecznosc,mousePos.x+120,mousePos.y+185);
			ctx2.fillText('Szybkość : '+obozy[obozIndex].cechy[0].szybkosc,mousePos.x+120,mousePos.y+195);
			ctx2.fillText('Celność : '+obozy[obozIndex].cechy[0].celnosc,mousePos.x+120,mousePos.y+205);
			ctx2.fillText('Inteligencja : '+obozy[obozIndex].cechy[0].inteligencja,mousePos.x+190,mousePos.y+185);
		}else{
			stopnioweRysowanie = 0;
		}
	}
	
	
}


function wyswietlanieEkwipunku(){
	
	if(menu.ekwipunek){
		var pzLength = przedmiotyZalozone.length,
		pALength = przedmiotyArr.length;
		for(i = 0; i <= pzLength; i++){
			var pz = przedmiotyZalozone[i];
			
			if(pz){
				ctx2.font = "15px Comic Sans MS";		
				ctx2.fillStyle = "rgb(198,170,123)";
				ctx2.fillText(pz.nazwa,310,60 + i * 25);
				ctx2.drawImage(sprite, 100, 740, 50, 50, 525,45 + i * 25, 25,25);
				if(mousePos.x > 500 && mousePos.x < 525 && mousePos.y > 45 + i * 25 && mousePos.y < 65 + i * 25){
					ctx2.drawImage(sprite, 0, 790, 50, 50, 500, 45 + i * 25, 25, 25);
				}else{
					ctx2.drawImage(sprite, 450, 740, 50, 50, 500, 45 + i * 25, 25, 25);
				}
			}
		}
		
		for(i = 0; i < pALength; i++){
			var p = przedmiotyArr[i];
			
			
			if(p){
				ctx2.font = "15px Comic Sans MS";		
				ctx2.fillStyle = "rgb(198,170,123)";
				ctx2.fillText(p.nazwa,50,60 + i * 25);
				//ctx2.fillRect(265,50 + i * 20,10,10);
				ctx2.drawImage(sprite, 100, 740, 50, 50, 265,45 + i * 25, 25,25);
				if(mousePos.x > 240 && mousePos.x < 265 && mousePos.y > 45 + i * 25 && mousePos.y < 65 + i * 25){
					if(clicked && menu.sklep){
						ctx2.drawImage(sprite, 250, 740, 50, 50, 240, 45 + i * 25, 25, 25);
					}else if(clicked && !menu.sklep){
						ctx2.drawImage(sprite, 200, 790, 50, 50, 240, 45 + i * 25, 25, 25);
					}else if(menu.sklep){
						ctx2.drawImage(sprite, 200, 740, 50, 50, 240, 45 + i * 25, 25, 25);
					}else{
						ctx2.drawImage(sprite, 150, 790, 50, 50, 240, 45 + i * 25, 25, 25);
					}
				}else{
					if(menu.sklep){
						ctx2.drawImage(sprite, 150, 740, 50, 50, 240, 45 + i * 25, 25, 25);
					}else{
						ctx2.drawImage(sprite, 100, 790, 50, 50, 240, 45 + i * 25, 25, 25);	
					}
				}
				if(mousePos.x >= 215 && mousePos.x <= 240 && mousePos.y >= 45 + i * 25 && mousePos.y <= 65 + i * 25){
					ctx2.drawImage(sprite, 350, 740, 50, 50, 215, 45 + i * 25, 25, 25);
				}else{
					ctx2.drawImage(sprite, 300, 740, 50, 50, 215, 45 + i * 25, 25, 25);
				}
				
			}
		}
		for(i = 0; i <= pzLength; i++){
			var pz = przedmiotyZalozone[i];
			
			if(pz){
				
				if(mousePos.x >=525 && mousePos.y >=45 + i * 25 && mousePos.x <=550 && mousePos.y <=70 + i * 25 ){
					pz.aktywny = true;
					
				}else{
					pz.aktywny = false;
					pz.stopnioweRysowanie1 = 0;
				}
				if(pz.aktywny){
					
					ctx2.drawImage(bgs, 600, 900, 320, 239, mousePos.x-20-250,mousePos.y-20,250, 300);
					var myImgData = ctx2.getImageData(mousePos.x-20-250,mousePos.y-20,250, 300);
					var data = myImgData.data;
					for (j=0; j<myImgData.data.length; j+=4) {
						myImgData.data[j+3] = pz.stopnioweRysowanie1;
					}
					ctx2.font = "12px Comic Sans MS";		
					ctx2.putImageData(myImgData, mousePos.x-20-250,mousePos.y-20);
					ctx2.fillStyle = "rgba(198,170,123,"+pz.stopnioweRysowanie1/200+")";
					ctx2.fillText("Nazwa : "+pz.nazwa,mousePos.x+10-250,mousePos.y+20);
					ctx2.fillText("Typ : "+pz.typ,mousePos.x+10-250,mousePos.y+35);
					if(pz.typ == "Broń" || pz.typ == "Broń Dystansowa"){
						ctx2.fillText("Obrażenia : "+pz.cechy[0].obrazeniaMin+"d"+pz.cechy[0].obrazeniaMax,mousePos.x-10-230,mousePos.y+55);
						ctx2.fillText("Dodatkowe : "+pz.dodatkowe,mousePos.x+10-250,mousePos.y+75);
					}else if(pz.typ == "Zbroja"){
						ctx2.fillText("Obrona : "+pz.cechy[0].obrona,mousePos.x+10-250,mousePos.y+55);
						ctx2.fillText("Obrona magiczna : "+pz.cechy[0].obronaM,mousePos.x+10-250,mousePos.y+70);
						ctx2.fillText("Obrona przeciw pociskom : "+pz.cechy[0].obronaP,mousePos.x+10-250,mousePos.y+85);
						ctx2.fillText("Dodatkowe : "+pz.dodatkowe,mousePos.x+10-250,mousePos.y+105);
					}else if(pz.typ == "Mikstura Życia"){
						ctx2.fillText("Odnawia punktów życia : "+pz.cechy[0].wartoscHp,mousePos.x+10-250,mousePos.y+55);
					}else if(pz.typ == "Mikstura Many"){
						ctx2.fillText("Odnawia punktów many : "+pz.cechy[0].wartoscMp,mousePos.x+10-250,mousePos.y+55);
					}else if(pz.typ == "Pierścień"){
						ctx2.fillText("Dodatkowe : "+pz.dodatkowe,mousePos.x+10-250,mousePos.y+55);
					}
					ctx2.fillText("Cena : "+pz.cena+" bryłek rudy",mousePos.x+15-250,mousePos.y+250);
					if(pz.stopnioweRysowanie1 >= 255){
					}else{
						pz.stopnioweRysowanie1 = pz.stopnioweRysowanie1 + 15;
					} 
					
				}
			}
		}
		
		for(i = 0; i < pALength; i++){
			var p = przedmiotyArr[i];
			
			if(mousePos.x >=265 && mousePos.y >=45 + i * 25 && mousePos.x <=290 && mousePos.y <=70 + i * 25 ){
				p.aktywny = true;
				
			}else{
				p.aktywny = false;
				p.stopnioweRysowanie1 = 0;
			}
			if(p.aktywny){
				
				if(p.stopnioweRysowanie1 >= 255){
				}else{
					p.stopnioweRysowanie1 = p.stopnioweRysowanie1 + 15;
				} 
				ctx2.drawImage(bgs, 600, 900, 320, 239, mousePos.x+20,mousePos.y-20, 250, 300);
				var myImgData = ctx2.getImageData(mousePos.x+20,mousePos.y-20,250, 300);
				var data = myImgData.data;
				for (j=0; j<myImgData.data.length; j+=4) {
					myImgData.data[j+3] = p.stopnioweRysowanie1;
				} 
				
				ctx2.font = "12px Comic Sans MS";		
				ctx2.putImageData(myImgData, mousePos.x+20,mousePos.y-20);
				ctx2.fillStyle = "rgba(198,170,123,"+p.stopnioweRysowanie1/200+")";
				ctx2.fillText("Nazwa : "+p.nazwa,mousePos.x+45,mousePos.y+20);
				ctx2.fillText("Typ : "+p.typ,mousePos.x+45,mousePos.y+35);
				if(p.typ == "Broń" || p.typ == "Broń Dystansowa"){
					ctx2.fillText("Obrażenia : "+p.cechy[0].obrazeniaMin+"d"+p.cechy[0].obrazeniaMax,mousePos.x+45,mousePos.y+55);
					ctx2.fillText("Dodatkowe : "+p.dodatkowe,mousePos.x+45,mousePos.y+75);
				}else if(p.typ == "Zbroja"){
					ctx2.fillText("Obrona : "+p.cechy[0].obrona,mousePos.x+45,mousePos.y+55);
					ctx2.fillText("Obrona magiczna : "+p.cechy[0].obronaM,mousePos.x+45,mousePos.y+70);
					ctx2.fillText("Obrona przeciw pociskom : "+p.cechy[0].obronaP,mousePos.x+45,mousePos.y+85);
					ctx2.fillText("Dodatkowe : "+p.dodatkowe,mousePos.x+45,mousePos.y+105);
				}else if(p.typ == "Mikstura Życia"){
					ctx2.fillText("Odnawia punktów życia : "+p.cechy[0].wartoscHp,mousePos.x+45,mousePos.y+55);
				}else if(p.typ == "Mikstura Many"){
					ctx2.fillText("Odnawia punktów many : "+p.cechy[0].wartoscMp,mousePos.x+45,mousePos.y+55);
				}else if(p.typ == "Pierścień"){
					ctx2.fillText("Dodatkowe : "+p.dodatkowe,mousePos.x+45,mousePos.y+55);
				}
				ctx2.fillText("Cena : "+p.cena+" bryłek rudy",mousePos.x+55,mousePos.y+250);
			}
			
		}
		if(menu.kosz){
			ctx2.drawImage(bgs, 600, 900, 320, 240, 200, 160, 200, 150);
			ctx2.font = "12px Comic Sans MS"; 
			ctx2.fillText('Czy napewno chcesz usunąć,',220,190);
			ctx2.fillText('ten przedmiot ?',255,205); 
			ctx2.drawImage(sprite, 50, 740, 50, 50, 330, 250, 30, 30);
			ctx2.drawImage(sprite, 250, 790, 50, 50, 240, 250, 30, 30);
		}
	}
}



function ekwipunek(){
	var pALength = przedmiotyArr.length;
	for(i = 0; i < pALength; i++){
		ekwipunekArr.unshift(przedmiotyArr[i].nazwa);
	}
}

function wyswietlanieKonsoli(){
	ctx.font = "12px Comic Sans MS"; 
	ctx.fillStyle = "rgb(198,170,123)";
	var len = konsolaArr.length;
	if( len > 7 ){
		len--;
		konsolaArr.pop();
	}
	for(var i = 0; i < len ; i++){
		var k = konsolaArr[i];
		ctx.fillText(konsolaArr[i],10,500 + i * 14);
		//console.log(k,i);
	}
}


function konsola(text){
	ctx.clearRect(0,450,599,150);
	ctx.drawImage(bgs,0,1378, 598, 78, 0, 475, 600, 125);
	ctx.drawImage(bgs,0,1350, 600, 28, 0, 450, 600, 25);
	if(text){
		konsolaArr.unshift("-"+text);
	}
	wyswietlanieKonsoli();

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
		ctx2.fillStyle = "rgb(198,170,123)";
		ctx2.fillText(sto+'%',470,190);

		
	}
		
		
	if(menu.opcjeGra && menu.muzykaGra){
		var sto1 = tempX4-235;
		
		
		ctx2.fillStyle = "white";
		ctx2.drawImage(sprite,250,200,150,10,235,85,100,20);
		if(sto1 <= 0){
			activeAudio.volume = 0;
			ctx2.drawImage(sprite,250,211,11,8,235-9,88,15,15);
		}else if(sto1 <= 100){
			ctx2.drawImage(sprite,250,211,11,8,sto1+225,88,15,15);
			activeAudio.volume = sto1/100;
		}else if(sto1 >= 100){
			ctx2.drawImage(sprite,250,211,11,8,335-7.5,88,15,15);
			activeAudio.volume = 1;
			
		}
	}
	
	ctx2.fillStyle = "rgb(198,170,123)";
	//ctx2.fillText(sto+'%',275,140);	
	
	
}




function minimapa(){
	
	if(!menu.glowne && menu.interfejs ){	
		
		sx = tempX2- 600;
		sy = tempY2;
		
		var wysokosc = 57.5;
		var szerokosc = 42.5;
		var polowaW = wysokosc/2;
		var polowaS = szerokosc/2;
		
		if(!menu.ekwipunek && !menu.statystyki && !menu.opcjeGra && !menu.osiagniecia && !menu.dziennik && !menu.czary){
			if(mousePos.y <= 25 && mousePos.x <= 600 && tempY2 - predkoscPrzewijaniaMapy >= 0){
				tempY2= tempY2 - predkoscPrzewijaniaMapy;
			}
			if(mousePos.x <= 25 && mousePos.y <= 450 && tempX2 - predkoscPrzewijaniaMapy >= 600){
				tempX2= tempX2 - predkoscPrzewijaniaMapy;
			}
			if(mousePos.y >= 425 && mousePos.y <=450 && mousePos.x <= 600 && tempY2 + predkoscPrzewijaniaMapy <= 200){
				tempY2= tempY2 + predkoscPrzewijaniaMapy;
			}
			if(mousePos.x >= 575 && mousePos.x <= 600 && mousePos.y <= 450 && tempX2 + predkoscPrzewijaniaMapy <= 800){
				tempX2= tempX2 + predkoscPrzewijaniaMapy;
			}
			
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

function mapaGra(){
	if(!menu.glowne && menu.interfejs &&!menu.ekwipunek && !menu.statystyki && !menu.opcjeGra && !menu.osiagniecia && !menu.dziennik && !menu.czary){
		sx = tempX2- 600;
		sy = tempY2;
		
		var wysokosc = 57.5;
		var szerokosc = 42.5;
		var polowaW = wysokosc/2;
		var polowaS = szerokosc/2;
		
		if(tempX2-polowaW > 600 && tempX2+polowaW < 800 && tempY2-polowaS >=0 && tempY2+polowaS <= 200){
			ctx2.drawImage(mapa,sx*5-wysokosc*2.5,sy*5-szerokosc*2.5 ,wysokosc*5,szerokosc*5,0,0,600,450);
		}else if(tempY2-polowaS <= 0 && tempX2-polowaW <= 600){
			ctx2.drawImage(mapa,0,0,wysokosc*5,szerokosc*5,0,0,600,450);
		}else if(tempX2-polowaW <= 600 && tempY2+polowaS >= 200){
			ctx2.drawImage(mapa,0,1000-szerokosc*5 ,wysokosc*5,szerokosc*5,0,0,600,450);
		}else if(tempX2+polowaW >= 800 && tempY2-polowaS <= 0){
			ctx2.drawImage(mapa,1000-wysokosc*5,0 ,wysokosc*5,szerokosc*5,0,0,600,450);
		}else if(tempX2+polowaW >=800 && tempY2+polowaS >= 200){
			ctx2.drawImage(mapa,1000-wysokosc*5,1000-szerokosc*5 ,wysokosc*5,szerokosc*5,0,0,600,450);
		}else if(tempX2-polowaW <= 600){
			ctx2.drawImage(mapa,0,sy*5-szerokosc*2.5 ,wysokosc*5,szerokosc*5,0,0,600,450);
		}else if(tempX2+polowaW >= 800){
			ctx2.drawImage(mapa,1000-wysokosc*5,sy*5-szerokosc*2.5 ,wysokosc*5,szerokosc*5,0,0,600,450);
		}else if(tempY2-polowaS <= 0){
			ctx2.drawImage(mapa,sx*5-wysokosc*2.5,0,wysokosc*5,szerokosc*5,0,0,600,450);
		}else if(tempY2+polowaS >= 200){
			ctx2.drawImage(mapa,sx*5-wysokosc*2.5,1000-szerokosc*5 ,wysokosc*5,szerokosc*5,0,0,600,450);
		}
		ctx2.fillRect(posX,posY,25,25);
	}



	
}
function drawoncanvasmove(x,y){ 
	posY+=y;
	posX+=x;
}

function ikony(){
	
	if(menu.ekwipunek){
		ctx.drawImage(sprite,100, 50, 50, 50, 600, 300, 50, 50);
	}else if(mousePos.x > 600 && mousePos.x < 650 && mousePos.y > 300 && mousePos.y < 350){
		ctx.drawImage(sprite, 50, 50, 50, 50, 600, 300, 50, 50);
	}else{
		ctx.drawImage(sprite, 0, 50, 50, 50, 600, 300, 50, 50);
	}
	if(menu.statystyki){
		ctx.drawImage(sprite,100, 150, 50, 50, 650, 300, 50, 50);
	}else if(mousePos.x > 650 && mousePos.x < 700 && mousePos.y > 300 && mousePos.y < 350){
		ctx.drawImage(sprite, 50, 150, 50, 50, 650, 300, 50, 50);
	}else{
		ctx.drawImage(sprite, 0, 150, 50, 50, 650, 300, 50, 50);
	}
	if(menu.czary){
		ctx.drawImage(sprite,100, 100, 50, 50, 700, 300, 50, 50);
	}else if(mousePos.x > 700 && mousePos.x < 750 && mousePos.y > 300 && mousePos.y < 350){
		ctx.drawImage(sprite, 50, 100, 50, 50, 700, 300, 50, 50);
	}else{
		ctx.drawImage(sprite, 0, 100, 50, 50, 700, 300, 50, 50);
	}
	if(menu.dziennik){
		ctx.drawImage(sprite,100, 200, 50, 50, 750, 300, 50, 50);
		if(mousePos.x >30 && mousePos.x < 215 && mousePos.y > 80 && mousePos.y < 105 && !menu.dziennikAktywne){
			ctx2.drawImage(sprite, 50, 640, 50, 50, 195, 80, 20, 25);
		}else if(menu.dziennikAktywne){
			ctx2.drawImage(sprite, 0, 690, 50, 50, 195, 80, 20, 25);
		}else{
			ctx2.drawImage(sprite,0, 640, 50, 50, 195, 80, 20, 25);
		}
		if(mousePos.x >30 && mousePos.x < 215 && mousePos.y > 205 && mousePos.y < 230 && !menu.dziennikUkonczone){
			ctx2.drawImage(sprite, 50, 640, 50, 50, 195, 205, 20, 25);
		}else if(menu.dziennikUkonczone){
			ctx2.drawImage(sprite, 0, 690, 50, 50, 195, 205, 20, 25);
		}else{
			ctx2.drawImage(sprite,0, 640, 50, 50, 195, 205, 20, 25);
		}
	}else if(mousePos.x > 750 && mousePos.x < 800 && mousePos.y > 300 && mousePos.y < 350){
		ctx.drawImage(sprite, 50, 200, 50, 50, 750, 300, 50, 50);
	}else{
		ctx.drawImage(sprite, 0, 200, 50, 50, 750, 300, 50, 50);
	}
	if(menu.osiagniecia){
		ctx.drawImage(sprite,100, 250, 50, 50, 600, 350, 50, 50);
	}else if(mousePos.x > 600 && mousePos.x < 650 && mousePos.y > 350 && mousePos.y < 400){
		ctx.drawImage(sprite, 50, 250, 50, 50, 600, 350, 50, 50);
	}else{
		ctx.drawImage(sprite, 0, 250, 50, 50, 600, 350, 50, 50);
	}
	if(menu.opcjeGra){
		if(mousePos.x >30 && mousePos.x < 215 && mousePos.y > 140 && mousePos.y < 150 && !menu.muzykaGra){
			ctx2.drawImage(sprite, 50, 640, 50, 50, 195, 134, 20, 25);
		}else if(menu.muzykaGra){
			ctx2.drawImage(sprite, 0, 690, 50, 50, 195, 134, 20, 25);
		}else{
			ctx2.drawImage(sprite,0, 640, 50, 50, 195, 134, 20, 25);
		}
		if(mousePos.x >30 && mousePos.x < 215 && mousePos.y > 85 && mousePos.y < 115 && !menu.przewijanie){
			ctx2.drawImage(sprite, 50, 640, 50, 50, 195, 85, 20, 25);
		}else if(menu.przewijanie){
			ctx2.drawImage(sprite, 0, 690, 50, 50, 195, 85, 20, 25);
		}else{
			ctx2.drawImage(sprite,0, 640, 50, 50, 195, 85, 20, 25);
		}
		if(menu.przewijanie){
			if(predkoscPrzewijaniaMapy === 0){
				ctx.drawImage(sprite,50, 740, 50, 50, 230, 80, 25, 25);
			}else{
				ctx.drawImage(sprite,0, 740, 50, 50, 230, 80, 25, 25);
			}
			if(predkoscPrzewijaniaMapy == 1){
				ctx.drawImage(sprite,50, 740, 50, 50, 270, 80, 25, 25);
			}else{
				ctx.drawImage(sprite,0, 740, 50, 50, 270, 80, 25, 25);
			}
			if(predkoscPrzewijaniaMapy == 3){
				ctx.drawImage(sprite,50, 740, 50, 50, 310, 80, 25, 25);
			}else{
				ctx.drawImage(sprite,0, 740, 50, 50, 310, 80, 25, 25);
			}
			if(predkoscPrzewijaniaMapy == 6){
				ctx.drawImage(sprite,50, 740, 50, 50, 350, 80, 25, 25);
			}else{
				ctx.drawImage(sprite,0, 740, 50, 50, 350, 80, 25, 25);
			}
		}
		ctx.drawImage(sprite,100, 300, 50, 50, 650, 350, 50, 50);
	}else if(mousePos.x > 650 && mousePos.x < 700 && mousePos.y > 350 && mousePos.y < 400){
		ctx.drawImage(sprite, 50, 300, 50, 50, 650, 350, 50, 50);
	}else{
		ctx.drawImage(sprite, 0, 300, 50, 50, 650, 350, 50, 50);
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
				if(oEvent.keyCode == 81){
					pisanie("q");
				}
				if(oEvent.keyCode == 87){
					pisanie("w");
				}
				if(oEvent.keyCode == 69){
					pisanie("e");
				}
				if(oEvent.keyCode == 82){
					pisanie("r");
				}
				if(oEvent.keyCode == 40)/* dol */{
					drawoncanvasmove(0,25,postac[0]);
				}else if(oEvent.keyCode == 39) /* prawo */{
						drawoncanvasmove(25,0,postac[0]);
				}else if(oEvent.keyCode == 37)/* lewo */{
						drawoncanvasmove(-25,0,postac[0]);
				}else if(oEvent.keyCode == 38)/* gora */{
						drawoncanvasmove(0,-25,postac[0]);
				}
				
		});
});



function wyswietlanieMenu(){
	
	ctx.clearRect(0, 0, 600, 450);
	//ctx.clearRect(0, 0, 600, 600);
	ctx.fillStyle = "rgb(198,170,123)";
	ctx.font = "25px Comic Sans MS";
	if(menu.glowne){

		ctx.drawImage(bgs,1200,450,600,450,0,0,800,600);

		ctx.fillText("Nowa Gra",340,300);
		ctx.fillText("Wczytaj Grę",330,335);
		ctx.fillText("Gra Wieloosobowa",290,370);
		ctx.fillText("Opcje",360,405);
		ctx.strokeStyle = "grey";
		
	}
	if(menu.opcje){
		ctx.drawImage(bgs,0,900,600,450,0,0,800,600);
		ctx.fillText("Prędkość przewijania mapy: ",250,100);
		ctx.fillText("Muzyka:",340,200);
		ctx.fillText("Powrót",340,300);
		ctx.strokeRect(429,175,101,30);
	}
	if(menu.wczytaj){
		ctx.drawImage(bgs,0,900,600,450,0,0,800,600);
		ctx.fillText("Powrót",340,300);
	}
	if(menu.nowa){
		ctx.drawImage(bgs,0,900,600,450,0,0,800,600);
		ctx.fillText("Stary Obóz",340,100);
		ctx.fillText("Nowy Obóz",340,150);
		ctx.fillText("Sekta",340,200);
		ctx.fillText("Powrót",340,300);
	}
	if(menu.interfejs){

		ctx.drawImage(mapa,0,0,1000,1000,600,0,200,200);
		ctx.drawImage(sprite,350,50, 150, 50, 600, 250, 200, 50);
		ctx.drawImage(sprite,0,350, 297, 123, 600, 400, 200, 200);
		ctx.drawImage(sprite,350,50, 150, 50, 700, 350, 100, 50);
		
	}
	if(menu.wielo){
		ctx.drawImage(bgs,0,900,600,450,0,0,800,600);
		ctx.fillText("Coming soon ^^",300,200);
		ctx.fillText("Powrót",340,300);
	}
	if(menu.ekwipunek){
		ctx.drawImage(bgs,600,0,600,450,0,0,600,450);
	}
	if(menu.statystyki){
		ctx.drawImage(bgs,600,450,600,450,0,0,600,450);
		ctx.fillStyle = "(198,170,123)";
		ctx.font = "15px Comic Sans MS";
		ctx.fillText("Postać",100,50);
		ctx.fillText("Obóz : "+postac[0].oboz,100,70);
		ctx.fillText("Poziom : "+postac[0].poziom,100,90);
		ctx.fillText("Doświadczenie : "+postac[0].doswiadczenie,100,110);
		ctx.fillText("Następny poziom : "+poziomyArr[postac[0].poziom],100,130);
		ctx.fillText("Magia : Krąg "+postac[0].krag,100,150);
		ctx.fillText("Atrybuty",100,250);
		ctx.fillText("Siła : "+postac[0].sila,100,270);
		ctx.fillText("Zręczność : "+postac[0].zrecznosc,100,290);
		ctx.fillText("Inteligecja : "+postac[0].inteligencja,100,310);
		ctx.fillText("Szybkość : "+postac[0].szybkosc,100,330);
		ctx.fillText("Celność : "+postac[0].celnosc,100,350);
		ctx.fillText("Punkty Życia : "+postac[0].hp+"/"+maxHp,100,370);
		ctx.fillText("Punkty Many : "+postac[0].mp+"/"+maxMp,100,390);
		ctx.fillText("Ochrona",350,250);
		ctx.fillText("Broń : "+postac[0].oBron,350,270);
		ctx.fillText("Pociski : "+postac[0].oPociski,350,290);
		ctx.fillText("Smoczy Ogień : "+postac[0].oOgien,350,310);
		ctx.fillText("Magia : "+postac[0].oMagia,350,330);
		ctx.fillText("Umiejętności",350,50);
		ctx.fillText("Broń jednoręczna : "+postac[0].uMiecz1,350,70);
		ctx.fillText("Broń dwuręczna : "+postac[0].uMiecz2,350,90);
		ctx.fillText("Łuk : "+postac[0].uLuk,350,110);
		ctx.fillText("Kusza : "+postac[0].uKusza,350,130);
	}
	if(menu.czary){
		ctx.drawImage(bgs,0,0,600,450,0,0,600,450);
	}
	if(menu.dziennik){
		ctx.font = "15px Comic Sans MS";
		ctx.drawImage(bgs,1200,0,600,450,0,0,600,450);
		ctx.fillText('Zadania aktywne',55,95);         
		ctx.fillText('Zadania ukonczone',46,220);
	}
	if(menu.osiagniecia){
		ctx.drawImage(bgs,0,0,600,450,0,0,600,450);
	}
	if(menu.opcjeGra){
		ctx.drawImage(bgs,0,450,600,450,0,0,600,450);
		ctx.font = "15px Comic Sans MS";
		ctx.fillText("Prędkość przewijania",45,100);
		ctx.fillText("mapy:",95,115);
		ctx.fillText("Muzyka:",85,150);	
		if(menu.przewijanie){
			ctx.fillText("Off",234,70);
			ctx.fillText("1x",274,70);
			ctx.fillText("3x",314,70);	
			ctx.fillText("6x",354,70);
		}
	}

}

function interfejsDane(){
	if(menu.interfejs && !menu.opcje && !menu.glowne && !menu.wczytaj && !menu.nowa){
		ctx2.font = "10px Comic Sans MS";		
		ctx2.drawImage(sprite,250, 50, 100, 50, 600, 200, 100, 25);
		ctx2.drawImage(sprite,150, 50, 50, 50, 600, 200, 100/(maxHp/postac[0].hp), 25);
		ctx2.drawImage(sprite,150, 200, 100, 50, 600, 200, 100, 25);
		ctx2.drawImage(sprite,250, 100, 100, 50, 700, 200, 100, 25);
		ctx2.drawImage(sprite,150, 100, 50, 50, 700, 200, 100/(maxMp/postac[0].mp), 25);
		ctx2.drawImage(sprite,150, 200, 100, 50, 700, 200, 100, 25);
		
		ctx2.drawImage(sprite,250, 150, 100, 50, 600, 225, 200, 25);
		ctx2.drawImage(sprite,150, 150, 100, 50, 600, 225, 200/(poziomyArr[postac[0].poziom]/postac[0].doswiadczenie), 25);
		ctx2.drawImage(sprite,150, 200, 100, 50, 600, 225, 200, 25);
		ctx2.fillStyle = "White";
		ctx2.fillText(postac[0].hp+" / "+maxHp,640,215);
		ctx2.fillText(postac[0].mp+" / "+maxMp,740,215);
		ctx2.fillText(postac[0].doswiadczenie+" / "+poziomyArr[postac[0].poziom],685,240);
		ctx2.fillStyle = "rgb(198,170,123)";
		//ctx2.fillText("Ruda : "+postac[0].zloto,605,245);
	}
}


function odswiezanie() {
	setInterval(function() {
			ctx2.clearRect(0, 0, 800, 600);
			if(menu.interfejs){
				ikony();
			}
			minimapa();
			mapaGra();
			interfejsDane();
			opisy();
			muzyka();
			ekwipunek();
			wyswietlanieEkwipunku();
			if(menu.czary){
				czary();
			}
			ctx2.fillText(konsolaWpisywanie[0],0,500);

	}, 25);
} 


