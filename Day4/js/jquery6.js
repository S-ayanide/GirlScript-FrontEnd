$(function(){
    $(".btn1").click(function(){
        alert("Text is: " + $("h1").text());
    });
});

$(function(){
    $(".btn2").click(function(){
        alert("HTML is: "+ $('h1').html());
    });
});

$(function(){
    $(".btn3").click(function(){
        alert("Value is: "+ $("input").val());
    });
});

$(function(){
    $(".btn4").click(function(){
        $('a').attr({
            "href": "http://bing.com",
            "title": "Going to Bing"
        });
    });
})