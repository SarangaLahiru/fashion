
var load=document.querySelector('.load')


window.onunload=function(){
    load.classList.remove('onload')
}
window.onbeforeunload=function(){
    load.classList.add('onload')
}



var h1=document.querySelector('.h1')
console.log(h1)
window.addEventListener('scroll',function(){
    if(this.scrollY>630){
        h1.classList.add('h2')
        
    }
    else{
        h1.classList.remove('h2')
    }
})

var ad1=document.querySelector('.ad1')
var ad1img=ad1.querySelectorAll('.img')

function next1(){
    var curr=ad1.querySelector('.curr')
    curr.classList.remove('curr')
    if(curr.nextElementSibling){

        curr.nextElementSibling.classList.add('curr')
        
    }
    else{
        ad1img[0].classList.add('curr')
    }
}

var Time1=setInterval(next1,3000)

var ad3=document.querySelector('.ad3')
var slide1=ad3.querySelectorAll('.slide')

function next2(){
    slide1.forEach((item,i)=>{
        item.scrollLeft+=220;
        console.log(item.scrollLeft)
        if(item.scrollLeft==880){
            item.scrollLeft=0;
        }
    })
    
}

var time2=setInterval(next2,5000)

var ad4=document.querySelector('.ad4')
var slide2=ad4.querySelectorAll('.slide')

function next3(){
    slide2.forEach((item,i)=>{
        item.scrollLeft+=220;
        console.log(item.scrollLeft)
        if(item.scrollLeft==880){
            item.scrollLeft=0;
        }
    })
    
}

var time3=setInterval(next3,4000)


var micon=h1.querySelector('.micon')
var icon1=micon.querySelector('.icon')
var container1=document.querySelector('.container1')

micon.addEventListener('click',function(e){
    e.preventDefault();
    icon1.classList.toggle('mact')
    container1.classList.toggle('c1act')
})
window.addEventListener('scroll',function(){
    if(this.scrollY<630){
        container1.classList.remove('c1act')
        
        
    }
    if(this.scrollY<630){
        icon1.classList.remove('mact')
        ls[1].classList.add('lsact')
    }
    if(this.scrollY>630){
        ls[0].classList.remove('lsact')
        ls[1].classList.remove('lsact')
        ls[2].classList.remove('lsact')
        ls[3].classList.remove('lsact')
        ls[4].classList.remove('lsact')
    }
})

var box1=container1.querySelector('.box')
var ls=box1.querySelectorAll('.ls')

ls[0].addEventListener('click',function(e){
    e.preventDefault();
    ls[0].classList.add('lsact')
    ls[1].classList.remove('lsact')
    ls[2].classList.remove('lsact')
    ls[3].classList.remove('lsact')
    ls[4].classList.remove('lsact')
    
})
ls[1].addEventListener('click',function(e){
    e.preventDefault();
    ls[1].classList.add('lsact')
    ls[0].classList.remove('lsact')
    ls[2].classList.remove('lsact')
    ls[3].classList.remove('lsact')
    ls[4].classList.remove('lsact')
})
ls[2].addEventListener('click',function(e){
    e.preventDefault();
    ls[2].classList.add('lsact')
    ls[1].classList.remove('lsact')
    ls[0].classList.remove('lsact')
    ls[3].classList.remove('lsact')
    ls[4].classList.remove('lsact')
    
})
ls[3].addEventListener('click',function(e){
    e.preventDefault();
    ls[3].classList.add('lsact')
    ls[1].classList.remove('lsact')
    ls[2].classList.remove('lsact')
    ls[0].classList.remove('lsact')
    ls[4].classList.remove('lsact')
    
})
ls[4].addEventListener('click',function(e){
    e.preventDefault();
    ls[4].classList.add('lsact')
    ls[1].classList.remove('lsact')
    ls[2].classList.remove('lsact')
    ls[0].classList.remove('lsact')
    ls[3].classList.remove('lsact')
    
})

var container2=document.querySelector('.container2')
var menu=container2.querySelector('.menu')
var m=menu.querySelectorAll('.m')
var mact=menu.querySelector('.mact')


var cartcancle=document.querySelector('.cartcancle')
var cartls=document.querySelector('.cartls')
var icart=h1.querySelector('.icart')

icart.addEventListener('click',function(e){
    e.preventDefault();
    cartls.classList.add('actcartls')
})
cartcancle.addEventListener('click',function(e){
    e.preventDefault();
    cartls.classList.remove('actcartls')
})


var container4=document.querySelector('.container4')
var filter=container4.querySelector('.filter')
window.addEventListener('scroll',function(){
    if(scrollY>800){
        filter.classList.add('actfilter')
    }
    else{
        filter.classList.remove('actfilter')
    }
})