<!-- ============================================================================= -->
<!-- Ella Custom JS - Customize The Style For Layout -->
<!-- ============================================================================= -->

<!-- ============================================================================= -->
<!-- IMPORTANT DISCLAIMER -->
<!-- Please use only JS to style the layout. -->
<!-- ============================================================================= -->
$ = jQuery;
 $('#shop-all-skin .Shop-Products .products-carousel').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$(".products-carousel").slick({
  dots: true,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  slidesPerRow: 4,
  infinite: false,
  rtl: window.rtl_slick,
  nextArrow: window.arrows.icon_next,
  prevArrow: window.arrows.icon_prev,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false
      }
    }
  ]
});
 
// Convert product tab content to list form - Start
$(document).ready(function() {

     $('.toggle-content').each(function() {
        // Check if toggle-content is empty
        if ($.trim($(this).html()) === '') {
            // Add hide class to parent tabs-contents element
            $(this).closest('.tab-content').addClass('hide');
        }
    });
  $('.productView-tab .toggle-content').each(function() {
    const $toggleContent = $(this);
    const originalText = $toggleContent.text().trim();
    const textParts = originalText.split(':');

    const bulletPoints = textParts[1]
      .split('.')
      .map((point) => point.trim())
      .filter((point) => point !== '');

    const formattedText = textParts[0] + ':';
    const formattedBullets = bulletPoints.map((point) => `<li>${point}</li>`).join('');

    const $ulElement = $('<ul>').html(formattedBullets);
    $toggleContent.html('').append(formattedText, $ulElement);
  });
  //console.log("Hello");
  //   if ($(window).width() > 767){
  //     var marquee = document.getElementById('myMarquee');
  //     marquee.stop(); // Stops the marquee animation
  // }
});

  
// Convert product tab content to list form - End
