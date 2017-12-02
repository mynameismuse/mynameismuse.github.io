(function($) { 

$(document).ready(function(){
        var isLater = false;//打开或者关闭导航菜单
        var cover = document.createElement('div')
        cover.className = 'pushcover'


    $( ".navbar-toggle" ).on("click",function(event) {
            event.preventDefault();//若动画正在进行请停止
            if(!isLater){
                $( ".resouseuimenu" ).addClass( "visible" );
                $('.resoucesideright').addClass( "dime" );
                $('.resoucesideright').append(cover);

                $('.pushed').addClass('pushed-cover');

                if($( ".resouseuimenu" ).attr("class").indexOf('visible') > 0){
                    isLater = true;
                    $( ".pushcover" ).on("click",function(event) {
                        $(".resouseuimenu").removeClass("visible");
                        $('.resoucesideright').removeClass("dime");
                        $('.pushcover').remove();
                            isLater = false;

                    })

                }
                // console.log(cover.className)

            }


        });



});

    // $( ".navbar.navbar-inverse.navbar-static-top a" ).click(function() {
    //     $( ".navbar-collapse" ).addClass( "hideClass" );
    // });
    //
    //
    // $( ".navbar.navbar-inverse.navbar-static-top a" ).click(function() {
    //     $( ".navbar-collapse" ).addClass( "collapse" );
    // });
    //
    //
    // $( ".navbar.navbar-inverse.navbar-static-top a" ).click(function() {
    //     $( ".navbar-collapse" ).removeClass( "in" );
    // });
    //
    //
    //
    // $('#banner').show({
    //     animation: 'fade',
    //     play: 5000
    // });
	
/*===========================================================*/
	/*	Preloader 
/*===========================================================*/	
//<![CDATA[
	$(window).load(function() { // makes sure the whole site is loaded
		$("#status").fadeOut(); // will first fade out the loading animation
		$("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
	})
//]]>
		  

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
