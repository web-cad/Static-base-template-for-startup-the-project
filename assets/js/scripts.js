
$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut(350); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({'overflow':'visible'});
});


//animate block(s) function
// AOS.init({
//     easing: 'ease-in-out-sine',
//     disable: 'mobile'
//   });

// $(document).ready(function() {
// 	//Main Banner
// 	$( '#my-slider' ).sliderPro();

// 	//Light Gallery Function
// 	$("#companygallery").lightGallery({
// 	    thumbnail:true,
// 	    download:false
//     });

//     //Slick slider
//     $('.multiple-items').slick({
// 	  infinite: true,
// 	  slidesToShow: 3,
// 	  slidesToScroll: 3
// 	}); 
// });

