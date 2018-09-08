$(document).ready(function () {
    var stat = 0;
    $(".onoff").click(function () {
        if (stat == 0) {
            $(".front").css({ 'transform': 'rotateX(0deg)', 'margin-top': '276px' });
            setTimeout(function () {
                $(".back").css("background-image", "url(img/face-back-2.png)");
            }, 500);
            stat = 1;
        }
        else {
            $(".back").css("background-image", "url(img/face-back.png)");
            setTimeout(function () {
                $(".front").css({ 'transform': 'rotateX(45deg)', 'margin-top': '260px' });
            }, 300);
            stat = 0;
        }
    });
});