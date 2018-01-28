
  // Do not display the navigation if the screen
  // width is greater than 768px

  // // Display the navigation is the screen
  // // width is less than 768px;
  $(document).ready(function() {
    if ( $(window).width() < 768) {
       $('nav').addClass('show');
       $('.navbar-collapse').addClass('bg-white px-5')

    }
  });



  // $(window).scroll(function() {
  //   var scroll = $(window).scrollTop();
  //   var width = $(window).width();
  //   if (scroll > 600 &&  width > 768 ){
  //     $('nav').addClass('animated-nav').removeClass('hidden')
  //   } else if (scroll < 600 && width > 768) {
  //     $('nav').removeClass('animated-nav').addClass('hidden')
  //   }
  // });
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var width = $(window).width();

    if (scroll > 600 &&  width > 768 ){
      $('nav').addClass('show')
      $('.navbar-collapse').addClass('bg-white')
    } else if (scroll < 600 && width > 768) {
      $('nav').removeClass('show')
    }
  });

//   $(function() {
//     //caches a jQuery object containing the header element
//     var header = $('nav');
//     $(window).scroll(function() {
//        var scroll = $(window).scrollTop();
//        if (scroll > 600 &&  $(window).width() > 768 ){
//          header.fadeIn();
//        } else {
//         header.fadeOut();
//       }
//     });
// });
  // Reveal the navbar when hidden after scrolling 200 pixels
  // $( window ).scroll(function() {
  //   if ( $(window).scrollTop() > 600 &&  $(window).width() > 768 ) {
  //     $('nav').fadeIn( "slow");
  //   } else {
  //     ('#top-nav').fadeOut( "slow");
  //   }
  //     });
    // } else {
    //   $('nav').addClass('hidden');
    // }









  // Hide the boostrap dropdown when an <a> element is clicked
  $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });
