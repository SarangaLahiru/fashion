var ld=document.querySelector('.ld');


window.onbeforeunload=function(){
    ld.classList.add('ldd')

}
window.onunload=function(){
    ld.classList.remove('ldd')
}

var otp=document.getElementById('otp')
var c1=document.querySelectorAll('.c1')

c1[0].addEventListener('keyup',function(){
    c1[1].focus();
})
c1[1].addEventListener('keyup',function(){
    c1[2].focus();
})
c1[2].addEventListener('keyup',function(){
    c1[3].focus();
})

var ld=document.querySelector('.ld');


window.onbeforeunload=function(){
    ld.classList.add('ldd')

}
window.onunload=function(){
    ld.classList.remove('ldd')
}