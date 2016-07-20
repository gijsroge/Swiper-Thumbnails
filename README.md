# Swiper-Thumbnails
Small Swiper plugin that enables pre-rendered thumbnail support.

## Usage:
```javascript
$(document).ready(function(){

  var cases = new Swiper ('.js-cases-slider', {
      direction: 'horizontal',
      slidesPerView: 'auto',
      centeredSlides: true,
      uniqueNavElements: true,
      autoHeight: true,
      loop: true
    })
  
  swiperThumbs(cases, {
      element: 'c-cases__thumbs'
    });
});
```

*Currently only supported for the jQuery version of Swiper*
