var img=document.querySelectorAll('.img')


function next(){
    var curr=document.querySelector('.curr')

    curr.classList.remove('curr')
    if(curr.nextElementSibling){
        curr.nextElementSibling.classList.add('curr')
    }
    else{
        img[0].classList.add('curr')
    }
}
var slideTime=setInterval(next,3000)

var carBox=document.querySelector('.cartBox')
var cbtn=document.querySelector('.cbtn')
var cart=document.getElementById('cart')

cart.addEventListener('click',function(e){
    e.preventDefault();
    carBox.classList.add('cart1')
})
cbtn.addEventListener('click',function(e){
    e.preventDefault();
    carBox.classList.remove('cart1')
})