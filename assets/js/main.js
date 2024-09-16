/*
	Author: themexriver
	Version: 1.0
*/


(function ($) {
"use strict";


gsap.config({
	nullTargetWarn: false,
});



// smoooth scroll activation start

const lenis = new Lenis({
	duration: .7, 
	easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
	direction: 'vertical', 
	smooth: true, 
	smoothTouch: false, 
  });
  
  function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);
  $('a[href^="#"]').on('click', function (e) {
	e.preventDefault(); 
  
	const target = $(this.getAttribute('href')); 
  
	if (target.length) {
	  lenis.scrollTo(target[0], {
		duration: 1.2, 
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
	  });
	}
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

		var lgherotl = gsap.timeline({
				defaults: { duration:2,
					ease: "power4.out", } //
			});

		lgherotl.from(".lg-hero-1-bg-shape" , { yPercent: -50, scaleY: 0, opacity: 0, delay: .3 })
		.from(".lg-hero-1-img" , { xPercent: -100, scale: 0, opacity: 0,  } , "<=1")
		.from(".lg-hero-1-content-btn" , { xPercent: -100, opacity: 0,  } , "<=1")

		
		if ($('.wa-split-text-2').length) {
			const stsplittext2 = $(".wa-split-text-2");
			stsplittext2.each(function(index, el) {
				el.split = new SplitText(el, { 
					type: "lines",
					linesClass: "split-line"
				});
				if ($(el).hasClass('wa-split-text-2-ani')) {
					gsap.set(el.split.lines, {
						xPercent: -100
					});
					el.anim = gsap.to(el.split.lines, {
						xPercent: 0,
						y: "0",
						color: 'inherit',
						opacity: 1,
						duration: 2,
						ease: "power4.out",
						stagger: 0.5,
						delay: 0.5
					});
				}
			});
		}


		if ($('.wa-split-text-3').length) {
			var st = $(".wa-split-text-3");
			st.each(function(index, el) {
				el.split = new SplitText(el, { 
					type: "lines,words,chars",
					linesClass: "split-line"
				});
				if ($(el).hasClass('wa-split-text-3-ani')) {
					gsap.set(el.split.chars, {
						opacity: .3,
						color: '#f62459',
						x: -10,  
					});
				}
				el.anim = gsap.to(el.split.chars, {
					scrollTrigger: {
						trigger: el,
						start: "top 90%",  
						markers: false  
					},
					x: 0,               
					y: 0,               
					color: 'inherit',  
					opacity: 1,         
					duration: 1,        
					stagger: 0.02,      
					ease: "power4.out",
				});
			});
		}
		
	})

});

$(window).scroll(function() {
	if ($(this).scrollTop() > 300){
	$('.sticky_header_1').addClass('sticky1');
	}
	else{
	$('.sticky_header_1').removeClass('sticky1');
	}
});

// Toggle Offcanvas start
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

$('.offcanvas_box_active a').on('click', function() {
    $('.offcanvas_box_active').removeClass('active');
    $('.overlay').removeClass('active');
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


		
var lgfeaturestl = gsap.timeline({
	scrollTrigger: {
		trigger: ".lg-features-1-img",
		start: "top 90%",  
		markers: false  
	},
	defaults: { duration: 1,
		ease: "power4.out", } //
});

lgfeaturestl.from(".lg-features-1-img-1" , { yPercent: 50, })
lgfeaturestl.from(".lg-features-1-img-5" , { yPercent: 100, opacity: 0 }, "<=.3")
lgfeaturestl.from(".lg-features-1-img-2" , { yPercent: 100, opacity: 0 }, "<=.3")
lgfeaturestl.from(".lg-features-1-img-3" , { yPercent: 100, opacity: 0 }, "<=.3")
lgfeaturestl.from(".lg-features-1-img-4" , { yPercent: 100, opacity: 0 }, "<=.3")
lgfeaturestl.from(".lg-features-1-img-6" , { yPercent: 100, opacity: 0 }, "<=.3")

var laa_ani1 = gsap.timeline({

	scrollTrigger: {
	  animation: laa_ani1,
	  trigger: '.laa-animate-1-wrap',
	  start: "top 95%",
	  end: "top 20%",
	  scrub: 3,
	  toggleActions: "play reverse play reverse",
	  markers: false
	}
});
	
laa_ani1.from(".laa-animate-1-cloud-1" , { xPercent: 100 ,  opacity: 0  })
laa_ani1.from(".laa-animate-1-cloud-2" , { xPercent: 50 ,  opacity: 0  }, "<=")
laa_ani1.from(".laa-animate-1-cloud-3" , { xPercent: 100 ,  opacity: 0  }, "<=.1")
laa_ani1.from(".laa-animate-1-plane" , { xPercent: 100 , yPercent: -100, scale: .3, rotate: -30 , opacity: 0 }, "<=.5")


var laa_footer = gsap.timeline({

	scrollTrigger: {
	  animation: laa_footer,
	  trigger: '.lg-footer-bg-img',
	  start: "top 95%",
	  end: "top 50%",
	  scrub: 1,
	  toggleActions: "play reverse play reverse",
	  markers: false
	}
});
	
laa_footer.from(".lg-footer-bg-img img" , { yPercent: 50 ,  })


document.querySelectorAll('.laa-pattn-two').forEach((section, index) => {
	const timeline = gsap.timeline({
	  scrollTrigger: {
		trigger: section,
		start: "top 95%",
		toggleActions: "play reverse play reverse",
		markers: false,
	  }
	});
  
	timeline.from(section.querySelector('.laa-pattn-two-1'), { yPercent: 100, opacity: 0.16, duration: .3 });
	timeline.from(section.querySelector('.laa-pattn-two-2'), { xPercent: -100, opacity: 0.16, duration: .3 });
	timeline.from(section.querySelector('.laa-pattn-two-3'), { xPercent: -100, opacity: 0.56, duration: .3 });
	timeline.from(section.querySelector('.laa-pattn-two-4'), { yPercent: 100, opacity: 0.08, duration: .3 });
});
  
gsap.utils.toArray(".laa-img-parallax").forEach(function(container) {
	let image = container.querySelector("img");

	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: container,
			scrub: .5,
		},
		
		
	}); 
	tl.from(image, {
		yPercent: -20,
		ease: "none",
	}).to(image, {
		yPercent: 20,
		ease: "none",
	}); 
});

// testimonial-1-slider
if($('.iner-page-slide-active').length) {
	let slider = new Swiper('.iner-page-slide-active', {
		loop: true,
		spaceBetween: 0,
		speed: 1000,
		slidesPerView: 1,

		autoplay: {
			delay: 4000,
		},

		navigation: {
			nextEl: ".iner-page-slider-next",
			prevEl: ".iner-page-slider-prev",
		},

		pagination: {
			el: ".iner-page-pagination",
			clickable: true,
		},


		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			},
			1400: {
				slidesPerView: 4,
			},
			1600: {
				slidesPerView: 5,
			},
		},

	});
}


/*
	marquee-activiton
*/
$('.text-slide-1-active').marquee({
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


/* data-bg-activition */
$("[data-background]").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})


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



})(jQuery);