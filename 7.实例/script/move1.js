//function move(obj,{niG1:biG1,niG2:biG2},fn)
function startMove(obj,json,fn){
        clearInterval(obj.timer);
    obj.timer=setInterval(function(){//这里的timer为什么不能var？
        var flag=true;//假设所有动作都已完成成立。
    for(var attr in json){
        //1.取当前值
    	var icur=0;
    	if(attr=='opacity'){//判断传入参数是否为透明度
           icur=Math.round(parseFloat(getStyle(obj,attr))*100);
    	}else{
    	 icur=parseInt(getStyle(obj,attr));
    	}
        //2.计算速度
    	var speed=(json[attr]-icur)/8;
    	speed=speed>0?Math.ceil(speed):Math.floor(speed);
        //3.检测停止
    	if(json[attr]!=icur){
    		flag=false;
        }
    		if(attr=='opacity'){//判断结果是否为透明度
    			obj.style[attr]=(icur+speed)/100;
    			obj.style.filter='alpha(opacity:'+(icur+speed)+')';
    		}else{
    		obj.style[attr]=icur+speed+'px';}
        }
    
        if(flag){
            clearInterval(obj.timer);
          if(fn){
        fn();
          }
        }
    },30)
}
//封装一个获取样式的方法
function getStyle(obj,attr){
   if(obj.currentStyle){
    return obj.currentStyle[attr];
   }else{
    return getComputedStyle(obj,false)[attr];
   }
}