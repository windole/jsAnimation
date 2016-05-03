function startMove(obj,attr,iTarget,fn){  //添加一个回调函数fn
  clearInterval(obj.timer);//1.2+++
  obj.timer=setInterval(function(){//1.2+++
  var icur=null;
//1.判断类型
  if(attr=='opacity'){
    icur=Math.round(parseFloat(getStyle(obj,attr))*100);
    }else{
      icur=parseInt(getStyle(obj,attr));
      }
//2.算速度
    var speed=(iTarget-icur)/8;
    speed=speed>0?Math.ceil(speed):Math.floor(speed);
//3.检测停止
    if(icur==iTarget){
      clearInterval(obj.timer);
      if(fn){ //判断是否存在回调函数,并调用
        fn();
          }
    }else{
      if(attr=='opacity'){
          obj.style.filter='alpha(opacity:'+(icur+speed)+')';
          obj.style.opacity=(icur+speed)/100;
    }else{
      obj.style[attr]=icur+speed+'px';
      }

    }
  },30);
}
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
      }else{
        return getComputedStyle(obj,false)[attr];
        }
}