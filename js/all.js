$(document).ready(function () {

    // dropdown
    $(".dropdown-open").click(function (e) { 
        e.preventDefault();
        $(this).parent().toggleClass("active");
        $(this).parent().find("ul").slideToggle();

        $(this).parent().siblings().removeClass("active");
        $(this).parent().siblings().find("ul").slideUp();
    });

    $(".top").click(function (e) { 
        $('html,body').animate({
            scrollTop:0
        },1500); //逐漸滑動回到最上方
    
        
    });


    // Swiper
    const swiper = new Swiper('.swiper-container', {

        speed:3000,
        loop: true,

        autoplay :{
            delay:1500
        },

        effect :'coverflow',

        pagination: {
            el: '.swiper-pagination',
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

});