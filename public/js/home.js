
var right=document.getElementById('right')
var left=document.getElementById('left')

right.addEventListener('click',function(e){
    e.preventDefault();
    
    
    next1();
    clearInterval(slide1);
    slide1=setInterval(next1,3000)

    next2();
    clearInterval(time2);
    time2=setInterval(next2,3000)

    next3();
    clearInterval(time3);
    time3=setInterval(next3,3000)
    
    
    
})
left.addEventListener('click',function(e){
    e.preventDefault();
    
   
    prenext1();
    clearInterval(slide1);
    slide1=setInterval(next1,3000)

    prenext2();
    clearInterval(time2);
    time2=setInterval(next2,3000)

    prenext3();
    clearInterval(time3);
    time3=setInterval(next3,3000)
    
    
})


function prenext1(){
     var container=document.getElementById('container')
var img=container.querySelectorAll('.aa')
 var img1=document.querySelector('.img1')
var img2=document.querySelector('.img2')
var img0=document.querySelector('.img0')
var img01=document.querySelector('.img01')
var img02=document.querySelector('.img02')
var img3=document.querySelector('.img3')
var img03=document.querySelector('.img03')
    

  
    
    var curr=document.querySelector('.curr')
    curr.classList.remove('curr')

    if(curr.nextElementSibling){
          

        if(curr.className=='aa img img3'){
            img3.classList.remove('img3')
            img3.classList.add('img2')
            img1.classList.remove('img1')
            img1.classList.add('img0')
            img2.classList.remove('img2')
            img2.classList.add('img1')
            img0.classList.remove('img0')
            img0.classList.add('img01')
            img02.classList.remove('img02')
            img02.classList.add('img03')
            img01.classList.remove('img01')
            img01.classList.add('img02')
            img03.classList.remove('img03')
            img03.classList.add('img3')
            

        }
        else if(curr.className=='aa img img2'){
            img2.classList.remove('img2')
            img2.classList.add('img1')
            img3.classList.remove('img3')
            img3.classList.add('img2')
            img1.classList.remove('img1')
            img1.classList.add('img0')
            img0.classList.remove('img0')
            img0.classList.add('img01')
            img02.classList.remove('img02')
            img02.classList.add('img03')
            img01.classList.remove('img01')
            img01.classList.add('img02')
            img03.classList.remove('img03')
            img03.classList.add('img3')

        }
        else if(curr.className=='aa img img1'){
            img1.classList.remove('img1')
            img1.classList.add('img0')
            img2.classList.remove('img2')
            img2.classList.add('img1')
            img3.classList.remove('img3')
            img3.classList.add('img2')
            img0.classList.remove('img0')
            img0.classList.add('img01')
            img02.classList.remove('img02')
            img02.classList.add('img03')
            img01.classList.remove('img01')
            img01.classList.add('img02')
            img03.classList.remove('img03')
            img03.classList.add('img3')

        }
        else if(curr.className=='aa img img0'){
            img0.classList.remove('img0')
            img0.classList.add('img01')
            img2.classList.remove('img2')
            img2.classList.add('img1')
            img3.classList.remove('img3')
            img3.classList.add('img2')
            img1.classList.remove('img1')
            img1.classList.add('img0')
            img02.classList.remove('img02')
            img02.classList.add('img03')
            img01.classList.remove('img01')
            img01.classList.add('img02')
            img03.classList.remove('img03')
            img03.classList.add('img3')

        }
        else if(curr.className=='aa img img01'){
            img0.classList.remove('img0')
            img0.classList.add('img01')
            img2.classList.remove('img2')
            img2.classList.add('img1')
            img3.classList.remove('img3')
            img3.classList.add('img2')
            img1.classList.remove('img1')
            img1.classList.add('img0')
            img02.classList.remove('img02')
            img02.classList.add('img03')
            img01.classList.remove('img01')
            img01.classList.add('img02')
            img03.classList.remove('img03')
            img03.classList.add('img3')

        }
        else if(curr.className=='aa img img02'){
            img0.classList.remove('img0')
            img0.classList.add('img01')
            img2.classList.remove('img2')
            img2.classList.add('img1')
            img3.classList.remove('img3')
            img3.classList.add('img02')
            img1.classList.remove('img1')
            img1.classList.add('img0')
            img02.classList.remove('img02')
            img02.classList.add('img03')
            img01.classList.remove('img01')
            img01.classList.add('img02')
            img03.classList.remove('img03')
            img03.classList.add('img3')

        }
        else if(curr.className=='aa img img03'){
            img0.classList.remove('img0')
            img0.classList.add('img01')
            img2.classList.remove('img2')
            img2.classList.add('img1')
            img3.classList.remove('img3')
            img3.classList.add('img02')
            img1.classList.remove('img1')
            img1.classList.add('img0')
            img02.classList.remove('img02')
            img02.classList.add('img03')
            img01.classList.remove('img01')
            img01.classList.add('img02')
            img03.classList.remove('img03')
            img03.classList.add('img3')

        }
       curr.nextElementSibling.classList.add('curr')
    
    }

    else{
         
        
          

        if(curr.className=='aa img img3'){
            img3.classList.remove('img3')
            img3.classList.add('img2')
            img1.classList.remove('img1')
            img1.classList.add('img0')
            img2.classList.remove('img2')
            img2.classList.add('img1')
            img0.classList.remove('img0')
            img0.classList.add('img01')
            img02.classList.remove('img02')
            img02.classList.add('img03')
            img01.classList.remove('img01')
            img01.classList.add('img02')
            img03.classList.remove('img03')
            img03.classList.add('img3')
            

        }
        else if(curr.className=='aa img img2'){
            img2.classList.remove('img2')
            img2.classList.add('img1')
            img3.classList.remove('img3')
            img3.classList.add('img2')
            img1.classList.remove('img1')
            img1.classList.add('img0')
            img0.classList.remove('img0')
            img0.classList.add('img01')
            img02.classList.remove('img02')
            img02.classList.add('img03')
            img01.classList.remove('img01')
            img01.classList.add('img02')
            img03.classList.remove('img03')
            img03.classList.add('img3')

        }
        else if(curr.className=='aa img img1'){
            img1.classList.remove('img1')
            img1.classList.add('img0')
            img2.classList.remove('img2')
            img2.classList.add('img1')
            img3.classList.remove('img3')
            img3.classList.add('img2')
            img0.classList.remove('img0')
            img0.classList.add('img01')
            img02.classList.remove('img02')
            img02.classList.add('img03')
            img01.classList.remove('img01')
            img01.classList.add('img02')
            img03.classList.remove('img03')
            img03.classList.add('img3')

        }
        else if(curr.className=='aa img img0'){
            img0.classList.remove('img0')
            img0.classList.add('img01')
            img2.classList.remove('img2')
            img2.classList.add('img1')
            img3.classList.remove('img3')
            img3.classList.add('img2')
            img1.classList.remove('img1')
            img1.classList.add('img0')
            img02.classList.remove('img02')
            img02.classList.add('img03')
            img01.classList.remove('img01')
            img01.classList.add('img02')
            img03.classList.remove('img03')
            img03.classList.add('img3')

        }
        else if(curr.className=='aa img img01'){
            img0.classList.remove('img0')
            img0.classList.add('img01')
            img2.classList.remove('img2')
            img2.classList.add('img1')
            img3.classList.remove('img3')
            img3.classList.add('img2')
            img1.classList.remove('img1')
            img1.classList.add('img0')
            img02.classList.remove('img02')
            img02.classList.add('img03')
            img01.classList.remove('img01')
            img01.classList.add('img02')
            img03.classList.remove('img03')
            img03.classList.add('img3')

        }
        else if(curr.className=='aa img img02'){
            img0.classList.remove('img0')
            img0.classList.add('img01')
            img2.classList.remove('img2')
            img2.classList.add('img1')
            img3.classList.remove('img3')
            img3.classList.add('img02')
            img1.classList.remove('img1')
            img1.classList.add('img0')
            img02.classList.remove('img02')
            img02.classList.add('img03')
            img01.classList.remove('img01')
            img01.classList.add('img02')
            img03.classList.remove('img03')
            img03.classList.add('img3')

        }
        else if(curr.className=='aa img img03'){
            img0.classList.remove('img0')
            img0.classList.add('img01')
            img2.classList.remove('img2')
            img2.classList.add('img1')
            img3.classList.remove('img3')
            img3.classList.add('img02')
            img1.classList.remove('img1')
            img1.classList.add('img0')
            img02.classList.remove('img02')
            img02.classList.add('img03')
            img01.classList.remove('img01')
            img01.classList.add('img02')
            img03.classList.remove('img03')
            img03.classList.add('img3')

        }
        img[0].classList.add('curr')
        
    

}
}


function next1(){
     var container=document.getElementById('container')
var img=container.querySelectorAll('.aa')
 var img1=document.querySelector('.img1')
var img2=document.querySelector('.img2')
var img0=document.querySelector('.img0')
var img01=document.querySelector('.img01')
var img02=document.querySelector('.img02')
var img3=document.querySelector('.img3')
var img03=document.querySelector('.img03')
    

  
    
    var curr=document.querySelector('.curr')
    curr.classList.remove('curr')

    if(curr.previousElementSibling){
          

        if(curr.className=='aa img img3'){
            img3.classList.remove('img3')
            img3.classList.add('img03')
            img1.classList.remove('img1')
            img1.classList.add('img2')
            img2.classList.remove('img2')
            img2.classList.add('img3')
            img0.classList.remove('img0')
            img0.classList.add('img1')
            img02.classList.remove('img02')
            img02.classList.add('img01')
            img01.classList.remove('img01')
            img01.classList.add('img0')
            img03.classList.remove('img03')
            img03.classList.add('img02')
            

        }
        else if(curr.className=='aa img img2'){
            img2.classList.remove('img2')
            img2.classList.add('img3')
            img3.classList.remove('img3')
            img3.classList.add('img03')
            img1.classList.remove('img1')
            img1.classList.add('img2')
            img0.classList.remove('img0')
            img0.classList.add('img1')
            img02.classList.remove('img02')
            img02.classList.add('img01')
            img01.classList.remove('img01')
            img01.classList.add('img0')
            img03.classList.remove('img03')
            img03.classList.add('img02')

        }
        else if(curr.className=='aa img img1'){
            img1.classList.remove('img1')
            img1.classList.add('img2')
            img2.classList.remove('img2')
            img2.classList.add('img3')
            img3.classList.remove('img3')
            img3.classList.add('img03')
            img0.classList.remove('img0')
            img0.classList.add('img1')
            img02.classList.remove('img02')
            img02.classList.add('img01')
            img01.classList.remove('img01')
            img01.classList.add('img0')
            img03.classList.remove('img03')
            img03.classList.add('img02')

        }
        else if(curr.className=='aa img img0'){
            img0.classList.remove('img0')
            img0.classList.add('img1')
            img2.classList.remove('img2')
            img2.classList.add('img3')
            img3.classList.remove('img3')
            img3.classList.add('img03')
            img1.classList.remove('img1')
            img1.classList.add('img2')
            img02.classList.remove('img02')
            img02.classList.add('img01')
            img01.classList.remove('img01')
            img01.classList.add('img0')
            img03.classList.remove('img03')
            img03.classList.add('img02')

        }
        else if(curr.className=='aa img img01'){
            img0.classList.remove('img0')
            img0.classList.add('img1')
            img2.classList.remove('img2')
            img2.classList.add('img3')
            img3.classList.remove('img3')
            img3.classList.add('img03')
            img1.classList.remove('img1')
            img1.classList.add('img2')
            img02.classList.remove('img02')
            img02.classList.add('img01')
            img01.classList.remove('img01')
            img01.classList.add('img0')
            img03.classList.remove('img03')
            img03.classList.add('img02')

        }
        else if(curr.className=='aa img img02'){
            img0.classList.remove('img0')
            img0.classList.add('img1')
            img2.classList.remove('img2')
            img2.classList.add('img3')
            img3.classList.remove('img3')
            img3.classList.add('img03')
            img1.classList.remove('img1')
            img1.classList.add('img2')
            img02.classList.remove('img02')
            img02.classList.add('img01')
            img01.classList.remove('img01')
            img01.classList.add('img0')
            img03.classList.remove('img03')
            img03.classList.add('img02')

        }
         else if(curr.className=='aa img img03'){
            img0.classList.remove('img0')
            img0.classList.add('img1')
            img2.classList.remove('img2')
            img2.classList.add('img3')
            img3.classList.remove('img3')
            img3.classList.add('img03')
            img1.classList.remove('img1')
            img1.classList.add('img2')
            img02.classList.remove('img02')
            img02.classList.add('img01')
            img01.classList.remove('img01')
            img01.classList.add('img0')
            img03.classList.remove('img03')
            img03.classList.add('img3')

        }
       curr.previousElementSibling.classList.add('curr')
    
    }

    else{
         
         if(curr.className=='aa img img3'){
            img3.classList.remove('img3')
            img3.classList.add('img03')
            img1.classList.remove('img1')
            img1.classList.add('img2')
            img2.classList.remove('img2')
            img2.classList.add('img3')
            img0.classList.remove('img0')
            img0.classList.add('img1')
            img02.classList.remove('img02')
            img02.classList.add('img01')
            img01.classList.remove('img01')
            img01.classList.add('img0')
            img03.classList.remove('img03')
            img03.classList.add('img02')
            

        }
        else if(curr.className=='aa img img2'){
            img2.classList.remove('img2')
            img2.classList.add('img3')
            img3.classList.remove('img3')
            img3.classList.add('img03')
            img1.classList.remove('img1')
            img1.classList.add('img2')
            img0.classList.remove('img0')
            img0.classList.add('img1')
            img02.classList.remove('img02')
            img02.classList.add('img01')
            img01.classList.remove('img01')
            img01.classList.add('img0')
            img03.classList.remove('img03')
            img03.classList.add('img02')

        }
        else if(curr.className=='aa img img1'){
            img1.classList.remove('img1')
            img1.classList.add('img2')
            img2.classList.remove('img2')
            img2.classList.add('img3')
            img3.classList.remove('img3')
            img3.classList.add('img03')
            img0.classList.remove('img0')
            img0.classList.add('img1')
            img02.classList.remove('img02')
            img02.classList.add('img01')
            img01.classList.remove('img01')
            img01.classList.add('img0')
            img03.classList.remove('img03')
            img03.classList.add('img02')

        }
        else if(curr.className=='aa img img0'){
            img0.classList.remove('img0')
            img0.classList.add('img1')
            img2.classList.remove('img2')
            img2.classList.add('img3')
            img3.classList.remove('img3')
            img3.classList.add('img03')
            img1.classList.remove('img1')
            img1.classList.add('img2')
            img02.classList.remove('img02')
            img02.classList.add('img01')
            img01.classList.remove('img01')
            img01.classList.add('img0')
            img03.classList.remove('img03')
            img03.classList.add('img02')

        }
        else if(curr.className=='aa img img01'){
            img0.classList.remove('img0')
            img0.classList.add('img1')
            img2.classList.remove('img2')
            img2.classList.add('img3')
            img3.classList.remove('img3')
            img3.classList.add('img03')
            img1.classList.remove('img1')
            img1.classList.add('img2')
            img02.classList.remove('img02')
            img02.classList.add('img01')
            img01.classList.remove('img01')
            img01.classList.add('img0')
            img03.classList.remove('img03')
            img03.classList.add('img02')

        }
        else if(curr.className=='aa img img02'){
            img0.classList.remove('img0')
            img0.classList.add('img1')
            img2.classList.remove('img2')
            img2.classList.add('img3')
            img3.classList.remove('img3')
            img3.classList.add('img03')
            img1.classList.remove('img1')
            img1.classList.add('img2')
            img02.classList.remove('img02')
            img02.classList.add('img01')
            img01.classList.remove('img01')
            img01.classList.add('img0')
            img03.classList.remove('img03')
            img03.classList.add('img02')

        }
         else if(curr.className=='aa img img03'){
            img0.classList.remove('img0')
            img0.classList.add('img1')
            img2.classList.remove('img2')
            img2.classList.add('img3')
            img3.classList.remove('img3')
            img3.classList.add('img03')
            img1.classList.remove('img1')
            img1.classList.add('img2')
            img02.classList.remove('img02')
            img02.classList.add('img01')
            img01.classList.remove('img01')
            img01.classList.add('img0')
            img03.classList.remove('img03')
            img03.classList.add('img3')

        }

        img[6].classList.add('curr')
        
    }

}

var slide1=setInterval(next1,3000)

var dis=document.querySelector('.dis')
var box1=dis.querySelectorAll('.box1')
var text=document.getElementById('text')




function next2(){
    var curr1=document.querySelector('.curr1')
    curr1.classList.remove('curr1')
    if(curr1.nextElementSibling){
        curr1.nextElementSibling.classList.add('curr1')
    }
    else{
        box1[0].classList.add('curr1')
    }

}
function prenext2(){
    var curr1=document.querySelector('.curr1')
    curr1.classList.remove('curr1')
    if(curr1.previousElementSibling){
        curr1.previousElementSibling.classList.add('curr1')
    }
    else{
        box1[5].classList.add('curr1')
    }

}


var time2=setInterval(next2,3000)

var count1=document.querySelector('.count1')
var count2=count1.querySelectorAll('.count2')



function next3(){
    var curr3=count1.querySelector('.curr3')
    curr3.classList.remove('curr3')
    if(curr3.nextElementSibling){
        curr3.nextElementSibling.classList.add('curr3')
    }
    else{
        count2[0].classList.add('curr3')
    }

}





function prenext3(){
    var curr3=count1.querySelector('.curr3')
    curr3.classList.remove('curr3')
    if(curr3.previousElementSibling){
        curr3.previousElementSibling.classList.add('curr3')
    }
    else{
        count2[5].classList.add('curr3')
    }

}
var time3=setInterval(next3,3000)

var h1=document.querySelector('.h1')
var container1=document.querySelector('.container1')
var container2=document.querySelector('.container2')


window.addEventListener('scroll',function(){
    if(this.scrollY>150){
        h1.classList.add('h2')
        container1.classList.add('a1')
    }
    else{
        h1.classList.remove('h2')

    }
    

    
})
window.addEventListener('scroll',function(){
    
    if(this.scrollY>250){
        container2.classList.remove('a2')

    }

    
})

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


var container3=document.querySelector('.container3')
var items=container3.querySelectorAll('.items')
console.log(items)

function sc(){
    items.forEach((item,i)=>{

    var pre=item.getBoundingClientRect();
    var wid=pre.width;

    item.scrollLeft+=300;

    console.log(item.scrollLeft)

    if(item.scrollLeft==760){
        item.scrollLeft=0;


    }

})
}
var time4=setInterval(sc,3000)



