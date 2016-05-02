
function moveElement(elementID,final_x,final_y,interval) {// 抽象化
	if (!document.getElementById) return false;
	if (!document.getElementById(elementID)) return false;
	var elem=document.getElementById(elementID);  //elementID只是ID的一个描述性名称，别加引号！！！
	if (elem.movement) {
		clearTimeout(elem.movement);
	}
	if (!elem.style.left) {
		elem.style.left="0px";
	}
	if (!elem.style.top) {
		elem.style.top="0px";
	}
	var xpos=parseInt(elem.style.left);
	var ypos=parseInt(elem.style.top);
	if (xpos==final_x && ypos==final_y) {
		return true;
	}
	if (xpos<final_x) {
		dist=Math.ceil((final_x-xpos)/10);//ceil可以返回一个不小于dist的整数值，即向大于方向舍入
		xpos=xpos+dist;
	}
	if (xpos>final_x) {
		dist=Math.ceil((xpos-final_x)/10);
		xpos=xpos-dist;
	}
	if (ypos<final_y) {
		dist=Math.ceil((final_y-ypos)/10);
		ypos=ypos+dist;
	}
	if (ypos>final_y) {
		dist=Math.ceil((ypos-final_y)/10);
		ypos=ypos-dist;
	}
	elem.style.left=xpos+"px";
	elem.style.top=ypos+"px";
	var repeat="moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";//把字符串赋值给变量repeat
	elem.movement=setTimeout(repeat,interval);
}
