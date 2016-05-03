window.onload=function  () {
	var oMove=document.getElementById('move');
	var aList=oMove.getElementsByTagName('a');
	for (var i = 0; i < aList.length; i++) {
		aList[i].onmouseenter=function () {
			var _this =this.getElementsByTagName('i')[0];
			startMove(_this,{top:-25,opacity:0},function () {
				_this.style.top=30+'px';
				startMove(_this,{top:10,opacity:100});
			});
		}
	}

}