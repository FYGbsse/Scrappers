/*
* Created By : Sajeel Shafqat
* Company : Teknologics
* Created Date : 20-Oct-2023
*
* All new js script updates after created date will be done in this file.
* 
*/

/*Collection page - product name in two lines*/
/*
jQuery(document).ready(function(){
  sg_sel1='#home-skin .halo-block-content  a[data-product-title="Pava Toner"][tabindex="0"] span';
  sg_sel2='#home-skin .halo-block-content  a[data-product-title="Irie Power Face Oil"][tabindex="-1"] span';
 // sg_txt1 = jQuery(sg_sel1).text().trim().replace(" ", "<br>");
 // sg_txt2 = jQuery(sg_sel2).text().trim().replace("Irie Power Face Oil", "Irie Power Face<br>Oil");
  jQuery(sg_sel1).html('Pava<br>Toner');
  jQuery(sg_sel2).html('Irie Power Face<br>Oil');
    
}); */


  $(document).ready(function() {
  function splitLastOccurrence(str, substring) {
    const lastIndex = str.lastIndexOf(substring);
    const before = str.slice(0, lastIndex);
    const after = str.slice(lastIndex + 1);
    return [before, after];
  }

  jQuery('#shop-all-skin .halo-block-content a span,#home-skin .halo-block-content a span').each(function() {
    if(jQuery(this).text().trim().length < 24){
         const [before, after] = splitLastOccurrence(jQuery(this).text().trim(),' ');
       jQuery(this).html(before + '<br>' + after);
    }  
  });
});
/*SJS link on the video*/
jQuery(document).ready(function(){
  let tek_video_lk = jQuery('.Video-Section .video-text a').attr('href');
  if(tek_video_lk){
  	jQuery('.Video-Section video').click(function(){
  		window.location = tek_video_lk;
  	});
  }
});  

jQuery(document).ready(function(){
  
    jQuery(".link-view").css("color", "#795D50");
    jQuery(".link-view").click(function(){
      jQuery(this).css("color", "#795D50");
      jQuery(".tek-flex-item :not(.link-view)").css("color", "#696969");
      jQuery(".prod-essentials").show();
      jQuery("prod-tools").show();
      jQuery(".prod-sets").show();
    });
    jQuery(".link-sets").click(function(){
      jQuery(this).css("color", "#795D50");
      jQuery(".tek-flex-item :not(.link-sets)").css("color", "#696969");
      jQuery(".prod-essentials").hide();
      jQuery(".prod-tools").hide();
      jQuery(".prod-sets").show();
    });
    jQuery(".link-essentials").click(function(){
     jQuery(this).css("color", "#795D50");
      jQuery(".tek-flex-item :not(.link-essentials)").css("color", "#696969");
      jQuery(".prod-essentials").show();
      jQuery(".prod-tools").hide();
      jQuery(".prod-sets").hide();
    });
    jQuery(".link-tools").click(function(){
      jQuery(this).css("color", "#795D50");
      jQuery(".tek-flex-item :not(.link-tools)").css("color", "#696969");
      jQuery(".prod-essentials").hide();
      jQuery(".prod-tools").show();
      jQuery(".prod-sets").hide();
    });

});



/*AFTER FIXING CSS*/

jQuery(document).ready(function(){
jQuery('#irie-power-face-oil .productView-image-wrapper, [data-product-id="8402242175297"] .card-product__wrapper').prepend('<div class="productView-badge badge-left halo-productBadges halo-productBadges--right date- date1-" data-new-badge-number=""><span style="background-color:#C5B358" class="badge sale-badge" aria-hidden="true">AWARD WINNER</span></div>');
jQuery('#day-night-face-towel-set-set-of-6 .productView-image-wrapper, [data-product-id="8430618607937"] .card-product__wrapper').prepend('<div class="productView-badge badge-left halo-productBadges halo-productBadges--right date- date1-" data-new-badge-number=""><span style="background-color:#C5B358" class="badge sale-badge" aria-hidden="true">AWARD WINNER</span></div>');
jQuery('#soursop-vitamin-c-serum .productView-image-wrapper, [data-product-id="8682955538753"] .card-product__wrapper').prepend('<div class="productView-badge badge-left halo-productBadges halo-productBadges--right date- date1-" data-new-badge-number=""><span style="background-color:#C5B358" class="badge sale-badge" aria-hidden="true">AWARD WINNER</span></div>');
jQuery('#pava-exfoliating-cleanser .productView-image-wrapper, [data-product-id="8402241814849"] .card-product__wrapper').prepend('<div class="productView-badge badge-left halo-productBadges halo-productBadges--right date- date1-" data-new-badge-number=""><span style="background-color:#C5B358" class="badge sale-badge" aria-hidden="true">AWARD WINNER</span></div>');
});


jQuery(document).ready(function(){
 jQuery('.tek-category-section a.image-zoom').attr('target','_self');
});




jQuery(document).ready(function(){
    if(jQuery(window).width() > 768) {
      setTimeout(function(){
          if(jQuery("#rbr-container-element-false").length > 0){
          //  jQuery(".template-product .productView-details .product-form__submit").css({"margin-top":"-330px"});
            jQuery('#view-offer-btn').css({"display":"block"});
           // jQuery(".product-form__buttons").css({"display":"block"});
          }
      },4000);
    }
    jQuery('#view-offer-btn').click(function(){
      jQuery("div[class^='style_footer']").css({"display":"block"});
      jQuery("div[class^='style_mainSection']").css({"display":"flex"});
      jQuery("body").addClass("open-match");
    });
    jQuery('#close-mix').click(function(){
      jQuery("div[class^='style_footer'],div[class^='style_mainSection']").css({"display":"none"});
      jQuery("body").removeClass("open-match");
    });
});
/*
jQuery(document).ready(function(){
  jQuery('.back_friday .slide-button.button').after('<div class="end_date">ENDS 12/3</div>');
});*/

jQuery(document).ready(function(){
  jQuery('_#sweet-july-edgewater-collection-mix-amp-match div.productView-image-wrapper , _#sweet-july-telegraph-collection-mix-amp-match div.productView-image-wrapper,_[data-product-id*="9766874743105"] .card-product__wrapper , _[data-product-id*="9718799237441"] .card-product__wrapper').append('<div class="productView-badge badge-left halo-productBadges halo-productBadges--left"><span class="badge sale-badge" aria-hidden="true">Sale</span></div>');
});