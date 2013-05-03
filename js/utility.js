
function checkMousePos(x,y,x1,y1) {
	if(mousePos.x > x && mousePos.y > y && mousePos.x < x1 && mousePos.y < y1) {
		return true;
	}else{
		return false;
	}
}
function checkMousePos1(x,y) {
	if(mousePos.x > x && mousePos.y > y) {
		return true;
	}else{
		return false;
	}
}

