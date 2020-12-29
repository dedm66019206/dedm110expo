function box(){
  var winx = 0.5 * window.innerWidth; // 定位中心點x
  var winy = 0.5 * window.innerHeight; // 定位中心點y
  var posx = 0;
  var posy = 0;

  window.onmousemove = function(){
    getCursorPosition();
    var X = 0.04 * (posx - winx); // 0.04倍的差值
    var XX = 0.1 * (posx - winx); // 0.07倍的差值
    var Y = 0.04 * (posy - winy);
    var YY = 0.07 * (posy - winy);

    var obj = document.getElementsByClassName('o');

    // console.log(Math.random(200));

    for(var i=0; i<4; i++){
      if(i==1 || i==2){ // 不同的元素使用不同差距
        obj[i].style.marginLeft = obj[i].getAttribute('mX')-XX + 'px';
        obj[i].style.marginTop = obj[i].getAttribute('mY')-YY + 'px';
      }else{
        obj[i].style.marginLeft = obj[i].getAttribute('mX')-X + 'px';
        obj[i].style.marginTop = obj[i].getAttribute('mY')-Y + 'px'; // + Math.random()*20
      }
    }

  }

  function getCursorPosition(e){
        if (!e) var e = window.event;
        if (e.pageX || e.pageY)     {
            posx = e.pageX- document.documentElement.scrollLeft- document.body.scrollLeft;
            posy = e.pageY- document.documentElement.scrollTop- document.body.scrollTop;
        }
        else if (e.clientX || e.clientY)     {//for fucking IE
            posx = e.clientX ;//+ document.body.scrollLeft+ document.documentElement.scrollLeft;
            posy = e.clientY ;//+ document.body.scrollTop + document.documentElement.scrollTop;
            //如果想取得目前的捲動值 就把後面的註解拿掉
        }

        return posx, posy;//posx posy就是游標的X,Y值了
    }
}