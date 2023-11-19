let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let RIVER = document.getElementById('RIVER');
let boat = document.getElementById('boat');
let NOUSSAIR = document.getElementById('.NOUSSAIR');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px' ;
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    RIVER.style.top = value * 2 + 'px';
    boat.style.left = value * 2 + 'px';
    NOUSSAIR.style.fontSize = value + 'px';
    if(scrollY >= 67){
        NOUSSAIR.style.fontSize = 67 + 'px';
        NOUSSAIR.style.position = 'fixed';
        if(scrollY >= 478){
            NOUSSAIR.style.display = 'none';
        }else{
            NOUSSAIR.style.display = 'block';
        }
        if(scrollY >= 127){
            document.queryselector('.main').style.background = 'linear-gradient(#376281,#10001f)'
        }else{
            document.queryselector('.main').style.background = 'linear-gradient(#200016,#10001f)'
        }
    }
}
