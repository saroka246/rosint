$(document).ready(function(){
    $(window).scroll(function(){
		if ($(window).scrollTop() > 191) {
            $('header').addClass('header-fixed');
			$('main').css('margin-top','130px');
        }
        else {
           	$('header').removeClass('header-fixed');
			$('main').css('margin-top','0');
            if($('.burger__line').hasClass("burger__line--open")){
                $('.burger__line').removeClass("burger__line--open");
            }
            if($('.burger__menu').hasClass("open")){
                $('.burger__menu').removeClass("open");
            }
        }
	});
    $(".menu--item").hover(function(){
        $(this).toggleClass("active");
    });
    $(".header__btn").click(function(){
       $(".popup__background").toggleClass('open'); 
        $('body').toggleClass("popup");
        $('#header-popup').toggleClass("open");
        $(".close").click(function(){
            $(".popup__background").removeClass('open'); 
            $('body').removeClass("popup");
            $('#header-popup').removeClass("open");
        });
    });
    $("#price-btn").click(function(){
       $(".popup__background").toggleClass('open'); 
        $('body').toggleClass("popup");
        $('#price-popup').toggleClass("open");
        $(".close").click(function(){
            $(".popup__background").removeClass('open'); 
            $('body').removeClass("popup");
            $('#price-popup').removeClass("open");
        });
    });
    $("#order-btn").click(function(){
       $(".popup__background").toggleClass('open'); 
        $('body').toggleClass("popup");
        $('#order-popup').toggleClass("open");
        $(".close").click(function(){
            $(".popup__background").removeClass('open'); 
            $('body').removeClass("popup");
            $('#order-popup').removeClass("open");
        });
    });
    var tabSlider = new Swiper('.main-slider', {
      slidesPerView: 1,
        navigation: {
          nextEl: ".main-slider__next",
          prevEl: ".main-slider__prev",
        },
        autoplay: {
           delay: 6000,
            disableOnIntaraction: false
         },
    });
    
    var sertSlider = new Swiper('.sert__slider', {
      slidesPerView: 2,
        spaceBetween:30,
        navigation: {
          nextEl: ".sert__slider--next",
          prevEl: ".sert__slider--prev",
        },
        pagination: {
          el:".sert__slider--current",
            type:'custom',
            renderCustom:function(swiper,current){
                return current;
            }
        },
        autoplay: {
           delay: 5000,
             disableOnIntaraction: false
         },
        breakpoints: {
          1240: {
            slidesPerView: 2,
            spaceBetween:30,
            navigation: {
              nextEl: ".sert__slider--next",
              prevEl: ".sert__slider--prev",
            },
            pagination: {
              el:".sert__slider--current",
                type:'custom',
                renderCustom:function(swiper,current){
                    return current;
                }
            },
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        
        480: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
            320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        },
        
    });
    var brandSlider = new Swiper('.brand__slider', {
        slidesPerView: 6,
        spaceBetween:127,
        pagination: {
            el:".brand__dots",
            clickable:true,
        },
        autoplay: {
           delay: 5500,
             disableOnIntaraction: false
         },
        breakpoints: {
          1240: {
            slidesPerView: 6,
            spaceBetween:127,
            pagination: {
                el:".brand__dots",
                clickable:true,
            },
          },
          992: {
            slidesPerView: 4,
            spaceBetween:100,
          },
            768: {
            slidesPerView: 3,
            spaceBetween:100,
          },
            480: {
            slidesPerView: 2,
            spaceBetween:100,
          },
            320: {
            slidesPerView: 1,
            spaceBetween:100,
          },
        },
    });
    var revSlider = new Swiper('.review__slider', {
        slidesPerView: 2,
        spaceBetween:120,
        pagination: {
            el:".review__dots",
            clickable:true,
        },
        breakpoints: {
          1240: {
            slidesPerView: 2,
        spaceBetween:120,
        pagination: {
            el:".review__dots",
            clickable:true,
        },
          },
            768: {
            slidesPerView: 2,
            spaceBetween:50,
          },
             480: {
            slidesPerView: 1,
            spaceBetween:0,
          },
            320: {
            slidesPerView: 1,
            spaceBetween:0,
          },
        },
    });
    var all = 0;
    $('.sert__slider .swiper-slide').each(function(){
        all++;
    });
    $('.sert__slider--all').text(all-1);
    $('.burger').click(function(){
        $('.burger__line').toggleClass('burger__line--open');
        $('.burger__menu').toggleClass('open')
    });
    
    $('.consult__wrapper').click(function(event){
        if(!$(event.target).parents().is(".consult__soc--item")){
            var href = $('#consult__call').attr('href');
            window.location.href = href;
        } else{
             var href = $(event.target).parents(".consult__soc--item").find("a").attr("href");
            window.location.href = href;
        }
    });
});