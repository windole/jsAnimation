function startMove(obj,json,fn){  //添加一个回调函数fn
  clearInterval(obj.timer);
  obj.timer=setInterval(function(){
  var flag= true;
  //1.取当前的值
  for(var attr in json){
  var icur=0;
  if(attr=='opacity'){
    icur=Math.round(parseFloat(getStyle(obj,attr))*100);
    }else{
      icur=parseInt(getStyle(obj,attr));
      }
//2.算速度
    var speed=(json[attr]-icur)/8;
    speed=speed>0?Math.ceil(speed):Math.floor(speed);
//3.检测停止
    if(json[attr]!=icur){
        flag=false;
  
      if(attr=='opacity'){
          obj.style.filter='alpha(opacity:'+(icur+speed)+')';
          obj.style[attr]=(icur+speed)/100;
      }else{
      obj.style[attr]=icur+speed+'px';
      }
    }
    if(flag){
        clearInterval(obj.timer);
        //flag=true;
      if(fn){ //判断是否存在回调函数,并调用
        fn();
          }
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