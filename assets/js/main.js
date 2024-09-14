/*
	Author: themexriver
	Version: 1.0
*/


(function ($) {
"use strict";





gsap.config({
	nullTargetWarn: false,
});
// preloader
document.addEventListener("DOMContentLoaded", function () {

	let preloader = document.querySelector("#preloader");

	window.addEventListener('load', function(){

		if (preloader) {
			preloader.classList.add("preloaded");
			setTimeout(function () {
				  preloader.remove();
			}, 1000 ) ;

		}

		setTimeout(function() {
			// home-1-hero
			if($('.fx-hero-1-active').length) {
				let slider = new Swiper('.fx-hero-1-active', {
					loop: true,
					spaceBetween: 0,
					speed: 500,
					effect: "fade",
					fadeEffect: {
						crossFade: true
					},
					autoplay: {
						delay: 4000,
					},
			
					pagination: {
						el: ".fx-hero-1-pagination",
						clickable: true,
					},
			
			
				});
			}

			// home-2-hero
			if($('.fx-hero-2-active').length) {
				let slider = new Swiper('.fx-hero-2-active', {
					loop: true,
					spaceBetween: 0,
					speed: 500,
					autoplay: {
						delay: 4000,
					},
			
					pagination: {
						el: ".fx-hero-2-pagination",
						clickable: true,
					  },
			
			
				});
			}

			// home-3-hero
			if($('.fx-hero-3-active').length) {
				let slider = new Swiper('.fx-hero-3-active', {
					loop: true,
					spaceBetween: 0,
					speed: 500,
					autoplay: {
						delay: 4000,
					},
			
					pagination: {
						el: ".fx-hero-3-pagination",
						clickable: true,
					},
			
					navigation: {
						nextEl: ".fx-h3-slider-next",
						prevEl: ".fx-h3-slider-prev",
					},
			
				});
			}

			// home-4-hero
			if($('.fx-hero-4-active').length) {
				let slider = new Swiper('.fx-hero-4-active', {
					loop: true,
					spaceBetween: 0,
					speed: 500,
					autoplay: {
						delay: 4000,
					},

			
					pagination: {
						el: ".fx-hero-4-pagination",
						clickable: true,
					},
			

				});
			}

			// home-5-hero
			if($('.fx-h5-active').length) {
				let slider = new Swiper('.fx-h5-active', {
					loop: true,
					spaceBetween: 40,
					speed: 500,
					direction: "vertical",
					mousewheel: true,
					autoplay: {
						delay: 4000,
					},
			
					pagination: {
						el: ".fx-hero-5-pagination",
						clickable: true,
					},
			
			
				});
			}

			// home-3-hero
			if($('.fx-h6-active').length) {
				let slider = new Swiper('.fx-h6-active', {
					loop: true,
					spaceBetween: 0,
					speed: 500,
					autoplay: {
						delay: 4000,
					},
			
				});
			}

			if($('.fx-h6-active2').length) {
				let slider = new Swiper('.fx-h6-active2', {
					loop: true,
					spaceBetween: 0,
					speed: 500,
					autoplay: {
						delay: 5000,
					},
			
					navigation: {
						nextEl: ".fx-h6-slider-next",
						prevEl: ".fx-h6-slider-prev",
					},
			
				});
			}

			var fxh6imgglow = gsap.timeline();
			fxh6imgglow.to(".fx-hero-6-bg-glow" , { opacity: .7,  duration:1 })
			fxh6imgglow.to(".fx-hero-6-img-glow" , { xPercent: -100,  duration:1 },"<.5")
			fxh6imgglow.to(".fx-hero-6-img-glow-2" , { xPercent: -100,  duration:1 , })

			// breadcrumb
			var breadcrumb = gsap.timeline();
			breadcrumb.to(".breadcrumb-title .split-line div" , { yPercent: -100, delay: -.5, })
			breadcrumb.to(".breadcrumb-slideup" , { yPercent: -100, })

		}, 500);

		// title-animation
		if($('[txaa-split-text-1]').length) {
			var txasplit1 = $('[txaa-split-text-1]');
			if(txasplit1.length == 0) return; gsap.registerPlugin(SplitText); txasplit1.each(function(index, el) {
				el.split = new SplitText(el, { 
				type: "lines,words",
				linesClass: "split-line"
				});
			});
		}

		
		if($('.txaa-split-text-2').length) {
			var txasplit2 = $(".txaa-split-text-2");

			if(txasplit2.length == 0) return; gsap.registerPlugin(SplitText); txasplit2.each(function(index, el) {
			
				el.split = new SplitText(el, { 
					type: "lines,words,chars",
					linesClass: "split-line"
				});
			
				if( $(el).hasClass('txaa-split-text-2-ani') ){
					gsap.set(el.split.chars, {
						opacity: 0,
						x: "-5",
					});
				}
			
				el.anim = gsap.to(el.split.chars, {
					scrollTrigger: {
						trigger: el,
						start: "top 90%",
						end: "top 60%",
						markers: false,
						scrub: 1,
					},
			
					x: "0",
					y: "0",
					opacity: 1,
					duration: .7,
					stagger: 0.2,
				});
			
			});
		}

		if($('.txaa-split-text-3').length) {
			var txasplit2 = $(".txaa-split-text-3");

			if(txasplit2.length == 0) return; gsap.registerPlugin(SplitText); txasplit2.each(function(index, el) {
			
				el.split = new SplitText(el, { 
					type: "lines,words,chars",
					linesClass: "split-line"
				});
			
				if( $(el).hasClass('txaa-split-text-3-ani') ){
					gsap.set(el.split.chars, {
						opacity: .2,
						x: "-5",
					});
				}
			
				el.anim = gsap.to(el.split.chars, {
					scrollTrigger: {
						trigger: el,
						start: "top 90%",
						end: "top 60%",
						markers: false,
						scrub: 1,
					},
			
					x: "0",
					y: "0",
					opacity: 1,
					duration: .7,
					stagger: 0.2,
				});
			
			});
		}




	})

});

// sticky-header
function glystickyHeader() {
    var $window = $(window);
    var lastScrollTop = 0;
    var $header = $('.txa_sticky_header');
    var headerHeight = $header.outerHeight() + 30;

    $window.scroll(function () {
      var windowTop = $window.scrollTop();

      if (windowTop >= headerHeight) {
        $header.addClass('txa_sticky');
      } else {
        $header.removeClass('txa_sticky');
        $header.removeClass('txa_sticky_show');
      }

      if ($header.hasClass('txa_sticky')) {
        if (windowTop < lastScrollTop) {
          $header.addClass('txa_sticky_show');
        } else {
          $header.removeClass('txa_sticky_show');
        }
      }

      lastScrollTop = windowTop;
    });
}

glystickyHeader();
  

// offcanvas-start
$('.offcanvas_toggle').on('click', function() {
    $('.overlay, .offcanvas_box_active').addClass('active');
});

$('.overlay, .offcanvas_box_close').on('click', function() {
    $('.offcanvas_box_active').removeClass('active');
    $('.overlay').removeClass('active');
});

$(document).on('keydown', function(event) {
    if (event.key === 'Escape') {
        $('.offcanvas_box_active').removeClass('active');
        $('.overlay').removeClass('active');
    }
});

// mobile-menu
jQuery(".mobile-main-navigation li.dropdown").append('<span class="dropdown-btn"><i class="fa-solid fa-angle-right"></i></span>'),
	jQuery(".mobile-main-navigation li .dropdown-btn").on("click", function () {
		jQuery(this).hasClass("active")
		? (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"), jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle())
		: (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"),
			jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle(),
			jQuery(this).toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").slideToggle());
});



/*
	marquee-activiton
*/
$('.js-marquee-wrapper').marquee({
	speed: 50,
	gap: 65,
	delayBeforeStart: 0,
	direction: 'left',
	duplicated: true,
	pauseOnHover: true,
	startVisible:true,
})

// bootstrap-toltip
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

/* back-to-top */
var backtotop = $('.scroll_top');

backtotop.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, '700');
});


/* counter */
$('.counter').counterUp({
	delay: 10,
	time: 3000
});

/* data-bg-activition */
$("[data-background]").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})

// wow-splitting-text
Splitting();

// wow-activation
if($('.wow').length){
	var wow = new WOW(
	{
		boxClass:     'wow',
		animateClass: 'animated',
		offset:       0,
		mobile:       true,
		live:         true
	}
	);
	wow.init();
};


/*
popup-video-activition
====start====
*/

if($('.popup-video').length) {
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});
}


/*
popup-img-activition
====start====
*/

if($('.popup_img').length) {
	$('.popup_img').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		},
	});
}

/*
popup-img-activition
====start====
*/
if($('.nice-select').length) {
	$('.nice-select select').niceSelect();
}

// parallax-img
$('.parallax-img').parallaxie({  
	speed: 0.5,    
});


})(jQuery);