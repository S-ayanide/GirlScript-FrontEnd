var d, h, m, s, clock, color;
var dayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var allbgColors = ["#f6e58d","#ffbe76","#7ed6df","#c7ecee","#be2edd","#95afc0","#78e08f","#f8c291","#b71540"];
var count = 0;

function clocky(){
    d = new Date();
    h = d.getHours();
    m= d.getMinutes();
    s = d.getSeconds();
    count++;

    if ( h <= 9 ) {
        h = '0' +  h;
    }
    if (m <= 9) {
        m = '0' + m;
    }
    if ( s <= 9) {
        s = '0' + s;
    }

    if(count == 7){
        count=0;
    }

    clock = h + "  :  " + m + "  :  " + s;
    color = '#' + h + m + s;

    document.getElementById("clock").innerHTML = clock;
    document.getElementById('day').innerHTML = dayList[count];
    document.body.style.background = color;

    setTimeout(clocky, 1000);
}

clocky();