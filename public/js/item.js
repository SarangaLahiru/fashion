
var bimg=document.querySelector('.bimg')
var boxl=document.querySelector('.boxl')
var aa=boxl.querySelectorAll('.bb')
var boxcb=document.querySelector('.boxcb')
var bb=boxcb.querySelectorAll('.bb')
var limg=document.querySelector('.limg')

bb[1].addEventListener('click',function(){
    bimg.src="/public/images/img/Untitled-1.png";
    console.log(bimg)

})
bb[0].addEventListener('click',function(){
    bimg.src="/public/images/img/Untitled-2.png";
    console.log(bimg)

})
bb[2].addEventListener('click',function(){
    bimg.src="/public/images/img/Untitled-3.png";
    console.log(bimg)

})
bb[3].addEventListener('click',function(){
    bimg.src="/public/images/img/Untitled-4.png";
    console.log(bimg)

})

console.log(aa)

aa[1].addEventListener('click',function(){
    limg.src="/public/images/img/Untitled-5.png";
    console.log(bimg)

})
aa[0].addEventListener('click',function(){
    limg.src="/public/images/img/Untitled-6.png";
    console.log(bimg)

})
aa[2].addEventListener('click',function(){
    limg.src="/public/images/img/Untitled-7.png";
    console.log(bimg)

})
aa[3].addEventListener('click',function(){
    limg.src="/public/images/img/Untitled-8.png";
    console.log(bimg)

})




var container1=document.querySelector('.container1')
var box=document.querySelectorAll('.boxc')


 bimg.addEventListener('click',function(){
    box[0].classList.toggle('curr')
    box[1].classList.add('boxc1')
    container1.classList.toggle('curr1')
 })
 limg.addEventListener('click',function(){
    box[0].classList.toggle('curr')
    container1.classList.toggle('curr2')
    box[1].classList.toggle('boxl2')
   
    


    


 })
 var aa=document.querySelectorAll('aa')

 console.log(bb)

 var aa=document.querySelector('.aa')
var bb=document.querySelector('.bb')
var cart=document.getElementById('cart')
var cancle1=document.getElementById('cancle')

cart.addEventListener('click',function(e){
    e.preventDefault();
    aa.classList.remove('aa')
    bb.classList.remove('bb')
})
cancle.addEventListener('click',function(e){
    e.preventDefault();
    aa.classList.add('aa')
    bb.classList.add('bb')
})


var seem=document.getElementById('seem')
var dis=document.querySelector('.dis')
var bdis=document.querySelector('.bdis')

seem.addEventListener('click',function(e){
    e.preventDefault();
    container1.classList.add('detail')
    box[0].classList.add('detail1')
     box[1].classList.add('detail2')
     dis.classList.add('detail3')
     bdis.classList.add('detail4')
})


 
 


 