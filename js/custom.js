(function($) { 
		  
$(document).ready(function(){


    if($(window).width()>767){
		$('.navbar-wrapper').animate({
			opacity:0
		},200);
		$('.navbar-wrapper').addClass('default-menu');

	}


		$('.navbar-wrapper').animate({
			opacity:1
		},200);



});


	
/*===========================================================*/
	/*	Preloader 
/*===========================================================*/	
//<![CDATA[
	$(window).load(function() { // makes sure the whole site is loaded
		$("#status").fadeOut(); // will first fade out the loading animation
		$("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
	})
//]]>
		  
// for mobile nav js	
// $(window).load(function(){
// 	$('button.navbar-toggle').click(function(){
// 		$(this).toggleClass('active');
// 		$('.navbar-collapse').slideToggle();
// 	});
// });
// for banner height js
var windowWidth = $(window).width();
var windowHeight =$(window).height();


// for portfoli filter jquary
$(window).load(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 



// for portfoli lightbox jquary
jQuery(function() {
	var $chosenSheet,
	$stylesheets = $( "a[id^=theme-]" );

	// run rlightbox
	$( ".lb" ).rlightbox();
	$( ".lb_title-overwritten" ).rlightbox({overwriteTitle: true});
});
});

//



// Skill set


}(jQuery));
