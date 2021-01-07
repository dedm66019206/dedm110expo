$(document).ready(function () {
  setTimeout(function () {
    $(".loading").fadeOut(500);
  }, 3000);

});

window.onload = function(){
  var oRandomC = document.getElementById('randomChange');
  var oRandomH4 = document.getElementsByClassName('loading_word')[0];

  var timer = null;
  var timer = null;
     var word15Arr = [
       '預見海洋最糟的情況，你會怎麼做？', '審判與混沌，見證法老重生之途', '產地到餐桌，值得收藏的海鮮知識庫', '呼吸停止前，找到生存的方法吧！',
       ' 人生想要精彩 旗跑就要現在', '星象之形必有因，破謠解惑為君醒', '把所有空曠，慢條斯理地盛裝', '一探究竟，就近移碳',
       '霸凌背後的真相，究竟是什麼？','聽聞炮火至，遊人夜未眠','用擬人化的圖像，拉近與廟的距離','粵級挑戰，等你挑戰!'];
     var index = 11;

  word15Arr.sort(randomsort);
  timer = setInterval(function(){
    Loading();
  }, 1000);

  function Loading(){
    if(index < word15Arr.length - 1){
      index++;
    }else{
      index = 0;
    }
    oRandomH4.innerHTML = word15Arr[index];
  }
  function randomsort(a, b) {
    return Math.random()>.5 ? -1 : 1;
    //用Math.random()函式生成0~1之間的隨機數與0.5比較，返回-1或1
  }

  box();
  team();
  modal();
  YTlazyload();

  var oNone = document.getElementById('oNone');
    var Width = document.documentElement.clientWidth;

    //螢幕過小，限制觀看
    if(Width < 1366){
        document.body.overflowY = 'hidden'; 
        oNone.style.display = 'block';
      }else{
        document.documentElement.style.overflowY = 'scroll'; 
        oNone.style.display = 'none';
      }
      window.onresize = function(){
        Width = document.documentElement.clientWidth;
        if(Width < 1366){
          document.documentElement.style.overflowY = 'hidden'; 
          oNone.style.display = 'block';
        }else{
          document.documentElement.style.overflowY = 'scroll'; 
          oNone.style.display = 'none';
        }
      }


}


$(document).mousemove(function(e) {
   var moveX = (e.pageX * -1/20 );
   var moveY = (e.pageY * -1/20 );
   $(".box").css('background-position', moveX + 'px ' + moveY + 'px');
 });
//Get the button:
mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } 
    else {
      mybutton.style.display = "none";
    }
  }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}