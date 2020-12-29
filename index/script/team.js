function team(){
    var oBox = document.getElementById('changeBox');
    var oBigView = oBox.getElementsByClassName('bigView')[0];
    // var oBack = oBox.getElementsByClassName('back')[0];
    var oBack = oBigView.getElementsByClassName('back')[0];
    var oNext = oBigView.getElementsByClassName('next')[0];
    var oBigViewUl = oBigView.getElementsByTagName('ul')[0];
    var aBigViewLi = oBigViewUl.getElementsByTagName('li');
  
    //新增AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    var oTag = oBigViewUl.getElementsByClassName('tag');
    var teamimg = document.getElementsByClassName('teamimg');
    var oSmallView = oBox.getElementsByClassName('smallView')[0];
    var oSmallViewUl = oSmallView.getElementsByTagName('ul')[0];
    var aSmallViewLi = oSmallView.getElementsByTagName('li');
  
    // 控制下標
    var index = 0;
    // 小圖標下標
    var nClick = 0;
  
  
    oBigViewUl.style.marginLeft = (window.innerWidth / 2) - 370 + 'px';
    window.onresize = function(){
      console.log(window.innerWidth);
      oBigViewUl.style.marginLeft = (window.innerWidth / 2) - 370 + 'px';
    }
  
    // 上一張
    oBack.onclick = function(){
      index--;
      if(index < 0){
        index = aBigViewLi.length - 1;
      }
      changeView();
    }
    // 下一張
    oNext.onclick = function(){
      index++;
      if(index > aBigViewLi.length - 1){
        index = 0;
      }
      changeView();
    }
  
    // 小圖
    for(var i=0; i<aSmallViewLi.length; i++){
      aSmallViewLi[i].index = i;
  
      if(index == i){
        aSmallViewLi[i].style.opacity = 1;
        aSmallViewLi[i].style.filter = 'alpha(opacity=100)';

      }
  
      aSmallViewLi[i].onmouseover = function(){
        startMove(this, {opacity: 100});
      }
      aSmallViewLi[i].onmouseout = function(){
        // 沒點擊才執行
        if(this.index != nClick){
          startMove(this, {opacity: 30});
        }
      }
      aSmallViewLi[i].onclick = function(){
        index = this.index;
        changeView();
      }
    }

    function changeView(){
      startMove(aSmallViewLi[nClick], {opacity: 30}); // 取消上個
      startMove(aBigViewLi[nClick], {
        opacity: 50,
        width: 375,
        height: 375,
        marginTop: 75
      });
      //新增AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
      startMove(oTag[nClick], {
        opacity: 0,
        width: 375,
        // marginTop: -150,
        marginLeft: 32
      });
      startMove(oTag[nClick].children[0], {
        fontSize: 20,
        width: 100
      });
      startMove(oTag[nClick].children[1], {
        fontSize: 20,
        width: 100
      });
  
      nClick = index; // 指定下個
  
  
      startMove(aSmallViewLi[nClick], {opacity: 100}); // 動作下個
      startMove(aBigViewLi[nClick], {
        opacity: 100,
        width: 450,
        height: 450,
        marginTop: 0
      });
      //新增AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
      startMove(oTag[nClick], {
        opacity: 100,
        width: 450,
        // marginTop: -80,
        marginLeft: 0
      });
      startMove(oTag[nClick].children[0], {
        fontSize: 28,
        width: 165
      });
      startMove(oTag[nClick].children[1], {
        fontSize: 28,
        width: 165
      });
  
      // 大圖
      var tempW = 375 + 200 ;
      startMove(oBigViewUl, {left: -index*tempW});
    }
    //新增AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    //新的內容 控制文字出現
    for(var i=0; i<aBigViewLi.length; i++){
      aBigViewLi[i].index = i;
  
      aBigViewLi[i].onmouseover = function(){
        startMove(this.children[1], {opacity: 100}, 20);
        //startMove(teamimg.children[1],{filter:brightness(0.5)},20);
      }
      aBigViewLi[i].onmouseout = function(){
          startMove(this.children[1], {opacity: 0});
          //startMove(teamimg.children[1],{filter:brightness(1)},20);
      }
    }
  }