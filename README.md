# Swiper-Thumbnails
Small Swiper plugin that enables pre-rendered thumbnail support.

## Usage:
```javascript
$(document).ready(function(){

    var cases = new Swiper ('.js-cases-slider', {
      direction: 'horizontal',
    })
  
    swiperThumbs(cases, {
        element: 'swiper-thumbnails',
        activeClass: 'is-active'
    });
});
```

*Add anywhere to your html:*
```html
<div class="swiper-thumbnails">
    <button type="button">any html content</button>
    <button type="button">any html content</button>
    <button type="button">any html content</button>
</div>
```

*Currently only supported for the jQuery version of Swiper*
*Only tested with horizontal sliders*
