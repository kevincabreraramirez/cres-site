$(document).ready(function(){
  
  
  function handleMobileSlider(sliderClass) {
    $(window).on('load resize orientationchange', function() {
      $(sliderClass).each(function(){
          var $carousel = $(this);
          /* Initializes a slick carousel only on mobile screens */
          // slick on mobile
          if ($(window).width() > 768) {
              if ($carousel.hasClass('slick-initialized')) {
                  $carousel.slick('unslick');
              }
          }
          else{
              if (!$carousel.hasClass('slick-initialized')) {
                  $carousel.slick({
                     
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      mobileFirst: true,
                      infinite: false,
                      dots: true,
                      arrows: false,
                  });
              }
          }
      });
  });
  }
  handleMobileSlider('.slider1');
  handleMobileSlider('.slider2');
  
  $('.navbar-toggler').click(function() {
    //   $(this).attr("aria-expanded", function(i, attr) {
    //     //   console.log(i, attr);
    //       if (attr === 'false')  {
    //         $(this).attr("aria-expanded",'true');
    //         $('navbar-collapse').addClass("show");
    //       }
    //       else 
    //       $(this).attr("aria-expanded",'false');
    //       $('navbar-collapse').removeClass("show");
    //   })

      $(this).attr("aria-expanded", function(i, attr) {
        //   console.log(i, attr);
          if (attr === 'false')  {
            $(this).attr("aria-expanded",'true');
            $('.navbar-collapse').addClass("show");
          }
          else {
            $(this).attr("aria-expanded",'false');
            $('.navbar-collapse').removeClass("show");
          }
         
      })
  })
});