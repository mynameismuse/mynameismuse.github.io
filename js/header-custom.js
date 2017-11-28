jQuery(function($) {

  //enabling stickUp on the '.navbar-wrapper' class



	$( ".navbar.navbar-inverse.navbar-static-top a" ).click(function() {
	  $( ".navbar-collapse" ).addClass( "hideClass" );
	});
	
	
	$( ".navbar.navbar-inverse.navbar-static-top a" ).click(function() {
	  $( ".navbar-collapse" ).addClass( "collapse" );
	});
	
	
	$( ".navbar.navbar-inverse.navbar-static-top a" ).click(function() {
	  $( ".navbar-collapse" ).removeClass( "in" );
	});
	
	$( ".navbar-toggle" ).click(function() {									 
	  $( ".navbar-collapse" ).removeClass( "hideClass" );
	});
	
	$('#banner').superslides({
	  animation: 'fade',
	  play: 5000
	});

});
