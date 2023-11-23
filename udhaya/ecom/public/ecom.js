let search=document.querySelector('.search-box');


document.querySelector('#search-icon').onclick =()=>{
    search.classList.toggle('active');
    cart.classList.remove('active');
   user.classList.remove('active');
   navbar.classList.remove('active');
   
}


let cart=document.querySelector('.cart');

document.querySelector('#cart-icon').onclick=()=>{
   cart.classList.toggle('active');
   search.classList.remove('active')
   user.classList.remove('active')
   navbar.classList.remove('active');
}

let user=document.querySelector('.user');

document.querySelector('#user-icon').onclick=()=>{
    user.classList.toggle('active');
    search.classList.remove('active');
    navbar.classList.remove('active');
    cart.classList.remove('active');


}


//navbar 
let header=document.querySelector('header');
window.addEventListener('scroll',()=>{
        header.classList.toggle('shadow',window.scrollY > 0 )
})

window.onscroll = () => {
    cart.classList.remove('active');
    search.classList.remove('active')
    user.classList.remove('active');
    navbar.classList.remove('active');

}




let navbar=document.querySelector('.navbar');


document.querySelector('#menu-icon').onclick =()  =>{

    navbar.classList.toggle('active');
    cart.classList.remove('active');
    search.classList.remove('active')
    user.classList.remove('active');

}



var swiper = new Swiper(".new-arrival", {
    spaceBetween: 20,
   loop: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    centeredSlides:true,
    
    breakpointer: {
        0:{
            slidesPerView: 0,
        },
        568:{
            slidesPerView: 2,
        },
        768:{
            slidesPerView: 2,
        },
        1020:{
            slidesPerView: 3,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }, 
    
  });


  