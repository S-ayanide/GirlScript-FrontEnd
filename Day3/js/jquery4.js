$(
    function(){
        $('h1').click(function(){
           $('.sampleBox').animate({
               height: '+=100px',
               width: '+=100px'
           }, 1000);
        });
    }
);
