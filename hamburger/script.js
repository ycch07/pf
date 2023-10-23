$(document).ready(function(){
    $('.toggle-menu,#menu .main-nav a').click (function(){
        $('.toggle-menu').toggleClass('active');
        $('#menu').toggleClass('open');
    });
    $("aside a.top").click(function(){
        $("html,body").animate({scrollTop:0},1300);
    });
});
