var frmg=document.querySelectorAll('.frm-g')
var a1=document.querySelectorAll('.a1')
var b1=document.querySelectorAll('.b1')

b1[0].addEventListener('focus',function(){
    a1[0].classList.add('a2')

    if(b1[1].value){

        a1[1].classList.add('a2')

    }
    else{
        a1[1].classList.remove('a2')

    }
    if(b1[2].value){

        a1[2].classList.add('a2')

    }
    else{
        a1[2].classList.remove('a2')

    }
    if(b1[3].value){

        a1[3].classList.add('a2')

    }
    else{
        a1[3].classList.remove('a2')

    }
})
b1[1].addEventListener('focus',function(){
    a1[1].classList.add('a2')

    if(b1[0].value){

        a1[0].classList.add('a2')

    }
    else{
        a1[0].classList.remove('a2')

    }

    if(b1[2].value){

        a1[2].classList.add('a2')

    }
    else{
        a1[2].classList.remove('a2')

    }
    if(b1[3].value){

        a1[3].classList.add('a2')

    }
    else{
        a1[3].classList.remove('a2')

    }

})
b1[2].addEventListener('focus',function(){
    a1[2].classList.add('a2')

    if(b1[0].value){

        a1[0].classList.add('a2')

    }
    else{
        a1[0].classList.remove('a2')

    }
    if(b1[1].value){

        a1[1].classList.add('a2')

    }
    else{
        a1[1].classList.remove('a2')

    }
    if(b1[3].value){

        a1[3].classList.add('a2')

    }
    else{
        a1[3].classList.remove('a2')

    }
})
b1[3].addEventListener('focus',function(){
    a1[3].classList.add('a2')

    if(b1[0].value){

        a1[0].classList.add('a2')

    }
    else{
        a1[0].classList.remove('a2')

    }
    if(b1[1].value){

        a1[1].classList.add('a2')

    }
    else{
        a1[1].classList.remove('a2')

    }
    if(b1[2].value){

        a1[2].classList.add('a2')

    }
    else{
        a1[2].classList.remove('a2')

    }
})
console.log(b1[0])

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



