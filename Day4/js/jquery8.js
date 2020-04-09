$(function(){
    $(".btn1").click(function(){
        $('div').addClass("new");
    });
});

$(function(){
    $(".btn2").click(function(){
        $('div').toggleClass("new");
    });
});