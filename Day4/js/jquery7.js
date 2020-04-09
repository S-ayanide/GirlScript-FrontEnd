$(function(){
    $(".btn1").click(function(){
        $("h1").text(function(index, original){
            return original + "jQuery(from js)"
        });
    });
});


$(function(){
    $(".btn2").click(function(){
        $('h1').html("<strike>You are getting good at jQuery</strike>");
        $('p').html("Another text");
    });
});

$(function(){
    $(".btn3").click(function(){
        $('input').val("Paris");        
    });
});