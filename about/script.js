$(window).on("load",function(){
    $('html').css('overflow-y', 'auto');
    $(".loading_wrapper").fadeOut("slow");
    $('#main_content').css('visibility', 'visible');
  });

/*-----錨點-----*/
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({
                        scrollTop: target.offset().top
                    },
                    1000
                );
                return false;
            }
        }
    });
});


/*-----導覽列-----*/

$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
        $('#bar_bg').fadeIn(500);
        $('#bar_bg').css('opacity', '0.5');
    } else {
        $('#bar_bg').fadeOut();
    }
});

/*-----按鈕列-----*/

$(window).scroll(function () {
    if ($(this).scrollTop() > 1200) {
        $('#btn_bar').fadeIn();
        $('#btn_bar').css('opacity', '1');
    } else {
        $('#btn_bar').fadeOut();
    }
});

$(function () {
    /* 按下GoTop按鈕時的事件 */
    $('#gotop').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 'slow'); /* 返回到最頂上 */
        return false;
    });
});